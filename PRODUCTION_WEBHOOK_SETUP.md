# Production Webhook Setup Guide

## Current Status
✅ **Development**: Working with manual webhook trigger from frontend
⚠️ **Production**: Requires proper Razorpay webhook configuration

## For Production Deployment

### Step 1: Deploy Your Backend
Deploy your backend to a publicly accessible URL (e.g., Vercel, Railway, Render, etc.)

Example: `https://your-backend.vercel.app`

### Step 2: Configure Razorpay Webhook
1. Go to [Razorpay Dashboard](https://dashboard.razorpay.com/)
2. Navigate to **Settings** → **Webhooks**
3. Click **Create New Webhook**
4. Enter your webhook URL: `https://your-backend.vercel.app/api/webhook/razorpay`
5. Select events to listen for:
   - ✅ `payment.captured`
6. Set the webhook secret (save this in your backend `.env` as `RAZORPAY_WEBHOOK_SECRET`)
7. Activate the webhook

### Step 3: Remove Development Workaround
Once the webhook is configured, you can remove the manual API call from `RegistrationModal.jsx` (lines 71-107) since Razorpay will automatically send webhooks to your backend.

### Step 4: Test in Production
1. Make a test payment
2. Check backend logs to confirm webhook was received
3. Verify email was sent

## Why This Workaround is Needed for Development
Razorpay webhooks require a publicly accessible URL. Since `localhost:3001` is not accessible from the internet, we manually trigger the webhook endpoint from the frontend after payment success.
