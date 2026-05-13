# Admin Panel Documentation

Complete admin panel for managing your portfolio website with analytics, lead management, and content administration.

## 🚀 Features

### 1. Dashboard (`/admin`)
Central hub for quick access to all admin features
- **Overview Stats**: Total enquiries, new, in progress, this week
- **Quick Actions**: Direct links to Inbox, Analytics, Templates, Public Site
- **Real-time Updates**: Live statistics from your database

### 2. Inbox Management (`/admin/inbox`)
Comprehensive enquiry management system
- **Enquiry List**: Filterable table view (All, New, In Progress, Closed)
- **Enquiry Details**: Full contact information, message, source tracking, UTM parameters
- **Status Management**: Update enquiry status with dropdown
- **Reply System**: Send personalized email responses directly from admin panel
- **Template Integration**: Use pre-built templates with {{placeholder}} personalization
- **Reply History**: Track all correspondence with each contact

**Features:**
- Contact name, email, organization
- Inquiry type badges with professional icons
- Source page and attribution tracking
- IP address and user agent logging
- Real-time status updates

### 3. Analytics Dashboard (`/admin/analytics`)
Performance metrics and SEO insights with real-time data

#### Overview Tab
- Combined metrics from GA4 and Search Console
- Total users, page views, search clicks, average position
- At-a-glance performance summary

#### Google Analytics Tab
- **Traffic Metrics**: Users, sessions, page views
- **Engagement**: Average session duration, bounce rate
- **Top Pages**: Most visited pages with view counts
- **Traffic Sources**: Where visitors come from
- **Device Breakdown**: Desktop vs mobile vs tablet (pie chart)
- **Daily Trends**: Visitor patterns over time

#### Search Console Tab
- **Search Performance**: Clicks, impressions, CTR, position
- **Top Queries**: What people search to find your site
- **Top Pages**: Best performing pages in search results
- **Geographic Data**: Visitors by country (bar chart)
- **Device Distribution**: Search traffic by device type

**Features:**
- Date range selector (7, 30, 90 days)
- Refresh button for latest data
- Last updated timestamp
- Interactive charts (line, bar, pie)
- Export-ready data views

### 4. Email Templates (`/admin/templates`)
Pre-built response templates for common enquiry types

**Current Templates:**
- Board Invitation Response
- Speaking Engagement Response
- General Enquiry Response

**Features:**
- Category-based organization
- Subject and body preview
- {{name}} and {{organization}} placeholders
- Visual template cards with icons

### 5. Settings (`/admin/settings`)
Account management and security

**Features:**
- View account information (name, email, role)
- Change password with validation
- Secure bcrypt password hashing
- Real-time success/error feedback

## 📊 Data Collection

### Contact Form Integration
Every submission through your public contact form automatically:
- Stores in Supabase database
- Sends email notification to admin
- Captures source attribution (UTM parameters)
- Records user context (IP, user agent, referring page)

### Analytics Integration
Real-time data streaming from:
- **Google Analytics 4**: Visitor behavior and traffic sources
- **Google Search Console**: SEO performance and search queries

## 🔐 Security Features

### Authentication
- NextAuth.js with JWT sessions
- Bcrypt password hashing (cost factor 12)
- Protected routes with middleware
- Session-based authorization

### Data Protection
- Environment variable configuration
- Service role key for server-side operations
- Row Level Security (RLS) in Supabase
- Secure credential handling

## 🎨 Design System

### Visual Language
- Clean white backgrounds
- Subtle shadows (`shadow-sm`)
- Light borders (`border-gray-200`)
- Professional SVG icons (no emojis)
- Consistent color palette:
  - Blue: Primary actions
  - Green: Success states
  - Yellow: Warnings
  - Purple: External links
  - Orange: Analytics
  - Red: Errors

### Components
- Responsive layouts (mobile-first)
- Hover states for interactivity
- Focus states for accessibility
- Loading indicators
- Empty states
- Error handling

## 📁 Database Schema

### Tables
1. **enquiries**: Contact form submissions
   - Contact details (name, email, organization)
   - Message content
   - Inquiry type (board, speaking, advisory, media, other)
   - Attribution (source_page, utm_source, utm_medium, utm_campaign)
   - Metadata (user_agent, ip_address)
   - Status tracking (new, in_progress, closed)

