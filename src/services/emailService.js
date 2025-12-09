import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

// Initialize EmailJS
if (EMAILJS_PUBLIC_KEY) {
    emailjs.init(EMAILJS_PUBLIC_KEY);
}

/**
 * Send payment receipt email to customer
 * @param {Object} paymentData - Payment details
 * @param {string} paymentData.customerName - Customer's full name
 * @param {string} paymentData.customerEmail - Customer's email
 * @param {string} paymentData.customerMobile - Customer's mobile number
 * @param {string} paymentData.paymentId - Razorpay payment ID
 * @param {number} paymentData.amount - Payment amount
 * @param {string} paymentData.standard - Student's standard/grade
 * @param {string} paymentData.city - Customer's city
 * @returns {Promise} EmailJS response
 */
export const sendPaymentReceipt = async (paymentData) => {
    try {
        // Check if EmailJS is configured
        if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
            console.warn('EmailJS not configured. Skipping email send.');
            return { success: false, message: 'EmailJS not configured' };
        }

        // Format the date
        const transactionDate = new Date().toLocaleString('en-IN', {
            dateStyle: 'full',
            timeStyle: 'short',
            timeZone: 'Asia/Kolkata'
        });

        // Prepare template parameters
        const templateParams = {
            customer_name: paymentData.customerName,
            customer_email: paymentData.customerEmail,
            customer_mobile: paymentData.customerMobile,
            payment_id: paymentData.paymentId,
            amount: `₹${paymentData.amount}`,
            transaction_date: transactionDate,
            standard: paymentData.standard,
            city: paymentData.city
        };

        // Send email using EmailJS
        const response = await emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            templateParams
        );

        console.log('Payment receipt email sent successfully:', response);
        return { success: true, response };
    } catch (error) {
        console.error('Error sending payment receipt email:', error);
        throw error;
    }
};

export default {
    sendPaymentReceipt
};
