# OAuth Setup Checklist

## Step 1: OAuth Consent Screen ✓ or ✗
- [ ] Created OAuth consent screen
- [ ] App name: "Analytics Dashboard"
- [ ] User type: External
- [ ] Added chinardeshpande@gmail.com as test user

## Step 2: OAuth Client Credentials ✓ or ✗
- [ ] Created OAuth client ID (Desktop app)
- [ ] Have Client ID
- [ ] Have Client Secret

## Step 3: Run Setup Script ✓ or ✗
- [ ] Ran: node setup-analytics-auth.js
- [ ] Entered Client ID and Secret
- [ ] Visited authorization URL
- [ ] Successfully authorized (no "Access blocked" error)
- [ ] Got refresh token

## Step 4: Environment Variables ✓ or ✗
- [ ] GOOGLE_CLIENT_ID added to Netlify
- [ ] GOOGLE_CLIENT_SECRET added to Netlify
- [ ] GOOGLE_REFRESH_TOKEN added to Netlify
- [ ] GA4_PROPERTY_ID added to Netlify
- [ ] SEARCH_CONSOLE_SITE_URL added to Netlify

## How to Check Test User Status:
1. Go to: https://console.cloud.google.com/apis/credentials/consent?project=chinar-portfolio
2. Under "Test users" section, you should see: chinardeshpande@gmail.com
3. If not there, click "EDIT APP" → Navigate to "Test users" → Click "+ ADD USERS" → Add your email

