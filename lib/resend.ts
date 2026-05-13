// Email client configuration
import { Resend } from 'resend'

export const resend = new Resend(process.env.RESEND_API_KEY)

export const FROM_EMAIL = 'Chinar Deshpande <noreply@chinardeshpande.tech>'
export const ADMIN_EMAIL = process.env.ADMIN_NOTIFICATION_EMAIL || 'chinardeshpande@gmail.com'
