import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServiceClient } from '@/lib/supabase/server'
import { resend, FROM_EMAIL } from '@/lib/resend'

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { subject, body } = await request.json()
    const enquiryId = params.id

    const supabase = getServiceClient()

    // Get enquiry details
    const { data: enquiry, error: fetchError } = await supabase
      .from('enquiries')
      .select('*')
      .eq('id', enquiryId)
      .single()

    if (fetchError || !enquiry) {
      return NextResponse.json({ error: 'Enquiry not found' }, { status: 404 })
    }

    // Send email
    await resend.emails.send({
      from: FROM_EMAIL,
      to: enquiry.email,
      subject,
      html: body.replace(/\n/g, '<br>'),
    })

    // Record reply in database
    await supabase.from('enquiry_replies').insert({
      enquiry_id: enquiryId,
      admin_id: session.user.id,
      subject,
      body,
      sent_via: 'resend',
    })

    // Update enquiry status and replied_at
    await supabase
      .from('enquiries')
      .update({
        status: 'in_progress',
        replied_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      })
      .eq('id', enquiryId)

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('Reply error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
