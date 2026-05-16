-- ============================================================================
-- COMPREHENSIVE TEST DATA FOR PORTFOLIO ADMIN FEATURES
-- Run this in Supabase SQL Editor to populate test data
-- ============================================================================

-- Clear existing test data (optional - comment out if you want to keep existing data)
-- DELETE FROM enquiry_replies;
-- DELETE FROM enquiries WHERE email LIKE '%@test.com' OR email LIKE '%@techcorp.com';

-- ============================================================================
-- REALISTIC ENQUIRIES
-- ============================================================================

-- 1. Board Position Enquiry - NEW
INSERT INTO enquiries (name, email, organization, inquiry_type, message, source_page, status, created_at)
VALUES (
  'Sarah Mitchell',
  'sarah.mitchell@techcorp.com',
  'TechCorp International',
  'board',
  'Hi Chinar,

We''re impressed by your extensive experience in digital transformation and technology leadership. Our board is looking to strengthen its technology oversight capabilities, particularly around AI governance and cybersecurity.

Would you be interested in discussing a potential INED position? We''re a FinTech company with $500M ARR, preparing for Series D funding.

Looking forward to connecting.',
  '/services/board-advisory',
  'new',
  NOW() - INTERVAL '2 hours'
);

-- 2. Speaking Engagement - IN_PROGRESS
INSERT INTO enquiries (name, email, organization, inquiry_type, message, source_page, status, created_at, updated_at)
VALUES (
  'Dr. James Chen',
  'j.chen@globaluniversity.edu',
  'Global University Business School',
  'speaking',
  'Dear Mr. Deshpande,

We''re organizing our annual Technology Leadership Summit (March 15-17, 2026) with 500+ C-suite executives attending. We would love to have you as our keynote speaker on "AI Strategy for Enterprise Leaders".

The session is scheduled for March 16, 2:00 PM - 3:30 PM, followed by a panel discussion. We offer an honorarium of $15,000 plus travel/accommodation.

Please let us know your availability.',
  '/contact',
  'in_progress',
  NOW() - INTERVAL '1 day',
  NOW() - INTERVAL '12 hours'
);

-- 3. Advisory Services - NEW
INSERT INTO enquiries (name, email, organization, inquiry_type, message, source_page, status, created_at)
VALUES (
  'Michael Rodriguez',
  'mrodriguez@startupxyz.io',
  'StartupXYZ',
  'advisory',
  'Hello Chinar,

We''re a Series B SaaS startup ($20M ARR) looking for strategic technology advisory. Specifically, we need help with:

1. Scaling our engineering organization (currently 45 engineers)
2. Technology due diligence for upcoming Series C ($50M raise)
3. M&A integration planning for 2 acquisitions

Would you be open to a 6-month advisory engagement (8-10 hours/month)?',
  '/services/advisory',
  'new',
  NOW() - INTERVAL '5 hours'
);

-- 4. Media Interview - CLOSED
INSERT INTO enquiries (name, email, organization, inquiry_type, message, source_page, status, created_at, replied_at, closed_at)
VALUES (
  'Emma Thompson',
  'ethompson@techweekly.com',
  'Tech Weekly Magazine',
  'media',
  'Hi Chinar,

I''m a senior journalist at Tech Weekly covering enterprise AI adoption. I''m writing a feature article on "Board-Level AI Governance" and would love to interview you.

The interview would take about 45 minutes and can be done via Zoom at your convenience. We have a readership of 200K+ technology executives.

Article deadline: January 31, 2026.',
  '/contact',
  'closed',
  NOW() - INTERVAL '3 days',
  NOW() - INTERVAL '2 days',
  NOW() - INTERVAL '1 day'
);

-- 5. Advisory from India - IN_PROGRESS
INSERT INTO enquiries (name, email, organization, inquiry_type, message, source_page, status, created_at, updated_at)
VALUES (
  'Rajesh Kumar',
  'rkumar@cloudscale.in',
  'CloudScale Solutions India',
  'advisory',
  'Namaste Chinar ji,

We are a growing cloud infrastructure company based in Bangalore (150 employees, ₹200 Cr revenue). We''re planning our expansion into enterprise AI/ML services and need strategic guidance.

Can we arrange a meeting to discuss potential advisory engagement? We''re particularly interested in:
- Product strategy for AI/ML platform
- Go-to-market strategy for enterprise clients
- Technology partnerships evaluation

Looking forward to your response.',
  '/services/advisory',
  'in_progress',
  NOW() - INTERVAL '2 days',
  NOW() - INTERVAL '1 day'
);

