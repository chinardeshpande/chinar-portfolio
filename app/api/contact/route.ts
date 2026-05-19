import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { getServiceClient } from '@/lib/supabase/server'
import { resend, FROM_EMAIL, ADMIN_EMAIL } from '@/lib/resend'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  organization: z.string().optional(),
  company: z.string().optional(),
  role: z.string().optional(),
  inquiry_type: z.enum(['board', 'speaking', 'advisory', 'media', 'other']).optional(),
  journey: z.enum(['independent-director', 'startup-mentor', 'strategy-advisor']).optional(),
  source: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    console.log('Received request body:', body)

    // Validate input
    const validated = contactSchema.parse(body)
    console.log('Validated data:', validated)

    // Get metadata
    const source_page = request.headers.get('referer') || 'Direct'
    const user_agent = request.headers.get('user-agent') || null
    const ip_address = request.headers.get('x-forwarded-for')?.split(',')[0] ||
                      request.headers.get('x-real-ip') || null

    // Extract UTM parameters from referer if available
    const refererUrl = request.headers.get('referer')
    let utm_params = {}
    if (refererUrl) {
      try {
        const url = new URL(refererUrl)
        utm_params = {
          utm_source: url.searchParams.get('utm_source') || null,
          utm_medium: url.searchParams.get('utm_medium') || null,
          utm_campaign: url.searchParams.get('utm_campaign') || null,
        }
      } catch (e) {
        // Invalid URL, skip UTM params
      }
    }

    // Normalize data for database (handle both old and new formats)
    const organization = validated.organization || validated.company || 'Not provided'
    const inquiry_type = validated.inquiry_type ||
      (validated.journey === 'independent-director' ? 'board' : 'advisory')

    // Store in database
    const supabase = getServiceClient()

    const insertData = {
      name: validated.name,
      email: validated.email,
      organization,
      inquiry_type,
      message: validated.message,
      source_page: validated.source || source_page,
      user_agent,
      ip_address,
      ...utm_params,
      status: 'new'
    }

    console.log('Attempting to insert into enquiries table:', insertData)

    const { data: enquiry, error } = await supabase
      .from('enquiries')
      .insert(insertData)
      .select()
      .single()

    if (error) {
      console.error('Database error:', error)
      console.error('Error details:', JSON.stringify(error, null, 2))
      return NextResponse.json(
        { error: 'Failed to save enquiry', details: error.message },
        { status: 500 }
      )
    }

    console.log('Successfully inserted enquiry:', enquiry)

    // Send notification email to admin (if email service is configured)
    if (resend) {
      console.log('Resend is configured, attempting to send emails...')
      try {
        const journeyLabel = validated.journey === 'independent-director' ? 'Board/INED' :
                            validated.journey === 'startup-mentor' ? 'Startup Mentorship' :
                            validated.journey === 'strategy-advisor' ? 'Strategy Advisory' : inquiry_type

        console.log('Sending admin notification email to:', ADMIN_EMAIL)
        const adminEmailResult = await resend.emails.send({
          from: FROM_EMAIL,
          to: ADMIN_EMAIL,
          subject: `New ${journeyLabel} enquiry from ${validated.name}`,
          html: `
            <h2>New Enquiry Received</h2>
            <p><strong>From:</strong> ${validated.name} (${validated.email})</p>
            <p><strong>Organization:</strong> ${organization}</p>
            ${validated.role ? `<p><strong>Role:</strong> ${validated.role}</p>` : ''}
            <p><strong>Type:</strong> ${journeyLabel}</p>
            <p><strong>Source:</strong> ${validated.source || source_page}</p>
            <p><strong>Message:</strong></p>
            <p>${validated.message.replace(/\n/g, '<br>')}</p>
            <hr>
            <p><a href="https://www.chinardeshpande.tech/admin/inbox/${enquiry.id}">View in Admin Panel</a></p>
          `
        })
        console.log('Admin email sent successfully:', adminEmailResult)

        // Send confirmation email to visitor
        console.log('Sending confirmation email to visitor:', validated.email)
        const visitorEmailResult = await resend.emails.send({
          from: FROM_EMAIL,
          to: validated.email,
          subject: 'Thank you for reaching out - Chinar Deshpande',
          html: `
            <h2>Thank you for your message</h2>
            <p>Dear ${validated.name},</p>
            <p>I have received your enquiry regarding <strong>${journeyLabel}</strong>.</p>
            <p>I will review your details and respond within 48 hours.</p>
            <p>In the meantime, feel free to learn more about my work:</p>
            <ul>
              <li><a href="https://www.chinardeshpande.com/about">About Me</a></li>
              <li><a href="https://www.chinardeshpande.com/experience">Experience</a></li>
              <li><a href="https://www.chinardeshpande.com/board-bio">Board Biography</a></li>
            </ul>
            <p>Best regards,<br>Chinar Deshpande</p>
          `
        })
        console.log('Visitor confirmation email sent successfully:', visitorEmailResult)
        console.log('Both emails sent successfully!')
      } catch (emailError) {
        console.error('Email notification error:', emailError)
        console.error('Email error details:', JSON.stringify(emailError, null, 2))
        // Don't fail the request if email fails
      }
    } else {
      console.log('Resend is NOT configured - emails will not be sent')
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you for your enquiry. We will respond within 48 hours.'
    })

  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error('Validation error:', error.issues)
      return NextResponse.json(
        {
          error: 'Validation error',
          details: error.issues,
          message: error.issues.map(i => `${i.path.join('.')}: ${i.message}`).join(', ')
        },
        { status: 400 }
      )
    }

    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error', message: String(error) },
      { status: 500 }
    )
  }
}
