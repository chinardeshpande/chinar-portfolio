# Admin Panel Quick Start Guide

Get started with your portfolio admin panel in 5 minutes.

## 🚀 Quick Access

**Admin Login:** `https://www.chinardeshpande.tech/admin/login`

## 📋 First-Time Setup Checklist

### ✅ Step 1: Log In
1. Navigate to `/admin/login`
2. Enter your credentials
3. You'll be redirected to the Dashboard

### ✅ Step 2: Explore the Dashboard
The dashboard shows:
- **Total Enquiries** - All contact form submissions
- **New** - Unread enquiries
- **In Progress** - Currently being handled
- **This Week** - Recent activity

**Quick Actions:**
- **Inbox** - Manage enquiries
- **Analytics** - View traffic & SEO data
- **Templates** - Email response templates
- **View Site** - Open public portfolio

### ✅ Step 3: Check Your Inbox
1. Click **Inbox** from Dashboard
2. You'll see all enquiries from your contact form
3. Click any enquiry to view full details
4. Try changing the status: New → In Progress → Closed

### ✅ Step 4: Send a Test Reply
1. Open any enquiry from Inbox
2. Click **Reply to Enquiry**
3. Select a template (e.g., "General Enquiry Response")
4. Notice how {{name}} is automatically replaced
5. Customize the message
6. Click **Send Reply**

### ✅ Step 5: Configure Analytics (Optional)
To see live traffic data:
1. Go to **Analytics** from Dashboard
2. Follow the setup guide link in the yellow banner
3. Complete [ANALYTICS-API-SETUP.md](./ANALYTICS-API-SETUP.md)
4. Once configured, you'll see:
   - Google Analytics metrics
   - Search Console performance
   - Interactive charts

**Skip this step if you just want lead management without analytics.**

### ✅ Step 6: Change Your Password (Recommended)
1. Go to **Settings** from navigation
2. Enter current password
3. Set a new strong password (min 8 characters)
4. Confirm and save

## 🎯 Common Tasks

### Respond to an Enquiry
```
Dashboard → Inbox → Click enquiry → Reply to Enquiry → Select template → Send
```

### Check New Contacts
```
Dashboard → Inbox → Filter: New
```

### View Analytics
```
Dashboard → Analytics → Select date range → Review metrics
```

### Update Enquiry Status
```
Inbox → Click enquiry → Use status dropdown → Auto-saves
```

## 📊 Understanding the Data

### Enquiry Information
Each contact includes:
- **Name & Email** - Contact details
- **Organization** - Company/institution (if provided)
- **Inquiry Type** - Board, Speaking, Advisory, Media, Other
- **Message** - Their enquiry
- **Source** - Which page they came from
- **UTM Parameters** - Marketing attribution
- **Date** - When received

### Analytics Metrics

**Google Analytics:**
- **Users** - Unique visitors
- **Sessions** - Total visits
- **Page Views** - Total pages viewed
- **Bounce Rate** - % who leave immediately
- **Avg Session** - Time on site

**Search Console:**
- **Clicks** - People who clicked from Google
- **Impressions** - Times your site appeared in search
- **CTR** - Click-through rate (clicks/impressions)
- **Position** - Average ranking in search results

## 💡 Pro Tips

### Inbox Management
- **Reply within 48 hours** for best impression
- **Use templates** to maintain consistent tone
- **Update status** to track progress
- **Filter by status** to stay organized

### Email Templates
- Templates support **{{name}}** and **{{organization}}** placeholders
- These are automatically replaced when you send
- Personalize the rest of the message for each contact

### Analytics Dashboard
- **Refresh button** gets latest data
- **Date ranges** show trends over time
- **Top pages** tell you what content performs best
- **Traffic sources** show where visitors come from
- **Search queries** reveal what people search for

### Security
- Change your password regularly
- Don't share admin credentials
- Log out when finished
- Monitor login activity

## 🔔 Notifications

You receive email notifications for:
- ✉️ New enquiry submissions
- Each email includes:
  - Contact details
  - Full message
  - Direct link to view in admin panel

## 📱 Mobile Access

The admin panel works on all devices:
- Desktop browsers
- Tablets
- Mobile phones

Just login at `/admin/login` from any device.

## 🆘 Need Help?

### Common Questions

**Q: I forgot my password**
A: Use the password reset script: `node change-password.js`

**Q: Analytics showing "not configured"**
A: Follow [ANALYTICS-API-SETUP.md](./ANALYTICS-API-SETUP.md) to connect Google APIs

**Q: Not receiving email notifications**
A: Check your Resend API key in environment variables

**Q: Contact form not saving enquiries**
A: Verify Supabase connection and check deploy logs

**Q: Can't access certain pages**
A: Make sure you're logged in - session expires after 24 hours

### Documentation
- **Full Guide**: [ADMIN-PANEL-README.md](./ADMIN-PANEL-README.md)
- **Analytics Setup**: [ANALYTICS-API-SETUP.md](./ANALYTICS-API-SETUP.md)
- **GitHub Repo**: https://github.com/chinardeshpande/chinar-portfolio

## 🎉 You're Ready!

You now have everything you need to:
- ✅ Manage contact enquiries
- ✅ Send professional responses
- ✅ Track website performance
- ✅ Monitor SEO results

Start exploring and managing your portfolio!

---

**Need to go back to basics?**
- Login: `/admin/login`
- Dashboard: `/admin`
- Inbox: `/admin/inbox`
- Analytics: `/admin/analytics`

**Last Updated:** May 2026
