# Memory MASTERS - Setup Guide

## Environment Configuration

This project requires several API keys and configurations. Follow these steps to set up your environment:

### 1. Create .env file

Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

### 2. Razorpay Setup

1. Sign up at [Razorpay Dashboard](https://dashboard.razorpay.com/)
2. For testing, use **Test Mode** (toggle in top-left corner)
3. Go to Settings → API Keys
4. Generate Test API Keys
5. Copy the **Key ID** and paste it in `.env` as `VITE_RAZORPAY_KEY_ID`

**Test Card Details:**
- Card Number: `4111 1111 1111 1111`
- Expiry: Any future date
- CVV: Any 3 digits
- OTP: `123456` (for test mode)

### 3. EmailJS Setup

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an Email Service (Gmail, Outlook, etc.)
3. Create an Email Template with these variables:
   - `{{customer_name}}`
   - `{{customer_email}}`
   - `{{customer_mobile}}`
   - `{{payment_id}}`
   - `{{amount}}`
   - `{{transaction_date}}`
   - `{{standard}}`
   - `{{city}}`

**Sample Email Template:**
```
Subject: Payment Receipt - Memory MASTERS Registration

Dear {{customer_name}},

Thank you for registering for Memory MASTERS!

Payment Details:
- Amount Paid: {{amount}}
- Payment ID: {{payment_id}}
- Transaction Date: {{transaction_date}}
- Email: {{customer_email}}
- Mobile: {{customer_mobile}}
- Standard: {{standard}}
- City: {{city}}

Your registration is confirmed. You will receive further details about the workshop soon.

Best regards,
Memory MASTERS Team
```

4. Copy the following to `.env`:
   - Service ID → `VITE_EMAILJS_SERVICE_ID`
   - Template ID → `VITE_EMAILJS_TEMPLATE_ID`
   - Public Key → `VITE_EMAILJS_PUBLIC_KEY`

### 4. Google Sheets Setup

1. Create a new Google Sheet
2. Add these column headers in the first row:
   ```
   Timestamp | First Name | Last Name | Email | Mobile | Standard | City | Payment ID | Amount
   ```

3. Go to Extensions → Apps Script
4. Delete existing code and paste this:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      new Date(data.timestamp),
      data.firstName,
      data.lastName,
      data.email,
      data.mobile,
      data.standard,
      data.city,
      data.paymentId,
      data.amount
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

5. Click **Deploy** → **New deployment**
6. Select type: **Web app**
7. Set "Execute as": **Me**
8. Set "Who has access": **Anyone**
9. Click **Deploy**
10. Copy the **Web app URL** and paste it in `.env` as `VITE_GOOGLE_SHEETS_URL`

### 5. Run the Application

```bash
npm install
npm run dev
```

## Testing

### Contact Page
1. Navigate to `/contact`
2. Fill out the form
3. Submit and verify success message

### Payment Flow
1. Click "Register Now"
2. Fill registration form
3. Click "Proceed to pay"
4. Use test card details
5. Complete payment
6. Verify:
   - Success toast notification
   - Email receipt in inbox
   - New row in Google Sheet

## Production Deployment

Before deploying to production:

1. **Razorpay**: Switch to Live Mode and use Live API Keys
2. **Environment Variables**: Set all variables in your hosting platform (Vercel, Netlify, etc.)
3. **Never commit** `.env` file to version control

## Support

For issues or questions, contact: memoryMASTERS.in@gmail.com
