/**
 * Health Check API Endpoint
 * GET /api/health
 */
export default function handler(req, res) {
    // Handle both Express and Vercel serverless
    const method = req.method || 'GET';

    // Only accept GET requests
    if (method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    return res.status(200).json({
        status: 'ok',
        message: 'Email server is running',
        timestamp: new Date().toISOString()
    });
}
