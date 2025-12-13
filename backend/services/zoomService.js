const axios = require('axios');

/**
 * Zoom Service using Server-to-Server OAuth
 */

let cachedAccessToken = null;
let tokenExpiry = null;

/**
 * Get OAuth Access Token using Server-to-Server OAuth
 */
async function getAccessToken() {
    // Return cached token if still valid
    if (cachedAccessToken && tokenExpiry && Date.now() < tokenExpiry) {
        return cachedAccessToken;
    }

    const accountId = process.env.ZOOM_ACCOUNT_ID;
    const clientId = process.env.ZOOM_CLIENT_ID;
    const clientSecret = process.env.ZOOM_CLIENT_SECRET;

    if (!accountId || !clientId || !clientSecret) {
        throw new Error('Zoom OAuth credentials not configured');
    }

    try {
        const response = await axios.post(
            `https://zoom.us/oauth/token?grant_type=account_credentials&account_id=${accountId}`,
            {},
            {
                headers: {
                    'Authorization': `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }
        );

        cachedAccessToken = response.data.access_token;
        // Set expiry to 5 minutes before actual expiry for safety
        tokenExpiry = Date.now() + ((response.data.expires_in - 300) * 1000);

        return cachedAccessToken;
    } catch (error) {
        console.error('Failed to get Zoom access token:', error.response?.data || error.message);
        throw new Error('Failed to authenticate with Zoom');
    }
}

/**
 * Get meeting details
 */
async function getMeetingDetails() {
    const meetingId = process.env.ZOOM_MEETING_ID;

    if (!meetingId) {
        throw new Error('ZOOM_MEETING_ID not configured');
    }

    const token = await getAccessToken();

    try {
        const response = await axios.get(
            `https://api.zoom.us/v2/meetings/${meetingId}`,
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            }
        );

        return {
            id: response.data.id,
            topic: response.data.topic,
            startTime: response.data.start_time,
            duration: response.data.duration,
            timezone: response.data.timezone,
            joinUrl: response.data.join_url,
            password: response.data.password
        };
    } catch (error) {
        console.error('Failed to get meeting details:', error.response?.data || error.message);
        throw new Error('Failed to fetch meeting details from Zoom');
    }
}

/**
 * Register a participant for a meeting
 * Note: This requires a paid Zoom plan with registration enabled
 */
async function registerParticipant(meetingId, participantData) {
    const token = await getAccessToken();

    try {
        const response = await axios.post(
            `https://api.zoom.us/v2/meetings/${meetingId}/registrants`,
            {
                email: participantData.email,
                first_name: participantData.firstName,
                last_name: participantData.lastName
            },
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            }
        );

        return {
            registrantId: response.data.id,
            joinUrl: response.data.join_url,
            topic: response.data.topic
        };
    } catch (error) {
        console.error('Failed to register participant:', error.response?.data || error.message);
        throw new Error('Failed to register participant with Zoom');
    }
}

/**
 * Check if Zoom service is properly configured
 */
function isConfigured() {
    return !!(
        process.env.ZOOM_ACCOUNT_ID &&
        process.env.ZOOM_CLIENT_ID &&
        process.env.ZOOM_CLIENT_SECRET &&
        process.env.ZOOM_MEETING_ID
    );
}

module.exports = {
    getAccessToken,
    getMeetingDetails,
    registerParticipant,
    isConfigured
};
