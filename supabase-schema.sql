-- Admin Panel Database Schema
-- Run this in Supabase SQL Editor after creating your project

-- Enquiries table
CREATE TABLE enquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  organization VARCHAR(255),
  inquiry_type VARCHAR(50) NOT NULL CHECK (inquiry_type IN ('board', 'speaking', 'advisory', 'media', 'other')),
  message TEXT NOT NULL,
  source_page VARCHAR(255) NOT NULL,
  utm_source VARCHAR(100),
  utm_medium VARCHAR(100),
  utm_campaign VARCHAR(100),
  status VARCHAR(20) DEFAULT 'new' CHECK (status IN ('new', 'in_progress', 'closed')),
  user_agent TEXT,
  ip_address VARCHAR(45),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  replied_at TIMESTAMPTZ,
  closed_at TIMESTAMPTZ
);

-- Admin users table
CREATE TABLE admin_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  role VARCHAR(20) DEFAULT 'admin' CHECK (role IN ('admin', 'viewer')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  last_login_at TIMESTAMPTZ
);

-- Email templates table
CREATE TABLE email_templates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  subject VARCHAR(500) NOT NULL,
  body TEXT NOT NULL,
  category VARCHAR(50),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enquiry replies table (audit trail)
CREATE TABLE enquiry_replies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  enquiry_id UUID REFERENCES enquiries(id) ON DELETE CASCADE,
  admin_id UUID REFERENCES admin_users(id),
  subject VARCHAR(500) NOT NULL,
  body TEXT NOT NULL,
  sent_via VARCHAR(20) DEFAULT 'resend',
  sent_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX idx_enquiries_status ON enquiries(status);
CREATE INDEX idx_enquiries_created_at ON enquiries(created_at DESC);
CREATE INDEX idx_enquiries_email ON enquiries(email);
CREATE INDEX idx_enquiry_replies_enquiry_id ON enquiry_replies(enquiry_id);

-- Row Level Security (RLS) - Disable for admin service role access
ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE email_templates ENABLE ROW LEVEL SECURITY;
ALTER TABLE enquiry_replies ENABLE ROW LEVEL SECURITY;

-- Create policies for service role (bypass RLS)
CREATE POLICY "Service role can do anything on enquiries" ON enquiries
  FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "Service role can do anything on admin_users" ON admin_users
  FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "Service role can do anything on email_templates" ON email_templates
  FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "Service role can do anything on enquiry_replies" ON enquiry_replies
  FOR ALL USING (auth.role() = 'service_role');

-- Insert your admin user (CHANGE PASSWORD BEFORE RUNNING!)
-- Password below is: AdminPass123! (hashed with bcryptjs cost 12)
-- Generate your own hash at: https://bcrypt-generator.com/ with cost 12
INSERT INTO admin_users (email, password_hash, name, role) VALUES
('chinardeshpande@gmail.com', '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewY5ND/qhmeI/DUu', 'Chinar Deshpande', 'admin');

-- Insert default email templates
INSERT INTO email_templates (name, subject, body, category) VALUES
('Board Position - Initial Response', 'RE: Board Position Inquiry',
'Dear {{name}},

Thank you for your interest in my board advisory services. I appreciate you reaching out.

I would be delighted to discuss how my 30+ years of technology leadership experience could add value to {{organization}}''s board.

My expertise includes:
- Digital transformation and AI governance
- Technology strategy and M&A integration
- Risk oversight and cybersecurity
- Board-level technology advisory

Could we schedule a brief call this week to discuss your requirements?

Best regards,
Chinar Deshpande
Independent Non-Executive Director (INED)
https://www.chinardeshpande.tech',
'board'),

('Speaking Engagement - Initial Response', 'RE: Speaking Engagement Inquiry',
'Dear {{name}},

Thank you for considering me as a speaker for your event.

I would be happy to explore this opportunity further. I frequently speak on topics including:
- Digital transformation and AI strategy
- Technology leadership and innovation
- Board governance in the digital age
- Organizational change and transformation

Could you please share:
- Event date and location
- Expected audience size and profile
- Preferred topic areas
- Format (keynote, panel, workshop)

I look forward to hearing from you.

Best regards,
Chinar Deshpande
https://www.chinardeshpande.tech',
'speaking'),

('Advisory - Initial Response', 'RE: Advisory Services Inquiry',
'Dear {{name}},

Thank you for reaching out about advisory services.

I help organizations with:
- Technology strategy and roadmap development
- Digital transformation programs
- M&A technology due diligence
- Interim CTO/CIO roles
- C-suite technology advisory

I would be pleased to discuss how I can support {{organization}}.

Could we schedule a call to understand your needs better?

Best regards,
Chinar Deshpande
https://www.chinardeshpande.tech',
'advisory');
