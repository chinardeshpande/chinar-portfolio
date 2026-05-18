import { Metadata } from 'next';
import Link from 'next/link';
import { Navigation, Footer } from '@/components/sections';
import AnimatedSection from '@/components/ui/AnimatedSection';
import AnimatedCard from '@/components/ui/AnimatedCard';

export const metadata: Metadata = {
  title: 'Strategic Advisory Services - Chinar Deshpande | AI Transformation, GCC Strategy, Fractional CTO',
  description: 'Strategic technology advisory for global enterprises and growth-stage companies. AI transformation, GCC blueprint programs, board advisory, fractional CTO services, and enterprise AI adoption acceleration.',
  keywords: [
    'AI transformation advisor',
    'GCC strategy consultant',
    'fractional CTO India',
    'enterprise AI consultant',
    'digital transformation strategist',
    'board advisor',
    'enterprise modernization consultant'
  ],
};

const services = [
  {
    id: 'ai-transformation',
    icon: '🤖',
    name: 'AI Transformation Advisory',
    positioning: 'Enterprise Modernization',
    tagline: 'Moving AI from pilot to production with measurable business impact',
    businessProblem: 'Your organization has experimented with AI pilots, but struggles to deploy at scale. You need governance frameworks, vendor strategies, and practical roadmaps that deliver P&L impact, not just proof-of-concepts.',
    howIHelp: 'I help enterprises establish AI governance, select the right technology stack, and build deployment roadmaps that move from experiment to production-grade systems with clear ROI metrics.',
    outcomes: [
      'AI governance frameworks balancing innovation with risk management',
      'Technology vendor evaluation and selection strategy',
      'Pilot-to-production deployment roadmaps with success metrics',
      'Board-level AI investment and ROI tracking frameworks',
      'Organizational change management for AI adoption'
    ],
    engagementStyle: 'Advisory retainer (3-6 months) or project-based assessments',
    industries: ['E-commerce', 'Logistics', 'FinTech', 'Retail', 'Manufacturing'],
    tags: ['AI Governance', 'Enterprise AI', 'Digital Transformation']
  },
  {
    id: 'gcc-strategy',
    icon: '🏢',
    name: 'GCC Blueprint Program',
    positioning: 'India Scaling Expertise',
    tagline: 'Building Global Capability Centers that compound capability, not just arbitrage cost',
    businessProblem: 'You need to establish or scale a Global Capability Center in India, but lack operational playbooks for moving beyond cost savings to strategic capability building. Site selection, talent acquisition, operating models, and transition management are unclear.',
    howIHelp: 'I have built India GCCs from zero to 200+ engineers running 24x7 operations. I design GCC strategies that create strategic capability engines — engineering, operations, analytics, finance — not just offshore cost centers.',
    outcomes: [
      'GCC strategy from site selection to capability roadmap',
      'Operating models: captive vs. vendor-managed transitions',
      'Talent acquisition, retention, and capability development frameworks',
      'Performance metrics beyond cost-per-FTE',
      'Technology, process, and governance setup for 24x7 operations'
    ],
    engagementStyle: 'Strategic consulting (setup phase) + fractional advisory (scaling phase)',
    industries: ['Technology', 'E-commerce', 'Financial Services', 'Logistics', 'SaaS'],
    tags: ['GCC Strategy', 'India Operations', 'Capability Centers']
  },
  {
    id: 'board-advisory',
    icon: '📊',
    name: 'Board Advisory',
    positioning: 'Governance & Strategic Oversight',
    tagline: 'Technology governance for boards navigating AI, GCCs, and operational transformation',
    businessProblem: 'Your board lacks technology expertise to govern AI adoption, evaluate GCC strategy, oversee digital transformation, or assess technology risk. You need an independent voice with operational credibility and board-level maturity.',
    howIHelp: 'I serve as board advisor, technology committee member, or independent director, providing governance on AI adoption, GCC strategy, operational modernization, cybersecurity oversight, and M&A technology due diligence.',
    outcomes: [
      'AI governance and risk management frameworks',
      'Technology committee charters and operating rhythms',
      'CTO/VP Engineering performance oversight',
      'M&A technology due diligence and integration planning',
      'Board reporting on technology investments and outcomes'
    ],
    engagementStyle: 'Non-executive director, technology committee chair/member, or board advisor retainer',
    industries: ['Growth-Stage Tech', 'PE Portfolio Companies', 'Global Enterprises', 'FinTech'],
    tags: ['Board Governance', 'Technology Committee', 'M&A Due Diligence']
  },
  {
    id: 'fractional-cto',
    icon: '⚡',
    name: 'Fractional Strategic CTO',
    positioning: 'Strategic Technology Leadership',
    tagline: 'Part-time strategic technology leadership for companies that need CTO-level thinking without full-time hire',
    businessProblem: 'Your organization needs CTO-level strategic thinking — technology roadmaps, platform architecture, team scaling, vendor management — but isn't ready for a full-time executive hire. Your current technical leadership is strong on delivery but lacks strategic experience.',
    howIHelp: 'I serve as fractional CTO (1-2 days per week), providing strategic technology leadership: architecture oversight, engineering team scaling, technology partner evaluation, platform modernization roadmaps, and board-level technology reporting.',
    outcomes: [
      'Technology strategy and multi-year roadmaps',
      'Engineering team structure, hiring, and performance frameworks',
      'Platform architecture and technical debt reduction plans',
      'Technology vendor selection and partnership strategy',
      'Board-level technology reporting and investment cases'
    ],
    engagementStyle: 'Part-time retainer (1-2 days per week, 6-12 month minimum)',
    industries: ['Series A-C Startups', 'Growth-Stage SaaS', 'E-commerce', 'Product Companies'],
    tags: ['Fractional CTO', 'Technology Strategy', 'Engineering Leadership']
  },
  {
    id: 'ai-adoption-accelerator',
    icon: '🚀',
    name: 'Enterprise AI Adoption Accelerator',
    positioning: 'Productivity Transformation',
    tagline: 'Deploying AI-native workflows that shift P&L lines, not press releases',
    businessProblem: 'Your teams are drowning in manual processes — reporting, data analysis, customer service, operations. AI tools exist, but you lack the frameworks, workflows, and change management to deploy them at scale across the organization.',
    howIHelp: 'I help organizations deploy AI-native productivity systems across functions: intelligent automation for operations, AI-powered analytics for decision-making, workflow automation for finance/HR/logistics, and organizational change management for adoption.',
    outcomes: [
      'AI workflow deployment across key business functions',
      'Productivity measurement frameworks and KPI tracking',
      'Tool selection: when to build, buy, or integrate AI capabilities',
      'Change management and training programs for AI adoption',
      'Cost savings and efficiency metrics tied to business outcomes'
    ],
    engagementStyle: 'Project-based (3-4 months) with post-deployment advisory',
    industries: ['Logistics', 'E-commerce', 'Financial Services', 'Professional Services', 'Manufacturing'],
    tags: ['AI Productivity', 'Workflow Automation', 'Change Management']
  }
];

