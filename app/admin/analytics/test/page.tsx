'use client'

import { useEffect, useState } from 'react'
import { Navigation } from '@/components/admin/Navigation'

export default function AnalyticsTestPage() {
  const [ga4Status, setGa4Status] = useState<any>(null)
  const [searchConsoleStatus, setSearchConsoleStatus] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    testConnections()
  }, [])

  const testConnections = async () => {
    try {
      // Test GA4
      const ga4Response = await fetch('/api/admin/analytics/ga4?startDate=7daysAgo&endDate=today')
      const ga4Data = await ga4Response.json()
      setGa4Status({
        status: ga4Response.status,
        configured: ga4Data.configured,
        error: ga4Data.error,
        message: ga4Data.message,
        data: ga4Data
      })

      // Test Search Console
      const scResponse = await fetch('/api/admin/analytics/search-console')
      const scData = await scResponse.json()
      setSearchConsoleStatus({
        status: scResponse.status,
        configured: scData.configured,
        error: scData.error,
        message: scData.message,
        data: scData
      })
    } catch (error: any) {
      console.error('Test error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Analytics Connection Test</h1>

        {loading ? (
          <p>Testing connections...</p>
        ) : (
          <div className="space-y-6">
            {/* GA4 Status */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Google Analytics 4</h2>

              <div className="space-y-2 text-sm">
                <p><strong>HTTP Status:</strong> {ga4Status?.status}</p>
                <p><strong>Configured:</strong> {ga4Status?.configured ? '✅ Yes' : '❌ No'}</p>
                {ga4Status?.error && (
                  <div className="bg-red-50 border border-red-200 p-4 rounded mt-4">
                    <p className="text-red-800"><strong>Error:</strong> {ga4Status.error}</p>
                    <p className="text-red-600 text-xs mt-2">{ga4Status.message}</p>
                  </div>
                )}

                <details className="mt-4">
                  <summary className="cursor-pointer text-blue-600 hover:text-blue-800">View Full Response</summary>
                  <pre className="mt-2 bg-gray-50 p-4 rounded text-xs overflow-auto">
                    {JSON.stringify(ga4Status?.data, null, 2)}
                  </pre>
                </details>
              </div>
            </div>

            {/* Search Console Status */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Google Search Console</h2>

              <div className="space-y-2 text-sm">
                <p><strong>HTTP Status:</strong> {searchConsoleStatus?.status}</p>
                <p><strong>Configured:</strong> {searchConsoleStatus?.configured ? '✅ Yes' : '❌ No'}</p>
                {searchConsoleStatus?.error && (
                  <div className="bg-red-50 border border-red-200 p-4 rounded mt-4">
                    <p className="text-red-800"><strong>Error:</strong> {searchConsoleStatus.error}</p>
                    <p className="text-red-600 text-xs mt-2">{searchConsoleStatus.message}</p>
                  </div>
                )}

                <details className="mt-4">
                  <summary className="cursor-pointer text-blue-600 hover:text-blue-800">View Full Response</summary>
                  <pre className="mt-2 bg-gray-50 p-4 rounded text-xs overflow-auto">
                    {JSON.stringify(searchConsoleStatus?.data, null, 2)}
                  </pre>
                </details>
              </div>
            </div>

            {/* Environment Check */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Fix Steps</h2>

              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>Verify all 5 environment variables are set in Netlify</li>
                <li>Make sure there are no extra spaces in the values</li>
                <li>Trigger a new deployment after adding variables</li>
                <li>Wait for deployment to complete (~2-3 minutes)</li>
                <li>Refresh this page to test again</li>
              </ol>

              <button
                onClick={testConnections}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Test Again
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
