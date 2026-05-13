export interface Enquiry {
  id: string
  name: string
  email: string
  organization: string | null
  inquiry_type: 'board' | 'speaking' | 'advisory' | 'media' | 'other'
  message: string
  source_page: string
  utm_source?: string | null
  utm_medium?: string | null
  utm_campaign?: string | null
  status: 'new' | 'in_progress' | 'closed'
  user_agent?: string | null
  ip_address?: string | null
  created_at: string
  updated_at: string
  replied_at?: string | null
  closed_at?: string | null
}

export interface EnquiryWithReplies extends Enquiry {
  replies: EnquiryReply[]
}

export interface EnquiryReply {
  id: string
  enquiry_id: string
  admin_id: string
  subject: string
  body: string
  sent_via: string
  sent_at: string
}

export interface EmailTemplate {
  id: string
  name: string
  subject: string
  body: string
  category?: string | null
  created_at: string
  updated_at: string
}
