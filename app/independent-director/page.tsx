import { Metadata } from "next";
import Link from "next/link";
import { Navigation, Footer } from "@/components/sections";
import AnimatedSection from "@/components/ui/AnimatedSection";
import AnimatedCard from "@/components/ui/AnimatedCard";

export const metadata: Metadata = {
  title: "Independent Non-Executive Director | Board Advisory - Chinar Deshpande",
  description: "Proven board-level technology leadership across AI governance, GCC strategy, enterprise transformation, and governance transition. 30+ years operational experience translating to strategic board value.",
  keywords: [
    "independent director",
    "non-executive director",
    "board advisory",
    "AI governance",
    "GCC strategy board",
    "technology transformation board",
    "PE operating advisor"
  ],
};

const coreCompetencies = [
  {
    id: "ai-governance",
    icon: "🤖",
    title: "AI Governance & Risk Management",
    problem: "Boards struggle to oversee AI adoption beyond pilot stage -- lacking frameworks to evaluate ROI, manage risk, and ensure production-scale deployment.",
    whatIBring: [
      {
        capability: "Production AI Deployment Experience",
        proof: "Led AI-driven warehouse optimization across 18 fulfillment centers (THG), deploying computer vision for quality control, predictive analytics for demand forecasting, and ML-based inventory optimization serving 300+ brands across 198 countries."
      },
      {
        capability: "AI Governance Framework Design",
        proof: "Established AI ethics committees, model governance protocols, and data privacy frameworks compliant with GDPR and UK regulatory requirements while managing multi-currency, multi-jurisdiction operations."
      },
      {
        capability: "Board-Level AI ROI Metrics",
        proof: "Created board reporting dashboards tracking AI investment ROI, model performance degradation, operational efficiency gains, and risk mitigation outcomes -- translating technical metrics into P&L impact for executive oversight."
      }
    ],
    outcomes: [
      "AI governance frameworks balancing innovation velocity with risk management",
      "Investment evaluation criteria: pilot-to-production ROI thresholds, vendor selection rubrics",
      "Risk oversight: model bias detection, data privacy compliance, regulatory adherence",
      "Organizational readiness: change management, talent upskilling, process redesign"
    ],
    tags: ["AI Governance", "Risk Management", "ROI Metrics", "Production AI"]
  },
  {
    id: "gcc-strategy",
    icon: "🏢",
    title: "GCC Strategy & Capability Center Scaling",
    problem: "Boards lack clarity on GCC strategy beyond cost arbitrage -- questions around site selection, talent strategy, operating models, performance metrics, and governance remain unresolved.",
    whatIBring: [
      {
        capability: "Built GCCs from Zero to Scale",
        proof: "Established THG India Technology Center from ground up, scaling to 200+ engineers running 24x7 operations across engineering, operations, analytics, and finance. Managed Global IT Delivery Centre at CITI with 150 IT professionals serving US and Europe markets."
      },
      {
        capability: "Strategic GCC Operating Models",
        proof: "Designed captive GCC operating models at THG (full ownership), hybrid models at Stellar (partnership with Warburg Pincus-backed operations), and vendor-managed transitions at HUL (Unilever global PeopleSoft rollout across 120 countries)."
      },
      {
        capability: "Talent Density & Innovation Culture",
        proof: "Built Innovation and Incubation Cell at Stellar driving solar power, electric mobility, and BI platforms. Established long-term relationships with Oracle, Infor, SAP, Microsoft for talent development and technology partnerships."
      }
    ],
    outcomes: [
      "GCC strategic objectives aligned with corporate capability roadmap, not just cost reduction",
      "Site selection beyond cost: talent ecosystem quality, infrastructure resilience, geopolitical risk",
      "Performance metrics beyond cost-per-FTE: productivity multipliers, quality indices, innovation contribution",
      "Talent acquisition, retention, and career progression frameworks for sustained capability build"
    ],
    tags: ["GCC Strategy", "India Operations", "Talent Strategy", "Capability Centers"]
  },
  {
    id: "technology-transformation",
    icon: "⚡",
    title: "Technology-Led Cost & Resilience Transformation",
    problem: "Boards approve modernization initiatives but lack operational experience to oversee execution risk, investment sequencing, and value realization. Technology committees struggle to distinguish progress theater from genuine transformation.",
    whatIBring: [
      {
        capability: "Robotics & Automation at Scale",
        proof: "Deployed Autostore, Geek+, and T-sorter robotic systems across 18 warehouses at THG. Built in-house Warehouse Control System managing 24x7 operations. Led automation initiatives across 50 million sq. ft. warehousing infrastructure at Stellar serving Tata Motors, Reliance, VIP, Kohler, Amazon, Flipkart."
      },
      {
        capability: "Enterprise Platform Modernization",
        proof: "Implemented 6 world-class ERPs: SAP IS Retail for Future Group (900+ stores, 3,200 users, INR 3B budget), PeopleSoft HRMS for Unilever (120 countries, 10,000+ managers), Oracle Fusion Cloud and Infor WMS at Stellar, Microsoft Navision at CITI, ZingHR cloud HRMS at Stellar."
      },
      {
        capability: "Value Realization Discipline",
        proof: "Delivered measurable outcomes: CIO 100 Award (2006), featured in SAP Annual Report 2005-06, CMMI Level 3 appraisal through KPMG, deployed analytics dashboards tracking cost reduction, resilience improvement, and productivity gains across all transformation programs."
      }
    ],
    outcomes: [
      "Technology transformation roadmap governance with clear investment sequencing and ROI gates",
      "Execution risk oversight: vendor lock-in avoidance, integration complexity management, change management discipline",
      "Value realization tracking: cost reduction targets, resilience KPIs, productivity improvement metrics",
      "CTO/VP Engineering performance evaluation frameworks tied to business outcomes, not project delivery"
    ],
    tags: ["Automation", "ERP Modernization", "Cost Transformation", "Resilience"]
  },
  {
    id: "governance-transition",
    icon: "📊",
    title: "Founder-to-Institutional Governance Transition",
    problem: "Growth-stage companies and PE-backed firms transitioning from founder-led to institutional governance need to professionalize technology governance without losing execution velocity.",
    whatIBring: [
      {
        capability: "Dual Operating Experience",
        proof: "Operated in founder-led environments (Millennium Sports co-founder, Stellar innovation cell) and institutional settings (THG FTSE 250, HUL, Future Group public company). Co-founded Millennium Sports managing INR 1B business across 6 pillars with full P&L responsibility."
      },
      {
        capability: "Board Reporting & Audit Compliance",
        proof: "Designed board reporting frameworks at Future Group (featured in SAP Annual Report), THG (FTSE 250 board requirements), and Stellar (Warburg Pincus portfolio governance). Managed audit committee coordination on technology risk, cybersecurity oversight, and regulatory compliance."
      },
      {
        capability: "M&A Technology Due Diligence",
        proof: "Led technology due diligence for multiple acquisitions at THG (300+ brands integration), Future Group (retail chain consolidation), and advised on technology integration planning for PE portfolio companies."
      }
    ],
    outcomes: [
      "Technology committee charter design with clear operating rhythm and decision-making authority",
      "Board reporting frameworks: technology investments, cybersecurity posture, operational resilience metrics",
      "Risk management coordination between technology, audit, and board committees",
      "M&A due diligence frameworks: technology debt assessment, integration complexity evaluation, synergy realization planning"
    ],
    tags: ["Board Governance", "Technology Committee", "M&A Due Diligence", "PE Advisory"]
  }
];

