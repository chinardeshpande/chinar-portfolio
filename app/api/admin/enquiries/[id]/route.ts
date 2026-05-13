import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServiceClient } from '@/lib/supabase/server'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const supabase = getServiceClient()

    // Get enquiry with replies
    const { data: enquiry, error } = await supabase
      .from('enquiries')
      .select(`
        *,
        replies:enquiry_replies(*)
      `)
      .eq('id', params.id)
      .single()

    if (error || !enquiry) {
      return NextResponse.json({ error: 'Enquiry not found' }, { status: 404 })
    }

    return NextResponse.json(enquiry)

  } catch (error) {
    console.error('Enquiry fetch error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const body = await request.json()
    const { status } = body

    const supabase = getServiceClient()

    const updateData: any = {
      status,
      updated_at: new Date().toISOString()
    }

    if (status === 'closed' && !body.closed_at) {
      updateData.closed_at = new Date().toISOString()
    }

    const { data, error } = await supabase
      .from('enquiries')
      .update(updateData)
      .eq('id', params.id)
      .select()
      .single()

    if (error) {
      throw error
    }

    return NextResponse.json(data)

  } catch (error) {
    console.error('Enquiry update error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
