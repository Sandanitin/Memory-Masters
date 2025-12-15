# Local Development Guide

## Running the Application Locally

For local development, you need to run **2 servers**:

### Option 1: Run Both Together (Recommended)

**Terminal 1:**
```bash
npm run dev:api
```
This starts the API server on http://localhost:3001

**Terminal 2:**
```bash
npm run dev
```
This starts the frontend on http://localhost:5173

### Option 2: Use Vercel CLI (Advanced)

```bash
vercel dev
```
This runs everything together (frontend + serverless functions)

---

## Environment Variables

### Local Development (.env)
```env
VITE_BACKEND_URL=http://localhost:3001
```

### Production (Vercel Dashboard)
```env
# Don't set VITE_BACKEND_URL in Vercel
# API will use relative paths automatically
```

---

## How It Works

### Local Development
- Frontend: `http://localhost:5173`
- API: `http://localhost:3001/api/*`
- Uses `VITE_BACKEND_URL` from .env

### Production (Vercel)
- Frontend: `https://your-app.vercel.app`
- API: `https://your-app.vercel.app/api/*`
- No VITE_BACKEND_URL needed (same domain)

---

## Testing Email Sending

1. Start both servers (see above)
2. Open http://localhost:5173
3. Make a test payment
4. Check console for email logs
5. Verify email arrives in inbox

---

## Troubleshooting

### Error: "Failed to send email"
- ✅ Check if `npm run dev:api` is running
- ✅ Check .env has SMTP credentials
- ✅ Check VITE_BACKEND_URL=http://localhost:3001

### SMTP Authentication Failed
- ✅ Verify Gmail App Password is correct
- ✅ Check SMTP_USER and SMTP_PASS in .env

---

## Production Deployment

When deploying to Vercel:
1. Remove `VITE_BACKEND_URL` from Vercel env vars
2. Set all SMTP_* variables in Vercel dashboard
3. Deploy - serverless functions run automatically!
