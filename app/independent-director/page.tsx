'use client';

import { Navigation, Footer } from '@/components/sections';
import { useState } from 'react';
import Link from 'next/link';

export default function IndependentDirectorPage() {
  const [activeTab, setActiveTab] = useState<'why-me' | 'impact' | 'credentials'>('why-me');

  const roleDefinition = {
    title: "Independent Non-Executive Director",
    tagline: "Operator in the arena. Advisor in the room.",
    essence: "I serve on boards where technology decisions are genuinely hard, the stakes are real, and the people are serious."
  };

  const infographics = [
    {
      section: 'BOARD-LEVEL EXPERIENCE',
      stats: [
        { number: 'FTSE 250', label: 'PUBLIC COMPANY', sublabel: 'CTO THG' },
        { number: 'PE', label: 'WARBURG PINCUS', sublabel: 'PORTFOLIO' },
      ],
      description: 'Public company board reporting (THG), PE portfolio governance (Stellar with Warburg Pincus), executive dashboard design (Future Group featured in SAP Annual Report).'
    },
    {
      section: 'OPERATIONAL DEPTH',
      stats: [
        { number: '30+', label: 'YEARS', sublabel: '14 COUNTRIES' },
        { number: '2,500+', label: 'PROFESSIONALS', sublabel: 'LED' },
      ],
      description: 'Three decades running engineering, supply chain, finance platforms with P&L responsibility. Not theoretical advisory--operational discipline applied to board oversight.'
    },
    {
      section: 'AI GOVERNANCE CREDENTIALS',
      stats: [
        { number: '18', label: 'WAREHOUSES', sublabel: 'AI DEPLOYED' },
        { number: '300+', label: 'BRANDS', sublabel: '198 COUNTRIES' },
      ],
      description: 'Production AI deployment across 18 fulfillment centers serving 300+ brands. Computer vision for quality, predictive analytics for demand, ML optimization. GDPR compliance, model governance, regulatory adherence.'
    },
    {
      section: 'GCC STRATEGY EXPERTISE',
      stats: [
        { number: '0→200+', label: 'GCC ENGINEERS', sublabel: '24x7 OPS' },
      ],
      description: 'Built THG India GCC from ground up, scaling to 200+ engineers. Managed Global IT Delivery Centres (CITI: 150 professionals; HUL: Unilever global rollout across 120 countries).'
    },
    {
      section: 'TRANSFORMATION TRACK RECORD',
      stats: [
        { number: '6', label: 'ERP', sublabel: 'IMPLEMENTATIONS' },
        { number: 'INR 3B', label: 'BUDGET', sublabel: 'MANAGED' },
      ],
      description: 'SAP IS Retail (Future Group: 900+ stores, featured in SAP Annual Report). PeopleSoft HRMS (Unilever: 120 countries). Oracle Fusion, Infor WMS, ZingHR, Microsoft Navision.'
    },
  ];

  const whyMe = [
    {
      title: 'AI Governance with Production Scars',
      description: 'Deployed production AI systems across 18 warehouses serving 300+ brands in 198 countries. Built AI-driven Warehouse Control Systems managing 24x7 operations. Board oversight informed by operational discipline, not consultant theater.'
    },
    {
      title: 'GCC Strategy Beyond Cost Arbitrage',
      description: 'Built THG India GCC from zero to 200+ engineers running 24x7 operations. Managed Global IT Delivery Centre at CITI with 150 IT professionals. Board-level GCC governance informed by builder\'s hands, not theory.'
    },
    {
      title: 'Technology Transformation with Execution Discipline',
      description: 'Implemented 6 world-class ERPs across 8 industries and 14 countries. SAP IS Retail (Future Group: 3,200 users, 900+ stores, INR 3B budget)--featured in SAP Annual Report. Execution discipline that delivers measurable ROI.'
    },
    {
      title: 'Dual Operating Experience: Founder-Led to Institutional',
      description: 'Co-founded Millennium Sports (INR 1B business). Operated in public company settings (THG FTSE 250, Future Group, HUL). Navigated PE portfolio governance. Translate between founder-led velocity and institutional rigor.'
    },
  ];

  const businessImpact = [
    {
      category: 'AI Investment ROI',
      impacts: [
        'AI governance frameworks with clear ROI thresholds (pilot-to-production gate criteria)',
        'Model performance degradation monitoring and retraining protocols',
        'Data privacy compliance (GDPR, UK regulatory requirements)',
        'Board reporting dashboards translating technical metrics to P&L impact',
        'Risk mitigation: bias detection, model explainability, regulatory adherence'
      ]
    },
    {
      category: 'GCC Performance Metrics Beyond Cost',
      impacts: [
        'Productivity multipliers and quality indices (not just cost-per-FTE)',
        'Innovation contribution measurement (patents filed, products launched from GCC)',
        'Talent retention rates and career progression frameworks',
        'Knowledge transfer effectiveness (HQ to GCC, GCC to HQ)',
        'Operating model governance (captive vs. vendor-managed transitions)'
      ]
    },
    {
      category: 'Technology Transformation Value Realization',
      impacts: [
        'Cost reduction targets with specific timelines (e.g., £15M annualized savings at THG)',
        'Productivity improvements (33% faster client onboarding: 12 weeks → 8 weeks)',
        'Resilience KPIs (99.9%+ uptime, zero uncontrolled production releases)',
        'Automation coverage metrics (80%+ in Warehouse Control System microservices)',
        'Revenue expansion (Fulfillment-as-a-Service platform creating new high-margin streams)'
      ]
    },
    {
      category: 'M&A Technology Due Diligence',
      impacts: [
        'Technology debt assessment frameworks with remediation cost estimates',
        'Integration complexity evaluation (systems, data, processes, people)',
        'Cybersecurity posture audit and risk quantification',
        'Synergy realization roadmaps with specific value capture milestones',
        'Post-merger integration planning with clear accountability structures'
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main className="pt-16">
        {/* Top Navigation Bar */}
        <div className="bg-white border-b border-gray-200 sticky top-16 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to About
                </Link>
                <Link
                  href="/advisory-board"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Next
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <Link
                href="/contact?role=independent-director"
                className="inline-flex items-center gap-2 px-6 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
              >
                Schedule Board Conversation
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Compact Hero */}
        <section className="bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-md flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-1">
                <h1 className="text-2xl font-bold text-gray-900">{roleDefinition.title}</h1>
                <p className="text-sm text-gray-600 italic mt-1">{roleDefinition.tagline}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content - Full Width with 3 Tabs */}
        <section className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Tab Buttons */}
            <div className="border-b-2 border-gray-200 mb-0">
              <div className="flex gap-1">
                <button
                  onClick={() => setActiveTab('why-me')}
                  className={`px-6 py-2.5 text-sm font-semibold transition-all rounded-t ${
                    activeTab === 'why-me'
                      ? 'bg-white text-blue-600 border-l border-r border-t border-blue-600 -mb-0.5'
                      : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  Why I Am Best Suited
                </button>
                <button
                  onClick={() => setActiveTab('impact')}
                  className={`px-6 py-2.5 text-sm font-semibold transition-all rounded-t ${
                    activeTab === 'impact'
                      ? 'bg-white text-green-600 border-l border-r border-t border-green-600 -mb-0.5'
                      : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  Tangible Business Impact
                </button>
                <button
                  onClick={() => setActiveTab('credentials')}
                  className={`px-6 py-2.5 text-sm font-semibold transition-all rounded-t ${
                    activeTab === 'credentials'
                      ? 'bg-white text-purple-600 border-l border-r border-t border-purple-600 -mb-0.5'
                      : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  Proven Credentials
                </button>
              </div>
            </div>

            {/* Tab Content - Full Width */}
            <div>
              {/* Why Me Tab */}
              {activeTab === 'why-me' && (
                <div className="bg-white rounded-b-lg rounded-tr-lg border border-blue-600 border-t-0 p-6">
                  <div className="grid grid-cols-2 gap-4">
                    {whyMe.map((item, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-5 border-l-4 border-blue-600"
                      >
                        <h4 className="text-base font-bold text-gray-900 mb-2">{item.title}</h4>
                        <p className="text-sm text-gray-700 leading-relaxed">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Impact Tab */}
              {activeTab === 'impact' && (
                <div className="bg-white rounded-b-lg rounded-tr-lg border border-green-600 border-t-0 p-6">
                  <div className="grid grid-cols-4 gap-4">
                    {businessImpact.map((section, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-4 border border-green-200"
                      >
                        <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center">
                          <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                          {section.category}
                        </h4>
                        <ul className="space-y-2">
                          {section.impacts.map((impact, idx) => (
                            <li key={idx} className="flex items-start text-xs text-gray-700 leading-snug">
                              <svg className="w-3 h-3 text-green-600 flex-shrink-0 mr-1.5 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              <span>{impact}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Credentials Tab - Landscape Infographics */}
              {activeTab === 'credentials' && (
                <div className="bg-white rounded-b-lg rounded-tr-lg border border-purple-600 border-t-0 p-6">
                  <div className="grid grid-cols-5 gap-4">
                    {infographics.map((section, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-4 border border-purple-200"
                      >
                        <p className="text-[10px] font-bold text-gray-900 uppercase tracking-wide mb-3 border-b border-purple-300 pb-2">
                          {section.section}
                        </p>

                        {/* Stats Display */}
                        <div className="mb-3">
                          {section.stats.map((stat, idx) => (
                            <div key={idx} className="mb-2">
                              {section.stats.length > 1 && idx === 0 ? (
                                <div className="flex items-center gap-2 mb-2">
                                  <div className="text-3xl font-bold text-blue-900">{stat.number}</div>
                                  {section.stats[1] && (
                                    <>
                                      <div className="text-xl text-blue-700">|</div>
                                      <div className="text-2xl font-bold text-blue-900">{section.stats[1].number}</div>
                                    </>
                                  )}
                                </div>
                              ) : section.stats.length === 1 ? (
                                <div className="text-4xl font-bold text-blue-900 mb-2">{stat.number}</div>
                              ) : null}
                              {idx < 2 && (
                                <>
                                  <p className="text-[10px] font-bold text-gray-900 leading-tight">{stat.label}</p>
                                  {stat.sublabel && <p className="text-[9px] text-gray-600 leading-tight">{stat.sublabel}</p>}
                                </>
                              )}
                            </div>
                          ))}
                        </div>

                        {/* Description */}
                        <p className="text-[10px] text-gray-600 leading-relaxed">{section.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
