import nodemailer from 'nodemailer';

/**
 * Send Payment Receipt Email API Endpoint
 * POST /api/send-payment-receipt
 */
export default async function handler(req, res) {
    // Handle both Express and Vercel serverless
    const method = req.method || 'POST';

    // Only accept POST requests
    if (method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        // Validate environment variables
        const requiredEnvVars = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS', 'EMAIL_FROM'];
        const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);

        if (missingVars.length > 0) {
            console.error('❌ Missing environment variables:', missingVars.join(', '));
            return res.status(500).json({
                success: false,
                message: 'Email service not configured properly',
                error: `Missing environment variables: ${missingVars.join(', ')}`,
            });
        }

        const {
            customerName,
            customerEmail,
            customerMobile,
            paymentId,
            amount,
            standard,
            instituteName,
            city,
        } = req.body;

        console.log('📧 Sending payment receipt to:', customerEmail);
        console.log('📧 SMTP Configuration:', {
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            user: process.env.SMTP_USER,
            from: process.env.EMAIL_FROM,
        });

        // Create Nodemailer transporter
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT || '587'),
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Verify SMTP connection
        try {
            await transporter.verify();
            console.log('✅ SMTP connection verified');
        } catch (verifyError) {
            console.error('❌ SMTP verification failed:', verifyError.message);
            throw new Error(`SMTP connection failed: ${verifyError.message}`);
        }

        // Format the date
        const transactionDate = new Date().toLocaleString('en-IN', {
            dateStyle: 'full',
            timeStyle: 'short',
            timeZone: 'Asia/Kolkata',
        });

        // Email HTML template (embedded for Vercel serverless compatibility)
        const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Payment Confirmed - Memory MASTERS</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f7fa;">
    <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f4f7fa; padding: 40px 20px;">
        <tr>
            <td align="center">
                <table role="presentation" style="max-width: 600px; width: 100%; border-collapse: collapse; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);">
                    <!-- Header -->
                    <tr>
                        <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
                            <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">🎉 Payment Successful!</h1>
                            <p style="margin: 10px 0 0 0; color: #e0e7ff; font-size: 16px;">Thank you for choosing Memory MASTERS</p>
                        </td>
                    </tr>
                    <!-- Success Badge -->
                    <tr>
                        <td style="padding: 30px 30px 20px 30px; text-align: center;">
                            <div style="display: inline-block; background-color: #e8f5e9; color: #2e7d32; padding: 10px 20px; border-radius: 20px; font-weight: 600; font-size: 14px;">✓ Payment Confirmed</div>
                        </td>
                    </tr>
                    <!-- Greeting -->
                    <tr>
                        <td style="padding: 20px 30px 30px 30px;">
                            <p style="margin: 0; font-size: 16px; color: #333333; line-height: 1.6;">Dear <strong>${customerName}</strong>,</p>
                            <p style="margin: 15px 0 0 0; font-size: 16px; color: #333333; line-height: 1.6;">We are delighted to confirm that your payment has been successfully processed. Welcome to Memory MASTERS!</p>
                        </td>
                    </tr>
                    <!-- Payment Details Card -->
                    <tr>
                        <td style="padding: 0 30px 20px 30px;">
                            <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f8f9ff; border-radius: 8px; border: 1px solid #e0e7ff;">
                                <tr>
                                    <td style="padding: 20px;">
                                        <h3 style="margin: 0 0 15px 0; color: #667eea; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Payment Details</h3>
                                        <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                            <tr>
                                                <td style="padding: 8px 0; font-size: 14px; color: #666666; width: 40%;">Transaction ID:</td>
                                                <td style="padding: 8px 0; font-size: 14px; color: #333333; font-weight: 600;">${paymentId}</td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 8px 0; font-size: 14px; color: #666666;">Amount Paid:</td>
                                                <td style="padding: 8px 0; font-size: 14px; color: #333333; font-weight: 600;">₹${amount}</td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 8px 0; font-size: 14px; color: #666666;">Transaction Date:</td>
                                                <td style="padding: 8px 0; font-size: 14px; color: #333333; font-weight: 600;">${transactionDate}</td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <!-- Student Information Card -->
                    <tr>
                        <td style="padding: 0 30px 30px 30px;">
                            <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f8f9ff; border-radius: 8px; border: 1px solid #e0e7ff;">
                                <tr>
                                    <td style="padding: 20px;">
                                        <h3 style="margin: 0 0 15px 0; color: #667eea; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Student Information</h3>
                                        <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                            <tr>
                                                <td style="padding: 8px 0; font-size: 14px; color: #666666; width: 40%;">Name:</td>
                                                <td style="padding: 8px 0; font-size: 14px; color: #333333; font-weight: 600;">${customerName}</td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 8px 0; font-size: 14px; color: #666666;">Email:</td>
                                                <td style="padding: 8px 0; font-size: 14px; color: #333333; font-weight: 600;">${customerEmail}</td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 8px 0; font-size: 14px; color: #666666;">Mobile:</td>
                                                <td style="padding: 8px 0; font-size: 14px; color: #333333; font-weight: 600;">${customerMobile}</td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 8px 0; font-size: 14px; color: #666666;">Standard:</td>
                                                <td style="padding: 8px 0; font-size: 14px; color: #333333; font-weight: 600;">${standard}</td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 8px 0; font-size: 14px; color: #666666;">Institute/School/College:</td>
                                                <td style="padding: 8px 0; font-size: 14px; color: #333333; font-weight: 600;">${instituteName || ''}</td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 8px 0; font-size: 14px; color: #666666;">City:</td>
                                                <td style="padding: 8px 0; font-size: 14px; color: #333333; font-weight: 600;">${city}</td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <!-- Next Steps -->
                    <tr>
                        <td style="padding: 0 30px 30px 30px;">
                            <h2 style="margin: 0 0 20px 0; color: #333333; font-size: 20px; font-weight: 700;">📚 What's Next?</h2>
                            <!-- Step 1 -->
                            <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 15px;">
                                <tr>
                                    <td style="width: 40px; vertical-align: top; padding-top: 5px;">
                                        <div style="width: 32px; height: 32px; border-radius: 50%; background-color: #667eea; color: #ffffff; text-align: center; line-height: 32px; font-weight: 700; font-size: 16px;">1</div>
                                    </td>
                                    <td style="padding-left: 15px; vertical-align: top;">
                                        <p style="margin: 0 0 10px 0; font-size: 15px; color: #333333; line-height: 1.6; font-weight: 600;">Join Our WhatsApp Community</p>
                                        <p style="margin: 0 0 12px 0; font-size: 14px; color: #666666; line-height: 1.6;">Connect with fellow participants and stay updated with daily announcements.</p>
                                        <a href="${process.env.WHATSAPP_LINK || '#'}" style="display: inline-block; padding: 12px 24px; background-color: #25D366; color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 14px;">📱 Join WhatsApp Community</a>
                                    </td>
                                </tr>
                            </table>
                            <!-- Step 2 -->
                            <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                <tr>
                                    <td style="width: 40px; vertical-align: top; padding-top: 5px;">
                                        <div style="width: 32px; height: 32px; border-radius: 50%; background-color: #667eea; color: #ffffff; text-align: center; line-height: 32px; font-weight: 700; font-size: 16px;">2</div>
                                    </td>
                                    <td style="padding-left: 15px; vertical-align: top;">
                                        <p style="margin: 0 0 10px 0; font-size: 15px; color: #333333; line-height: 1.6; font-weight: 600;">Access Daily Zoom Sessions</p>
                                        <p style="margin: 0; font-size: 14px; color: #666666; line-height: 1.6;">The trainer will share the Zoom meeting link daily in the WhatsApp community before each session.</p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <!-- Important Notice -->
                    <tr>
                        <td style="padding: 0 30px 30px 30px;">
                            <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #fff4e6; border-left: 4px solid #ff9800; border-radius: 6px;">
                                <tr>
                                    <td style="padding: 20px;">
                                        <h3 style="margin: 0 0 12px 0; color: #f57c00; font-size: 16px; font-weight: 700;">⚠️ Important Guidelines</h3>
                                        <ul style="margin: 0; padding-left: 20px; list-style-type: disc;">
                                            <li style="margin-bottom: 8px; font-size: 14px; color: #666666; line-height: 1.6;">Please join the Zoom sessions using your registered name: <strong style="color: #333333;">${customerName}</strong></li>
                                            <li style="margin-bottom: 8px; font-size: 14px; color: #666666; line-height: 1.6;">Do not share Zoom meeting links outside the community</li>
                                            <li style="margin-bottom: 0; font-size: 14px; color: #666666; line-height: 1.6;">Ensure you have a stable internet connection for the best learning experience</li>
                                        </ul>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <!-- Closing -->
                    <tr>
                        <td style="padding: 0 30px 40px 30px;">
                            <p style="margin: 0; font-size: 16px; color: #333333; line-height: 1.6;">We're thrilled to embark on this learning journey with you. Get ready to unlock your memory potential! 🚀</p>
                            <p style="margin: 20px 0 0 0; font-size: 16px; color: #333333; line-height: 1.6;">See you inside!<br><strong style="color: #667eea;">Team Memory Masters</strong></p>
                        </td>
                    </tr>
                    <!-- Footer -->
                    <tr>
                        <td style="background-color: #f8f9fa; padding: 30px; text-align: center; border-top: 1px solid #e9ecef;">
                            <p style="margin: 0 0 10px 0; font-size: 12px; color: #999999; line-height: 1.5;">Need help? Contact us at <a href="mailto:${process.env.SUPPORT_EMAIL || 'support@memorymasters.com'}" style="color: #667eea; text-decoration: none;">${process.env.SUPPORT_EMAIL || 'support@memorymasters.com'}</a></p>
                            <p style="margin: 0; font-size: 12px; color: #999999; line-height: 1.5;">© 2024 Memory Masters. All rights reserved.</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>`;

        // Email options
        const mailOptions = {
            from: process.env.EMAIL_FROM,
            to: customerEmail,
            bcc: 'sainithin95054@gmail.com', // Send copy to admin
            subject: `Payment Confirmation - Memory MASTERS (₹${amount})`,
            html: htmlContent,
        };

        // Send email
        const info = await transporter.sendMail(mailOptions);

        console.log('✅ Email sent successfully:', info.messageId);

        res.status(200).json({
            success: true,
            message: 'Email sent successfully',
            messageId: info.messageId,
        });
    } catch (error) {
        console.error('❌ Error sending email:', error);
        console.error('Error details:', {
            message: error.message,
            code: error.code,
            command: error.command,
            response: error.response,
            responseCode: error.responseCode,
        });

        res.status(500).json({
            success: false,
            message: 'Failed to send email',
            error: error.message,
            errorCode: error.code,
            details: error.response || error.command,
        });
    }
}
