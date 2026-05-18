import { Metadata } from 'next';
import Link from 'next/link';
import { Navigation, Footer } from '@/components/sections';
import AnimatedSection from '@/components/ui/AnimatedSection';
import AnimatedCard from '@/components/ui/AnimatedCard';

export const metadata: Metadata = {
  title: 'Board & PE Advisory - Chinar Deshpande | AI Governance, GCC Strategy, Enterprise Transformation',
  description: 'Board-level advisory for AI adoption governance, GCC scaling strategy, technology-led transformation, and founder-to-institutional transition. Helping boards navigate AI beyond pilot stage, build strategic capability centers, and modernize operations.',
  keywords: [
    'board advisor AI governance',
    'PE operating advisor',
    'GCC strategy consultant',
    'AI transformation board',
    'enterprise modernization advisor',
    'fractional CTO',
    'technology board advisor',
    'AI readiness assessment'
  ],
};

const boardProblems = [
  {
    icon: '🚀',
    title: 'AI Adoption Beyond Pilot Stage',
    problem: 'Your organization has run AI pilots, but struggles to deploy AI at production scale with measurable P&L impact.',
    solution: 'I help boards establish governance frameworks for enterprise AI adoption, moving from proof-of-concept to production-grade deployment with clear ROI metrics.',
    outcomes: [
      'AI governance frameworks that balance innovation with risk',
      'Practical roadmaps from pilot to production deployment',
      'Board-level metrics for AI investment and ROI tracking',
      'Vendor evaluation and technology selection frameworks'
    ],
    tags: ['AI Governance', 'Enterprise AI', 'Risk Management']
  },
  {
    icon: '🏢',
    title: 'GCC Strategy & Scaling',
    problem: 'You need to build or scale Global Capability Centers in India, but lack operational playbooks for going beyond cost arbitrage to strategic capability.',
    solution: 'I have built India GCCs from zero to 200+ engineers with 24x7 NOC. I help boards design GCCs as strategic capability engines, not just offshore cost centers.',
    outcomes: [
      'GCC setup strategy from site selection to talent acquisition',
      'Operating models that drive capability, not just cost savings',
      'Transition plans from vendor-managed to captive operations',
      'Performance metrics beyond cost per FTE'
    ],
    tags: ['GCC Strategy', 'India Operations', 'Capability Centers']
  },
  {
    icon: '⚡',
    title: 'Technology-Led Cost & Resilience Transformation',
    problem: 'Your operations are heavy on manual processes and legacy systems. Cost pressures demand efficiency, but transformation projects keep stalling.',
    solution: 'I help boards navigate enterprise modernization — intelligent automation, supply chain resilience, cloud migration, and platform consolidation — with execution discipline.',
    outcomes: [
      'Technology modernization roadmaps aligned to business outcomes',
      'Automation and robotics deployment at scale (logistics, finance, operations)',
      'Resilient operating models that reduce single points of failure',
      'Cost optimization with measurable efficiency gains'
    ],
    tags: ['Automation', 'Cloud Migration', 'Operational Excellence']
  },
  {
    icon: '🎯',
    title: 'Founder-to-Institutional Governance Transition',
    problem: 'Your growth-stage company is transitioning from founder-led engineering to institutional governance, but lacks board-level technology oversight.',
    solution: 'I help boards establish technology governance, operating models, and accountability structures as companies scale from startup to enterprise.',
    outcomes: [
      'Technology committee charters and operating rhythms',
      'CTO/VP Engineering performance frameworks',
      'Technical due diligence for M&A and fundraising',
      'Governance structures that preserve innovation velocity'
    ],
    tags: ['Technology Governance', 'Startup Scaling', 'M&A Due Diligence']
  }
];

const engagementAreas = [
  'AI adoption governance and risk frameworks',
  'GCC strategy, setup, and scaling',
  'Operational modernization and intelligent automation',
  'Supply chain resilience and logistics transformation',
  'Technology operating models and capability building',
  'PE portfolio company operating advisory',
  'Technology committee chair or member',
  'M&A technology due diligence'
];

