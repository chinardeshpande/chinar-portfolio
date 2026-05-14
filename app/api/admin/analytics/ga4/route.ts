import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { BetaAnalyticsDataClient } from '@google-analytics/data'
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
    const serviceAccountCreds = process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON
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

    // Initialize GA4 client with either OAuth or Service Account
    let analyticsDataClient: BetaAnalyticsDataClient

    if (clientId && clientSecret && refreshToken) {
      // OAuth authentication - get access token first
      const oauth2Client = new google.auth.OAuth2(clientId, clientSecret)
      oauth2Client.setCredentials({ refresh_token: refreshToken })

      // Get fresh access token
      const { credentials } = await oauth2Client.refreshAccessToken()
      const accessToken = credentials.access_token

      if (!accessToken) {
        throw new Error('Failed to get access token from refresh token')
      }

      // Use access token directly with GA4 client
      analyticsDataClient = new BetaAnalyticsDataClient({
        authClient: {
          getAccessToken: async () => ({ token: accessToken })
        } as any
      })
    } else if (serviceAccountCreds) {
      // Service account authentication
      analyticsDataClient = new BetaAnalyticsDataClient({
        credentials: JSON.parse(serviceAccountCreds)
      })
    } else {
      return NextResponse.json({
        error: 'Analytics not configured',
        message: 'Either OAuth credentials (GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REFRESH_TOKEN) or GOOGLE_APPLICATION_CREDENTIALS_JSON is required',
        configured: false
      }, { status: 200 })
    }

    // Fetch overview metrics
    const [overviewResponse] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
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
    })

    // Fetch top pages
    const [topPagesResponse] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [{ startDate, endDate }],
      dimensions: [{ name: 'pageTitle' }, { name: 'pagePath' }],
      metrics: [
        { name: 'screenPageViews' },
        { name: 'activeUsers' }
      ],
      orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }],
      limit: 10
    })

    // Fetch traffic sources
    const [trafficSourcesResponse] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [{ startDate, endDate }],
      dimensions: [{ name: 'sessionSource' }],
      metrics: [
        { name: 'sessions' },
        { name: 'activeUsers' }
      ],
      orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
      limit: 10
    })

    // Fetch device categories
    const [deviceResponse] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [{ startDate, endDate }],
      dimensions: [{ name: 'deviceCategory' }],
      metrics: [{ name: 'activeUsers' }],
      orderBys: [{ metric: { metricName: 'activeUsers' }, desc: true }]
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

    if (overviewResponse.rows && overviewResponse.rows.length > 0) {
      overviewResponse.rows.forEach(row => {
        totals.users += parseInt(row.metricValues?.[0]?.value || '0')
        totals.sessions += parseInt(row.metricValues?.[1]?.value || '0')
        totals.pageViews += parseInt(row.metricValues?.[2]?.value || '0')
      })

      // Average duration and bounce rate from last row (summary)
      const lastRow = overviewResponse.rows[overviewResponse.rows.length - 1]
      totals.avgSessionDuration = parseFloat(lastRow.metricValues?.[3]?.value || '0')
      totals.bounceRate = parseFloat(lastRow.metricValues?.[4]?.value || '0')
    }

    return NextResponse.json({
      configured: true,
      dateRange: { startDate, endDate },
      totals,
      dailyMetrics: formatRows(overviewResponse.rows || []),
      topPages: formatRows(topPagesResponse.rows || []),
      trafficSources: formatRows(trafficSourcesResponse.rows || []),
      devices: formatRows(deviceResponse.rows || [])
    })

  } catch (error: any) {
    console.error('GA4 API Error:', error)
    return NextResponse.json(
      {
        error: 'Failed to fetch analytics data',
        message: error.message,
        configured: true
      },
      { status: 500 }
    )
  }
}
