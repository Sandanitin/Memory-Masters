/**
 * Send payment receipt email to customer using backend Nodemailer API
 * @param {Object} paymentData - Payment details
 * @param {string} paymentData.customerName - Customer's full name
 * @param {string} paymentData.customerEmail - Customer's email
 * @param {string} paymentData.customerMobile - Customer's mobile number
 * @param {string} paymentData.paymentId - Razorpay payment ID
 * @param {number} paymentData.amount - Payment amount
 * @param {string} paymentData.standard - Student's standard/grade
 * @param {string} paymentData.city - Customer's city
 * @returns {Promise} API response
 */
export const sendPaymentReceipt = async (paymentData) => {
    try {
        console.log('📧 Sending email via API...');
        console.log('Recipient:', paymentData.customerEmail);

        // Use backend URL for local dev, relative path for production
        const apiUrl = import.meta.env.VITE_BACKEND_URL
            ? `${import.meta.env.VITE_BACKEND_URL}/api/send-payment-receipt`
            : '/api/send-payment-receipt';

        console.log('API URL:', apiUrl);

        // Send request to API
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                customerName: paymentData.customerName,
                customerEmail: paymentData.customerEmail,
                customerMobile: paymentData.customerMobile,
                paymentId: paymentData.paymentId,
                amount: paymentData.amount,
                standard: paymentData.standard,
                city: paymentData.city,
            }),
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message || 'Failed to send email');
        }

        console.log('✅ Payment receipt email sent successfully:', result);
        return { success: true, response: result };
    } catch (error) {
        console.error('❌ Error sending payment receipt email:', error);
        console.error('Error details:', {
            message: error.message,
        });
        throw error;
    }
};

export default {
    sendPaymentReceipt
};
