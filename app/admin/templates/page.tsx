'use client'

import { useEffect, useState } from 'react'
import { Navigation } from '@/components/admin/Navigation'
import type { EmailTemplate } from '@/lib/types/enquiry'

export default function TemplatesPage() {
  const [templates, setTemplates] = useState<EmailTemplate[]>([])
  const [showModal, setShowModal] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchTemplates()
  }, [])

  const fetchTemplates = async () => {
    try {
      const response = await fetch('/api/admin/templates')
      const data = await response.json()
      setTemplates(data)
    } catch (error) {
      console.error('Error fetching templates:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">Email Templates</h1>
        </div>

        {loading ? (
          <div className="text-center py-12">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((template) => (
              <div key={template.id} className="bg-white rounded-lg shadow p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-gray-900">{template.name}</h3>
                    {template.category && (
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded mt-1 inline-block">
                        {template.category}
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Subject:</strong> {template.subject}
                </p>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">{template.body}</p>
              </div>
            ))}
          </div>
        )}

        {!loading && templates.length === 0 && (
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <p className="text-gray-600">No templates found. Default templates should have been created during setup.</p>
          </div>
        )}
      </main>
    </div>
  )
}
