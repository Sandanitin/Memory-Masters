import axios from 'axios';

const GOOGLE_SHEETS_URL = import.meta.env.VITE_GOOGLE_SHEETS_URL;

/**
 * Send payment data to Google Sheets
 * @param {Object} paymentData - Payment details
 * @param {string} paymentData.firstName - Customer's first name
 * @param {string} paymentData.lastName - Customer's last name
 * @param {string} paymentData.email - Customer's email
 * @param {string} paymentData.mobile - Customer's mobile number
 * @param {string} paymentData.standard - Student's standard/grade
 * @param {string} paymentData.instituteName - Name of institute/school/college
 * @param {string} paymentData.city - Customer's city
 * @param {string} paymentData.paymentId - Razorpay payment ID
 * @param {number} paymentData.amount - Payment amount
 * @returns {Promise} Axios response
 */
export const saveToGoogleSheets = async (paymentData) => {
    try {
        // Check if Google Sheets URL is configured
        if (!GOOGLE_SHEETS_URL) {
            console.warn('Google Sheets URL not configured. Skipping data save.');
            return { success: false, message: 'Google Sheets not configured' };
        }

        // Prepare data for Google Sheets
        const sheetData = {
            customerName: `${paymentData.firstName} ${paymentData.lastName}`,
            customerEmail: paymentData.email,
            customerMobile: paymentData.mobile,
            standard: paymentData.standard,
            instituteName: paymentData.instituteName,
            city: paymentData.city,
            paymentId: paymentData.paymentId,
            amount: paymentData.amount,
            transactionDate: new Date().toLocaleString('en-IN', {
                dateStyle: 'full',
                timeStyle: 'short',
                timeZone: 'Asia/Kolkata'
            })
        };

        // Send data to Google Apps Script using fetch with text/plain to avoid CORS preflight
        // Google Apps Script doesn't handle OPTIONS requests well, so we use a simple request
        const response = await fetch(GOOGLE_SHEETS_URL, {
            method: 'POST',
            body: JSON.stringify(sheetData),
            headers: {
                // strict-origin-when-cross-origin is default, but we treat body as text to avoid preflight
                'Content-Type': 'text/plain;charset=utf-8',
            },
        });

        // With Google Apps Script, we might get an opaque response if using no-cors,
        // but since we are sending text/plain, we should get a proper CORS response if the script is "Anyone"
        const result = await response.json();

        console.log('Payment data saved to Google Sheets successfully:', result);
        return { success: true, response: result };
    } catch (error) {
        console.error('Error saving to Google Sheets:', error);
        // Even if it fails (e.g. CORS), we often don't want to block the user flow
        // throwing is okay if caught upstream, which it is.
        throw error;
    }
};

export default {
    saveToGoogleSheets
};
