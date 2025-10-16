'use client';

import { useState } from 'react';
import { Navigation, Footer } from '@/components/sections';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    inquiry_type: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Form submitted:', formData);
    setFormStatus('success');

    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        organization: '',
        inquiry_type: '',
        message: '',
      });
      setFormStatus('idle');
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="pt-20">
        {/* Single Section - Above the Fold */}
        <section className="min-h-[calc(100vh-5rem)] flex items-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - Contact Info */}
              <div className="space-y-8">
                {/* Hero Title */}
                <div>
                  <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                    Let's Connect
                  </h1>
                  <p className="text-xl text-blue-600 font-semibold mb-4">
                    Board Opportunities • Speaking • Advisory
                  </p>
                  <p className="text-base text-gray-600 leading-relaxed">
                    Open to board positions with technology oversight focus, speaking at premier conferences,
                    and selective advisory opportunities.
                  </p>
                </div>

                {/* Contact Methods - Compact */}
                <div className="space-y-4">
                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/chinardeshpande/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all group"
                  >
                    <div className="w-12 h-12 bg-[#0A66C2] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">LinkedIn</h3>
                      <p className="text-sm text-gray-500">linkedin.com/in/chinardeshpande</p>
                    </div>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>

                  {/* Email */}
                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-sm text-gray-500">Available upon request</p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-500 to-gray-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Location</h3>
                      <p className="text-sm text-gray-500">United Kingdom</p>
                    </div>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="/board-bio"
                    className="px-4 py-2 text-center text-sm font-semibold text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-all"
                  >
                    View Board Bio
                  </a>
                  <a
                    href="/case-studies"
                    className="px-4 py-2 text-center text-sm font-semibold text-purple-600 border-2 border-purple-600 rounded-lg hover:bg-purple-50 transition-all"
                  >
                    Success Stories
                  </a>
                </div>
              </div>

              {/* Right Column - Compact Form */}
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name and Email */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium text-gray-700 mb-1">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  {/* Organization and Inquiry Type */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="organization" className="block text-xs font-medium text-gray-700 mb-1">
                        Organization
                      </label>
                      <input
                        type="text"
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="inquiry_type" className="block text-xs font-medium text-gray-700 mb-1">
                        Type *
                      </label>
                      <select
                        id="inquiry_type"
                        name="inquiry_type"
                        required
                        value={formData.inquiry_type}
                        onChange={handleChange}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                      >
                        <option value="">Select</option>
                        <option value="board">Board</option>
                        <option value="speaking">Speaking</option>
                        <option value="advisory">Advisory</option>
                        <option value="media">Media</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Tell me about your opportunity..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting' || formStatus === 'success'}
                    className={`w-full px-6 py-3 rounded-lg font-semibold transition-all ${
                      formStatus === 'success'
                        ? 'bg-emerald-500 text-white cursor-not-allowed'
                        : formStatus === 'submitting'
                        ? 'bg-gray-400 text-white cursor-not-allowed'
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl'
                    }`}
                  >
                    {formStatus === 'submitting' ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : formStatus === 'success' ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Message Sent!
                      </span>
                    ) : (
                      'Send Message →'
                    )}
                  </button>

                  {/* Privacy & Response */}
                  <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
                    <p className="text-xs text-gray-600 leading-relaxed">
                      <span className="font-semibold text-blue-700">Response within 48 hours.</span> Your information is confidential and not shared with third parties.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
