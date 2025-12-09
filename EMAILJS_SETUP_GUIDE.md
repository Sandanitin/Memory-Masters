# EmailJS Template Setup Guide

## 🎯 Template Configuration for Payment Receipts

### Template ID: `template_g8sz0t6`
### Service ID: `service_j1it8n7`

---

## 📧 Email Template Variables

Your EmailJS template should include the following variables. Copy and paste this template into your EmailJS dashboard:

### **Subject Line:**
```
Payment Receipt - Memory MASTERS Registration
```

### **Email Body Template:**

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background: linear-gradient(135deg, #9333ea 0%, #3b82f6 100%);
            color: white;
            padding: 30px;
            text-align: center;
            border-radius: 10px 10px 0 0;
        }
        .content {
            background: #f9fafb;
            padding: 30px;
            border: 1px solid #e5e7eb;
        }
        .detail-row {
            display: flex;
            justify-content: space-between;
            padding: 10px 0;
            border-bottom: 1px solid #e5e7eb;
        }
        .label {
            font-weight: bold;
            color: #6b7280;
        }
        .value {
            color: #111827;
        }
        .footer {
            background: #111827;
            color: white;
            padding: 20px;
            text-align: center;
            border-radius: 0 0 10px 10px;
        }
        .success-badge {
            background: #10b981;
            color: white;
            padding: 10px 20px;
            border-radius: 20px;
            display: inline-block;
            margin: 20px 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🎉 Payment Successful!</h1>
            <p>Thank you for registering with Memory MASTERS</p>
        </div>
        
        <div class="content">
            <div class="success-badge">
                ✓ Payment Confirmed
            </div>
            
            <h2>Dear {{to_name}},</h2>
            
            <p>Your payment has been successfully processed. Here are your transaction details:</p>
            
            <div style="margin: 20px 0;">
                <div class="detail-row">
                    <span class="label">Customer Name:</span>
                    <span class="value">{{customer_name}}</span>
                </div>
                <div class="detail-row">
                    <span class="label">Email:</span>
                    <span class="value">{{customer_email}}</span>
                </div>
                <div class="detail-row">
                    <span class="label">Mobile:</span>
                    <span class="value">{{customer_mobile}}</span>
                </div>
                <div class="detail-row">
                    <span class="label">Standard/Grade:</span>
                    <span class="value">{{standard}}</span>
                </div>
                <div class="detail-row">
                    <span class="label">City:</span>
                    <span class="value">{{city}}</span>
                </div>
                <div class="detail-row">
                    <span class="label">Payment ID:</span>
                    <span class="value">{{payment_id}}</span>
                </div>
                <div class="detail-row">
                    <span class="label">Amount Paid:</span>
                    <span class="value">₹{{amount}}</span>
                </div>
                <div class="detail-row">
                    <span class="label">Transaction Date:</span>
                    <span class="value">{{transaction_date}}</span>
                </div>
            </div>
            
            <div style="background: #dbeafe; padding: 15px; border-radius: 8px; margin: 20px 0;">
                <h3 style="margin-top: 0;">📚 What's Next?</h3>
                <ul>
                    <li>You will receive workshop details via email within 24 hours</li>
                    <li>Check your spam folder if you don't see our email</li>
                    <li>Save this email for your records</li>
                </ul>
            </div>
            
            <p>If you have any questions, feel free to contact us.</p>
            
            <p>Best regards,<br>
            <strong>{{from_name}} Team</strong></p>
        </div>
        
        <div class="footer">
            <p>This is an automated receipt. Please do not reply to this email.</p>
            <p>&copy; 2024 Memory MASTERS. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
```

---

## 🔧 Template Variables Reference

Make sure these variables are properly mapped in your EmailJS template:

| Variable Name | Description | Example Value |
|--------------|-------------|---------------|
| `{{to_name}}` | Customer's full name | "John Doe" |
| `{{to_email}}` | Customer's email address | "john@example.com" |
| `{{customer_name}}` | Customer's full name | "John Doe" |
| `{{customer_email}}` | Customer's email | "john@example.com" |
| `{{customer_mobile}}` | Customer's phone number | "9876543210" |
| `{{payment_id}}` | Razorpay payment ID | "pay_xxxxxxxxxxxxx" |
| `{{amount}}` | Payment amount | "1" |
| `{{transaction_date}}` | Date and time of transaction | "Monday, 9 December 2024 at 8:30 PM" |
| `{{standard}}` | Student's grade/standard | "Grade 8th - 10th" |
| `{{city}}` | Customer's city | "Mumbai" |
| `{{from_name}}` | Sender name | "Memory MASTERS" |

---

## 📝 Step-by-Step Setup Instructions

### 1. **Login to EmailJS Dashboard**
   - Go to: https://dashboard.emailjs.com/
   - Login with your credentials

### 2. **Navigate to Email Templates**
   - Click on "Email Templates" in the left sidebar
   - Find template: `template_g8sz0t6`
   - Click "Edit"

### 3. **Configure Template Settings**

   **To Email:**
   ```
   {{to_email}}
   ```

   **From Name:**
   ```
   Memory MASTERS
   ```

   **Subject:**
   ```
   Payment Receipt - Memory MASTERS Registration
   ```

   **Content:**
   - Paste the HTML template provided above

### 4. **Test the Template**
   - Click "Test it" button
   - Fill in sample values for all variables
   - Send a test email to verify formatting

### 5. **Save the Template**
   - Click "Save" button
   - Verify all variables are recognized (no red warnings)

---

## ⚠️ Common Issues & Solutions

### Issue 1: "EmailJS not sending emails"
**Solution:** 
- Verify all three credentials in `.env` file:
  - `VITE_EMAILJS_SERVICE_ID=service_j1it8n7`
  - `VITE_EMAILJS_TEMPLATE_ID=template_g8sz0t6`
  - `VITE_EMAILJS_PUBLIC_KEY=h7cnMVE1nufu98OC7`
- Restart your dev server after changing `.env`

### Issue 2: "Template variables not showing"
**Solution:**
- Make sure variable names match exactly (case-sensitive)
- Use double curly braces: `{{variable_name}}`
- No spaces inside braces: `{{name}}` ✓ `{{ name }}` ✗

### Issue 3: "Email goes to spam"
**Solution:**
- Add your domain to EmailJS verified senders
- Ask recipients to whitelist your email
- Use a professional "From Email" address

### Issue 4: "CORS or 403 errors"
**Solution:**
- Check EmailJS dashboard for allowed domains
- Add `localhost:3000` and your production domain
- Verify your EmailJS account is active

---

## 🧪 Testing the Integration

After setup, test with these steps:

1. **Start your dev server:**
   ```bash
   npm run dev
   ```

2. **Open the application in browser**

3. **Click "Register @ ₹1" button**

4. **Fill in the registration form with test data:**
   - First Name: Test
   - Last Name: User
   - Email: your-email@example.com (use your real email)
   - Mobile: 9876543210
   - Standard: Any option
   - City: Test City

5. **Complete the payment using Razorpay test mode:**
   - Use test card: `4111 1111 1111 1111`
   - Any future expiry date
   - Any CVV

6. **Check your email inbox** for the receipt

---

## 🔐 Security Notes

- ✅ **Public Key** (`h7cnMVE1nufu98OC7`) - Safe to use in frontend
- ✅ **Service ID** (`service_j1it8n7`) - Safe to expose
- ✅ **Template ID** (`template_g8sz0t6`) - Safe to expose
- ❌ **Never expose** your EmailJS account password

---

## 📞 Support

If you continue to face issues:

1. Check EmailJS dashboard logs: https://dashboard.emailjs.com/admin
2. Check browser console for detailed error messages
3. Verify your EmailJS account has remaining email quota
4. Contact EmailJS support: https://www.emailjs.com/docs/

---

## ✅ Checklist

- [ ] EmailJS template created with ID: `template_g8sz0t6`
- [ ] All variables added to template (11 variables)
- [ ] Template tested and working
- [ ] `.env` file configured with correct credentials
- [ ] Dev server restarted after `.env` changes
- [ ] Test payment completed successfully
- [ ] Receipt email received in inbox

---

**Last Updated:** December 9, 2024
