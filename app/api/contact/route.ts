import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { getServiceClient } from '@/lib/supabase/server'
import { resend, FROM_EMAIL, ADMIN_EMAIL } from '@/lib/resend'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  organization: z.string().optional(),
  inquiry_type: z.enum(['board', 'speaking', 'advisory', 'media', 'other']),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate input
    const validated = contactSchema.parse(body)

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

    // Store in database
    const supabase = getServiceClient()
    const { data: enquiry, error } = await supabase
      .from('enquiries')
      .insert({
        ...validated,
        source_page,
        user_agent,
        ip_address,
        ...utm_params,
        status: 'new'
      })
      .select()
      .single()

    if (error) {
      console.error('Database error:', error)
      return NextResponse.json(
        { error: 'Failed to save enquiry' },
        { status: 500 }
      )
    }

    // Send notification email to admin
    try {
      await resend.emails.send({
        from: FROM_EMAIL,
        to: ADMIN_EMAIL,
        subject: `New ${validated.inquiry_type} enquiry from ${validated.name}`,
        html: `
          <h2>New Enquiry Received</h2>
          <p><strong>From:</strong> ${validated.name} (${validated.email})</p>
          <p><strong>Organization:</strong> ${validated.organization || 'Not provided'}</p>
          <p><strong>Type:</strong> ${validated.inquiry_type}</p>
          <p><strong>Source:</strong> ${source_page}</p>
          <p><strong>Message:</strong></p>
          <p>${validated.message.replace(/\n/g, '<br>')}</p>
          <hr>
          <p><a href="https://www.chinardeshpande.tech/admin/inbox/${enquiry.id}">View in Admin Panel</a></p>
        `
      })
    } catch (emailError) {
      console.error('Email notification error:', emailError)
      // Don't fail the request if email fails
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you for your enquiry. We will respond within 48 hours.'
    })

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation error', details: error.errors },
        { status: 400 }
      )
    }

    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
