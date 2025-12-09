# 🚨 URGENT FIX: EmailJS Template Configuration

## ❌ Current Error: "422 The recipients address is empty"

## ✅ Solution: Configure the "To Email" field in EmailJS

---

## 📍 **EXACT STEPS TO FIX** (2 minutes)

### **Step 1: Open EmailJS Template**

Click this link to open your template directly:

**👉 https://dashboard.emailjs.com/admin/templates/template_g8sz0t6**

(You may need to login first)

---

### **Step 2: Click "Settings" Tab**

At the top of the page, you'll see two tabs:
- **Settings** ← Click this one!
- Content

Make sure you're on the **Settings** tab, NOT the Content tab.

---

### **Step 3: Find "To Email" Field**

Look for a field labeled **"To Email"** or **"Recipient Email"**

This is the MOST IMPORTANT field!

---

### **Step 4: Set the Value**

In the "To Email" field, type EXACTLY:

```
{{reply_to}}
```

**IMPORTANT:**
- ✅ Use double curly braces: `{{reply_to}}`
- ✅ No spaces inside: `{{reply_to}}`
- ❌ NOT: `{{ reply_to }}` (spaces)
- ❌ NOT: `{reply_to}` (single braces)
- ❌ NOT: `{{to_email}}` (wrong variable name)

---

### **Step 5: Set Other Fields (Optional but Recommended)**

**From Name:**
```
Memory MASTERS
```

**Subject:**
```
Payment Receipt - Memory MASTERS Registration
```

---

### **Step 6: SAVE THE TEMPLATE**

**CRITICAL:** Click the **"Save"** button!

The template will NOT work unless you click Save.

Look for a button that says:
- "Save"
- "Save Template"
- "Update Template"

Click it and wait for confirmation.

---

### **Step 7: Test Again**

1. Go back to your app: http://localhost:3000
2. Complete a test payment
3. Check if email is sent successfully

---

## 🎯 **Visual Guide**

The Settings page should look like this:

```
┌─────────────────────────────────────────────────┐
│  Settings  │  Content  │  Test it               │
├─────────────────────────────────────────────────┤
│                                                  │
│  To Email: *                                     │
│  ┌────────────────────────────────────────┐    │
│  │ {{reply_to}}                           │    │ ← CRITICAL!
│  └────────────────────────────────────────┘    │
│                                                  │
│  From Name:                                      │
│  ┌────────────────────────────────────────┐    │
│  │ Memory MASTERS                         │    │
│  └────────────────────────────────────────┘    │
│                                                  │
│  Subject:                                        │
│  ┌────────────────────────────────────────┐    │
│  │ Payment Receipt - Memory MASTERS...    │    │
│  └────────────────────────────────────────┘    │
│                                                  │
│  [ Save Template ]                               │ ← Click this!
│                                                  │
└─────────────────────────────────────────────────┘
```

---

## ⚠️ **Common Mistakes**

### Mistake #1: Wrong Tab
- ❌ Being on "Content" tab
- ✅ Must be on "Settings" tab

### Mistake #2: Wrong Variable Name
- ❌ `{{to_email}}`
- ✅ `{{reply_to}}`

### Mistake #3: Forgot to Save
- ❌ Changing the field but not clicking Save
- ✅ Always click Save button

### Mistake #4: Spaces in Variable
- ❌ `{{ reply_to }}`
- ✅ `{{reply_to}}`

---

## 🔍 **How to Verify It's Configured Correctly**

After saving, you can test the template:

1. Click the **"Test it"** button in EmailJS
2. Fill in sample values for all variables
3. Send a test email to yourself
4. Check if you receive it

---

## 📱 **Quick Checklist**

- [ ] Opened https://dashboard.emailjs.com/admin/templates/template_g8sz0t6
- [ ] Clicked "Settings" tab
- [ ] Found "To Email" field
- [ ] Set it to: `{{reply_to}}`
- [ ] Set "From Name" to: `Memory MASTERS`
- [ ] Set "Subject" to: `Payment Receipt - Memory MASTERS Registration`
- [ ] Clicked "Save" button
- [ ] Saw confirmation message
- [ ] Tested payment in app
- [ ] Email sent successfully!

---

## 🆘 **Still Not Working?**

If you still get the error after following these steps:

1. **Double-check the "To Email" field**
   - Make sure it's exactly: `{{reply_to}}`
   - No typos, no extra spaces

2. **Make sure you clicked Save**
   - Look for a success message after saving

3. **Refresh your app**
   - Close and reopen http://localhost:3000
   - Try the payment again

4. **Check EmailJS logs**
   - Go to: https://dashboard.emailjs.com/admin/logs
   - Look for recent failed attempts
   - Check the error message

5. **Verify your EmailJS account**
   - Make sure your account is active
   - Check if you have email quota remaining

---

## 📞 **Direct Links**

- **Your Template Settings:** https://dashboard.emailjs.com/admin/templates/template_g8sz0t6
- **EmailJS Dashboard:** https://dashboard.emailjs.com/
- **Email Logs:** https://dashboard.emailjs.com/admin/logs

---

## ✅ **Success Indicators**

When it's working correctly, you'll see:

1. ✅ In browser console: "✅ Payment receipt email sent successfully"
2. ✅ Toast message: "Payment receipt sent to your email!"
3. ✅ Email arrives in inbox within 1-2 minutes
4. ✅ No error 422 in console

---

**The fix is simple: Just set "To Email" to `{{reply_to}}` and click Save!** 🎯

---

*Last Updated: December 9, 2024, 9:11 PM IST*
