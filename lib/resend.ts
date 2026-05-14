// Email client configuration
import { Resend } from 'resend'

// Initialize Resend only if API key is available (optional feature)
export const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null

export const FROM_EMAIL = 'Chinar Deshpande <noreply@chinardeshpande.tech>'
export const ADMIN_EMAIL = process.env.ADMIN_NOTIFICATION_EMAIL || 'chinardeshpande@gmail.com'
