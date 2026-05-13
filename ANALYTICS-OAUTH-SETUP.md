# Analytics OAuth Setup (Alternative to Service Account)

If you can't add the service account to GA4, use OAuth authentication instead.

## Why This Approach?

Google Analytics 4 doesn't allow direct service account user additions like Universal Analytics did. OAuth lets you authenticate with your personal Google account that already has GA4 access.

## Setup Steps

### Step 1: Create OAuth Credentials

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Select your project
3. Go to **APIs & Services > Credentials**
4. Click **Create Credentials > OAuth 2.0 Client ID**
5. If prompted, configure OAuth consent screen:
   - User Type: **Internal** (if using Google Workspace) or **External**
   - App name: `Analytics Dashboard`
   - User support email: Your email
   - Developer contact: Your email
   - Click **Save and Continue**
   - Scopes: Skip this, click **Save and Continue**
   - Test users: Add your email
   - Click **Save and Continue**
6. Back to creating OAuth Client ID:
   - Application type: **Web application**
   - Name: `Analytics Admin Panel`
   - Authorized redirect URIs: `https://www.chinardeshpande.tech/api/auth/google/callback`
   - Click **Create**
7. Download the JSON credentials file

### Step 2: Update Environment Variables

Instead of `GOOGLE_APPLICATION_CREDENTIALS_JSON`, add these to Netlify:

```bash
# Remove this (if you had it):
# GOOGLE_APPLICATION_CREDENTIALS_JSON=...

# Add these instead:
GOOGLE_CLIENT_ID=your-client-id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your-client-secret
GOOGLE_REFRESH_TOKEN=will-get-this-in-step-3
```

### Step 3: Get Refresh Token

Run this Node.js script locally to get your refresh token:

**File: `get-refresh-token.js`**
```javascript
const readline = require('readline');
const { google } = require('googleapis');

const oauth2Client = new google.auth.OAuth2(
  'YOUR_CLIENT_ID',
  'YOUR_CLIENT_SECRET',
  'http://localhost:3000/oauth2callback'
);

const scopes = [
  'https://www.googleapis.com/auth/analytics.readonly',
  'https://www.googleapis.com/auth/webmasters.readonly'
];

const authorizeUrl = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: scopes,
});

console.log('Visit this URL to authorize:', authorizeUrl);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter the code from that page here: ', async (code) => {
  rl.close();
  try {
    const { tokens } = await oauth2Client.getToken(code);
    console.log('\n✅ Success! Add this to your environment variables:');
    console.log('GOOGLE_REFRESH_TOKEN=' + tokens.refresh_token);
  } catch (error) {
    console.error('Error getting tokens:', error);
  }
});
```

Run it:
```bash
npm install googleapis
node get-refresh-token.js
```

Follow the URL, authorize, and copy the refresh token.

### Step 4: Update API Routes

We need to modify the API routes to use OAuth instead of service account.

This approach is more complex - **I recommend trying Solution 1 (Link Google Cloud Project) first**.

---

## Troubleshooting OAuth

**Error: redirect_uri_mismatch**
- Make sure the redirect URI exactly matches in:
  - Google Cloud Console OAuth settings
  - The script/application
  - Use `http://localhost:3000/oauth2callback` for the script

**Error: access_denied**
- Make sure you're logged in with the Google account that has GA4 access
- Check OAuth consent screen configuration

**No refresh_token returned**
- Delete the app from your Google account permissions
- Try again with `access_type: 'offline'` and `prompt: 'consent'`

---

## Recommendation

**Try Solution 1 first** (Link Google Cloud Project) - it's much simpler and designed for this exact use case.

Only use OAuth if:
- You can't link the Google Cloud Project
- You're not the GA4 property owner
- You need user-level permissions

