# Backend for Memory Masters

Node.js backend server for handling Razorpay webhooks, Zoom meeting registration, and email notifications.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Copy `.env.example` to `.env` and fill in your credentials:
```bash
cp .env.example .env
```

3. Run the server:
```bash
npm run dev
```

## Configuration

### Razorpay Webhook Setup
1. Go to Razorpay Dashboard → Settings → Webhooks
2. Add webhook URL: `https://your-backend-url/api/webhook/razorpay`
3. Select event: `payment.captured`
4. Copy the webhook secret to your `.env`

### Zoom Setup
1. Create a Server-to-Server OAuth app at https://marketplace.zoom.us/
2. Get Account ID, Client ID, and Client Secret
3. Set up a meeting with registration required
4. Copy the Meeting ID to your `.env`

### Email Setup (Gmail)
1. Enable 2FA on your Gmail account
2. Generate an App Password at https://myaccount.google.com/apppasswords
3. Use the App Password as SMTP_PASS

## Endpoints

- `GET /api/health` - Health check
- `POST /api/webhook/razorpay` - Razorpay webhook handler
- `POST /api/test/send-email` - Test email sending (dev only)