const trackRecord = [
  {
    company: "THG (FTSE 250)",
    role: "CTO Global Logistics & Finance",
    period: "2022-Present",
    boardValue: [
      "Led digital transformation of worldwide supply chain for 300+ e-commerce brands across 18 warehouses shipping to 198 destinations",
      "Deployed robotics automation (Autostore, Geek+, T-sorter) with in-house Warehouse Control System",
      "Established Global Tech Development Center in India from ground up, scaling to 200+ engineers",
      "Managed multi-currency payments, procure-to-pay, and order-to-cash cycles across multiple jurisdictions"
    ],
    governance: "Public company board reporting, audit compliance, cybersecurity oversight, GDPR compliance"
  },
  {
    company: "Future Group (India's Largest Retailer)",
    role: "Group CIO",
    period: "2004-2007",
    boardValue: [
      "Managed technology budget of INR 3 Billion with full P&L responsibility",
      "Implemented SAP IS Retail for 3,200 users across 900+ stores, 35 warehouses, 4 branch offices",
      "Featured as center-fold story in SAP Annual Report 2005-06",
      "Designed and deployed business Data Warehouse with real-time management dashboards for executive board"
    ],
    governance: "Board-level technology committee participation, investment governance, executive dashboard design"
  },
  {
    company: "Hindustan Unilever (Unilever Global)",
    role: "IT Manager / Project Lead",
    period: "1997-2004",
    boardValue: [
      "Implemented PeopleSoft HRMS for 120 countries covering 10,000+ managers globally",
      "Key team member of Project Garuda (Worldwide PeopleSoft implementation for Unilever)",
      "Designed Common Core Data Architecture for Unilever and set up central Data Consolidation Unit in Rotterdam",
      "Instrumental in setting up PeopleSoft Excellence Center in Unilever US (Lipton House, New Jersey)"
    ],
    governance: "Global governance frameworks, multi-country regulatory compliance, audit coordination"
  },
  {
    company: "Stellar Value Chain (Warburg Pincus Portfolio)",
    role: "CTO and Head of Innovation",
    period: "2016-2021",
    boardValue: [
      "Led technology initiatives for Pan-India supply chain company managing 50 million sq. ft. warehousing",
      "Implemented Oracle Fusion Cloud and Infor WMS with long-term strategic partnerships",
      "As Group HR Head, managed 1,500 employees and 4,000+ contract workers across 52 vendors",
      "Established Innovation and Incubation Cell driving solar power, electric mobility, BI platforms"
    ],
    governance: "PE portfolio governance, board reporting to Warburg Pincus, risk management oversight"
  }
];

