# Analytics API Setup Guide

This guide will help you configure Google Analytics 4 (GA4) and Google Search Console APIs for your admin analytics dashboard.

## Prerequisites
- Google Cloud Platform account
- Google Analytics 4 property set up on your website
- Google Search Console property verified for your domain

## Step 1: Create Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Note your Project ID

## Step 2: Enable Required APIs

1. In Google Cloud Console, go to **APIs & Services > Library**
2. Search and enable:
   - **Google Analytics Data API**
   - **Google Search Console API**

## Step 3: Create Service Account

1. Go to **APIs & Services > Credentials**
2. Click **Create Credentials > Service Account**
3. Fill in:
   - Service account name: `analytics-admin-panel`
   - Service account ID: auto-generated
   - Click **Create and Continue**
4. Grant role: **Viewer** (or Project > Viewer)
5. Click **Done**

## Step 4: Generate Service Account Key

1. In **Credentials**, click on your service account email
2. Go to **Keys** tab
3. Click **Add Key > Create new key**
4. Choose **JSON** format
5. Download the JSON file
6. **Keep this file secure** - it contains sensitive credentials

## Step 5: Grant Analytics Access

1. Go to [Google Analytics](https://analytics.google.com/)
2. Select your GA4 property
3. Go to **Admin** (gear icon bottom left)
4. Under **Property**, click **Property Access Management**
5. Click **Add users** (+ icon)
6. Add your service account email (from the JSON file: `client_email`)
7. Set role to **Viewer**
8. Uncheck "Notify new users by email"
9. Click **Add**

## Step 6: Grant Search Console Access

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Select your property
3. Go to **Settings** (left sidebar)
4. Click **Users and permissions**
5. Click **Add user**
6. Add your service account email (same as GA4)
7. Set permission to **Full** or **Restricted**
8. Click **Add**

## Step 7: Get Your Property IDs

### GA4 Property ID
1. In Google Analytics, go to **Admin**
2. Under **Property**, click **Property Settings**
3. Copy the **Property ID** (format: `123456789`)

### Search Console Site URL
1. In Search Console, your property URL is shown at the top
2. Format should be: `https://www.yoursite.com/` or `sc-domain:yoursite.com`

## Step 8: Add Environment Variables

Add these to your Netlify environment variables:

```bash
# GA4 Configuration
GA4_PROPERTY_ID=123456789

# Search Console Configuration
SEARCH_CONSOLE_SITE_URL=https://www.chinardeshpande.tech/

# Google Service Account Credentials (entire JSON file as single line)
GOOGLE_APPLICATION_CREDENTIALS_JSON={"type":"service_account","project_id":"your-project",...}
```

### How to format the JSON credentials:

1. Open the downloaded JSON file
2. Copy the **entire contents**
3. Minify it to a single line (remove all line breaks)
4. Paste as the value for `GOOGLE_APPLICATION_CREDENTIALS_JSON`

**Example:**
```json
{"type":"service_account","project_id":"your-project-123","private_key_id":"abc123","private_key":"-----BEGIN PRIVATE KEY-----\nMIIE...","client_email":"analytics-admin@your-project.iam.gserviceaccount.com","client_id":"123456789","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_x509_cert_url":"https://www.googleapis.com/robot/v1/metadata/x509/analytics-admin%40your-project.iam.gserviceaccount.com"}
```

## Step 9: Deploy and Test

1. Add the environment variables to Netlify
2. Trigger a new deployment
3. Go to `/admin/analytics` in your admin panel
4. You should see data flowing from both GA4 and Search Console

## Troubleshooting

### "Analytics not configured" message
- Check that all environment variables are set correctly
- Verify the JSON is properly formatted (no extra spaces or line breaks)
- Make sure variable names match exactly

### "Failed to fetch analytics data"
- Check that APIs are enabled in Google Cloud
- Verify service account has access to Analytics and Search Console
- Check service account email matches in both platforms
- Review Netlify function logs for detailed error messages

### No data showing
- Verify your GA4 property ID is correct
- Make sure your Search Console site URL matches exactly
- Check that data exists for the selected date range
- Service account permissions may take a few minutes to propagate

### Permission errors
- Ensure service account has Viewer role in GA4
- Ensure service account is added as a user in Search Console
- Check that the correct property/site is selected

## Security Notes

- Never commit the service account JSON file to your repository
- Store credentials only in environment variables
- Use separate service accounts for different projects
- Regularly rotate service account keys
- Monitor service account usage in Google Cloud Console

## Next Steps

Once configured, your analytics dashboard will display:

**GA4 Metrics:**
- Total users, sessions, page views
- Average session duration
- Bounce rate
- Top pages and traffic sources
- Device breakdown

**Search Console Metrics:**
- Total clicks and impressions
- Click-through rate (CTR)
- Average search position
- Top search queries
- Top pages in search results
- Geographic distribution

All data updates automatically and can be filtered by date range (7, 30, or 90 days).