const idealBoards = [
  {
    type: 'Growth-Stage Companies',
    description: 'Series B-D companies scaling operations globally, building India presence, or modernizing technology stacks.',
    icon: '📈'
  },
  {
    type: 'PE-Backed Firms',
    description: 'Portfolio companies requiring operational transformation, cost optimization, or technology-led value creation.',
    icon: '💼'
  },
  {
    type: 'Global Enterprises',
    description: 'Large organizations navigating AI adoption, GCC strategy, supply chain modernization, or digital transformation.',
    icon: '🌍'
  },
  {
    type: 'UK & India Markets',
    description: 'Organizations operating across UK-India corridors, establishing GCCs, or managing cross-border technology operations.',
    icon: '🌉'
  }
];

export default function BoardAdvisoryPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
                Board & PE Advisory
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Board-Level AI, GCC & Transformation Advisory
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                I work with boards navigating <strong>AI adoption beyond pilot stage</strong>, <strong>GCC scaling strategy</strong>, <strong>technology-led transformation</strong>, and <strong>founder-to-institutional governance transition</strong>.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Three decades across 14 countries, 8 industries, and teams up to 2,500 strong. Current CTO – Logistics & Finance at THG Ingenuity, where I built the India GCC from zero. Alongside that, I lead modernization and AI services engagements for international clients and back early-stage product ventures in HR-tech and ed-tech as a working founder.
              </p>
              <p className="text-lg text-gray-700 font-semibold italic">
                Boardroom posture, builder's hands — by design, not accident.
              </p>
            </div>
          </div>
        </section>

        {/* Board Problems I Solve */}
        <AnimatedSection>
          <section className="py-16 sm:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Boards I'd Be Useful To
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  I'm selective about advisory and non-executive engagements. The right fit is a board facing one or more of these situations:
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {boardProblems.map((item, index) => (
                  <AnimatedCard key={index} delay={index * 0.1} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-primary-500 transition-all hover:shadow-lg">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-4xl">{item.icon}</div>
                      <h3 className="text-2xl font-bold text-gray-900 flex-1">
                        {item.title}
                      </h3>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm font-semibold text-red-600 mb-2">The Problem:</p>
                      <p className="text-gray-600 mb-4">{item.problem}</p>

                      <p className="text-sm font-semibold text-green-600 mb-2">How I Help:</p>
                      <p className="text-gray-600 mb-4">{item.solution}</p>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm font-semibold text-gray-900 mb-2">Typical Outcomes:</p>
                      <ul className="space-y-2">
                        {item.outcomes.map((outcome, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                            <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {item.tags.map((tag, idx) => (
                        <span key={idx} className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-700 font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </AnimatedCard>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Typical Engagement Areas */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Typical Engagement Areas
              </h2>
              <p className="text-xl text-gray-600">
                The work has a consistent shape: take ambiguous strategy and turn it into systems that hold under load.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {engagementAreas.map((area, index) => (
                <div key={index} className="flex items-start gap-3 bg-white rounded-lg p-4 border border-gray-200">
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 font-medium">{area}</span>
                </div>
              ))}
            </div>
          </section>

        {/* Ideal Board Fit */}
        <AnimatedSection>
          <section className="py-16 sm:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Organizations I Work With
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {idealBoards.map((board, index) => (
                  <AnimatedCard key={index} delay={index * 0.1} className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-xl p-6 border border-primary-200">
                    <div className="text-4xl mb-4">{board.icon}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {board.type}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {board.description}
                    </p>
                  </AnimatedCard>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Approach */}
        <section className="py-16 sm:py-20 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              The Lens
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              What's distinctive isn't the years. It's the <strong className="text-white">parallel tracks</strong> — a senior corporate seat, hands-on services delivery, and active product builds — kept honest by the same filters: <strong className="text-white">family, discipline, financial prudence, long horizons</strong>.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I take on a small number of advisory and non-executive engagements where the problem is genuinely hard and the people are serious.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-primary-600 to-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Let's Have a Conversation
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              If your board is navigating AI adoption, GCC strategy, operational transformation, or governance transition, let's explore whether there's a fit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors shadow-lg text-lg"
              >
                Schedule a Conversation
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/board-bio"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-700 text-white font-semibold rounded-lg hover:bg-primary-800 transition-colors border-2 border-white/20 text-lg"
              >
                View Board Bio
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
