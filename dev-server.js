import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Import serverless functions
import healthHandler from './api/health.js';
import sendEmailHandler from './api/send-payment-receipt.js';

dotenv.config();

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Wrapper to convert serverless functions to Express routes
const wrapServerlessFunction = (handler) => {
    return async (req, res) => {
        try {
            await handler(req, res);
        } catch (error) {
            console.error('Error in serverless function:', error);
            if (!res.headersSent) {
                res.status(500).json({ error: error.message });
            }
        }
    };
};

// Routes - map serverless functions to Express
app.get('/api/health', wrapServerlessFunction(healthHandler));
app.post('/api/send-payment-receipt', wrapServerlessFunction(sendEmailHandler));

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Local API server running on http://localhost:${PORT}`);
    console.log(`📧 SMTP: ${process.env.SMTP_HOST}`);
    console.log(`✅ Ready to handle email requests`);
});
