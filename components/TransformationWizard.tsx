'use client';

import { useState } from 'react';
import Link from 'next/link';

type Journey = 'independent-director' | 'startup-mentor' | 'strategy-advisor' | null;

interface FormData {
  name: string;
  email: string;
  company: string;
  role: string;
  message: string;
}

interface TransformationWizardProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TransformationWizard({ isOpen, onClose }: TransformationWizardProps) {
  const [step, setStep] = useState(1);
  const [selectedJourney, setSelectedJourney] = useState<Journey>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    role: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const journeyOptions = [
    {
      id: 'independent-director' as Journey,
      title: 'Independent Director',
      subtitle: 'Board-Level Governance',
      description: 'Board oversight for AI adoption, GCC strategy, and transformation',
      iconUrl: '/images/wizard/board-icon.png',
      color: 'from-blue-500 to-blue-600',
      emoji: '👔',
      pageUrl: '/independent-director'
    },
    {
      id: 'startup-mentor' as Journey,
      title: 'Startup Mentor',
      subtitle: 'Hands-On Guidance',
      description: 'Strategic mentorship for early-stage technology companies',
      iconUrl: '/images/wizard/startup-icon.png',
      color: 'from-green-500 to-green-600',
      emoji: '🚀',
      pageUrl: '/startup-mentor'
    },
    {
      id: 'strategy-advisor' as Journey,
      title: 'Strategy Advisor',
      subtitle: 'Tech Transformation',
      description: 'End-to-end advisory for AI adoption and modernization',
      iconUrl: '/images/wizard/strategy-icon.png',
      color: 'from-purple-500 to-purple-600',
      emoji: '⚡',
      pageUrl: '/strategic-advisor'
    }
  ];

  const valuePropositions = {
    'independent-director': {
      title: 'Board & Independent Director',
      iconUrl: '/images/wizard/board-hero.png',
      emoji: '👔',
      learnMoreUrl: '/independent-director',
      points: [
        { label: 'AI Governance', detail: 'Framework design, risk management, and ROI oversight for enterprise AI deployment' },
        { label: 'GCC Strategy', detail: 'India capability center setup, scaling, and performance governance beyond cost arbitrage' },
        { label: 'Technology Oversight', detail: 'CTO/VP evaluation, M&A due diligence, transformation roadmap governance' },
        { label: 'Operational Rigor', detail: 'Board reporting on cybersecurity, platform modernization, and technology investments' }
      ],
      experience: '30+ years | 14 countries | Built India GCC from 0 to 200+ engineers | CTO at FTSE 250 company',
    },
    'startup-mentor': {
      title: 'Startup Mentorship',
      iconUrl: '/images/wizard/startup-hero.png',
      emoji: '🚀',
      learnMoreUrl: '/startup-mentor',
      points: [
        { label: 'Technology Strategy', detail: 'Product architecture, tech stack decisions, and scalability planning from MVP to scale' },
        { label: 'Team Building', detail: 'India engineering team setup, hiring playbooks, and technical leadership development' },
        { label: 'Fundraising Prep', detail: 'Investor-ready technology narrative, due diligence readiness, and valuation positioning' },
        { label: 'Go-to-Market', detail: 'Product-market fit validation, launch strategy, and operational discipline for growth' }
      ],
      experience: 'Active founder in HR-tech and ed-tech | Led 15 product builds | Mentored 50+ startups',
    },
    'strategy-advisor': {
      title: 'Strategic Technology Transformation',
      iconUrl: '/images/wizard/transformation-hero.png',
      emoji: '⚡',
      learnMoreUrl: '/strategic-advisor',
      points: [
        { label: 'AI at Scale', detail: 'Pilot to production deployment with measurable P&L impact across operations and analytics' },
        { label: 'GCC Blueprint', detail: 'Complete India capability center strategy from site selection to 24x7 operational excellence' },
        { label: 'Automation & Robotics', detail: 'Warehouse automation (Autostore, Geek+), intelligent process automation, cloud migration' },
        { label: 'Fractional CTO', detail: 'Part-time strategic technology leadership for enterprises and PE portfolio companies' }
      ],
      experience: 'Led robotics in 18 warehouses | $200M+ transformation programs | 2500+ team leadership',
    }
  };

