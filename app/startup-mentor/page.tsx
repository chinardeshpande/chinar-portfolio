import { Metadata } from "next";
import Link from "next/link";
import { Navigation, Footer } from "@/components/sections";
import AnimatedSection from "@/components/ui/AnimatedSection";
import AnimatedCard from "@/components/ui/AnimatedCard";

export const metadata: Metadata = {
  title: "Startup Mentor & Entrepreneurship Advisor - Chinar Deshpande",
  description: "Entrepreneur who built INR 1B sports business from ground up. Mentor tech-led startups on AI-first product development, engineering team scaling, and growth strategy. Operator experience across 30+ years.",
  keywords: [
    "startup mentor",
    "entrepreneurship advisor",
    "tech startup advisor",
    "AI product development",
    "engineering team scaling",
    "founder advisor",
    "startup CTO advisor"
  ],
};

const mentorshipAreas = [
  {
    id: "ai-product",
    icon: "🤖",
    title: "AI-First Product Development",
    challenge: "Founders struggle to translate AI hype into production-ready products with real user value. Technical feasibility meets product-market fit in messy, expensive ways.",
    whatIBring: [
      {
        area: "Hands-On AI Stack Expertise",
        proof: "Daily user of ChatGPT, Claude Code, Claude Cowork, Google Gemini AI Studio, n8n, NotebookLM, VS Code for enterprise automation, analytics, and product builds. Built AI-driven warehouse optimization systems across 18 fulfillment centers, deployed computer vision for quality control, predictive analytics for demand forecasting."
      },
      {
        area: "Production AI Deployment Experience",
        proof: "Led AI/ML implementations at THG (300+ brands, 198 countries), designed intelligent automation platforms at Stellar (50M sq ft warehousing), implemented predictive analytics and business intelligence solutions across retail, logistics, and supply chain verticals."
      },
      {
        area: "Product-Market Fit Discipline",
        proof: "Co-founded Millennium Sports managing INR 1B business across 6 product pillars. Built 'Spectrum' retail product at CITI running across 4 European countries. Designed sports technology platform managing complete lifecycle of sportsmen and enthusiasts with cloud-based SaaS architecture."
      }
    ],
    mentorshipOutcomes: [
      "AI product roadmap from MVP to production scale with clear technical milestones",
      "Technical feasibility assessment: model selection, data requirements, infrastructure costs",
      "Ethical AI frameworks: bias detection, data privacy, regulatory compliance",
      "Product-market fit validation: user testing, iteration cycles, pivot decisions"
    ],
    tags: ["AI Product", "Technical Strategy", "Product-Market Fit", "Production AI"]
  },
  {
    id: "engineering-scaling",
    icon: "👥",
    title: "Engineering Team Scaling & Leadership",
    challenge: "Founders who can code struggle to build and lead engineering organizations. Hiring, culture, process, and technical architecture decisions compound quickly - mistakes are expensive and slow to fix.",
    whatIBring: [
      {
        area: "Zero-to-Scale Team Building",
        proof: "Built THG India Technology Center from ground up to 200+ engineers running 24x7 operations. Established Global IT Delivery Centre at CITI with 150 IT professionals across engineering, QA, DevOps, and product management. Managed 2,500+ professionals across corporate and blue-collar environments."
      },
      {
        area: "Elite Hiring & Org Design",
        proof: "Recruited 100+ engineers at scale-up velocity while maintaining quality bar. Built long-term relationships with management and technology institutes for talent pipeline. Established Innovation and Incubation Cell driving solar power, electric mobility, BI platforms at Stellar."
      },
      {
        area: "Multi-Generational Leadership",
        proof: "Led teams across blue/white collar, union/non-union environments spanning Gen X, Millennials, and Gen Z. Managed multi-country workforces across 14 countries with cultural sensitivity and local adaptation. Executive communication and stakeholder orchestration across board, investors, customers, vendors."
      }
    ],
    mentorshipOutcomes: [
      "Hiring frameworks: technical assessment, culture fit evaluation, compensation benchmarking",
      "Organizational design: reporting structure, team topology, decision-making authority",
      "Engineering culture: code quality standards, documentation discipline, knowledge sharing",
      "Leadership development: 1-on-1 rhythms, performance management, career progression"
    ],
    tags: ["Team Building", "Engineering Leadership", "Hiring", "Org Design"]
  },
  {
    id: "growth-strategy",
    icon: "📈",
    title: "Tech-Led Growth & Scaling Strategy",
    challenge: "Early traction is exciting but sustainable growth requires operational discipline. Technology debt, infrastructure costs, vendor dependencies, and operational complexity grow faster than revenue - margins suffer and quality degrades.",
    whatIBring: [
      {
        area: "Entrepreneurial P&L Experience",
        proof: "Co-founded and scaled Millennium Sports to INR 1B business across 6 pillars: Sports Infrastructure, Events Management, Coaching & Talent, Sports Retail, Sports Education, Corporate Wellness. Full P&L responsibility including capital raising, vendor negotiations, pricing strategy, margin management."
      },
      {
        area: "Platform Economics & Unit Economics",
        proof: "Built commercial fulfillment platform at THG using proprietary technology stack. Implemented cloud economics discipline across Oracle Fusion, Infor WMS, ZingHR SaaS deployments. Managed multi-currency payments, procure-to-pay, order-to-cash cycles with margin optimization."
      },
      {
        area: "Infrastructure Scaling",
        proof: "Scaled operations from startup to enterprise: 18 warehouses (THG), 50M sq ft warehousing (Stellar), 900+ stores (Future Group), 120 countries (Unilever). Built state-of-the-art logistics infrastructure with industrial automation, robotics (Autostore, Geek+, T-sorter), and IoT platforms."
      }
    ],
    mentorshipOutcomes: [
      "Growth roadmap: customer acquisition strategy, retention mechanics, expansion playbook",
      "Unit economics discipline: CAC, LTV, contribution margin, payback period tracking",
      "Infrastructure scaling: cloud architecture, database optimization, observability stack",
      "Operational leverage: automation opportunities, vendor consolidation, process efficiency"
    ],
    tags: ["Growth Strategy", "Unit Economics", "Infrastructure Scaling", "Operational Excellence"]
  },
  {
    id: "fundraising-investor",
    icon: "💰",
    title: "Fundraising & Investor Relations",
    challenge: "Technical founders struggle to translate product vision into compelling investor narratives. Board management, investor updates, and stakeholder communication require different muscles than product development.",
    whatIBring: [
      {
        area: "Capital Raising Experience",
        proof: "Co-founded Millennium Sports with full capital raising responsibility for INR 1B business across infrastructure projects, retail chain, and technology platform. Built alliance partnerships with AXIS Bank Premier League, Celebrity Cricket League, and international sports federations."
      },
      {
        area: "Board-Level Communication",
        proof: "30+ years board-level experience: FTSE 250 public company (THG), PE portfolio governance (Stellar with Warburg Pincus), public company board participation (Future Group featured in SAP Annual Report). Designed executive dashboards and investor reporting frameworks."
      },
      {
        area: "Strategic Partnership Development",
        proof: "Forged long-term relationships with IBM, SAP, Oracle, Microsoft, Deloitte, PwC with aggressive joint-go-to-market strategies. Negotiated vendor partnerships saving millions in licensing costs. Built C-suite network across NSE, HDFC, private equity firms for market intelligence."
      }
    ],
    mentorshipOutcomes: [
      "Fundraising narrative: problem-solution-market-traction story with compelling data points",
      "Investor deck optimization: market sizing, competitive positioning, financial projections",
      "Board management: meeting cadence, update formats, decision-making protocols",
      "Strategic partnership playbook: vendor selection, contract negotiation, relationship governance"
    ],
    tags: ["Fundraising", "Investor Relations", "Board Management", "Strategic Partnerships"]
  }
];