export default function StrategicAdvisoryPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
                Strategic Advisory Services
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Turn Ambiguous Strategy Into Systems That Hold Under Load
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                I work with global enterprises, PE-backed firms, and growth-stage companies on <strong>AI transformation</strong>, <strong>GCC strategy</strong>, <strong>operational modernization</strong>, and <strong>strategic technology leadership</strong>.
              </p>
              <p className="text-lg text-gray-700">
                Three decades across 14 countries, 8 industries, teams up to 2,500 strong. The work has a consistent shape: deploy AI and automation where they shift a P&L line, not a press release. Stand up GCCs that compound capability rather than arbitrage cost. Run engineering, supply chain, and finance platforms with operational discipline.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <AnimatedSection>
          <section className="py-16 sm:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Advisory Offerings
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Productized expertise for organizations navigating technology transformation
                </p>
              </div>

              <div className="space-y-12">
                {services.map((service, index) => (
                  <AnimatedCard key={service.id} delay={index * 0.1} className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-primary-500 transition-all hover:shadow-xl">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      {/* Left Column: Overview */}
                      <div className="lg:col-span-1">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="text-5xl">{service.icon}</div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-1">
                              {service.name}
                            </h3>
                            <p className="text-sm font-semibold text-primary-600 mb-2">
                              {service.positioning}
                            </p>
                          </div>
                        </div>
                        <p className="text-gray-700 italic mb-6">
                          "{service.tagline}"
                        </p>

                        <div className="mb-6">
                          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                            Engagement Style
                          </p>
                          <p className="text-sm text-gray-600">
                            {service.engagementStyle}
                          </p>
                        </div>

                        <div>
                          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                            Industries
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {service.industries.map((industry, idx) => (
                              <span key={idx} className="px-2 py-1 text-xs rounded bg-gray-100 text-gray-700">
                                {industry}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right Column: Details */}
                      <div className="lg:col-span-2 space-y-6">
                        <div>
                          <p className="text-sm font-semibold text-red-600 mb-2">The Business Problem:</p>
                          <p className="text-gray-600">
                            {service.businessProblem}
                          </p>
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-green-600 mb-2">How I Help:</p>
                          <p className="text-gray-600">
                            {service.howIHelp}
                          </p>
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-gray-900 mb-3">Typical Outcomes:</p>
                          <ul className="grid grid-cols-1 gap-3">
                            {service.outcomes.map((outcome, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-700">{outcome}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-2 pt-4">
                          {service.tags.map((tag, idx) => (
                            <span key={idx} className="px-3 py-1 text-xs rounded-full bg-primary-100 text-primary-700 font-medium">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </AnimatedCard>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Why Work With Me */}
        <section className="py-16 sm:py-20 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
              What's Distinctive
            </h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                What's distinctive isn't the years. It's the <strong className="text-white">parallel tracks</strong> — a senior corporate seat, hands-on services delivery, and active product builds — kept honest by the same filters: <strong className="text-white">family, discipline, financial prudence, long horizons</strong>.
              </p>
              <p>
                I run engineering, supply chain, and finance platforms with the operational discipline of someone who has been on the hook for outcomes — and the cybersecurity, governance, and reporting rigor expected at board level.
              </p>
              <p className="text-xl font-semibold text-white">
                I take on a small number of advisory engagements where the problem is genuinely hard and the people are serious.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-primary-600 to-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Let's Start a Conversation
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              If you're facing AI adoption challenges, GCC scaling questions, operational transformation needs, or require strategic technology leadership, let's explore whether there's a fit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors shadow-lg text-lg"
              >
                Schedule Introduction
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-700 text-white font-semibold rounded-lg hover:bg-primary-800 transition-colors border-2 border-white/20 text-lg"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
