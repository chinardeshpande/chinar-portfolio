'use client';

import { Navigation, Footer } from '@/components/sections';
import { useState } from 'react';
import Link from 'next/link';

export default function AdvisoryBoardPage() {
  const [activeTab, setActiveTab] = useState<'why-me' | 'impact' | 'credentials'>('why-me');

  const roleDefinition = {
    title: "Advisory Board Member",
    tagline: "Strategic technology counsel anchored in clarity, ethics, and measurable outcomes.",
    essence: "I join advisory boards where my operational scars add value--not to collect logos, but because three decades building and scaling technology platforms across 14 countries gives me pattern recognition most advisors lack. I have deployed AI in production, built GCCs from zero, led digital transformations with real P&L accountability, and navigated regulatory complexity across jurisdictions. My counsel is grounded in execution discipline, not consultant theory."
  };

  const infographics = [
    {
      section: 'TRANSFORMATION DEPTH',
      stats: [
        { number: '30+', label: 'YEARS', sublabel: 'OPERATIONAL' },
        { number: '8', label: 'INDUSTRIES', sublabel: '14 COUNTRIES' },
      ],
      description: 'Three decades driving technology transformation across retail, FMCG, financial services, manufacturing, logistics, fashion, sports, e-commerce. Not consulting advice--lived execution experience.'
    },
    {
      section: 'AI & INNOVATION CREDENTIALS',
      stats: [
        { number: '18', label: 'WAREHOUSES', sublabel: 'AI DEPLOYED' },
        { number: 'CIO 100', label: 'AWARD', sublabel: '2006' },
      ],
      description: 'Production AI deployment at scale: computer vision for quality, predictive analytics for demand, ML-based inventory optimization. Robotics integration (Autostore, Geek+). CMMI Level 3 appraisal through KPMG.'
    },
    {
      section: 'GCC STRATEGY EXPERTISE',
      stats: [
        { number: '0→200+', label: 'GCC BUILT', sublabel: 'THG INDIA' },
      ],
      description: 'Built THG India GCC from ground up, scaling to 200+ engineers running 24x7 operations. Managed Global IT Delivery Centres at CITI (150 professionals) and Unilever (120 countries).'
    },
    {
      section: 'ENTERPRISE SYSTEMS MASTERY',
      stats: [
        { number: '6', label: 'ERP', sublabel: 'IMPLEMENTATIONS' },
        { number: 'INR 3B', label: 'BUDGET', sublabel: 'MANAGED' },
      ],
      description: 'SAP IS Retail (Future Group: featured in SAP Annual Report). PeopleSoft HRMS (Unilever: 120 countries). Oracle Fusion, Infor WMS, ZingHR, Microsoft Navision. Full lifecycle ownership.'
    },
    {
      section: 'DUAL OPERATING MODELS',
      stats: [
        { number: 'FTSE 250', label: 'PUBLIC', sublabel: 'CTO THG' },
        { number: 'INR 1B', label: 'STARTUP', sublabel: 'CO-FOUNDER' },
      ],
      description: 'Public company governance (THG), PE portfolio experience (Stellar with Warburg Pincus), co-founder experience (Millennium Sports: full P&L responsibility). Translate between startup velocity and institutional rigor.'
    },
  ];

  const whyMe = [
    {
      title: 'Technology Strategy Grounded in P&L Reality',
      description: 'When I advise on technology investments, I bring three decades of P&L accountability--not PowerPoint frameworks. Built platforms that delivered £15M annualized savings at THG. Drove 33% faster client onboarding (12 weeks → 8 weeks). Created new revenue streams (Fulfillment-as-a-Service platform generating high-margin business). I evaluate technology decisions through the lens of measurable business outcomes: cost reduction with specific timelines, productivity improvements with clear KPIs, revenue expansion with defensible moats. Strategy informed by execution discipline, not consultant theater.'
    },
    {
      title: 'AI Governance with Production Scars',
      description: 'I do not advise on AI strategy from blog posts and whitepapers. I deployed production AI systems across 18 warehouses serving 300+ brands in 198 countries. Built AI-driven Warehouse Control Systems managing 24x7 operations. Implemented computer vision for quality control, predictive analytics for demand forecasting, ML-based inventory optimization. I know what breaks when models drift, when data pipelines fail, when regulatory requirements shift. My counsel on AI governance--pilot-to-production gate criteria, model performance monitoring, bias detection protocols, explainability frameworks--is grounded in operational reality, not theoretical ideals.'
    },
    {
      title: 'Global Scaling Expertise Across Geographies & Regulations',
      description: 'Led technology operations across 14 countries spanning India, US, UK, Europe, Middle East, APAC. Navigated regulatory complexity (GDPR, UK data protection, cross-border data transfer requirements). Built teams in diverse cultural contexts (India GCC, US/UK corporate, PE portfolio). Designed operating models for global delivery (captive centers, hybrid models, vendor-managed transitions). When advising on international expansion, I bring lived experience in site selection trade-offs, talent acquisition strategies, compliance frameworks, and cultural integration--not generic consulting playbooks.'
    },
    {
      title: 'Dual Lens: Startup Velocity + Institutional Rigor',
      description: 'Co-founded Millennium Sports (INR 1B business, 6 product pillars, full P&L responsibility) and operated in institutional settings (THG FTSE 250, Future Group, HUL). I translate between founder-led velocity and institutional governance--establishing compliance discipline without killing execution momentum. When advising startups, I bring scaling playbooks from public company experience. When advising corporates, I bring innovation velocity from startup DNA. This dual operating model informs strategic counsel that balances agility with accountability.'
    },
  ];

  const businessImpact = [
    {
      category: 'Strategic Technology Investment',
      impacts: [
        'ROI frameworks with clear success metrics (cost reduction, productivity, revenue expansion)',
        'Build vs. buy vs. partner decision frameworks grounded in operational trade-offs',
        'Technology debt assessment with remediation cost estimates',
        'Innovation portfolio management (horizon 1/2/3 allocation, kill criteria)',
        'Board-level reporting dashboards translating technical complexity to business outcomes'
      ]
    },
    {
      category: 'AI Strategy & Governance',
      impacts: [
        'Pilot-to-production gate criteria with clear ROI thresholds',
        'Model performance monitoring and retraining protocols',
        'Data privacy compliance (GDPR, regulatory adherence)',
        'Bias detection, model explainability, ethical AI frameworks',
        'Organizational readiness assessment (talent, infrastructure, culture)'
      ]
    },
    {
      category: 'Global Expansion & GCC Strategy',
      impacts: [
        'Site selection frameworks (cost, talent density, regulatory environment, infrastructure)',
        'Operating model design (captive vs. vendor-managed, hybrid transitions)',
        'Productivity metrics beyond cost-per-FTE (innovation contribution, knowledge transfer)',
        'Talent retention strategies and career progression frameworks',
        'Cultural integration and change management across geographies'
      ]
    },
    {
      category: 'Digital Transformation Value Realization',
      impacts: [
        'Transformation roadmaps with specific value capture milestones',
        'Execution discipline protocols (stage-gate rigor, dependency management)',
        'Change management strategies grounded in organizational psychology',
        'Vendor evaluation frameworks and negotiation strategies',
        'Post-implementation value tracking with accountability structures'
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
                  href="/startup-mentor"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Next
                </Link>
              </div>
              <Link
                href="/contact?role=advisory-board"
                className="inline-flex items-center gap-2 px-6 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
              >
                Schedule Conversation
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Compact Hero */}
        <section className="bg-gradient-to-r from-purple-50 to-blue-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg shadow-md flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
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
