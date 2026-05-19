'use client';

import { Navigation, Footer } from '@/components/sections';
import { useState } from 'react';
import Link from 'next/link';

export default function AIStrategistPage() {
  const [activeTab, setActiveTab] = useState<'why-me' | 'impact' | 'credentials'>('why-me');

  const roleDefinition = {
    title: "AI Transformation Strategist",
    tagline: "Building intelligent, ethical, scalable organizations.",
    essence: "I guide organizations through AI transformation--not by selling hype, but by deploying production systems that deliver measurable value. Built AI-driven Warehouse Control Systems across 18 facilities serving 300+ brands in 198 countries. Implemented computer vision for quality, predictive analytics for demand, ML-based inventory optimization. Navigated GDPR compliance, model governance, regulatory adherence. My AI strategy is grounded in operational discipline: clear ROI thresholds, pilot-to-production gate criteria, bias detection protocols, explainability frameworks. I build intelligent systems that scale, not science experiments that collapse under load."
  };

  const infographics = [
    {
      section: 'PRODUCTION AI DEPLOYMENT',
      stats: [
        { number: '18', label: 'WAREHOUSES', sublabel: 'AI DEPLOYED' },
        { number: '300+', label: 'BRANDS', sublabel: '198 COUNTRIES' },
      ],
      description: 'Production AI systems at scale: AI-driven Warehouse Control System managing 24x7 operations. Computer vision for quality control, predictive analytics for demand forecasting, ML-based inventory optimization. Real operational scars, not pilot theater.'
    },
    {
      section: 'AI GOVERNANCE & COMPLIANCE',
      stats: [
        { number: 'GDPR', label: 'COMPLIANT', sublabel: 'MULTI-REGION' },
        { number: 'CMMI L3', label: 'APPRAISAL', sublabel: 'KPMG' },
      ],
      description: 'Navigated regulatory complexity across jurisdictions. Data privacy compliance (GDPR, UK data protection). Model governance frameworks. Bias detection and explainability protocols. Audit-ready AI systems, not research prototypes.'
    },
    {
      section: 'TECHNOLOGY TRANSFORMATION DEPTH',
      stats: [
        { number: '30+', label: 'YEARS', sublabel: '14 COUNTRIES' },
        { number: '6', label: 'ERP', sublabel: 'IMPLEMENTATIONS' },
      ],
      description: 'Three decades driving enterprise technology transformation across 8 industries. SAP IS Retail (featured in SAP Annual Report), PeopleSoft HRMS (120 countries), Oracle Fusion, robotics integration (Autostore, Geek+). AI integrated into enterprise systems, not isolated pilots.'
    },
    {
      section: 'ORGANIZATIONAL SCALING',
      stats: [
        { number: '0→200+', label: 'GCC BUILT', sublabel: '24x7 OPS' },
        { number: '2,500+', label: 'PROFESSIONALS', sublabel: 'LED' },
      ],
      description: 'Built GCCs from ground up (THG India: 200+ engineers). Led teams of 2,500+ professionals. AI transformation requires organizational readiness: talent acquisition, capability building, cultural change. I build AI-ready organizations, not just AI models.'
    },
    {
      section: 'BUSINESS VALUE REALIZATION',
      stats: [
        { number: '£15M', label: 'SAVINGS', sublabel: 'ANNUALIZED' },
        { number: '33%', label: 'FASTER', sublabel: 'ONBOARDING' },
      ],
      description: 'AI strategy grounded in P&L impact. £15M annualized cost reduction at THG. 33% faster client onboarding (12 weeks → 8 weeks). Revenue expansion through Fulfillment-as-a-Service platform. Measurable ROI, not vanity metrics.'
    },
  ];

  const whyMe = [
    {
      title: 'Production AI at Scale, Not Pilot Theater',
      description: 'When I discuss AI strategy, I am not citing OpenAI blog posts or Gartner reports. I deployed production AI systems across 18 warehouses serving 300+ brands in 198 countries. Built AI-driven Warehouse Control Systems managing 24x7 operations with real P&L accountability. Implemented computer vision for quality control (detecting defects in real-time at scale), predictive analytics for demand forecasting (inventory optimization reducing waste and stockouts), ML-based routing optimization (maximizing throughput in automated fulfillment centers). I know what breaks when models drift, when data pipelines fail at 3 AM, when regulatory audits scrutinize bias in algorithmic decisions. My AI strategy is informed by production scars, not consultant theory.'
    },
    {
      title: 'AI Governance Frameworks That Pass Regulatory Scrutiny',
      description: 'AI governance is not about writing policy documents--it is about building systems that survive GDPR audits, regulatory inquiries, and public scrutiny. Navigated data privacy compliance across jurisdictions (UK, EU, US). Designed model governance frameworks with clear accountability: who owns model performance, who monitors for bias, who decides when to retrain vs. retire. Implemented explainability protocols for high-stakes decisions (credit scoring, fraud detection, inventory allocation). Built audit trails that satisfy legal and compliance teams. When I advise on AI governance, I bring frameworks that have been stress-tested in production, not theoretical ideals that collapse under regulatory pressure.'
    },
    {
      title: 'AI Integrated into Enterprise Systems, Not Isolated Experiments',
      description: 'Most AI initiatives fail because they exist in silos--disconnected from ERP systems, data warehouses, operational workflows, organizational incentives. I have implemented 6 world-class ERPs across 8 industries (SAP IS Retail featured in SAP Annual Report, PeopleSoft HRMS across 120 countries, Oracle Fusion, Infor WMS). Integrated AI capabilities into enterprise platforms: demand forecasting feeding procurement systems, computer vision triggering quality workflows, ML-based inventory optimization driving replenishment decisions. My AI strategy is grounded in systems thinking--how AI fits into existing technology architecture, data infrastructure, business processes, organizational structures.'
    },
    {
      title: 'Building AI-Ready Organizations, Not Just AI Models',
      description: 'AI transformation fails when organizations lack readiness: talent density to build and maintain models, data infrastructure to feed systems, cultural acceptance of algorithmic decision-making, governance frameworks to manage risk. Built THG India GCC from zero to 200+ engineers running 24x7 AI-driven operations--lived the talent acquisition challenges (hiring ML engineers in competitive markets), capability building requirements (upskilling teams on new tools), cultural change management (shifting from intuition-driven to data-driven decisions). When I advise on AI strategy, I address the full organizational stack: technology, talent, process, culture, governance. AI strategy informed by scaling discipline, not PowerPoint slides.'
    },
  ];

  const businessImpact = [
    {
      category: 'AI Investment ROI & Value Realization',
      impacts: [
        'Pilot-to-production gate criteria with clear ROI thresholds (cost reduction, productivity, revenue)',
        'Model performance monitoring and retraining protocols',
        'Business case validation frameworks (metrics that matter vs. vanity metrics)',
        'Value capture mechanisms integrated into P&L reporting',
        'Risk-adjusted ROI models accounting for implementation complexity and organizational readiness'
      ]
    },
    {
      category: 'AI Governance & Risk Management',
      impacts: [
        'Data privacy compliance frameworks (GDPR, cross-border data transfer, consent management)',
        'Bias detection and mitigation protocols (fairness metrics, algorithmic audits)',
        'Model explainability and interpretability frameworks for high-stakes decisions',
        'Governance accountability structures (who owns model performance, retraining, retirement)',
        'Regulatory adherence and audit readiness (documentation, decision trails, compliance dashboards)'
      ]
    },
    {
      category: 'AI Technology Integration',
      impacts: [
        'Enterprise AI architecture design (how AI integrates with ERP, data warehouses, workflows)',
        'Data infrastructure readiness assessment (quality, volume, latency, governance)',
        'Build vs. buy vs. partner frameworks for AI capabilities',
        'Technology debt evaluation and remediation in AI systems',
        'Scalability planning (when current AI architecture breaks, what to rebuild)'
      ]
    },
    {
      category: 'AI Organizational Readiness',
      impacts: [
        'Talent acquisition strategies for AI roles (ML engineers, data scientists, MLOps)',
        'Capability building and upskilling programs for existing teams',
        'Cultural change management (data-driven decision-making, algorithmic trust)',
        'Operating model design for AI teams (centralized vs. embedded, agile vs. waterfall)',
        'Performance incentives aligned with AI value realization (not pilot completion)'
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
                  href="/independent-director"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Next
                </Link>
              </div>
              <Link
                href="/contact?role=ai-strategist"
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
        <section className="bg-gradient-to-r from-orange-50 to-pink-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-600 rounded-lg shadow-md flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
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
