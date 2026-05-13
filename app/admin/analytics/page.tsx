'use client'

import { useEffect, useState } from 'react'
import { Navigation } from '@/components/admin/Navigation'
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

interface GA4Data {
  configured: boolean
  totals: {
    users: number
    sessions: number
    pageViews: number
    avgSessionDuration: number
    bounceRate: number
  }
  dailyMetrics: any[]
  topPages: any[]
  trafficSources: any[]
  devices: any[]
}

interface SearchConsoleData {
  configured: boolean
  totals: {
    clicks: number
    impressions: number
    ctr: number
    position: number
  }
  dailyMetrics: any[]
  topQueries: any[]
  topPages: any[]
  countries: any[]
  devices: any[]
}

export default function AnalyticsPage() {
  const [ga4Data, setGa4Data] = useState<GA4Data | null>(null)
  const [searchConsoleData, setSearchConsoleData] = useState<SearchConsoleData | null>(null)
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [activeTab, setActiveTab] = useState<'overview' | 'ga4' | 'seo'>('overview')
  const [dateRange, setDateRange] = useState('30')
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)

  useEffect(() => {
    fetchAnalytics()
  }, [dateRange])

  const fetchAnalytics = async (isRefresh = false) => {
    if (isRefresh) {
      setRefreshing(true)
    } else {
      setLoading(true)
    }

    try {
      const [ga4Response, searchConsoleResponse] = await Promise.all([
        fetch(`/api/admin/analytics/ga4?startDate=${dateRange}daysAgo&endDate=today`),
        fetch(`/api/admin/analytics/search-console?startDate=${getDateDaysAgo(parseInt(dateRange))}&endDate=${getDateDaysAgo(0)}`)
      ])

      const ga4 = await ga4Response.json()
      const searchConsole = await searchConsoleResponse.json()

      setGa4Data(ga4)
      setSearchConsoleData(searchConsole)
      setLastUpdated(new Date())
    } catch (error) {
      console.error('Error fetching analytics:', error)
    } finally {
      setLoading(false)
      setRefreshing(false)
    }
  }

  const handleRefresh = () => {
    fetchAnalytics(true)
  }

  const getDateDaysAgo = (days: number): string => {
    const date = new Date()
    date.setDate(date.getDate() - days)
    return date.toISOString().split('T')[0]
  }

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}m ${secs}s`
  }

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat().format(Math.round(num))
  }

  const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899']

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-blue-600 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <p className="text-gray-900 font-medium">Loading Analytics Dashboard</p>
          <p className="text-sm text-gray-600 mt-1">Fetching your performance data...</p>
        </div>
      </div>
    )
  }

  const ga4Configured = ga4Data?.configured
  const searchConsoleConfigured = searchConsoleData?.configured

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
              <p className="text-gray-600 mt-2">
                Performance metrics and SEO insights
                {lastUpdated && (
                  <span className="text-sm text-gray-500 ml-2">
                    • Last updated: {lastUpdated.toLocaleTimeString()}
                  </span>
                )}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleRefresh}
                disabled={refreshing}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg
                  className={`w-4 h-4 text-gray-600 ${refreshing ? 'animate-spin' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <span className="text-sm font-medium text-gray-700">
                  {refreshing ? 'Refreshing...' : 'Refresh'}
                </span>
              </button>

              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="7">Last 7 days</option>
                <option value="30">Last 30 days</option>
                <option value="90">Last 90 days</option>
              </select>
            </div>
          </div>
        </div>

        {/* Configuration Warning */}
        {(!ga4Configured || !searchConsoleConfigured) && (
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-6 mb-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-yellow-900 mb-2">Analytics Configuration Required</h3>
                <div className="space-y-2 text-sm text-yellow-800 mb-4">
                  {!ga4Configured && (
                    <div className="flex items-start gap-2">
                      <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                      </svg>
                      <p><strong>Google Analytics 4:</strong> Add GA4_PROPERTY_ID and GOOGLE_APPLICATION_CREDENTIALS_JSON to environment variables</p>
                    </div>
                  )}
                  {!searchConsoleConfigured && (
                    <div className="flex items-start gap-2">
                      <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                      </svg>
                      <p><strong>Search Console:</strong> Add SEARCH_CONSOLE_SITE_URL and GOOGLE_APPLICATION_CREDENTIALS_JSON to environment variables</p>
                    </div>
                  )}
                </div>
                <a
                  href="https://github.com/chinardeshpande/chinar-portfolio/blob/main/ANALYTICS-API-SETUP.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white font-medium rounded-lg transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  View Setup Guide
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          {['overview', 'ga4', 'seo'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-6 py-2 rounded-lg font-medium transition-all border ${
                activeTab === tab
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              {tab === 'overview' && 'Overview'}
              {tab === 'ga4' && 'Google Analytics'}
              {tab === 'seo' && 'Search Console'}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Combined Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ga4Configured && ga4Data && (
                <>
                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm font-medium text-gray-600">Total Users</p>
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-3xl font-bold text-gray-900">{formatNumber(ga4Data.totals.users)}</p>
                    <p className="text-xs text-gray-500 mt-1">From Google Analytics</p>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm font-medium text-gray-600">Page Views</p>
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-3xl font-bold text-gray-900">{formatNumber(ga4Data.totals.pageViews)}</p>
                    <p className="text-xs text-gray-500 mt-1">From Google Analytics</p>
                  </div>
                </>
              )}

              {searchConsoleConfigured && searchConsoleData && (
                <>
                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm font-medium text-gray-600">Search Clicks</p>
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-3xl font-bold text-gray-900">{formatNumber(searchConsoleData.totals.clicks)}</p>
                    <p className="text-xs text-gray-500 mt-1">From Search Console</p>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm font-medium text-gray-600">Avg Position</p>
                      <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-3xl font-bold text-gray-900">{searchConsoleData.totals.position.toFixed(1)}</p>
                    <p className="text-xs text-gray-500 mt-1">In search results</p>
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* GA4 Tab */}
        {activeTab === 'ga4' && ga4Configured && ga4Data && (
          <div className="space-y-6">
            {/* GA4 Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                <p className="text-sm font-medium text-gray-600 mb-1">Users</p>
                <p className="text-2xl font-bold text-gray-900">{formatNumber(ga4Data.totals.users)}</p>
              </div>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                <p className="text-sm font-medium text-gray-600 mb-1">Sessions</p>
                <p className="text-2xl font-bold text-gray-900">{formatNumber(ga4Data.totals.sessions)}</p>
              </div>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                <p className="text-sm font-medium text-gray-600 mb-1">Page Views</p>
                <p className="text-2xl font-bold text-gray-900">{formatNumber(ga4Data.totals.pageViews)}</p>
              </div>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                <p className="text-sm font-medium text-gray-600 mb-1">Avg Session</p>
                <p className="text-2xl font-bold text-gray-900">{formatDuration(ga4Data.totals.avgSessionDuration)}</p>
              </div>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                <p className="text-sm font-medium text-gray-600 mb-1">Bounce Rate</p>
                <p className="text-2xl font-bold text-gray-900">{(ga4Data.totals.bounceRate * 100).toFixed(1)}%</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Top Pages */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Pages</h3>
                <div className="space-y-3">
                  {ga4Data.topPages.slice(0, 5).map((page, idx) => (
                    <div key={idx} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">{page.dimensions[0]}</p>
                        <p className="text-xs text-gray-500 truncate">{page.dimensions[1]}</p>
                      </div>
                      <div className="ml-4 text-right">
                        <p className="text-sm font-semibold text-gray-900">{formatNumber(parseInt(page.metrics[0]))}</p>
                        <p className="text-xs text-gray-500">views</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Traffic Sources */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Traffic Sources</h3>
                <div className="space-y-3">
                  {ga4Data.trafficSources.slice(0, 5).map((source, idx) => (
                    <div key={idx} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                      <p className="text-sm font-medium text-gray-900">{source.dimensions[0]}</p>
                      <div className="text-right">
                        <p className="text-sm font-semibold text-gray-900">{formatNumber(parseInt(source.metrics[0]))}</p>
                        <p className="text-xs text-gray-500">sessions</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Device Breakdown */}
            {ga4Data.devices.length > 0 && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Users by Device</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={ga4Data.devices.map(d => ({
                        name: d.dimensions[0],
                        value: parseInt(d.metrics[0])
                      }))}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${((percent || 0) * 100).toFixed(0)}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {ga4Data.devices.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            )}
          </div>
        )}

        {/* SEO Tab */}
        {activeTab === 'seo' && searchConsoleConfigured && searchConsoleData && (
          <div className="space-y-6">
            {/* SEO Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                <p className="text-sm font-medium text-gray-600 mb-1">Total Clicks</p>
                <p className="text-2xl font-bold text-gray-900">{formatNumber(searchConsoleData.totals.clicks)}</p>
              </div>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                <p className="text-sm font-medium text-gray-600 mb-1">Impressions</p>
                <p className="text-2xl font-bold text-gray-900">{formatNumber(searchConsoleData.totals.impressions)}</p>
              </div>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                <p className="text-sm font-medium text-gray-600 mb-1">Avg CTR</p>
                <p className="text-2xl font-bold text-gray-900">{searchConsoleData.totals.ctr.toFixed(2)}%</p>
              </div>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                <p className="text-sm font-medium text-gray-600 mb-1">Avg Position</p>
                <p className="text-2xl font-bold text-gray-900">{searchConsoleData.totals.position.toFixed(1)}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Top Queries */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Search Queries</h3>
                <div className="space-y-3">
                  {searchConsoleData.topQueries.slice(0, 10).map((query: any, idx) => (
                    <div key={idx} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900">{query.keys[0]}</p>
                        <p className="text-xs text-gray-500">Position: {query.position?.toFixed(1)}</p>
                      </div>
                      <div className="ml-4 text-right">
                        <p className="text-sm font-semibold text-gray-900">{formatNumber(query.clicks)}</p>
                        <p className="text-xs text-gray-500">{formatNumber(query.impressions)} impr.</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top Pages */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Pages in Search</h3>
                <div className="space-y-3">
                  {searchConsoleData.topPages.slice(0, 10).map((page: any, idx) => (
                    <div key={idx} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">{page.keys[0]}</p>
                        <p className="text-xs text-gray-500">CTR: {(page.ctr * 100).toFixed(2)}%</p>
                      </div>
                      <div className="ml-4 text-right">
                        <p className="text-sm font-semibold text-gray-900">{formatNumber(page.clicks)}</p>
                        <p className="text-xs text-gray-500">{formatNumber(page.impressions)} impr.</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Countries */}
            {searchConsoleData.countries.length > 0 && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Countries</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart
                    data={searchConsoleData.countries.slice(0, 10).map((c: any) => ({
                      country: c.keys[0],
                      clicks: c.clicks
                    }))}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="country" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="clicks" fill="#3B82F6" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  )
}
