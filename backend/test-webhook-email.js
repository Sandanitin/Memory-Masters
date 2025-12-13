require('dotenv').config();
const axios = require('axios');
const crypto = require('crypto');

const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET;

const payload = {
    "entity": "event",
    "account_id": "acc_TestAccount",
    "event": "payment.captured",
    "contains": [
        "payment"
    ],
    "payload": {
        "payment": {
            "entity": {
                "id": "pay_TestEmail" + Date.now(),
                "entity": "payment",
                "amount": 49900,
                "currency": "INR",
                "status": "captured",
                "description": "Memory MASTERS Training",
                "email": "rajesh.esh329@gmail.com",
                "contact": "+919999999999",
                "notes": {
                    "firstName": "Rajesh",
                    "lastName": "User",
                    "city": "Test City"
                },
                "created_at": Math.floor(Date.now() / 1000)
            }
        }
    },
    "created_at": Math.floor(Date.now() / 1000)
};

const payloadString = JSON.stringify(payload);

const signature = crypto
    .createHmac('sha256', webhookSecret)
    .update(payloadString)
    .digest('hex');

async function testWebhookEmail() {
    console.log('🔍 Testing Webhook Email Flow for rajesh.esh329@gmail.com...');

    // Check Health
    try {
        await axios.get('http://localhost:3001/api/health');
        console.log('✅ Server is reachable');
    } catch (e) {
        console.error('❌ Server not reachable:', e.message);
        return;
    }

    console.log('🚀 Sending Webhook...');
    try {
        const response = await axios.post('http://localhost:3001/api/webhook/razorpay', payload, {
            headers: {
                'x-razorpay-signature': signature,
                'Content-Type': 'application/json'
            }
        });
        console.log('✅ Webhook Accepted:', response.data);
    } catch (error) {
        console.error('❌ Webhook Rejected:', error.response ? error.response.data : error.message);
    }
}

testWebhookEmail();
