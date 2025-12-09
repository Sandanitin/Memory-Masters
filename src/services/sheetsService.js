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
            timestamp: new Date().toISOString(),
            firstName: paymentData.firstName,
            lastName: paymentData.lastName,
            email: paymentData.email,
            mobile: paymentData.mobile,
            standard: paymentData.standard,
            city: paymentData.city,
            paymentId: paymentData.paymentId,
            amount: paymentData.amount
        };

        // Send data to Google Apps Script
        const response = await axios.post(GOOGLE_SHEETS_URL, sheetData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        console.log('Payment data saved to Google Sheets successfully:', response.data);
        return { success: true, response: response.data };
    } catch (error) {
        console.error('Error saving to Google Sheets:', error);
        throw error;
    }
};

export default {
    saveToGoogleSheets
};
