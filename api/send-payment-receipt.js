import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

        // Create Nodemailer transporter
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Format the date
        const transactionDate = new Date().toLocaleString('en-IN', {
            dateStyle: 'full',
            timeStyle: 'short',
            timeZone: 'Asia/Kolkata',
        });

        // Read the HTML template from public folder
        const templatePath = path.join(process.cwd(), 'public', 'templates', 'workshop-confirmation.html');
        let htmlContent = fs.readFileSync(templatePath, 'utf8');

        // Replace template variables
        htmlContent = htmlContent
            .replace(/{{Name}}/g, customerName)
            .replace(/{{Email}}/g, customerEmail)
            .replace(/{{Mobile}}/g, customerMobile)
            .replace(/{{TransactionId}}/g, paymentId)
            .replace(/{{Amount}}/g, amount)
            .replace(/{{TransactionDate}}/g, transactionDate)
            .replace(/{{Standard}}/g, standard)
            .replace(/{{InstituteName}}/g, instituteName || '')
            .replace(/{{City}}/g, city)
            .replace(/{{WhatsAppLink}}/g, process.env.WHATSAPP_LINK || '#')
            .replace(/{{SupportEmail}}/g, process.env.SUPPORT_EMAIL || 'support@memorymasters.com');

        // Email options
        const mailOptions = {
            from: process.env.EMAIL_FROM,
            to: customerEmail,
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
        res.status(500).json({
            success: false,
            message: 'Failed to send email',
            error: error.message,
        });
    }
}