-- 6. Low quality enquiry - CLOSED
INSERT INTO enquiries (name, email, organization, inquiry_type, message, source_page, status, created_at, closed_at)
VALUES (
  'Linda Martinez',
  'linda@email.com',
  NULL,
  'other',
  'Hi, I saw your profile online. Can you help me build a mobile app?',
  '/contact',
  'closed',
  NOW() - INTERVAL '5 days',
  NOW() - INTERVAL '4 days'
);

-- ============================================================================
-- EDGE CASES
-- ============================================================================

-- 7. International characters and special characters
INSERT INTO enquiries (name, email, organization, inquiry_type, message, source_page, status, created_at)
VALUES (
  'François Müller-O''Brien',
  'francois.muller@société-française.fr',
  'Société Française d''Innovation & Technologie',
  'board',
  'Bonjour M. Deshpande,

Our company (€300M revenue, CAC 40 listed) is seeking an independent director with deep technology expertise. We''re particularly interested in candidates who understand both US and European technology markets.

Key requirements:
• AI governance & ethics
• Digital transformation experience
• M&A technology due diligence
• Fluent in English (French is a plus but not required)

Would you be interested in a preliminary discussion?

Cordialement,
François',
  '/services/board-advisory',
  'new',
  NOW() - INTERVAL '1 hour'
);

-- 8. Very long names and content
INSERT INTO enquiries (name, email, organization, inquiry_type, message, source_page, status, created_at)
VALUES (
  'Alexander Benjamin Christopher Davidson Emerson',
  'verylong.email@subdomain.organization.company.co.uk',
  'The International Association for Advanced Technology Research and Development Corporation Ltd.',
  'speaking',
  'Dear Mr. Deshpande,

I represent a consortium of technology research institutions spanning multiple continents and time zones. We are organizing a global symposium on artificial intelligence governance and would be honored if you could participate as a keynote speaker.

The event details are as follows: [Very detailed event description with multiple paragraphs of content to test long message handling and text truncation in the UI. This message is intentionally verbose to ensure the system handles longer enquiries gracefully and displays them properly in both list and detail views.]

Our organization has been at the forefront of technology policy research for over two decades, and we believe your insights would be invaluable to our audience of policymakers, researchers, and industry leaders.

We look forward to your positive response.',
  '/contact',
  'new',
  NOW() - INTERVAL '30 minutes'
);

-- 9. HTML/XSS testing (should be sanitized on display)
INSERT INTO enquiries (name, email, organization, inquiry_type, message, source_page, status, created_at)
VALUES (
  'Security Tester',
  'security@test.com',
  'XSS Testing & Co.',
  'other',
  'Testing special characters:
<script>alert("XSS")</script>
<img src="x" onerror="alert(''XSS'')">
<b>Bold text</b> and <i>italic text</i>
{{ template_variables }}
${process.env}',
  '/contact',
  'new',
  NOW() - INTERVAL '15 minutes'
);

-- ============================================================================
-- STRESS TEST DATA (20 additional enquiries)
-- ============================================================================

INSERT INTO enquiries (name, email, organization, inquiry_type, message, source_page, status, created_at)
SELECT
  'Test User ' || generate_series,
  'testuser' || generate_series || '@test.com',
  'Test Company ' || (generate_series % 5),
  (ARRAY['board', 'speaking', 'advisory', 'media', 'other'])[1 + (generate_series % 5)],
  'This is test enquiry #' || generate_series || '. Lorem ipsum dolor sit amet, consectetur adipiscing elit. We are interested in your services and would like to discuss potential collaboration opportunities.',
  '/contact',
  (ARRAY['new', 'in_progress', 'closed'])[1 + (generate_series % 3)],
  NOW() - (generate_series || ' hours')::INTERVAL
FROM generate_series(1, 20);

-- ============================================================================
-- VERIFY DATA
-- ============================================================================

-- Check total counts
SELECT
  status,
  COUNT(*) as count
FROM enquiries
GROUP BY status
ORDER BY status;

SELECT
  inquiry_type,
  COUNT(*) as count
FROM enquiries
GROUP BY inquiry_type
ORDER BY inquiry_type;

-- Check templates
SELECT
  id,
  name,
  category,
  LENGTH(body) as body_length
FROM email_templates
ORDER BY created_at DESC;

-- ============================================================================
-- SUMMARY
-- ============================================================================
-- This script adds:
-- - 9 realistic, diverse enquiries with various statuses
-- - 20 stress test enquiries
-- - Edge cases: long text, special characters, internationalization
-- Total: 29+ test enquiries
--
-- After running this, test:
-- 1. Visit /admin/inbox - all enquiries should display
-- 2. Filter by status (New, In Progress, Closed)
-- 3. Filter by type (board, speaking, advisory, etc.)
-- 4. Click on enquiries to view details
-- 5. Check that long text is truncated in list view
-- 6. Verify special characters display correctly (no XSS)
-- 7. Visit /admin/templates - verify all templates display
-- ============================================================================
