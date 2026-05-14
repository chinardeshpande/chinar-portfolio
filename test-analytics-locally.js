// Quick test to see if OAuth credentials work
const { google } = require('googleapis');

async function testOAuth() {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const refreshToken = process.env.GOOGLE_REFRESH_TOKEN;
  const propertyId = process.env.GA4_PROPERTY_ID;

  console.log('Testing OAuth credentials...\n');
  console.log('Client ID:', clientId ? '✓ Set' : '✗ Missing');
  console.log('Client Secret:', clientSecret ? '✓ Set' : '✗ Missing');
  console.log('Refresh Token:', refreshToken ? '✓ Set' : '✗ Missing');
  console.log('Property ID:', propertyId ? '✓ Set' : '✗ Missing');
  console.log('\n');

  if (!clientId || !clientSecret || !refreshToken) {
    console.log('❌ Missing OAuth credentials in .env.local');
    return;
  }

  try {
    const oauth2Client = new google.auth.OAuth2(clientId, clientSecret);
    oauth2Client.setCredentials({ refresh_token: refreshToken });

    console.log('Attempting to refresh access token...');
    const { credentials } = await oauth2Client.refreshAccessToken();
    console.log('✅ OAuth token refresh successful!');
    console.log('Access token obtained:', credentials.access_token ? 'Yes' : 'No');
  } catch (error) {
    console.log('❌ OAuth error:', error.message);
  }
}

testOAuth();
