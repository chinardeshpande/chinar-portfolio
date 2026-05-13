'use client'

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { Navigation } from '@/components/admin/Navigation'
import Link from 'next/link'

interface DashboardStats {
  total_enquiries: number
  new_enquiries: number
  in_progress: number
  closed: number
  today_enquiries: number
  this_week: number
}

export default function AdminDashboard() {
  const { data: session } = useSession()
  const [stats, setStats] = useState<DashboardStats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    try {
      const response = await fetch('/api/admin/stats')
      const data = await response.json()
      setStats(data)
    } catch (error) {
      console.error('Error fetching stats:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="flex items-center justify-center h-screen">
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome back, {session?.user?.name}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">Total Enquiries</p>
              <span className="text-2xl">📊</span>
            </div>
            <p className="text-3xl font-bold text-blue-600">{stats?.total_enquiries || 0}</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">New</p>
              <span className="text-2xl">📬</span>
            </div>
            <p className="text-3xl font-bold text-green-600">{stats?.new_enquiries || 0}</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">In Progress</p>
              <span className="text-2xl">⏳</span>
            </div>
            <p className="text-3xl font-bold text-yellow-600">{stats?.in_progress || 0}</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">This Week</p>
              <span className="text-2xl">📈</span>
            </div>
            <p className="text-3xl font-bold text-purple-600">{stats?.this_week || 0}</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              href="/admin/inbox"
              className="p-4 border-2 border-blue-200 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-all"
            >
              <div className="text-2xl mb-2">📥</div>
              <h3 className="font-semibold text-gray-900">View Inbox</h3>
              <p className="text-sm text-gray-600">Manage enquiries</p>
            </Link>

            <Link
              href="/admin/templates"
              className="p-4 border-2 border-green-200 rounded-lg hover:border-green-400 hover:bg-green-50 transition-all"
            >
              <div className="text-2xl mb-2">📝</div>
              <h3 className="font-semibold text-gray-900">Templates</h3>
              <p className="text-sm text-gray-600">Manage email templates</p>
            </Link>

            <Link
              href="/"
              target="_blank"
              className="p-4 border-2 border-purple-200 rounded-lg hover:border-purple-400 hover:bg-purple-50 transition-all"
            >
              <div className="text-2xl mb-2">🌐</div>
              <h3 className="font-semibold text-gray-900">View Site</h3>
              <p className="text-sm text-gray-600">Open public portfolio</p>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
