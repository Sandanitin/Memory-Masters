# 🚨 CRITICAL FIX - EmailJS Configuration

## ⚡ Quick Fix for "Recipients address is empty" Error

### **The Problem**
EmailJS template's "To Email" field is not configured correctly.

### **The Solution** (2 minutes)

1. **Go to EmailJS Dashboard:**
   - https://dashboard.emailjs.com/admin/templates/template_g8sz0t6

2. **Click "Settings" tab** (at the top of the template editor)

3. **Find the "To Email" field** and set it to:
   ```
   {{reply_to}}
   ```

4. **Click "Save"**

5. **Test again** - the email should now send successfully!

---

## 📧 Complete Template Configuration

### **Settings Tab:**

| Field | Value |
|-------|-------|
| **To Email** | `{{reply_to}}` |
| **From Name** | `Memory MASTERS` |
| **From Email** | (use your verified email) |
| **Subject** | `Payment Receipt - Memory MASTERS Registration` |

### **Content Tab:**

Use this HTML template:

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background: #ffffff;
        }
        .header {
            background: linear-gradient(135deg, #9333ea 0%, #3b82f6 100%);
            color: white;
            padding: 30px 20px;
            text-align: center;
        }
        .header h1 {
            margin: 0 0 10px 0;
            font-size: 28px;
        }
        .content {
            padding: 30px 20px;
            background: #f9fafb;
        }
        .success-badge {
            background: #10b981;
            color: white;
            padding: 10px 20px;
            border-radius: 20px;
            display: inline-block;
            margin: 0 0 20px 0;
            font-weight: bold;
        }
        .detail-box {
            background: white;
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
        }
        .detail-row {
            display: flex;
            justify-content: space-between;
            padding: 10px 0;
            border-bottom: 1px solid #f3f4f6;
        }
        .detail-row:last-child {
            border-bottom: none;
        }
        .label {
            font-weight: bold;
            color: #6b7280;
        }
        .value {
            color: #111827;
            text-align: right;
        }
        .info-box {
            background: #dbeafe;
            padding: 15px;
            border-radius: 8px;
            margin: 20px 0;
            border-left: 4px solid #3b82f6;
        }
        .info-box h3 {
            margin: 0 0 10px 0;
            color: #1e40af;
        }
        .info-box ul {
            margin: 0;
            padding-left: 20px;
        }
        .footer {
            background: #111827;
            color: white;
            padding: 20px;
            text-align: center;
            font-size: 14px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🎉 Payment Successful!</h1>
            <p style="margin: 0;">Thank you for registering with Memory MASTERS</p>
        </div>
        
        <div class="content">
            <div class="success-badge">
                ✓ Payment Confirmed
            </div>
            
            <h2 style="color: #111827; margin-top: 0;">Dear {{to_name}},</h2>
            
            <p>Your payment has been successfully processed. Here are your transaction details:</p>
            
            <div class="detail-box">
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
            
            <div class="info-box">
                <h3>📚 What's Next?</h3>
                <ul>
                    <li>You will receive workshop details via email within 24 hours</li>
                    <li>Check your spam folder if you don't see our email</li>
                    <li>Save this email for your records</li>
                </ul>
            </div>
            
            <p>If you have any questions, feel free to contact us.</p>
            
            <p style="margin-top: 30px;">
                Best regards,<br>
                <strong>{{from_name}} Team</strong>
            </p>
        </div>
        
        <div class="footer">
            <p style="margin: 0 0 10px 0;">This is an automated receipt. Please do not reply to this email.</p>
            <p style="margin: 0;">&copy; 2024 Memory MASTERS. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
```

---

## ✅ Template Variables Used

| Variable | Description | Example |
|----------|-------------|---------|
| `{{reply_to}}` | **Recipient email (CRITICAL)** | customer@email.com |
| `{{to_name}}` | Customer's name | John Doe |
| `{{customer_name}}` | Customer's full name | John Doe |
| `{{customer_email}}` | Customer's email | john@example.com |
| `{{customer_mobile}}` | Phone number | 9876543210 |
| `{{payment_id}}` | Razorpay payment ID | pay_xxxxx |
| `{{amount}}` | Payment amount | 1 |
| `{{transaction_date}}` | Transaction date/time | Monday, 9 Dec 2024... |
| `{{standard}}` | Student's grade | Grade 8th - 10th |
| `{{city}}` | Customer's city | Mumbai |
| `{{from_name}}` | Sender name | Memory MASTERS |

---

## 🎯 Step-by-Step Instructions

### 1. Login to EmailJS
- Go to: https://dashboard.emailjs.com/
- Login with your credentials

### 2. Open Your Template
- Click "Email Templates" in sidebar
- Find template: `template_g8sz0t6`
- Click to edit

### 3. Configure Settings Tab

**CRITICAL:** Click the "Settings" tab at the top

Set these fields:

**To Email:**
```
{{reply_to}}
```

**From Name:**
```
Memory MASTERS
```

**Subject:**
```
Payment Receipt - Memory MASTERS Registration
```

### 4. Configure Content Tab

Click the "Content" tab and paste the HTML template above.

### 5. Save Template

Click the "Save" button (usually at the top right)

### 6. Test It

Click "Test it" button and fill in sample values to verify it works.

---

## 🧪 Testing

After configuration:

1. **Refresh your browser** on localhost:3000
2. **Complete a test payment**
3. **Check your email inbox**
4. **Verify the receipt looks good**

---

## ⚠️ Common Mistakes

### ❌ Wrong:
```
To Email: {{to_email}}  ← This doesn't work!
```

### ✅ Correct:
```
To Email: {{reply_to}}  ← This works!
```

---

## 🔧 If It Still Doesn't Work

1. **Check browser console** for exact error
2. **Verify all credentials** in `.env` file
3. **Make sure you saved** the template
4. **Refresh the page** after saving
5. **Check EmailJS dashboard** for any error logs

---

## 📞 EmailJS Dashboard Links

- **Templates:** https://dashboard.emailjs.com/admin/templates
- **Your Template:** https://dashboard.emailjs.com/admin/templates/template_g8sz0t6
- **Email Logs:** https://dashboard.emailjs.com/admin/logs

---

**This should fix the "Recipients address is empty" error!** 🎉

---

*Last Updated: December 9, 2024, 8:43 PM IST*
