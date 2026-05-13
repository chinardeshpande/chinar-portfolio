#!/usr/bin/env node
// Google Analytics & Search Console OAuth Setup
// This script helps you authenticate with your Google account

const readline = require('readline');
const { google } = require('googleapis');

console.log('\n🔐 Google Analytics & Search Console Authentication Setup\n');
console.log('This will authorize your Google account to access analytics data.\n');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function question(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, resolve);
  });
}

async function setup() {
  console.log('Step 1: Get OAuth Credentials from Google Cloud\n');
  console.log('1. Go to: https://console.cloud.google.com/apis/credentials');
  console.log('2. Click "Create Credentials" > "OAuth client ID"');
  console.log('3. If needed, configure OAuth consent screen (choose External, add your email)');
  console.log('4. Application type: "Desktop app"');
  console.log('5. Name it: "Analytics CLI"');
  console.log('6. Click Create and download the JSON\n');

  const clientId = await question('Enter your Client ID: ');
  const clientSecret = await question('Enter your Client Secret: ');

  console.log('\n📋 Configuring OAuth client...\n');

  const oauth2Client = new google.auth.OAuth2(
    clientId,
    clientSecret,
    'urn:ietf:wg:oauth:2.0:oob'
  );

  const scopes = [
    'https://www.googleapis.com/auth/analytics.readonly',
    'https://www.googleapis.com/auth/webmasters.readonly',
  ];

  const authorizeUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: scopes,
    prompt: 'consent'
  });

  console.log('\n✅ Step 2: Authorize Access\n');
  console.log('Visit this URL in your browser:\n');
  console.log(authorizeUrl);
  console.log('\n');

  const code = await question('After authorizing, paste the code here: ');

  try {
    const { tokens } = await oauth2Client.getToken(code);

    console.log('\n\n🎉 SUCCESS! Add these to your Netlify environment variables:\n');
    console.log('─'.repeat(60));
    console.log('\nGOOGLE_CLIENT_ID=' + clientId);
    console.log('GOOGLE_CLIENT_SECRET=' + clientSecret);
    console.log('GOOGLE_REFRESH_TOKEN=' + tokens.refresh_token);
    console.log('\n' + '─'.repeat(60));
    console.log('\n✅ Copy these three variables to Netlify Dashboard → Site Settings → Environment Variables\n');
    console.log('⚠️  Remove GOOGLE_APPLICATION_CREDENTIALS_JSON if you had it\n');

  } catch (error) {
    console.error('\n❌ Error getting token:', error.message);
    console.log('\nTry again and make sure you:');
    console.log('1. Copied the ENTIRE authorization code');
    console.log('2. Used the code immediately (they expire quickly)');
  }

  rl.close();
}

setup().catch((err) => {
  console.error('Error:', err.message);
  rl.close();
});
