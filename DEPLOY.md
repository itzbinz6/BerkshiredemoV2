# Berkshire Hathaway — Deployment Guide

## Step 1: Install Firebase in your project

In your terminal, inside the berkshire-hathaway folder:

```bash
npm install firebase
```

---

## Step 2: Create a Firebase project

1. Go to https://console.firebase.google.com
2. Click "Add project" → name it "berkshire-hathaway"
3. Disable Google Analytics (not needed) → Create project
4. Once created, click the "</>" icon to add a Web App
5. Register app with nickname "berkshire-web"
6. Copy the firebaseConfig object shown — you'll need these values next

---

## Step 3: Set up your environment variables

1. In your project root, copy .env.example to .env.local:
   ```bash
   cp .env.example .env.local
   ```

2. Open .env.local and paste in your Firebase values:
   ```
   NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSy...
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=berkshire-hathaway.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=berkshire-hathaway
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=berkshire-hathaway.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
   NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abc123
   ```

3. Restart your dev server:
   ```bash
   # Press Ctrl+C to stop, then:
   npm run dev
   ```

---

## Step 4: Enable Firestore

1. In Firebase Console → left sidebar → "Firestore Database"
2. Click "Create database"
3. Choose "Start in test mode" (allows all reads/writes for 30 days — fine for now)
4. Pick a region: nam5 (US Central) → Enable

---

## Step 5: Enable Firebase Storage (for PDFs)

1. Firebase Console → left sidebar → "Storage"
2. Click "Get started" → "Start in test mode" → Done
3. Upload your 5 annual meeting PDFs:
   - Click "Upload file"
   - Upload each PDF from your computer
   - After uploading, click each file → copy its download URL
   - Paste these URLs into app/components/AnnualMeeting.js replacing the /pdfs/ paths

---

## Step 6: Push to GitHub

```bash
# Inside your berkshire-hathaway folder:
git init
git add .
git commit -m "Initial commit — full Berkshire Hathaway redesign"

# Create a repo on github.com first, then:
git remote add origin https://github.com/YOUR_USERNAME/berkshire-hathaway.git
git branch -M main
git push -u origin main
```

---

## Step 7: Deploy to Vercel

1. Go to https://vercel.com and sign in with GitHub
2. Click "Add New Project"
3. Import your berkshire-hathaway repository
4. Before clicking Deploy, click "Environment Variables"
5. Add EACH variable from your .env.local one by one:
   - NEXT_PUBLIC_FIREBASE_API_KEY → your value
   - NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN → your value
   - NEXT_PUBLIC_FIREBASE_PROJECT_ID → your value
   - NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET → your value
   - NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID → your value
   - NEXT_PUBLIC_FIREBASE_APP_ID → your value
6. Click Deploy

Vercel builds and deploys automatically. Takes about 60–90 seconds.
You get a live URL like: https://berkshire-hathaway-enoch.vercel.app

---

## Step 8: Every future update

```bash
git add .
git commit -m "describe what you changed"
git push
```

Vercel detects the push and auto-deploys. No manual steps needed.

---

## Troubleshooting

**"Module not found" error**
→ You're missing an import or the file path is wrong. Check the exact filename matches.

**Blank page / nothing shows**
→ Open browser DevTools (F12) → Console tab. The error message will tell you exactly what's wrong.

**Firebase not connecting**
→ Check .env.local values are correct. Make sure you restarted npm run dev after adding them.

**PDF modal not opening**
→ Make sure PdfModalProvider wraps your layout in app/layout.js and the component uses 'use client'.

**Vercel build fails**
→ Check the build log in Vercel dashboard. Usually a missing package — run npm install [package-name] and push again.
