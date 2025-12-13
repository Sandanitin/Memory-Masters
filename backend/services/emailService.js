const nodemailer = require('nodemailer');

/**
 * Email Service using Nodemailer
 */

// Create reusable transporter
let transporter = null;

/**
 * Initialize the email transporter
 */
function initTransporter() {
    if (transporter) return transporter;

    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    console.log('📧 Initializing email transporter...');
    console.log('   SMTP_USER:', smtpUser ? smtpUser : '❌ NOT SET');
    console.log('   SMTP_PASS:', smtpPass ? '✅ SET (' + smtpPass.length + ' chars)' : '❌ NOT SET');

    transporter = nodemailer.createTransport({
        service: 'gmail', // Use Gmail service for simpler config
        auth: {
            user: smtpUser,
            pass: smtpPass
        }
    });

    return transporter;
}

/**
 * Verify email connection
 */
async function verifyConnection() {
    const mailer = initTransporter();
    try {
        await mailer.verify();
        console.log('✅ Email server connection verified!');
        return { success: true };
    } catch (error) {
        console.error('❌ Email server connection failed:', error.message);
        return { success: false, error: error.message };
    }
}

/**
 * Generate ICS file content
 * @param {Object} event Event details
 * @returns {string} ICS file content
 */
function createICSContent(event) {
    const formatDate = (dateStr) => {
        if (!dateStr) return '';
        return dateStr.replace(/[-:]/g, '').split('.')[0] + 'Z';
    };

    const now = new Date().toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    const startTime = formatDate(event.startTime);
    // Calculate end time or default to 1 hour
    let endTime = '';
    if (event.startTime && event.duration) {
        const start = new Date(event.startTime);
        const end = new Date(start.getTime() + event.duration * 60000);
        endTime = formatDate(end.toISOString());
    } else {
        // Fallback: 1 hour later
        const start = event.startTime ? new Date(event.startTime) : new Date();
        const end = new Date(start.getTime() + 60 * 60000);
        endTime = formatDate(end.toISOString());
        if (!event.startTime) startTime = formatDate(start.toISOString());
    }

    return `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Memory Masters//EN
CALSCALE:GREGORIAN
METHOD:REQUEST
BEGIN:VEVENT
DTSTART:${startTime}
DTEND:${endTime}
DTSTAMP:${now}
ORGANIZER;CN=Memory MASTERS:mailto:${process.env.EMAIL_FROM || 'noreply@memorymaster.com'}
UID:${now}-${event.meetingId || 'event'}@memorymaster.com
ATTENDEE;RSVP=TRUE;CN=${event.attendeeName};X-NUM-GUESTS=0:mailto:${event.attendeeEmail}
DESCRIPTION:Join Zoom Meeting: ${event.joinUrl}\\n\\n${event.description || ''}
LOCATION:Zoom Meeting
SUMMARY:${event.summary}
URL:${event.joinUrl}
END:VEVENT
END:VCALENDAR`.replace(/\n/g, '\r\n');
}

/**
 * Send payment confirmation email with Zoom join link
 * @param {Object} data Email data
 * @param {string} data.customerName Customer's full name
 * @param {string} data.email Customer's email
 * @param {string} data.paymentId Razorpay payment ID
 * @param {number} data.amount Payment amount
 * @param {string} data.joinUrl Zoom meeting join URL
 * @param {string} data.meetingTopic Meeting topic/title
 * @returns {Promise<Object>} Nodemailer response
 */