const idealBoardProfile = [
  {
    type: "PE Portfolio Companies (Series B to Pre-IPO)",
    fit: "Growth-stage firms backed by private equity or venture capital, navigating AI adoption, GCC scaling, or operational transformation with board oversight requirements. My Warburg Pincus portfolio experience (Stellar) and FTSE 250 public company experience (THG) translate directly."
  },
  {
    type: "Global Enterprises Establishing GCCs",
    fit: "Multinational corporations establishing or scaling Global Capability Centers in India, requiring board-level governance on GCC strategy, talent, operating models, and performance metrics. Built GCCs from zero to 200+ engineers with proven operating model playbooks."
  },
  {
    type: "Technology-Led Industrials",
    fit: "Manufacturing, logistics, retail, or e-commerce companies deploying automation, AI, and enterprise modernization at scale. Hands-on experience deploying robotics across 18 warehouses, implementing 6 ERPs, and managing 60+ million sq. ft. warehouse operations."
  },
  {
    type: "Founder-to-Institutional Transitions",
    fit: "Growth-stage companies professionalizing governance structures, establishing technology committees, and transitioning from founder-led to institutional decision-making. Co-founded Millennium Sports (INR 1B business) and operated in both founder-led and public company environments."
  }
];

const engagementStyle = [
  {
    area: "Board Meeting Rhythm",
    approach: "Quarterly board meetings with monthly technology committee sessions. Async updates via board portal for real-time visibility into key metrics. Crisis escalation protocols for cybersecurity incidents, operational disruptions, or regulatory breaches."
  },
  {
    area: "Deep-Dive Sessions",
    approach: "Annual strategy sessions on AI roadmap, GCC scaling plans, technology debt management, and vendor relationship governance. Semi-annual deep-dives on cybersecurity posture, operational resilience testing, and M&A technology integration planning."
  },
  {
    area: "Operational Access",
    approach: "Direct access to CTO/VP Engineering for operational context. Site visits to GCCs, warehouses, and technology centers for ground truth. Executive coaching for technology leaders navigating board reporting and stakeholder management."
  },
  {
    area: "Network Leverage",
    approach: "C-suite network access (Microsoft, SAP, Oracle, Deloitte, PwC) for strategic partnerships and vendor negotiations. Industry connections across NSE, HDFC, private equity firms for market intelligence and capability benchmarking."
  }
];

