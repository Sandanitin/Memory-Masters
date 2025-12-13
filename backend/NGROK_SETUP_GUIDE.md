# 🚀 Complete Step-by-Step Solution to Fix Emails

## The Problem
Your backend runs on `localhost:3001` - Razorpay CANNOT reach it from the internet, so webhooks fail and emails don't send.

## The Solution
Use **ngrok** to create a tunnel from internet → your localhost

---

## 📋 Step-by-Step Instructions

### **Step 1: Download ngrok**

1. Go to: https://ngrok.com/download
2. Click **"Download for Windows"**
3. Extract the ZIP file
4. You'll get `ngrok.exe`

### **Step 2: Run ngrok**

1. Open **Command Prompt** or **PowerShell**
2. Navigate to where `ngrok.exe` is:
   ```bash
   cd C:\path\to\where\you\extracted\ngrok
   ```

3. Run this command:
   ```bash
   ngrok http 3001
   ```

### **Step 3: Copy the HTTPS URL**

You'll see output like this:
```
Session Status                online
Account                       Your Name (Plan: Free)
Version                       3.x.x
Region                        United States (us)
Latency                       -
Web Interface                 http://127.0.0.1:4040
Forwarding                    https://abc-123-xyz.ngrok-free.app -> http://localhost:3001
Forwarding                    http://abc-123-xyz.ngrok-free.app -> http://localhost:3001

Connections                   ttl     opn     rt1     rt5     p50     p90
                              0       0       0.00    0.00    0.00    0.00
```

**COPY THIS URL**: `https://abc-123-xyz.ngrok-free.app` (yours will be different)

⚠️ **Keep this terminal window OPEN** - ngrok must stay running!

### **Step 4: Configure Razorpay Webhook**

1. Go to: https://dashboard.razorpay.com/app/webhooks
2. Click **"Create New Webhook"** or **"Add New Webhook"**
3. Fill in:
   - **Webhook URL**: `https://your-ngrok-url.ngrok-free.app/api/webhook/razorpay`
     - Example: `https://abc-123-xyz.ngrok-free.app/api/webhook/razorpay`
   - **Alert Email**: `sainithin95054@gmail.com`
   - **Active Events**: 
     - Scroll down to "payment Events"
     - ✅ Check **ONLY** `payment.captured`
     - ❌ Leave all others unchecked
4. Click **"Create Webhook"** or **"Save"**

### **Step 5: Copy the Webhook Secret**

After creating the webhook, Razorpay will show you a **Secret**.

It looks like: `whsec_aBcDeFgHiJkLmNoPqRsTuVwXyZ`

**COPY IT!**

### **Step 6: Update Backend .env**

1. Open: `backend/.env`
2. Find line 12:
   ```bash
   RAZORPAY_WEBHOOK_SECRET=your_webhook_secret_here
   ```
3. Replace with the secret you copied:
   ```bash
   RAZORPAY_WEBHOOK_SECRET=whsec_aBcDeFgHiJkLmNoPqRsTuVwXyZ
   ```
4. **Save the file**

### **Step 7: Restart Backend**

1. Go to the terminal running your backend
2. Press **Ctrl+C** to stop it
3. Run again:
   ```bash
   npm run dev
   ```

### **Step 8: Test with a Payment**

1. Go to your frontend: `http://localhost:3000`
2. Click **"Register Now"**
3. Fill in the form with YOUR EMAIL
4. Use Razorpay test card:
   - **Card**: `4111 1111 1111 1111`
   - **Expiry**: Any future date (e.g., `12/25`)
   - **CVV**: Any 3 digits (e.g., `123`)
   - **Name**: Any name
5. Complete payment

### **Step 9: Check Results**

**In Backend Terminal** (you should see):
```
📥 Received Razorpay webhook
✅ Webhook signature verified
💰 Payment captured
🔄 Attempting Zoom registration...
✅ Zoom registration successful
🔄 Attempting to send confirmation email...
✅ Email sent successfully
```

**In Your Email Inbox**:
- Check inbox (might take 10-30 seconds)
- Check spam folder if not in inbox
- Look for: **"✅ Payment Confirmed - Memory MASTERS Training"**

---

## ✅ Success Checklist

- [ ] ngrok downloaded and extracted
- [ ] `ngrok http 3001` running (terminal open)
- [ ] ngrok HTTPS URL copied
- [ ] Razorpay webhook created with ngrok URL
- [ ] `payment.captured` event selected
- [ ] Webhook secret copied from Razorpay
- [ ] `backend/.env` updated with secret
- [ ] Backend restarted (`npm run dev`)
- [ ] Test payment completed
- [ ] Email received in inbox!

---

## 🔧 Troubleshooting

### Problem: "ERR_NGROK_3200" or similar
**Solution**: You might need to sign up for a free ngrok account
1. Go to: https://dashboard.ngrok.com/signup
2. Sign up (free)
3. Get your auth token from: https://dashboard.ngrok.com/get-started/your-authtoken
4. Run: `ngrok config add-authtoken YOUR_TOKEN`
5. Try `ngrok http 3001` again

### Problem: Webhook signature verification failed
**Solution**: 
- Make sure you copied the EXACT secret from Razorpay
- No extra spaces in `.env`
- Restart backend after changing `.env`

### Problem: Email not received
**Solution**:
- Check spam folder
- Check backend logs for errors
- Verify `SMTP_PASS` in `.env` is correct
- Try sending test email manually

### Problem: ngrok URL changes every time
**Solution**: 
- Free ngrok URLs change on restart
- You'll need to update Razorpay webhook URL each time
- OR upgrade to ngrok paid plan for static URLs
- OR deploy backend to production

---

## 🎯 After Testing Successfully

Once everything works:

**Option 1: Use ngrok for each session**
- Run `ngrok http 3001` every time you work
- Update Razorpay webhook URL when it changes

**Option 2: Deploy to Production** (Recommended)
- Deploy backend to Railway/Render/Fly.io
- Get permanent URL (e.g., `https://memory-masters.railway.app`)
- Update Razorpay webhook once
- Never need ngrok again!

---

## 📞 Need Help?

If stuck at any step, check:
1. Backend terminal for error messages
2. Razorpay dashboard → Webhooks → Logs
3. ngrok web interface: http://localhost:4040 (shows all webhook requests)

**You're almost there!** 🚀
