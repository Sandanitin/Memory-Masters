# ✅ EmailJS Configuration Checklist

## 🎯 Your Mission: Fix the "Recipients address is empty" error

### ⏱️ Time Required: 2 minutes

---

## 📋 Step-by-Step Checklist

### ☐ Step 1: Open EmailJS Dashboard
- [ ] Click this link: https://dashboard.emailjs.com/admin/templates/template_g8sz0t6
- [ ] Login if needed

### ☐ Step 2: Go to Settings Tab
- [ ] Look at the top of the template editor
- [ ] Click the **"Settings"** tab (NOT "Content" tab)

### ☐ Step 3: Configure "To Email" Field
- [ ] Find the field labeled **"To Email"**
- [ ] Clear any existing value
- [ ] Type exactly: `{{reply_to}}`
- [ ] Make sure there are NO spaces: `{{reply_to}}` ✅ NOT `{{ reply_to }}` ❌

### ☐ Step 4: Set Other Fields (Optional but Recommended)

**From Name:**
- [ ] Set to: `Memory MASTERS`

**Subject:**
- [ ] Set to: `Payment Receipt - Memory MASTERS Registration`

### ☐ Step 5: Save Template
- [ ] Click the **"Save"** button (usually top-right)
- [ ] Wait for confirmation message

### ☐ Step 6: Test the Template (Optional)
- [ ] Click **"Test it"** button
- [ ] Fill in sample values
- [ ] Send test email
- [ ] Check if you receive it

### ☐ Step 7: Test Payment Flow
- [ ] Go back to your app: http://localhost:3000
- [ ] Click "Register @ ₹1"
- [ ] Fill in the form with YOUR real email
- [ ] Complete payment with test card: `4111 1111 1111 1111`
- [ ] Check your email inbox for receipt

---

## ⚠️ Critical Points

### The "To Email" field MUST be:
```
{{reply_to}}
```

### NOT any of these:
- ❌ `{{to_email}}`
- ❌ `{{ reply_to }}` (with spaces)
- ❌ `{reply_to}` (single braces)
- ❌ Empty/blank
- ❌ A hardcoded email address

---

## 🎯 What Each Field Does

| Field | Value | Purpose |
|-------|-------|---------|
| **To Email** | `{{reply_to}}` | **WHO receives the email** (the customer) |
| **From Name** | `Memory MASTERS` | Who the email appears to be from |
| **Subject** | `Payment Receipt...` | Email subject line |

---

## 🔍 Visual Guide

### Settings Tab Should Look Like:

```
┌─────────────────────────────────────────┐
│  Settings  │  Content  │  Test it       │  ← Click "Settings"
├─────────────────────────────────────────┤
│                                          │
│  To Email: [{{reply_to}}            ]   │  ← Set this!
│                                          │
│  From Name: [Memory MASTERS         ]   │
│                                          │
│  From Email: [your-email@domain.com ]   │
│                                          │
│  Subject: [Payment Receipt - Memory  ]   │
│           [MASTERS Registration     ]   │
│                                          │
│  [Save]                                  │  ← Click Save
│                                          │
└─────────────────────────────────────────┘
```

---

## ✅ Success Indicators

After configuration, you should see:

1. ✅ "Template saved successfully" message in EmailJS
2. ✅ Payment completes in your app
3. ✅ Console shows: "✅ Payment receipt email sent successfully"
4. ✅ Email arrives in your inbox within 1-2 minutes

---

## 🐛 If It Still Doesn't Work

### Check These:

1. **Did you click "Save"?**
   - The template won't update without saving

2. **Is it exactly `{{reply_to}}`?**
   - No spaces, double curly braces

3. **Are you on the Settings tab?**
   - Not the Content tab

4. **Did you refresh your app?**
   - Sometimes browser cache needs clearing

5. **Check browser console**
   - Look for any new error messages

---

## 📞 Quick Links

- **Your Template:** https://dashboard.emailjs.com/admin/templates/template_g8sz0t6
- **All Templates:** https://dashboard.emailjs.com/admin/templates
- **Email Logs:** https://dashboard.emailjs.com/admin/logs

---

## 🎉 After Success

Once emails are working:

- [ ] Test with your real email address
- [ ] Check spam folder if not in inbox
- [ ] Verify all customer details appear correctly
- [ ] Save a copy of the test email for reference

---

## 📝 Current Status

| Component | Status |
|-----------|--------|
| Code | ✅ Fixed (using `reply_to`) |
| Template | ⚠️ Needs configuration |
| Time Needed | ⏱️ 2 minutes |

---

**Ready? Let's do this!** 🚀

**Start here:** https://dashboard.emailjs.com/admin/templates/template_g8sz0t6

---

*Last Updated: December 9, 2024, 9:00 PM IST*