const entrepreneurialJourney = {
  company: "Millennium Sports Management",
  role: "Co-Founder & CTO",
  period: "2013-2016",
  scale: "INR 1 Billion Business | 6 Product Pillars | 3 Years",
  journey: [
    {
      pillar: "Sports Infrastructure",
      achievement: "Led 5 large infrastructure projects including world-class sports complex and international sports school. Designed state-of-the-art facilities with modern technology integration."
    },
    {
      pillar: "Events Management",
      achievement: "Organized national-level events in Table Tennis, Cricket, Football, and Skating. Built event management platform handling registrations, payments, scheduling, and live scoring."
    },
    {
      pillar: "Technology Platform",
      achievement: "Spearheaded development of state-of-the-art SPORTS TECHNOLOGY PLATFORM for complete life-cycle management of sportsmen and sports enthusiasts. Cloud-based ERP enabling membership management, fee collection, facility booking, and events management."
    },
    {
      pillar: "Sports Retail",
      achievement: "Set up chain of exclusive sports retail outlets after tie-ups with sportswear manufacturers and equipment vendors. Built inventory management and POS systems integrated with e-commerce platform."
    },
    {
      pillar: "Coaching & Talent",
      achievement: "Built coaching centers at multiple locations with high-skilled, certified coaches for all age groups. Designed talent management system tracking performance, progress, and career development."
    },
    {
      pillar: "Digital Strategy",
      achievement: "Drove digital strategy to promote club memberships, events, and players through social media collaboration, mobile apps, and cloud-hosted technology platform."
    }
  ],
  lessonsLearned: [
    "Product-market fit requires ruthless prioritization - we tried 6 pillars simultaneously when 2 done deeply would have created more value",
    "Technology is leverage, not the business - built elegant platform but underinvested in sales, marketing, and customer success",
    "Cash is oxygen - managed P&L but learned painful lessons about working capital, receivables cycles, and vendor payment terms",
    "Partnership quality > partnership quantity - better to have 3 strategic partners deeply integrated than 20 surface relationships",
    "Founder alignment is everything - misalignment on vision, risk tolerance, or exit strategy compounds into operational paralysis"
  ]
};

