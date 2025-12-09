# EmailJS Troubleshooting Guide

## Issue: "Payment successful, but failed to send email receipt"

### ✅ Steps to Fix

#### 1. **Restart Development Server**
The `.env` file changes require a server restart to take effect.

**Action Required:**
- Stop the current dev server (Ctrl+C in terminal)
- Run `npm run dev` again

---

#### 2. **Verify EmailJS Dashboard Setup**

Go to: https://dashboard.emailjs.com/

##### A. Check Email Service
1. Go to **Email Services** tab
2. Verify service ID: `service_j1it8n7`
3. Make sure the service is **connected** and **active**

##### B. Check Email Template
1. Go to **Email Templates** tab
2. Find template ID: `template_g8sz0t6`
3. Click **Edit Template**

##### C. Configure Template Variables
Make sure your template includes these variables:

```
{{to_email}}          - Recipient email address
{{customer_name}}     - Customer's name
{{customer_email}}    - Customer's email
{{customer_mobile}}   - Customer's mobile
{{payment_id}}        - Payment ID
{{amount}}            - Amount paid
{{transaction_date}}  - Transaction date
{{standard}}          - Student's grade
{{city}}              - Customer's city
```

##### D. Set Email Recipient
In your EmailJS template settings:
- **To Email**: Use `{{to_email}}` variable
- This ensures the email goes to the customer

---

#### 3. **Test EmailJS Template**

In the EmailJS dashboard:
1. Click on your template `template_g8sz0t6`
2. Click **"Test it"** button
3. Fill in test values for all variables
4. Send a test email
5. Check if you receive it

---

#### 4. **Check Browser Console**

After restarting the server and trying a payment:
1. Open browser DevTools (F12)
2. Go to **Console** tab
3. Look for these messages:

**Success:**
```
Sending email with EmailJS...
Service ID: service_j1it8n7
Template ID: template_g8sz0t6
Template parameters: {...}
✅ Payment receipt email sent successfully
```

**Error:**
```
❌ Error sending payment receipt email
Error details: {...}
```

Share the error details if you see them.

---

#### 5. **Common Issues & Solutions**

| Issue | Solution |
|-------|----------|
| Template not found | Create template with ID `template_g8sz0t6` in EmailJS dashboard |
| Service not connected | Connect your email service (Gmail, Outlook, etc.) in EmailJS |
| Invalid public key | Double-check the public key in EmailJS dashboard matches `.env` |
| Email not received | Check spam folder, verify email service is active |
| CORS error | Make sure EmailJS service is properly initialized |

---

#### 6. **Verify Environment Variables**

Check that your `.env` file has:
```
VITE_EMAILJS_PUBLIC_KEY=h7cnMVE1nufu98OC7
VITE_EMAILJS_SERVICE_ID=service_j1it8n7
VITE_EMAILJS_TEMPLATE_ID=template_g8sz0t6
```

---

#### 7. **EmailJS Dashboard Links**

- **Dashboard**: https://dashboard.emailjs.com/admin
- **Email Services**: https://dashboard.emailjs.com/admin/services
- **Email Templates**: https://dashboard.emailjs.com/admin/templates
- **Account**: https://dashboard.emailjs.com/admin/account

---

## 🔍 Debug Checklist

- [ ] Restarted development server
- [ ] EmailJS service is connected and active
- [ ] Template `template_g8sz0t6` exists
- [ ] Template has all required variables
- [ ] Template "To Email" is set to `{{to_email}}`
- [ ] Test email sent successfully from dashboard
- [ ] Browser console shows detailed logs
- [ ] No CORS errors in console

---

## 📧 Next Steps

1. **Restart your dev server** (most important!)
2. **Test the template** in EmailJS dashboard
3. **Try a test payment** (₹1)
4. **Check browser console** for detailed error logs
5. **Share the console error** if it still fails

---

## 💡 Quick Fix

If emails still don't work, the template might not be set up. Here's what to do:

1. Go to EmailJS dashboard
2. Create a new template or edit `template_g8sz0t6`
3. Copy the HTML template I provided earlier
4. Make sure "To Email" field is set to: `{{to_email}}`
5. Save and test

The template HTML is in the previous messages - scroll up to find it!