2. **admin_users**: Admin accounts
   - Authentication credentials
   - Role management
   - Last login tracking

3. **email_templates**: Response templates
   - Subject and body
   - Category organization
   - Placeholder support

4. **enquiry_replies**: Response history
   - Email correspondence
   - Timestamp tracking
   - Admin attribution

## 🚀 Getting Started

### Access the Admin Panel
1. Navigate to `/admin/login`
2. Enter your credentials
3. Access the dashboard

### First Steps
1. **Check Inbox**: Review any pending enquiries
2. **Configure Analytics**: Follow [ANALYTICS-API-SETUP.md](./ANALYTICS-API-SETUP.md)
3. **Test Contact Form**: Submit a test enquiry from your public site
4. **Reply to Enquiry**: Practice using email templates
5. **Monitor Analytics**: Review traffic and SEO performance

## 🔧 Configuration

### Required Environment Variables
```bash
# Database
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Authentication
NEXTAUTH_URL=https://yoursite.com
NEXTAUTH_SECRET=your-secret-key

# Email
RESEND_API_KEY=your-resend-key
ADMIN_EMAIL=your-email@example.com
FROM_EMAIL=noreply@yoursite.com

# Analytics (Optional - for dashboard data)
GA4_PROPERTY_ID=your-property-id
SEARCH_CONSOLE_SITE_URL=https://yoursite.com
GOOGLE_APPLICATION_CREDENTIALS_JSON={"type":"service_account",...}
```

### Netlify Deployment
All environment variables are configured in:
**Netlify Dashboard → Site Settings → Environment Variables**

## 📈 Workflow Examples

### Responding to Board Enquiries
1. Navigate to **Inbox**
2. Filter by **New** status
3. Click on enquiry to view details
4. Review message and contact info
5. Update status to **In Progress**
6. Click **Reply to Enquiry**
7. Select **Board Invitation Response** template
8. Personalize the message ({{name}} auto-replaced)
9. Send reply
10. Update status to **Closed** when complete

### Monitoring Traffic
1. Go to **Analytics** dashboard
2. Select date range (e.g., Last 30 days)
3. Review **Overview** for combined metrics
4. Check **GA4 tab** for traffic sources
5. Check **SEO tab** for search performance
6. Click **Refresh** for latest data
7. Identify top performing pages
8. Track search query trends

### Managing Templates
1. Navigate to **Templates**
2. Review existing templates
3. Note subject lines and body content
4. Use in **Inbox → Reply** workflow
5. Templates support {{name}} and {{organization}} placeholders

## 🛠️ Maintenance

### Regular Tasks
- **Daily**: Check inbox for new enquiries
- **Weekly**: Review analytics trends
- **Monthly**: Update templates based on feedback
- **As Needed**: Change password, adjust settings

### Data Management
- Enquiries are stored indefinitely
- Update enquiry status to keep inbox organized
- Archive closed enquiries by filtering
- Export analytics data as needed

## 📱 Mobile Access
Admin panel is fully responsive and works on:
- Desktop browsers
- Tablets
- Mobile phones

## 🆘 Support

### Common Issues
- **Can't log in**: Verify credentials, check password reset script
- **No analytics data**: Review [ANALYTICS-API-SETUP.md](./ANALYTICS-API-SETUP.md)
- **Email not sending**: Check Resend API key and configuration
- **Missing enquiries**: Verify Supabase connection

### Getting Help
- Check setup guides in repository
- Review Netlify deploy logs
- Verify environment variables
- Test database connection

## 🎯 Best Practices

### Security
- Change default password immediately
- Use strong passwords (min 8 characters)
- Don't share admin credentials
- Log out when finished

### Workflow
- Respond to enquiries within 48 hours
- Update enquiry status promptly
- Use templates for consistency
- Monitor analytics weekly

### Organization
- Keep inbox organized with status filters
- Archive completed enquiries
- Review templates regularly
- Track response times

## 🔄 Updates

The admin panel is actively maintained and receives:
- Security updates
- Feature enhancements
- UI/UX improvements
- Bug fixes

Check the repository for latest updates and release notes.

## 📄 License

This admin panel is part of your portfolio website and is proprietary software.

---

**Built with:**
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Supabase
- NextAuth.js
- Resend
- Google Analytics Data API
- Google Search Console API
- Recharts

**Last Updated:** May 2026