const operatorCredentials = [
  {
    credential: "Built Products Users Pay For",
    proof: "'Spectrum' retail product running across 4 European countries (CITI). Sports technology platform managing thousands of members (Millennium Sports). Warehouse Control System serving 18 fulfillment centers (THG)."
  },
  {
    credential: "Scaled Operations 10x+",
    proof: "THG India GCC: 0 to 200+ engineers. CITI Global Delivery Centre: 0 to 150 professionals. Stellar: 6M sq ft to 50M sq ft warehousing operations."
  },
  {
    credential: "Managed P&L Responsibility",
    proof: "INR 3B technology budget at Future Group. INR 1B business at Millennium Sports. Multi-currency, multi-jurisdiction financial operations at THG across 198 countries."
  },
  {
    credential: "Navigated Regulatory Complexity",
    proof: "GDPR compliance (THG Europe operations). Multi-country labor laws (14 countries). Audit committee coordination (FTSE 250 public company). Cybersecurity frameworks (ISO 27001, SOC 2)."
  },
  {
    credential: "Built Technical Teams from Zero",
    proof: "Hired 100+ engineers at startup velocity. Built Innovation and Incubation Cell. Established PeopleSoft Excellence Center at Unilever US. Recruited across engineering, QA, DevOps, product, data science disciplines."
  }
];

const mentorshipStyle = [
  {
    stage: "Early-Stage (Pre-Product-Market Fit)",
    focus: "Product strategy, technical architecture decisions, MVP scoping, early hiring (first 3-5 engineers), founder skill development, investor narrative development."
  },
  {
    stage: "Growth-Stage (Post-PMF, Pre-Scale)",
    focus: "Engineering team scaling (10-50 engineers), organizational design, process discipline, infrastructure decisions, unit economics optimization, Series A/B preparation."
  },
  {
    stage: "Scale-Stage (Hypergrowth)",
    focus: "Leadership development, multi-team coordination, technical debt management, platform modernization, vendor relationships, board governance, executive coaching."
  }
];