async function sendPaymentConfirmation(data) {
    const mailer = initTransporter();

    const transactionDate = new Date().toLocaleString('en-IN', {
        dateStyle: 'full',
        timeStyle: 'short',
        timeZone: 'Asia/Kolkata'
    });

    // Generate ICS content if meeting details are present
    let icalContent = null;
    if (data.joinUrl && data.meetingDetails) {
        icalContent = createICSContent({
            summary: data.meetingTopic || 'Memory MASTERS Training',
            startTime: data.meetingDetails.start_time || data.meetingDetails.startTime,
            duration: data.meetingDetails.duration,
            meetingId: data.meetingDetails.id || 'meeting',
            attendeeName: data.customerName,
            attendeeEmail: data.email,
            joinUrl: data.joinUrl,
            description: `Payment ID: ${data.paymentId}`
        });
    }

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank you for your registration - Memory MASTERS</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f5;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <tr>
            <td>
                <!-- Header -->
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background: #4472C4; padding: 20px; text-align: center;">
                    <tr>
                        <td>
                            <h1 style="color: white; margin: 0; font-size: 20px; font-weight: bold;">Thank you for your registration</h1>
                        </td>
                    </tr>
                </table>

                <!-- Content -->
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background: white; padding: 30px; border: 1px solid #e0e0e0;">
                    <tr>
                        <td>
                            <!-- Greeting -->
                            <p style="color: #333; margin: 0 0 20px 0; font-size: 14px;">
                                Hello <strong>${data.customerName}</strong>,
                            </p>

                            <!-- Confirmation Message -->
                            <p style="color: #333; margin: 0 0 20px 0; font-size: 14px; line-height: 1.6;">
                                We are pleased to confirm that your payment for <strong>Memory MASTERS Training</strong> has been received and your registration is now <span style="color: #4472C4;">confirmed</span>.
                            </p>

                            <!-- Course Details Table -->
                            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-bottom: 25px; border-collapse: collapse;">
                                <tr>
                                    <td style="color: #666; padding: 8px 0; font-size: 14px; border-bottom: 1px solid #e0e0e0;">Course:</td>
                                    <td style="color: #333; padding: 8px 0; font-size: 14px; text-align: right; border-bottom: 1px solid #e0e0e0;"><strong>Memory MASTERS Training</strong></td>
                                </tr>
                                <tr>
                                    <td style="color: #666; padding: 8px 0; font-size: 14px; border-bottom: 1px solid #e0e0e0;">Amount Paid:</td>
                                    <td style="color: #333; padding: 8px 0; font-size: 14px; text-align: right; border-bottom: 1px solid #e0e0e0;"><strong>₹${data.amount}</strong></td>
                                </tr>
                                <tr>
                                    <td style="color: #666; padding: 8px 0; font-size: 14px; border-bottom: 1px solid #e0e0e0;">Registration ID:</td>
                                    <td style="color: #333; padding: 8px 0; font-size: 14px; text-align: right; border-bottom: 1px solid #e0e0e0;"><strong>${data.paymentId}</strong></td>
                                </tr>
                                <tr>
                                    <td style="color: #666; padding: 8px 0; font-size: 14px;">Date:</td>
                                    <td style="color: #333; padding: 8px 0; font-size: 14px; text-align: right;"><strong>${transactionDate}</strong></td>
                                </tr>
                            </table>

                            <!-- Meeting Link Section -->
                            ${data.joinUrl ? `
                            <div style="background: #E7F3FF; border: 1px solid #4472C4; border-radius: 4px; padding: 20px; margin-bottom: 25px;">
                                <h3 style="color: #4472C4; margin: 0 0 15px 0; font-size: 16px; font-weight: bold;">Your Meeting Link</h3>
                                <p style="color: #333; margin: 0 0 15px 0; font-size: 13px;">
                                    Please use this link to join your session at the scheduled time.
                                </p>
                                <a href="${data.joinUrl}" style="display: inline-block; background: #4472C4; color: white; text-decoration: none; padding: 12px 30px; border-radius: 4px; font-weight: bold; font-size: 14px;">Join Meeting</a>
                            </div>
                            ` : ''}

                            <!-- Next Steps -->
                            <div style="margin-top: 25px;">
                                <h4 style="color: #333; margin: 0 0 10px 0; font-size: 15px; font-weight: bold;">Next Steps</h4>
                                <ul style="color: #666; margin: 0; padding-left: 20px; font-size: 13px; line-height: 1.8;">
                                    <li>Check your calendar for the invite attached to this email</li>
                                    <li>Join the meeting 5 minutes before the scheduled time</li>
                                    <li>Ensure you have a stable internet connection</li>
                                    <li>Keep a notebook ready for taking notes</li>
                                </ul>
                            </div>

                            <!-- Closing -->
                            <p style="color: #333; margin: 25px 0 0 0; font-size: 14px;">
                                We look forward to seeing you at the training!
                            </p>

                            <p style="color: #333; margin: 15px 0 0 0; font-size: 14px;">
                                Best regards,<br>
                                <strong>Memory MASTERS Team</strong>
                            </p>

                            <!-- Footer -->
                            <div style="text-align: center; padding-top: 25px; margin-top: 25px; border-top: 1px solid #e0e0e0;">
                                <p style="color: #999; font-size: 11px; margin: 0;">
                                    This is an automated email. Please do not reply to this message.<br>
                                    © ${new Date().getFullYear()} Memory MASTERS. All rights reserved.
                                </p>
                            </div>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
    `;

    const mailOptions = {
        from: process.env.EMAIL_FROM || '"Memory MASTERS" <noreply@memorymaster.com>',
        to: data.email,
        subject: `✅ Payment Confirmed - Memory MASTERS Training`,
        html: htmlContent,
        text: `
Payment Confirmation - Memory MASTERS

Dear ${data.customerName},

Thank you for your payment! Your registration is confirmed.

Payment Details:
- Payment ID: ${data.paymentId}
- Amount: ₹${data.amount}
- Date: ${transactionDate}

${data.joinUrl ? `Your Zoom Link: ${data.joinUrl}

IMPORTANT: This link is unique to you. Do not share it with others.` : ''}

Thank you for choosing Memory MASTERS!
        `
    };

    // Attach ICS file if available
    if (icalContent) {
        mailOptions.icalEvent = {
            filename: 'invitation.ics',
            method: 'request',
            content: icalContent
        };
    }

    try {
        const info = await mailer.sendMail(mailOptions);
        console.log('✅ Email sent successfully:', info.messageId);
        return { success: true, messageId: info.messageId };
    } catch (error) {
        console.error('❌ Email sending failed:', error);
        throw error;
    }
}

/**
 * Check if email service is properly configured
 * @returns {boolean}
 */
function isConfigured() {
    return !!(process.env.SMTP_USER && process.env.SMTP_PASS);
}

module.exports = {
    sendPaymentConfirmation,
    isConfigured,
    initTransporter,
    verifyConnection
};
