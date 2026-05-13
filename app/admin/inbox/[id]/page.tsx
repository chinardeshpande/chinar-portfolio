'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Navigation } from '@/components/admin/Navigation'
import type { EnquiryWithReplies, EmailTemplate } from '@/lib/types/enquiry'

export default function EnquiryDetailPage() {
  const params = useParams()
  const router = useRouter()
  const id = params.id as string

  const [enquiry, setEnquiry] = useState<EnquiryWithReplies | null>(null)
  const [templates, setTemplates] = useState<EmailTemplate[]>([])
  const [showReplyForm, setShowReplyForm] = useState(false)
  const [replyData, setReplyData] = useState({ subject: '', body: '' })
  const [selectedTemplate, setSelectedTemplate] = useState('')
  const [sending, setSending] = useState(false)

  useEffect(() => {
    fetchEnquiry()
    fetchTemplates()
  }, [id])

  const fetchEnquiry = async () => {
    const response = await fetch(`/api/admin/enquiries/${id}`)
    const data = await response.json()
    setEnquiry(data)
  }

  const fetchTemplates = async () => {
    const response = await fetch('/api/admin/templates')
    const data = await response.json()
    setTemplates(data)
  }

  const handleStatusChange = async (newStatus: string) => {
    await fetch(`/api/admin/enquiries/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: newStatus }),
    })
    fetchEnquiry()
  }

  const handleTemplateSelect = (templateId: string) => {
    const template = templates.find(t => t.id === templateId)
    if (template && enquiry) {
      let subject = template.subject
      let body = template.body

      // Replace placeholders
      subject = subject.replace(/\{\{name\}\}/g, enquiry.name)
      subject = subject.replace(/\{\{organization\}\}/g, enquiry.organization || '')

      body = body.replace(/\{\{name\}\}/g, enquiry.name)
      body = body.replace(/\{\{organization\}\}/g, enquiry.organization || '')
      body = body.replace(/\{\{inquiry_type\}\}/g, enquiry.inquiry_type)

      setReplyData({ subject, body })
      setSelectedTemplate(templateId)
    }
  }

  const handleSendReply = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)

    try {
      await fetch(`/api/admin/enquiries/${id}/reply`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(replyData),
      })

      setShowReplyForm(false)
      setReplyData({ subject: '', body: '' })
      setSelectedTemplate('')
      fetchEnquiry()
      alert('Reply sent successfully!')
    } catch (error) {
      alert('Failed to send reply')
    } finally {
      setSending(false)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  if (!enquiry) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <p className="p-8">Loading...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => router.back()}
          className="mb-6 text-blue-600 hover:text-blue-800 flex items-center gap-2"
        >
          ← Back to Inbox
        </button>

        {/* Enquiry Header */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">{enquiry.name}</h1>
              <p className="text-gray-600">{enquiry.email}</p>
              {enquiry.organization && (
                <p className="text-sm text-gray-500">{enquiry.organization}</p>
              )}
            </div>
            <div className="flex gap-2">
              <select
                value={enquiry.status}
                onChange={(e) => handleStatusChange(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="new">New</option>
                <option value="in_progress">In Progress</option>
                <option value="closed">Closed</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-sm text-gray-600">Inquiry Type</p>
              <p className="font-semibold">{enquiry.inquiry_type}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Received</p>
              <p className="font-semibold">{formatDate(enquiry.created_at)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Source Page</p>
              <p className="font-semibold text-sm">{enquiry.source_page}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">UTM Source</p>
              <p className="font-semibold">{enquiry.utm_source || 'Direct'}</p>
            </div>
          </div>

          <div className="border-t pt-4">
            <p className="text-sm text-gray-600 mb-2">Message</p>
            <p className="text-gray-900 whitespace-pre-wrap">{enquiry.message}</p>
          </div>
        </div>

        {/* Reply Form */}
        {!showReplyForm ? (
          <button
            onClick={() => setShowReplyForm(true)}
            className="mb-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Reply to Enquiry
          </button>
        ) : (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Send Reply</h2>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Use Template (Optional)
              </label>
              <select
                value={selectedTemplate}
                onChange={(e) => handleTemplateSelect(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">-- Select a template --</option>
                {templates.map((template) => (
                  <option key={template.id} value={template.id}>
                    {template.name}
                  </option>
                ))}
              </select>
            </div>

            <form onSubmit={handleSendReply} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  value={replyData.subject}
                  onChange={(e) => setReplyData({ ...replyData, subject: e.target.value })}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  value={replyData.body}
                  onChange={(e) => setReplyData({ ...replyData, body: e.target.value })}
                  required
                  rows={10}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="flex gap-2">
                <button
                  type="submit"
                  disabled={sending}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
                >
                  {sending ? 'Sending...' : 'Send Reply'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowReplyForm(false)
                    setReplyData({ subject: '', body: '' })
                  }}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Reply History */}
        {enquiry.replies && enquiry.replies.length > 0 && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold mb-4">Reply History</h2>
            <div className="space-y-4">
              {enquiry.replies.map((reply) => (
                <div key={reply.id} className="border-l-4 border-blue-500 pl-4">
                  <div className="flex justify-between items-start mb-2">
                    <p className="font-semibold text-gray-900">{reply.subject}</p>
                    <p className="text-sm text-gray-500">{formatDate(reply.sent_at)}</p>
                  </div>
                  <p className="text-gray-700 whitespace-pre-wrap">{reply.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
