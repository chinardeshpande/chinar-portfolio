import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { getServiceClient } from '@/lib/supabase/server'

export async function GET(request: NextRequest) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const supabase = getServiceClient()

    // Get all enquiries
    const { data: allEnquiries } = await supabase
      .from('enquiries')
      .select('status, created_at')

    const total_enquiries = allEnquiries?.length || 0
    const new_enquiries = allEnquiries?.filter(e => e.status === 'new').length || 0
    const in_progress = allEnquiries?.filter(e => e.status === 'in_progress').length || 0
    const closed = allEnquiries?.filter(e => e.status === 'closed').length || 0

    // Get today's enquiries
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const today_enquiries = allEnquiries?.filter(e =>
      new Date(e.created_at) >= today
    ).length || 0

    // Get this week's enquiries
    const weekAgo = new Date()
    weekAgo.setDate(weekAgo.getDate() - 7)
    const this_week = allEnquiries?.filter(e =>
      new Date(e.created_at) >= weekAgo
    ).length || 0

    return NextResponse.json({
      total_enquiries,
      new_enquiries,
      in_progress,
      closed,
      today_enquiries,
      this_week,
    })

  } catch (error) {
    console.error('Stats error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
