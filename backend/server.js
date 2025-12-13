require('dotenv').config();

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const crypto = require('crypto');
const axios = require('axios');

const zoomService = require('./services/zoomService');
const emailService = require('./services/emailService');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(helmet());
app.use(cors({
    origin: process.env.NODE_ENV === 'production'
        ? ['https://your-frontend-domain.vercel.app'] // TODO: Update with actual production domain
        : ['http://localhost:3000', 'http://localhost:5173', 'http://localhost:3001'],
    credentials: true
}));

// Raw body for webhook signature verification
app.use('/api/webhook', express.raw({ type: 'application/json' }));
app.use(express.json());

/**
 * Verify Razorpay webhook signature
 */
function verifyRazorpaySignature(body, signature, secret) {
    const expectedSignature = crypto
        .createHmac('sha256', secret)
        .update(body)
        .digest('hex');

    return crypto.timingSafeEqual(
        Buffer.from(signature),
        Buffer.from(expectedSignature)
    );
}

/**
 * Health check endpoint
 */
app.get('/api/health', (req, res) => {
    res.json({
        status: 'ok',
        timestamp: new Date().toISOString(),
        services: {
            zoom: zoomService.isConfigured(),
            email: emailService.isConfigured()
        }
    });
});

/**
 * Razorpay Webhook Handler
 * Handles payment.captured event
 */
app.post('/api/webhook/razorpay', async (req, res) => {
    console.log('📥 Received Razorpay webhook');
    console.log('📋 Headers:', JSON.stringify(req.headers, null, 2));

    const signature = req.headers['x-razorpay-signature'];
    const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET;

    // Verify signature if webhook secret is configured
    if (webhookSecret && webhookSecret !== 'your_webhook_secret_here' && signature) {
        try {
            const isValid = verifyRazorpaySignature(req.body, signature, webhookSecret);
            if (!isValid) {
                console.error('❌ Invalid webhook signature');
                return res.status(400).json({ error: 'Invalid signature' });
            }
            console.log('✅ Webhook signature verified');
        } catch (error) {
            console.error('❌ Signature verification error:', error);
            return res.status(400).json({ error: 'Signature verification failed' });
        }
    } else {
        console.warn('⚠️ Webhook secret not configured - skipping signature verification (OK for development)');
    }

    // Parse the body
    let payload;
    try {
        payload = typeof req.body === 'string' ? JSON.parse(req.body) : JSON.parse(req.body.toString());
    } catch (error) {
        console.error('❌ Failed to parse webhook payload:', error);
        return res.status(400).json({ error: 'Invalid JSON payload' });
    }

    const event = payload.event;
    console.log('📋 Webhook event:', event);

    // Only process payment.captured events
    if (event !== 'payment.captured') {
        console.log('ℹ️ Ignoring event:', event);
        return res.json({ status: 'ignored', event });
    }

    const payment = payload.payload?.payment?.entity;
    if (!payment) {
        console.error('❌ No payment entity in webhook');
        return res.status(400).json({ error: 'No payment entity' });
    }

    console.log('💰 Payment captured:', {
        paymentId: payment.id,
        amount: payment.amount / 100,
        email: payment.email,
        notes: payment.notes
    });

    // Extract customer information
    const customerData = {
        email: payment.email,
        firstName: payment.notes?.first_name || payment.notes?.firstName || 'Customer',
        lastName: payment.notes?.last_name || payment.notes?.lastName || '',
        mobile: payment.contact || '',
        standard: payment.notes?.standard || '',
        city: payment.notes?.city || '',
        paymentId: payment.id,
        amount: payment.amount / 100
    };

    console.log('👤 Customer data extracted:', customerData);

    let zoomResult = null;
    let emailResult = null;
    let sheetsResult = null;
    let meetingDetails = null;

    // Step 1: Handle Zoom Registration
    if (zoomService.isConfigured()) {
        try {
            console.log('🔄 Fetching meeting details...');
            meetingDetails = await zoomService.getMeetingDetails();
            console.log('✅ Meeting details fetched:', meetingDetails.topic);

            // Skip registration (paid feature) and use general join URL
            console.log('ℹ️ Skipping dynamic registration (requires paid Zoom plan)');
            zoomResult = {
                joinUrl: meetingDetails.joinUrl || process.env.ZOOM_MEETING_LINK,
                topic: meetingDetails.topic
            };
        } catch (error) {
            console.error('❌ Zoom operations failed:', error.message);
            // Fallback to static link if available
            const staticZoomLink = process.env.ZOOM_MEETING_LINK;
            if (staticZoomLink) {
                console.log('⚠️ Using static Zoom link as fallback');
                zoomResult = {
                    joinUrl: staticZoomLink,
                    topic: 'Memory MASTERS Training (Fallback)'
                };
            }
        }
    } else {
        // Use static link if Zoom service not configured
        const staticZoomLink = process.env.ZOOM_MEETING_LINK;
        if (staticZoomLink) {
            console.log('✅ Using static Zoom meeting link (Service not configured)');
            zoomResult = {
                joinUrl: staticZoomLink,
                topic: 'Memory MASTERS Training'
            };
        } else {
            console.warn('⚠️ Zoom service not configured and no static link - skipping');
        }
    }


    // Step 2: Send confirmation email
    if (emailService.isConfigured()) {
        try {
            console.log('🔄 Attempting to send confirmation email...');
            emailResult = await emailService.sendPaymentConfirmation({
                customerName: `${customerData.firstName} ${customerData.lastName}`.trim(),
                email: customerData.email,
                paymentId: customerData.paymentId,
                amount: customerData.amount,
                joinUrl: zoomResult?.joinUrl || null,
                meetingTopic: zoomResult?.topic || 'Memory MASTERS Training',
                meetingDetails: meetingDetails // Pass meeting details for ICS generation
            });
            console.log('✅ Email sent successfully:', emailResult);
        } catch (error) {
            console.error('❌ Email sending failed:', error.message);
            // Continue even if email fails
        }
    } else {
        console.warn('⚠️ Email service not configured - skipping');
    }

    // Step 3: Save to Google Sheets (backup)
    const GOOGLE_SHEETS_URL = process.env.GOOGLE_SHEETS_URL;
    if (GOOGLE_SHEETS_URL) {
        try {
            console.log('🔄 Saving to Google Sheets...');
            await axios.post(GOOGLE_SHEETS_URL, {
                customerName: `${customerData.firstName} ${customerData.lastName}`.trim(),
                customerEmail: customerData.email,
                customerMobile: customerData.mobile,
                standard: customerData.standard,
                city: customerData.city,
                paymentId: customerData.paymentId,
                amount: customerData.amount,
                transactionDate: new Date().toLocaleString('en-IN', {
                    dateStyle: 'full',
                    timeStyle: 'short',
                    timeZone: 'Asia/Kolkata'
                }),
                zoomJoinUrl: zoomResult?.joinUrl || 'N/A'
            }, {
                headers: { 'Content-Type': 'text/plain;charset=utf-8' }
            });
            console.log('✅ Data saved to Google Sheets');
            sheetsResult = 'success';
        } catch (error) {
            console.error('❌ Google Sheets save failed:', error.message);
        }
    } else {
        console.warn('⚠️ Google Sheets URL not configured - skipping');
    }

    // Respond to Razorpay (must be quick, < 5 seconds)
    console.log('✅ Webhook processed successfully');
    res.json({
        status: 'success',
        paymentId: customerData.paymentId,
        services: {
            zoom: zoomResult ? 'registered' : 'skipped/failed',
            email: emailResult ? 'sent' : 'skipped/failed',
            sheets: sheetsResult ? 'saved' : 'skipped/failed'
        }
    });
});