  const handleJourneySelect = (journey: Journey) => {
    setSelectedJourney(journey);
    setStep(2);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          journey: selectedJourney,
          source: 'transformation-wizard'
        })
      });

      if (response.ok) {
        setStep(4);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setStep(1);
    setSelectedJourney(null);
    setFormData({ name: '', email: '', company: '', role: '', message: '' });
    onClose();
  };

  if (!isOpen) return null;

  const selectedOption = journeyOptions.find(j => j.id === selectedJourney);
  const valueProps = selectedJourney ? valuePropositions[selectedJourney] : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden animate-slideUp">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
        >
          <svg className="w-6 h-6 text-gray-600 group-hover:text-gray-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Content */}
        <div className="overflow-y-auto max-h-[90vh]">
          {/* Header with Progress */}
          <div className="bg-gradient-to-r from-primary-600 via-blue-600 to-primary-700 px-8 py-6 relative overflow-hidden">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
            </div>
            <h2 className="text-2xl font-bold text-white mb-4 relative z-10">Start Your Transformation Journey</h2>

            {/* Progress Indicator */}
            <div className="flex items-center gap-3 relative z-10">
              {[1, 2, 3, 4].map((s) => (
                <div key={s} className="flex items-center flex-1">
                  <div className="flex flex-col items-center gap-1 flex-1">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500 ${
                        s === step
                          ? 'bg-white text-primary-600 scale-110 shadow-lg animate-pulse'
                          : s < step
                          ? 'bg-primary-300 text-white shadow-md'
                          : 'bg-white/30 text-white/60'
                      }`}
                    >
                      {s < step ? (
                        <svg className="w-5 h-5 animate-checkmark" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      ) : s}
                    </div>
                    <span className={`text-xs font-medium transition-all duration-300 ${s === step ? 'text-white font-bold' : 'text-white/60'}`}>
                      {s === 1 && 'Select'}
                      {s === 2 && 'Learn'}
                      {s === 3 && 'Connect'}
                      {s === 4 && 'Done'}
                    </span>
                  </div>
                  {s < 4 && (
                    <div className="relative h-1 flex-1">
                      <div className="absolute inset-0 bg-white/30 rounded-full"></div>
                      <div className={`absolute inset-0 bg-gradient-to-r from-primary-300 to-white rounded-full transition-all duration-700 ${s < step ? 'scale-x-100' : 'scale-x-0'} origin-left`} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Body */}
          <div className="p-8">
            {/* Step 1: Journey Selection */}
            {step === 1 && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                  How Can I Help You?
                </h3>
                <p className="text-gray-600 text-center mb-8">
                  Select the area where you need guidance
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {journeyOptions.map((option, idx) => (
                    <Link
                      key={option.id}
                      href={option.pageUrl}
                      onClick={onClose}
                      style={{ animationDelay: `${idx * 100}ms` }}
                      className="group relative p-6 rounded-xl border-2 border-gray-200 hover:border-primary-500 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-center bg-white overflow-hidden animate-fadeInUp block"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${option.color} opacity-0 group-hover:opacity-10 transition-all duration-500`} />

                      <div className="relative">
                        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-3 group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                          <img
                            src={option.iconUrl}
                            alt={option.title}
                            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                              const emoji = e.currentTarget.nextElementSibling as HTMLElement;
                              if (emoji) emoji.style.display = 'block';
                            }}
                          />
                          <span className="text-4xl hidden">{option.emoji}</span>
                        </div>
                        <h4 className="text-lg font-bold text-gray-900 mb-1">
                          {option.title}
                        </h4>
                        <p className="text-sm font-semibold text-primary-600 mb-2">
                          {option.subtitle}
                        </p>
                        <p className="text-sm text-gray-600 mb-3">
                          {option.description}
                        </p>
                        <div className="inline-flex items-center gap-1 text-xs font-semibold text-primary-600">
                          Learn More
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Value Proposition */}
            {step === 2 && valueProps && selectedOption && (
              <div>
                {/* Hero Section - Compact with icon on left and buttons on right */}
                <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-gray-200">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-100 to-blue-100 flex items-center justify-center p-3">
                        <img
                          src={valueProps.iconUrl}
                          alt={valueProps.title}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            const emoji = e.currentTarget.nextElementSibling as HTMLElement;
                            if (emoji) emoji.style.display = 'block';
                          }}
                        />
                        <span className="text-3xl hidden">{valueProps.emoji}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900">
                        {valueProps.title}
                      </h3>
                      <p className="text-xs text-gray-600 mt-1">{valueProps.experience}</p>
                    </div>
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex gap-2 flex-shrink-0">
                    <button
                      onClick={() => setStep(1)}
                      className="px-4 py-2 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition-colors text-sm"
                    >
                      ← Back
                    </button>
                    <button
                      onClick={() => setStep(3)}
                      className="px-4 py-2 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors text-sm"
                    >
                      Next →
                    </button>
                  </div>
                </div>

                {/* Value Proposition - Compact */}
                <div>
                  <h4 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide flex items-center gap-2">
                    <div className="w-1 h-4 bg-gradient-to-b from-primary-500 to-blue-500 rounded-full"></div>
                    What value can I bring:
                  </h4>
                  <div className="grid grid-cols-1 gap-3 mb-4">
                    {valueProps.points.map((point, idx) => (
                      <div
                        key={idx}
                        style={{ animationDelay: `${idx * 100}ms` }}
                        className="flex items-start gap-3 bg-gradient-to-br from-gray-50 to-white rounded-lg p-3 border border-gray-100 hover:border-primary-200 hover:shadow-md transition-all duration-300 animate-fadeInUp group"
                      >
                        <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                          <svg className="w-full h-full text-primary-600 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-gray-900 group-hover:text-primary-700 transition-colors">{point.label}</p>
                          <p className="text-xs text-gray-600 mt-0.5">{point.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Learn More Link */}
                  <div className="text-center pt-3 border-t border-gray-200">
                    <Link
                      href={valueProps.learnMoreUrl}
                      onClick={onClose}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Learn More About This Role
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Form */}
            {step === 3 && (
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Let's Connect
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Share your details so I can understand your needs better
                    </p>
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex gap-2 flex-shrink-0">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-4 py-2 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition-colors text-sm"
                    >
                      ← Back
                    </button>
                    <button
                      type="submit"
                      form="wizard-form"
                      disabled={isSubmitting}
                      className="px-4 py-2 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50 text-sm"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit →'}
                    </button>
                  </div>
                </div>

                <form id="wizard-form" onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="group">
                      <label className="block text-sm font-semibold text-gray-700 mb-1 group-focus-within:text-primary-600 transition-colors">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 hover:border-gray-400"
                        placeholder="John Smith"
                      />
                    </div>

                    <div className="group">
                      <label className="block text-sm font-semibold text-gray-700 mb-1 group-focus-within:text-primary-600 transition-colors">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 hover:border-gray-400"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="group">
                      <label className="block text-sm font-semibold text-gray-700 mb-1 group-focus-within:text-primary-600 transition-colors">
                        Company <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 hover:border-gray-400"
                        placeholder="Your Company"
                      />
                    </div>

                    <div className="group">
                      <label className="block text-sm font-semibold text-gray-700 mb-1 group-focus-within:text-primary-600 transition-colors">
                        Your Role <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 hover:border-gray-400"
                        placeholder="CEO, CTO, etc."
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-1 group-focus-within:text-primary-600 transition-colors">
                      What brings you here? <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 hover:border-gray-400 resize-none"
                      placeholder="Tell me about your situation, challenges, or what you're looking for..."
                    />
                  </div>
                </form>
              </div>
            )}

            {/* Step 4: Thank You */}
            {step === 4 && (
              <div className="text-center py-8">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg animate-slideUp">
                  <svg className="w-10 h-10 text-white animate-checkmark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-3 animate-fadeInUp">
                  Thank You!
                </h3>
                <p className="text-lg text-gray-600 mb-2 animate-fadeInUp" style={{ animationDelay: '100ms' }}>
                  Your message has been received.
                </p>
                <p className="text-gray-600 mb-6 animate-fadeInUp" style={{ animationDelay: '200ms' }}>
                  I'll review your details and respond within 48 hours.
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-primary-50 border border-blue-200 rounded-lg p-4 mb-6 animate-fadeInUp" style={{ animationDelay: '300ms' }}>
                  <div className="flex items-center justify-center gap-2 text-sm text-blue-900">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <p>
                      Confirmation email sent to <strong>{formData.email}</strong>
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link
                    href="/about"
                    onClick={handleClose}
                    className="block w-full px-6 py-3 bg-gradient-to-r from-primary-600 to-blue-600 text-white font-semibold rounded-lg hover:from-primary-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 animate-fadeInUp"
                    style={{ animationDelay: '400ms' }}
                  >
                    Learn More About Chinar
                  </Link>
                  <button
                    onClick={handleClose}
                    className="block w-full px-6 py-3 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition-all duration-300 hover:-translate-y-0.5 animate-fadeInUp"
                    style={{ animationDelay: '500ms' }}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