const engagementModels = [
  {
    model: "Advisory Retainer",
    format: "Monthly retainer with 4-6 hours commitment. Monthly strategy sessions, async Slack/email access, quarterly deep-dives on critical decisions (hiring, fundraising, pivots).",
    bestFor: "Founders who need ongoing strategic counsel with lightweight time commitment."
  },
  {
    model: "Equity Advisory",
    format: "0.25-1% equity stake with 2-3 year vesting. Monthly board observer seat, quarterly strategy sessions, critical decision support (fundraising, M&A, pivots).",
    bestFor: "Early-stage startups (pre-Series A) where cash is constrained but equity alignment creates long-term partnership."
  },
  {
    model: "Project-Based Consulting",
    format: "Fixed-scope engagements: fundraising deck development, technical due diligence, engineering team assessment, technology strategy roadmap, vendor selection.",
    bestFor: "Founders with specific, time-bound challenges requiring deep expertise but not ongoing relationship."
  },
  {
    model: "Fractional CTO (Interim)",
    format: "3-6 month interim CTO engagements during leadership transitions, product pivots, or pre-fundraising preparation. 2-3 days/week on-site or remote.",
    bestFor: "Startups between CTOs, preparing for scale, or needing operational discipline before fundraising."
  }
];

export default function StartupMentorPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-orange-500 to-pink-600 text-white py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
                Startup Mentor & Entrepreneurship Advisor
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Built. Scaled. Exited.<br />Now mentoring the next generation.
              </h1>
              <p className="text-xl sm:text-2xl text-orange-100 mb-6 leading-relaxed">
                Co-founded and scaled <strong className="text-white">INR 1B sports business</strong> from ground up. 30+ years operator experience across <strong className="text-white">startups, growth-stage, and enterprise</strong>. Mentor tech-led founders on AI-first product development, engineering team scaling, and growth strategy.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold">1B</div>
                  <div className="text-sm text-orange-100">INR Business Built</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold">200+</div>
                  <div className="text-sm text-orange-100">Engineers Hired</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold">6</div>
                  <div className="text-sm text-orange-100">Product Pillars</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold">15</div>
                  <div className="text-sm text-orange-100">Products Designed</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors shadow-lg text-lg"
                >
                  Start Mentorship Conversation
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center px-8 py-4 bg-orange-700 text-white font-semibold rounded-lg hover:bg-orange-800 transition-colors border-2 border-white/20 text-lg"
                >
                  View Full Experience
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Four Mentorship Areas */}
        <AnimatedSection>
          <section className="py-16 sm:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Four Mentorship Areas
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Operator experience across product, engineering, growth, and fundraising
                </p>
              </div>

              <div className="space-y-12">
                {mentorshipAreas.map((area, index) => (
                  <AnimatedCard key={area.id} delay={index * 0.1} className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-6 sm:p-8 hover:border-orange-500 transition-all hover:shadow-xl">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="text-5xl flex-shrink-0">{area.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                          {area.title}
                        </h3>
                        <p className="text-orange-600 font-semibold mb-4">
                          The Founder Challenge: <span className="font-normal text-gray-700">{area.challenge}</span>
                        </p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <p className="text-sm font-semibold text-green-600 mb-4">What I Bring (Operator Credentials):</p>
                        <div className="space-y-4">
                          {area.whatIBring.map((item, idx) => (
                            <div key={idx} className="bg-white border border-gray-200 rounded-lg p-4">
                              <p className="font-semibold text-gray-900 mb-2">{item.area}</p>
                              <p className="text-gray-600 text-sm italic">"{item.proof}"</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-gray-900 mb-3">Mentorship Outcomes:</p>
                        <ul className="grid grid-cols-1 gap-2">
                          {area.mentorshipOutcomes.map((outcome, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <svg className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span className="text-gray-700 text-sm">{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-200">
                        {area.tags.map((tag, idx) => (
                          <span key={idx} className="px-3 py-1 text-xs rounded-full bg-orange-100 text-orange-700 font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </AnimatedCard>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Entrepreneurial Journey */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                My Entrepreneurial Journey
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {entrepreneurialJourney.company} - {entrepreneurialJourney.scale}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
              {entrepreneurialJourney.journey.map((pillar, index) => (
                <AnimatedCard key={index} delay={index * 0.1} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-orange-500 transition-all hover:shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{pillar.pillar}</h3>
                  <p className="text-gray-700">{pillar.achievement}</p>
                </AnimatedCard>
              ))}
            </div>

            <div className="bg-white border-2 border-orange-200 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Lessons Learned (The Hard Way)</h3>
              <div className="space-y-4">
                {entrepreneurialJourney.lessonsLearned.map((lesson, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <p className="text-gray-700 italic">"{lesson}"</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Operator Credentials */}
        <AnimatedSection>
          <section className="py-16 sm:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Operator Credentials
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Not theory. Not frameworks. Real operational battle scars.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {operatorCredentials.map((credential, index) => (
                  <AnimatedCard key={index} delay={index * 0.1} className="bg-gradient-to-br from-orange-50 to-white border-2 border-orange-200 rounded-xl p-6 hover:border-orange-500 transition-all hover:shadow-lg">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      ✓ {credential.credential}
                    </h3>
                    <p className="text-gray-700 text-sm italic">
                      {credential.proof}
                    </p>
                  </AnimatedCard>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Mentorship Style */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Mentorship Style by Stage
              </h2>
              <p className="text-xl text-gray-600">
                Different stages require different support
              </p>
            </div>

            <div className="space-y-6">
              {mentorshipStyle.map((style, index) => (
                <div key={index} className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-orange-500 transition-all hover:shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{style.stage}</h3>
                  <p className="text-gray-700">{style.focus}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Engagement Models */}
        <AnimatedSection>
          <section className="py-16 sm:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Engagement Models
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Flexible structures to match your stage and needs
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {engagementModels.map((model, index) => (
                  <AnimatedCard key={index} delay={index * 0.1} className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-6 hover:border-orange-500 transition-all hover:shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{model.model}</h3>
                    <p className="text-gray-700 mb-4">{model.format}</p>
                    <div className="pt-3 border-t border-gray-200">
                      <p className="text-sm font-semibold text-orange-600 mb-1">Best For:</p>
                      <p className="text-sm text-gray-600">{model.bestFor}</p>
                    </div>
                  </AnimatedCard>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* The Mentor's Posture */}
        <section className="py-16 sm:py-20 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
              The Mentor's Posture
            </h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                I mentor founders I respect. Not to stroke my ego. Not to collect logos. Because I remember what it felt like to be on the other side of the table -- co-founding Millennium Sports, raising capital, hiring the first engineers, negotiating vendor contracts, managing cash flow, pivoting when reality disagreed with the business plan.
              </p>
              <p>
                I do not bring generic startup advice. I bring <strong className="text-white">operator scars</strong>: building products users paid for, scaling teams from 0 to 200+, managing P&L with real money, navigating regulatory complexity, making hard decisions when cash is tight and the roadmap is unclear.
              </p>
              <p>
                I work with founders who are <strong className="text-white">serious about the craft</strong> -- not just chasing fundraising rounds or exit multiples, but building sustainable businesses that solve real problems for real users. Founders who respect technology but understand it is leverage, not the business. Founders who value operational discipline, financial prudence, and long-term thinking.
              </p>
              <p className="text-xl font-semibold text-white">
                If you are building something hard, something that matters, something worth doing -- start a conversation.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-orange-500 to-pink-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Start a Mentorship Conversation
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Whether you need ongoing advisory, project-based consulting, or fractional CTO support -- explore whether there is a fit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors shadow-lg text-lg"
              >
                Schedule a Conversation
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-4 bg-orange-700 text-white font-semibold rounded-lg hover:bg-orange-800 transition-colors border-2 border-white/20 text-lg"
              >
                View Full Experience
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