/**
 * Verify Zoom connection endpoint (for development)
 */
app.get('/api/test/verify-zoom', async (req, res) => {
    console.log('🔍 Testing Zoom connection...');
    try {
        const token = await zoomService.getAccessToken();
        const details = await zoomService.getMeetingDetails();
        console.log('✅ Zoom check successful:', details.topic);
        res.json({
            success: true,
            tokenLength: token.length,
            meetingTopic: details.topic,
            message: 'Zoom connection and meeting fetch successful!'
        });
    } catch (error) {
        console.error('❌ Zoom connection failed:', error.message);
        res.status(500).json({ success: false, error: error.message });
    }
});

/**
 * Verify email connection endpoint (for development)
 */
app.get('/api/test/verify-email', async (req, res) => {
    console.log('🔍 Testing email connection...');
    try {
        const result = await emailService.verifyConnection();
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

/**
 * Manual test endpoint (for development)
 */
app.post('/api/test/send-email', async (req, res) => {
    if (process.env.NODE_ENV === 'production') {
        return res.status(403).json({ error: 'Not available in production' });
    }

    const { email, name } = req.body;

    if (!email) {
        return res.status(400).json({ error: 'Email is required' });
    }

    console.log(`📧 Sending test email to: ${email}`);

    try {
        let meetingDetails = null;
        let joinUrl = process.env.ZOOM_MEETING_LINK || 'https://zoom.us/j/test123';

        // Try to get real meeting details if possible
        if (zoomService.isConfigured()) {
            try {
                meetingDetails = await zoomService.getMeetingDetails();
            } catch (err) {
                console.warn('⚠️ Could not fetch meeting details for test:', err.message);
            }
        }

        const result = await emailService.sendPaymentConfirmation({
            customerName: name || 'Test User',
            email: email,
            paymentId: 'TEST_' + Date.now(),
            amount: 1,
            joinUrl: joinUrl,
            meetingTopic: 'Memory MASTERS Training',
            meetingDetails: meetingDetails
        });

        res.json({ success: true, result });
    } catch (error) {
        console.error('❌ Test email failed:', error);
        res.status(500).json({ error: error.message, details: error.response || error.code });
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Server error:', err);
    res.status(500).json({ error: 'Internal server error' });
});

// Start server
app.listen(PORT, async () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log('📋 Configuration status:');
    console.log(`   - Zoom: ${zoomService.isConfigured() ? '✅ Configured' : '⚠️ Not configured'}`);
    console.log(`   - Email: ${emailService.isConfigured() ? '✅ Configured' : '⚠️ Not configured'}`);
    console.log(`   - Google Sheets: ${process.env.GOOGLE_SHEETS_URL ? '✅ Configured' : '⚠️ Not configured'}`);

    // Verify email connection on startup
    if (emailService.isConfigured()) {
        console.log('\n🔍 Verifying email connection...');
        const emailVerification = await emailService.verifyConnection();
        if (!emailVerification.success) {
            console.error('❌ Email verification failed! Check your SMTP credentials.');
            console.error('   Error:', emailVerification.error);
        }
    }

    console.log('\n📌 Test endpoints:');
    console.log(`   GET  http://localhost:${PORT}/api/health`);
    console.log(`   GET  http://localhost:${PORT}/api/test/verify-email`);
    console.log(`   POST http://localhost:${PORT}/api/test/send-email { "email": "test@example.com" }`);
});

module.exports = app;
