'use client';

import { useState } from 'react';
import { Navigation, Footer } from '@/components/sections';
import { Section, SectionHeader, Card } from '@/components/ui';

// Note: This uses client-side rendering for the form functionality
// In production, you would integrate with a backend API or service like Netlify Forms

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

    // Simulate form submission (in production, replace with actual API call)
    await new Promise(resolve => setTimeout(resolve, 1500));

    // For now, just log and show success
    console.log('Form submitted:', formData);
    setFormStatus('success');

    // Reset form after 3 seconds
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
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-20">
        {/* Hero */}
        <Section background="ivory" padding="default">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-display-xl text-slate-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-h3 text-gold-600 mb-8 font-display font-light">
              Board Opportunities, Speaking Engagements & Advisory Roles
            </p>
            <p className="text-body-xl text-slate-600 leading-relaxed">
              Open to board positions with technology oversight and digital transformation focus,
              speaking engagements at premier conferences, and selective advisory opportunities
              for technology startups and enterprise transformation initiatives.
            </p>
          </div>
        </Section>

        {/* Contact Methods */}
        <Section background="white" padding="default">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 mb-16">
            {/* LinkedIn */}
            <Card variant="boardroom" className="text-center">
              <div className="w-16 h-16 bg-[#0A66C2] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>
              <h3 className="font-display text-xl text-slate-900 mb-2">LinkedIn</h3>
              <p className="text-sm text-slate-600 mb-4">Professional Profile</p>
              <a
                href="https://www.linkedin.com/in/chinardeshpande/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-600 hover:text-gold-700 font-medium text-sm"
              >
                linkedin.com/in/chinardeshpande
              </a>
            </Card>

            {/* Email */}
            <Card variant="boardroom" className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-display text-xl text-slate-900 mb-2">Email</h3>
              <p className="text-sm text-slate-600 mb-4">Professional Inquiries</p>
              <p className="text-sm text-slate-500">
                Available upon request
              </p>
            </Card>

            {/* Location */}
            <Card variant="boardroom" className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-slate-500 to-slate-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-display text-xl text-slate-900 mb-2">Location</h3>
              <p className="text-sm text-slate-600 mb-4">Based in</p>
              <p className="text-sm text-slate-700 font-medium">
                United Kingdom
              </p>
            </Card>
          </div>
        </Section>

        {/* Contact Form */}
        <Section background="cream" padding="default">
          <SectionHeader
            title="Send a Message"
            subtitle="Let's discuss board opportunities, speaking engagements, or advisory roles"
            align="center"
          />

          <div className="max-w-3xl mx-auto">
            <Card variant="boardroom">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Organization and Inquiry Type */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-slate-700 mb-2">
                      Organization
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors"
                      placeholder="Your organization"
                    />
                  </div>

                  <div>
                    <label htmlFor="inquiry_type" className="block text-sm font-medium text-slate-700 mb-2">
                      Inquiry Type *
                    </label>
                    <select
                      id="inquiry_type"
                      name="inquiry_type"
                      required
                      value={formData.inquiry_type}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors bg-white"
                    >
                      <option value="">Select type</option>
                      <option value="board">Board Opportunities</option>
                      <option value="speaking">Speaking Engagements</option>
                      <option value="advisory">Advisory Roles</option>
                      <option value="media">Media & Press</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell me about your opportunity or inquiry..."
                  ></textarea>
                </div>

                {/* Privacy Note */}
                <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Your information is kept confidential and used solely for responding to your inquiry.
                    We do not share contact information with third parties.
                  </p>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting' || formStatus === 'success'}
                    className={`w-full px-8 py-4 rounded-lg font-medium transition-all ${
                      formStatus === 'success'
                        ? 'bg-emerald-500 text-white cursor-not-allowed'
                        : formStatus === 'submitting'
                        ? 'bg-slate-400 text-white cursor-not-allowed'
                        : 'bg-gold-500 hover:bg-gold-600 text-white shadow-lg hover:shadow-xl'
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
                      'Send Message'
                    )}
                  </button>
                </div>

                {/* Response Commitment */}
                <p className="text-sm text-slate-500 text-center">
                  Professional inquiries receive response within 48 hours. Board opportunities and
                  speaking engagements are reviewed carefully and responded to within one week.
                </p>
              </form>
            </Card>
          </div>
        </Section>

        {/* Inquiry Types */}
        <Section background="white" padding="default">
          <SectionHeader
            title="Areas of Interest"
            subtitle="Types of opportunities and engagements I'm open to"
            align="center"
          />

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Board Opportunities */}
            <Card variant="boardroom" className="text-center h-full">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg text-slate-900 mb-2">Board Opportunities</h3>
              <p className="text-sm text-slate-600">
                Independent Non-Executive Director positions with technology oversight focus
              </p>
            </Card>

            {/* Speaking Engagements */}
            <Card variant="boardroom" className="text-center h-full">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg text-slate-900 mb-2">Speaking Engagements</h3>
              <p className="text-sm text-slate-600">
                Keynotes, panels, and workshops on technology leadership and digital transformation
              </p>
            </Card>

            {/* Advisory Roles */}
            <Card variant="boardroom" className="text-center h-full">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg text-slate-900 mb-2">Advisory Roles</h3>
              <p className="text-sm text-slate-600">
                Selective advisory opportunities for technology startups and enterprise initiatives
              </p>
            </Card>

            {/* Media & Press */}
            <Card variant="boardroom" className="text-center h-full">
              <div className="w-12 h-12 bg-gradient-to-br from-gold-500 to-gold-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg text-slate-900 mb-2">Media & Press</h3>
              <p className="text-sm text-slate-600">
                Article collaborations, interviews, and thought leadership contributions
              </p>
            </Card>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
