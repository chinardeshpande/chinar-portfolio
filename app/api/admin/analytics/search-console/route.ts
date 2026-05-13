import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { google } from 'googleapis'

export async function GET(request: NextRequest) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const searchParams = request.nextUrl.searchParams
    const startDate = searchParams.get('startDate') || getDateDaysAgo(30)
    const endDate = searchParams.get('endDate') || getDateDaysAgo(0)

    // Check if Search Console credentials are configured
    const siteUrl = process.env.SEARCH_CONSOLE_SITE_URL
    const credentials = process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON

    if (!siteUrl || !credentials) {
      return NextResponse.json({
        error: 'Search Console not configured',
        message: 'SEARCH_CONSOLE_SITE_URL and GOOGLE_APPLICATION_CREDENTIALS_JSON are required',
        configured: false
      }, { status: 200 })
    }

    // Initialize Google Auth
    const auth = new google.auth.GoogleAuth({
      credentials: JSON.parse(credentials),
      scopes: ['https://www.googleapis.com/auth/webmasters.readonly']
    })

    const authClient = await auth.getClient()
    const searchconsole = google.searchconsole({ version: 'v1', auth: authClient as any })

    // Fetch search analytics data
    const response = await searchconsole.searchanalytics.query({
      siteUrl,
      requestBody: {
        startDate,
        endDate,
        dimensions: ['date'],
        rowLimit: 1000
      }
    })

    // Fetch top queries
    const topQueriesResponse = await searchconsole.searchanalytics.query({
      siteUrl,
      requestBody: {
        startDate,
        endDate,
        dimensions: ['query'],
        rowLimit: 10
      }
    })

    // Fetch top pages
    const topPagesResponse = await searchconsole.searchanalytics.query({
      siteUrl,
      requestBody: {
        startDate,
        endDate,
        dimensions: ['page'],
        rowLimit: 10
      }
    })

    // Fetch by country
    const countriesResponse = await searchconsole.searchanalytics.query({
      siteUrl,
      requestBody: {
        startDate,
        endDate,
        dimensions: ['country'],
        rowLimit: 10
      }
    })

    // Fetch by device
    const devicesResponse = await searchconsole.searchanalytics.query({
      siteUrl,
      requestBody: {
        startDate,
        endDate,
        dimensions: ['device'],
        rowLimit: 10
      }
    })

    // Calculate totals
    const totals = {
      clicks: 0,
      impressions: 0,
      ctr: 0,
      position: 0
    }

    if (response.data.rows) {
      response.data.rows.forEach(row => {
        totals.clicks += row.clicks || 0
        totals.impressions += row.impressions || 0
      })

      const totalRows = response.data.rows.length
      if (totalRows > 0) {
        totals.ctr = (totals.clicks / totals.impressions) * 100
        totals.position = response.data.rows.reduce((sum, row) => sum + (row.position || 0), 0) / totalRows
      }
    }

    return NextResponse.json({
      configured: true,
      dateRange: { startDate, endDate },
      totals,
      dailyMetrics: response.data.rows || [],
      topQueries: topQueriesResponse.data.rows || [],
      topPages: topPagesResponse.data.rows || [],
      countries: countriesResponse.data.rows || [],
      devices: devicesResponse.data.rows || []
    })

  } catch (error: any) {
    console.error('Search Console API Error:', error)
    return NextResponse.json(
      {
        error: 'Failed to fetch Search Console data',
        message: error.message,
        configured: true
      },
      { status: 500 }
    )
  }
}

function getDateDaysAgo(days: number): string {
  const date = new Date()
  date.setDate(date.getDate() - days)
  return date.toISOString().split('T')[0]
}
