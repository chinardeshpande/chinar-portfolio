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
    const startDate = searchParams.get('startDate') || '30daysAgo'
    const endDate = searchParams.get('endDate') || 'today'

    // Check if GA4 is configured
    const propertyId = process.env.GA4_PROPERTY_ID
    const clientId = process.env.GOOGLE_CLIENT_ID
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET
    const refreshToken = process.env.GOOGLE_REFRESH_TOKEN

    if (!propertyId) {
      return NextResponse.json({
        error: 'Analytics not configured',
        message: 'GA4_PROPERTY_ID is required',
        configured: false
      }, { status: 200 })
    }

    if (!clientId || !clientSecret || !refreshToken) {
      return NextResponse.json({
        error: 'Analytics not configured',
        message: 'OAuth credentials required (GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REFRESH_TOKEN)',
        configured: false
      }, { status: 200 })
    }

    // Initialize OAuth2 client
    const oauth2Client = new google.auth.OAuth2(clientId, clientSecret)
    oauth2Client.setCredentials({ refresh_token: refreshToken })

    // Use the Analytics Data API via googleapis
    const analyticsData = google.analyticsdata('v1beta')

    // Fetch overview metrics
    const overviewResponse = await analyticsData.properties.runReport({
      auth: oauth2Client,
      property: `properties/${propertyId}`,
      requestBody: {
        dateRanges: [{ startDate, endDate }],
        dimensions: [{ name: 'date' }],
        metrics: [
          { name: 'activeUsers' },
          { name: 'sessions' },
          { name: 'screenPageViews' },
          { name: 'averageSessionDuration' },
          { name: 'bounceRate' }
        ],
        orderBys: [{ dimension: { dimensionName: 'date' }, desc: false }]
      }
    })

    // Fetch top pages
    const topPagesResponse = await analyticsData.properties.runReport({
      auth: oauth2Client,
      property: `properties/${propertyId}`,
      requestBody: {
        dateRanges: [{ startDate, endDate }],
        dimensions: [{ name: 'pageTitle' }, { name: 'pagePath' }],
        metrics: [
          { name: 'screenPageViews' },
          { name: 'activeUsers' }
        ],
        orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }],
        limit: 10
      }
    })

    // Fetch traffic sources
    const trafficSourcesResponse = await analyticsData.properties.runReport({
      auth: oauth2Client,
      property: `properties/${propertyId}`,
      requestBody: {
        dateRanges: [{ startDate, endDate }],
        dimensions: [{ name: 'sessionSource' }],
        metrics: [
          { name: 'sessions' },
          { name: 'activeUsers' }
        ],
        orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
        limit: 10
      }
    })

    // Fetch device categories
    const deviceResponse = await analyticsData.properties.runReport({
      auth: oauth2Client,
      property: `properties/${propertyId}`,
      requestBody: {
        dateRanges: [{ startDate, endDate }],
        dimensions: [{ name: 'deviceCategory' }],
        metrics: [{ name: 'activeUsers' }],
        orderBys: [{ metric: { metricName: 'activeUsers' }, desc: true }]
      }
    })

    // Format the data
    const formatRows = (rows: any[] = []) => {
      return rows.map(row => ({
        dimensions: row.dimensionValues?.map((d: any) => d.value) || [],
        metrics: row.metricValues?.map((m: any) => m.value) || []
      }))
    }

    // Calculate totals
    const totals = {
      users: 0,
      sessions: 0,
      pageViews: 0,
      avgSessionDuration: 0,
      bounceRate: 0
    }

    const overviewRows = overviewResponse.data.rows || []
    if (overviewRows.length > 0) {
      overviewRows.forEach((row: any) => {
        totals.users += parseInt(row.metricValues?.[0]?.value || '0')
        totals.sessions += parseInt(row.metricValues?.[1]?.value || '0')
        totals.pageViews += parseInt(row.metricValues?.[2]?.value || '0')
      })

      // Average from all rows
      const lastRow = overviewRows[overviewRows.length - 1]
      totals.avgSessionDuration = parseFloat(lastRow.metricValues?.[3]?.value || '0')
      totals.bounceRate = parseFloat(lastRow.metricValues?.[4]?.value || '0')
    }

    return NextResponse.json({
      configured: true,
      dateRange: { startDate, endDate },
      totals,
      dailyMetrics: formatRows(overviewRows),
      topPages: formatRows(topPagesResponse.data.rows || []),
      trafficSources: formatRows(trafficSourcesResponse.data.rows || []),
      devices: formatRows(deviceResponse.data.rows || [])
    })

  } catch (error: any) {
    console.error('GA4 API Error:', error)
    return NextResponse.json(
      {
        error: 'Failed to fetch analytics data',
        message: error.message || 'Unknown error',
        details: error.response?.data || error.toString(),
        configured: true
      },
      { status: 500 }
    )
  }
}
