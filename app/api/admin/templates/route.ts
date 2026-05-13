import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServiceClient } from '@/lib/supabase/server'

export async function GET(request: NextRequest) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const supabase = getServiceClient()
    const { data, error } = await supabase
      .from('email_templates')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      throw error
    }

    return NextResponse.json(data)

  } catch (error) {
    console.error('Templates fetch error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const body = await request.json()
    const { name, subject, body: templateBody, category } = body

    const supabase = getServiceClient()
    const { data, error } = await supabase
      .from('email_templates')
      .insert({
        name,
        subject,
        body: templateBody,
        category
      })
      .select()
      .single()

    if (error) {
      throw error
    }

    return NextResponse.json(data)

  } catch (error) {
    console.error('Template create error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