export default function IndependentDirectorPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary-600 to-blue-600 text-white py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
                Independent Non-Executive Director
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Operator in the arena.<br />Advisor in the room.
              </h1>
              <p className="text-xl sm:text-2xl text-primary-100 mb-6 leading-relaxed">
                30+ years operational technology leadership translating to strategic board value across <strong className="text-white">AI governance</strong>, <strong className="text-white">GCC strategy</strong>, <strong className="text-white">enterprise transformation</strong>, and <strong className="text-white">governance transition</strong>.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold">30+</div>
                  <div className="text-sm text-primary-100">Years Experience</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold">14</div>
                  <div className="text-sm text-primary-100">Countries</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold">2,500+</div>
                  <div className="text-sm text-primary-100">Professionals Led</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold">6</div>
                  <div className="text-sm text-primary-100">ERP Implementations</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors shadow-lg text-lg"
                >
                  Schedule Board Conversation
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
          </div>
        </section>

        {/* Four Core Competencies */}
        <AnimatedSection>
          <section className="py-16 sm:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Four Board-Level Competencies
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Operational experience translating to strategic governance value
                </p>
              </div>

              <div className="space-y-12">
                {coreCompetencies.map((competency, index) => (
                  <AnimatedCard key={competency.id} delay={index * 0.1} className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-6 sm:p-8 hover:border-primary-500 transition-all hover:shadow-xl">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="text-5xl flex-shrink-0">{competency.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                          {competency.title}
                        </h3>
                        <p className="text-red-600 font-semibold mb-4">
                          The Board Challenge: <span className="font-normal text-gray-700">{competency.problem}</span>
                        </p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <p className="text-sm font-semibold text-green-600 mb-4">What I Bring (Specific & Provable):</p>
                        <div className="space-y-4">
                          {competency.whatIBring.map((item, idx) => (
                            <div key={idx} className="bg-white border border-gray-200 rounded-lg p-4">
                              <p className="font-semibold text-gray-900 mb-2">{item.capability}</p>
                              <p className="text-gray-600 text-sm italic">"{item.proof}"</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-gray-900 mb-3">Typical Board Outcomes:</p>
                        <ul className="grid grid-cols-1 gap-2">
                          {competency.outcomes.map((outcome, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span className="text-gray-700 text-sm">{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-200">
                        {competency.tags.map((tag, idx) => (
                          <span key={idx} className="px-3 py-1 text-xs rounded-full bg-primary-100 text-primary-700 font-medium">
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

        {/* Proven Track Record */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Proven Track Record
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Board-relevant experience from FTSE 250 public companies to PE portfolio firms
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {trackRecord.map((record, index) => (
                <AnimatedCard key={index} delay={index * 0.1} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-primary-500 transition-all hover:shadow-lg">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{record.company}</h3>
                    <p className="text-primary-600 font-semibold">{record.role}</p>
                    <p className="text-sm text-gray-500">{record.period}</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-gray-900 mb-2">Board-Relevant Outcomes:</p>
                      <ul className="space-y-2">
                        {record.boardValue.map((value, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                            <svg className="w-4 h-4 text-primary-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            {value}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 border-t border-gray-200">
                      <p className="text-xs font-semibold text-gray-500 mb-1">Governance Experience:</p>
                      <p className="text-sm text-gray-700 italic">{record.governance}</p>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* Ideal Board Profile */}
        <AnimatedSection>
          <section className="py-16 sm:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Ideal Board Fit
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Where operational technology experience translates to strategic governance value
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {idealBoardProfile.map((profile, index) => (
                  <AnimatedCard key={index} delay={index * 0.1} className="bg-gradient-to-br from-primary-50 to-white border-2 border-primary-200 rounded-xl p-6 hover:border-primary-500 transition-all hover:shadow-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {profile.type}
                    </h3>
                    <p className="text-gray-700">
                      {profile.fit}
                    </p>
                  </AnimatedCard>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Engagement Style */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Engagement Style
              </h2>
              <p className="text-xl text-gray-600">
                How I work with boards and technology committees
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {engagementStyle.map((style, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:border-primary-500 transition-all hover:shadow-md">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{style.area}</h3>
                  <p className="text-gray-600">{style.approach}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Operator's Lens */}
        <section className="py-16 sm:py-20 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
              The Operator's Lens
            </h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                What is distinctive is not the years. It is the <strong className="text-white">parallel tracks</strong> - a senior corporate seat, hands-on services delivery, and active product builds - kept honest by the same filters: <strong className="text-white">family, discipline, financial prudence, long horizons</strong>.
              </p>
              <p>
                I run engineering, supply chain, and finance platforms with the operational discipline of someone who has been on the hook for outcomes - and the cybersecurity, governance, and reporting rigor expected at board level.
              </p>
              <p>
                I do not advise on things I have not done. I do not bring frameworks that sound rigorous in PowerPoint but collapse under production load.
              </p>
              <p>
                The board work I take on is informed by that operational lens. When I discuss AI governance, I have deployed production AI systems serving 300+ brands. When I discuss GCC strategy, I have built capability centers from zero to 200+ engineers. When I discuss technology transformation, I have implemented 6 ERPs across 8 industries and 14 countries.
              </p>
              <p className="text-xl font-semibold text-white">
                I serve on boards where the technology decisions are genuinely hard, the stakes are real, and the people are serious.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-primary-600 to-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Start a Conversation
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              If your board is navigating AI adoption, GCC strategy, operational transformation, or governance transition -- explore whether there is a fit.
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
