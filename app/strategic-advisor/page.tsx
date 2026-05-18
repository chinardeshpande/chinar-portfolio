import { Metadata } from "next";
import Link from "next/link";
import { Navigation, Footer } from "@/components/sections";
import AnimatedSection from "@/components/ui/AnimatedSection";
import AnimatedCard from "@/components/ui/AnimatedCard";

export const metadata: Metadata = {
  title: "Strategic Advisor & Transformation Partner - Chinar Deshpande",
  description: "AI transformation advisory, GCC strategy, fractional CTO, and enterprise modernization. 30+ years operator experience translating technology investments into P&L impact.",
  keywords: [
    "strategic advisor technology",
    "AI transformation consultant",
    "GCC strategy advisor",
    "fractional CTO",
    "enterprise transformation advisor",
    "technology transformation consultant"
  ],
};

const advisoryServices = [
  {
    id: "ai-transformation",
    icon: "🤖",
    title: "AI Transformation Advisory",
    businessProblem: "Organizations run AI pilots that never reach production scale. Boards approve AI investments but struggle to track ROI. Technology teams lack frameworks to move from proof-of-concept to production-grade deployment with measurable P&L impact.",
    solution: "I help enterprises move AI from pilot to production with operational discipline and financial rigor. Not consulting theater -- hands-on deployment frameworks informed by deploying AI-driven systems across 18 warehouses, 300+ brands, and 198 countries.",
    whatYouGet: [
      {
        deliverable: "AI Readiness Assessment",
        details: "Current-state audit: data infrastructure quality, model governance maturity, organizational capability gaps, technology debt blockers. 2-week diagnostic with executive readout identifying quick wins and multi-quarter transformation roadmap."
      },
      {
        deliverable: "Production AI Deployment Playbook",
        details: "End-to-end framework: use case prioritization (P&L impact, technical feasibility, data availability), pilot design, production scaling criteria, ROI tracking dashboards, risk management protocols. Based on deploying computer vision, predictive analytics, ML-based optimization at enterprise scale."
      },
      {
        deliverable: "AI Governance Framework",
        details: "Model governance protocols, data privacy compliance (GDPR, regulatory requirements), bias detection mechanisms, ethical AI guidelines, board reporting formats translating technical metrics to business outcomes."
      },
      {
        deliverable: "Technology Vendor Selection",
        details: "Build vs. buy analysis, vendor evaluation rubrics, contract negotiation support, strategic partnership governance. Leverage C-suite network (Microsoft, SAP, Oracle, Deloitte, PwC) for competitive vendor dynamics."
      }
    ],
    outcomes: [
      "AI pilots reaching production deployment within 6-9 months with clear ROI metrics",
      "Board-level AI governance frameworks balancing innovation velocity with risk management",
      "Technology team capability development: hiring playbooks, training curricula, performance metrics",
      "Vendor relationship optimization: cost reduction, partnership governance, exit optionality"
    ],
    engagement: "3-6 month transformation engagements. Monthly executive sessions + weekly working sessions with technology teams. Deliverables: readiness assessment, deployment playbook, governance frameworks, vendor strategy.",
    industries: "Retail, E-commerce, Logistics, Supply Chain, Manufacturing, Financial Services",
    tags: ["AI Transformation", "Production AI", "ROI Metrics", "Governance"]
  },
  {
    id: "gcc-blueprint",
    icon: "🏢",
    title: "GCC Blueprint & Scaling Strategy",
    businessProblem: "Enterprises establish Global Capability Centers (GCCs) targeting cost arbitrage but struggle with site selection, talent strategy, operating models, and performance metrics. GCCs become cost centers rather than strategic capability engines -- missing the compounding value of talent density, process excellence, and innovation velocity.",
    solution: "I help enterprises design and scale GCCs from zero to operational excellence. Built THG India GCC from ground up to 200+ engineers running 24x7 operations. Managed global delivery centers across US, Europe, and India serving Fortune 500 clients.",
    whatYouGet: [
      {
        deliverable: "GCC Strategic Objectives Definition",
        details: "Align GCC objectives with corporate capability roadmap: what capabilities to build (engineering, operations, analytics, finance), what outcomes to optimize (cost reduction, talent density, innovation contribution), what metrics to track beyond cost-per-FTE."
      },
      {
        deliverable: "Site Selection & Setup Playbook",
        details: "Site selection criteria beyond cost: talent ecosystem quality, infrastructure resilience, geopolitical risk, time zone alignment. Legal entity formation, office setup, vendor ecosystem development, government relationship navigation."
      },
      {
        deliverable: "Operating Model Design",
        details: "Captive vs. vendor-managed trade-offs, governance structures, performance metrics, technology stack decisions, process standardization frameworks, knowledge transfer protocols from HQ to GCC."
      },
      {
        deliverable: "Talent Acquisition & Retention Strategy",
        details: "Hiring playbooks (technical assessment, culture fit, compensation benchmarking), employer branding strategy, career progression frameworks, retention mechanics (learning opportunities, rotation programs, HQ exposure)."
      }
    ],
    outcomes: [
      "GCC operational within 6-12 months with clear capability roadmap and performance metrics",
      "Talent acquisition velocity: 20-50 engineers in first year with quality bar maintenance",
      "Operating cost optimization: 40-60% cost reduction vs. HQ while building strategic capabilities",
      "Innovation contribution: GCC becoming source of product innovation, not just execution arm"
    ],
    engagement: "6-12 month GCC setup engagements. On-site presence during critical phases (site selection, initial hiring, operational launch). Remote advisory during scaling phase. Deliverables: strategic blueprint, operating model, hiring playbook, metrics framework.",
    industries: "Technology, Financial Services, Retail, E-commerce, Manufacturing, Professional Services",
    tags: ["GCC Strategy", "India Operations", "Capability Centers", "Talent Strategy"]
  },
  {
    id: "fractional-cto",
    icon: "⚡",
    title: "Fractional CTO / Interim Leadership",
    businessProblem: "Growth-stage companies and PE portfolio firms need operational technology leadership during CTO transitions, product pivots, pre-fundraising preparation, or post-acquisition integrations. Hiring permanent CTO takes 6-12 months -- but operational decisions cannot wait.",
    solution: "I provide interim CTO leadership with operational discipline and execution velocity. 30+ years running engineering, supply chain, and finance platforms with P&L responsibility. Step in, stabilize operations, establish process discipline, hire permanent leadership, transition cleanly.",
    whatYouGet: [
      {
        deliverable: "Operational Stabilization (First 30 Days)",
        details: "Technology landscape audit: codebase quality, infrastructure debt, vendor dependencies, team capability assessment, process gaps. Stabilize critical operations, establish incident management protocols, restore stakeholder confidence."
      },
      {
        deliverable: "Strategic Roadmap Development (Days 30-90)",
        details: "Technology strategy aligned with business objectives: product roadmap prioritization, infrastructure modernization plan, technology debt management, team scaling roadmap, vendor relationship optimization."
      },
      {
        deliverable: "Process & Team Development (Days 90-180)",
        details: "Engineering process discipline: sprint planning, code review standards, deployment automation, observability stack, on-call rotation. Team development: hiring plans, performance management, career progression frameworks."
      },
      {
        deliverable: "Permanent CTO Hiring & Transition",
        details: "Define permanent CTO profile, source candidates leveraging C-suite network, conduct technical and culture fit assessment, negotiate offers, execute smooth transition with knowledge transfer and relationship handoffs."
      }
    ],
    outcomes: [
      "Operational stability within 30 days: critical incidents resolved, team morale restored, stakeholder confidence rebuilt",
      "Strategic clarity within 90 days: technology roadmap aligned with business objectives, investment priorities clear",
      "Process discipline within 180 days: engineering velocity improved, quality metrics tracked, team accountability established",
      "Permanent CTO hired and transitioned within 6 months with operational continuity maintained"
    ],
    engagement: "3-6 month interim engagements. 2-3 days/week on-site or remote. Flexible extension if permanent hire timeline extends. Success-based fees tied to operational outcomes and hiring completion.",
    industries: "PE Portfolio Companies, Growth-Stage Startups, Post-Acquisition Integrations, Technology-Led Enterprises",
    tags: ["Fractional CTO", "Interim Leadership", "Operational Excellence", "Team Building"]
  },
  {
    id: "transformation-consulting",
    icon: "🚀",
    title: "Enterprise Technology Transformation",
    businessProblem: "Enterprises approve modernization initiatives (ERP upgrades, cloud migration, warehouse automation, intelligent process automation) but struggle with execution risk, vendor management, change management, and value realization. Projects run over budget, over timeline, and under-deliver on promised ROI.",
    solution: "I help enterprises execute technology transformations with operational discipline and financial rigor. Implemented 6 world-class ERPs across 8 industries and 14 countries. Deployed robotics across 18 warehouses managing 60+ million sq ft operations. Featured in SAP Annual Report 2005-06 for transformation excellence.",
    whatYouGet: [
      {
        deliverable: "Transformation Readiness Assessment",
        details: "Current-state diagnostic: technology debt inventory, organizational change capacity, vendor relationship maturity, executive sponsorship strength. Identify execution risks, stakeholder alignment gaps, budget/timeline realism."
      },
      {
        deliverable: "Transformation Roadmap & Governance",
        details: "Multi-year transformation roadmap with clear investment sequencing, ROI gates, risk mitigation strategies. Governance structures: steering committee charter, decision-making protocols, escalation paths, board reporting formats."
      },
      {
        deliverable: "Vendor Selection & Management",
        details: "Build vs. buy analysis, RFP development, vendor evaluation rubrics, contract negotiation, implementation partner selection, strategic partnership governance. Leverage vendor relationships (SAP, Oracle, Microsoft, Infor) for competitive dynamics."
      },
      {
        deliverable: "Change Management & Value Realization",
        details: "Organizational change management: stakeholder communication, training curricula, user adoption metrics, resistance management. Value realization tracking: cost reduction targets, productivity improvements, resilience KPIs tied to business outcomes."
      }
    ],
    outcomes: [
      "Transformation programs delivered on-time, on-budget with promised ROI realized within 12-18 months",
      "Vendor cost optimization: 20-40% reduction through competitive dynamics and contract negotiation",
      "Organizational capability built: internal teams capable of sustaining and evolving systems post-implementation",
      "Executive confidence: board-level visibility into progress, risks, and outcomes with no surprises"
    ],
    engagement: "6-24 month transformation engagements depending on scope (ERP: 12-18 months, Automation: 6-12 months, Multi-initiative: 18-24 months). Monthly executive sessions + bi-weekly working sessions. Deliverables: roadmap, governance framework, vendor strategy, change management plan.",
    industries: "Retail, Logistics, Manufacturing, Supply Chain, E-commerce, Financial Services, Professional Services",
    tags: ["ERP Transformation", "Automation", "Cloud Migration", "Change Management"]
  }
];

const trackRecord = [
  {
    transformation: "SAP IS Retail - Future Group",
    scale: "900+ Stores | 3,200 Users | INR 3B Budget",
    outcomes: [
      "Implemented SAP IS Retail across India's largest retailer with 35 warehouses and 4 branch offices",
      "Featured as center-fold story in SAP Annual Report 2005-06 for transformation excellence",
      "Deployed Point-of-Sale and Loyalty Program serving 300M+ customers with 3.5M SKUs",
      "Received CIO 100 Award (2006) for business impact and execution discipline"
    ]
  },
  {
    transformation: "PeopleSoft HRMS - Unilever Global",
    scale: "120 Countries | 10,000+ Managers | Global Rollout",
    outcomes: [
      "Key team member of Project Garuda (Worldwide PeopleSoft implementation for Unilever)",
      "Designed Common Core Data Architecture and set up central Data Consolidation Unit in Rotterdam",
      "Instrumental in setting up PeopleSoft Excellence Center in Unilever US (Lipton House, New Jersey)",
      "Implemented Citrix Solution connecting 2,000+ users for remote PeopleSoft access"
    ]
  },
  {
    transformation: "Robotics Automation - THG Logistics",
    scale: "18 Warehouses | 24x7 Operations | 300+ Brands",
    outcomes: [
      "Deployed Autostore, Geek+, and T-sorter robotic systems across global warehouse network",
      "Built in-house Warehouse Control System managing 24x7 fulfillment operations",
      "Drove AI-driven warehouse optimization: computer vision for quality, predictive analytics for demand",
      "Managed logistics transformation serving 198 countries with multi-currency operations"
    ]
  },
  {
    transformation: "Oracle Fusion & Infor WMS - Stellar",
    scale: "50M Sq Ft Warehousing | 21 Cities | 1,500+ Employees",
    outcomes: [
      "Implemented Oracle Fusion Cloud and Infor WMS with long-term strategic partnerships",
      "Managed operations serving Tata Motors, Reliance, VIP, Kohler, Amazon, Flipkart",
      "Built Innovation and Incubation Cell driving solar power, electric mobility, BI platforms",
      "Established Customer Experience Centers across 4 major cities (first-of-its-kind in 3PL industry)"
    ]
  }
];

const engagementStyle = [
  {
    phase: "Discovery & Diagnosis (Weeks 1-2)",
    activities: "Stakeholder interviews (exec team, technology leaders, key users), technology landscape audit, process observation, data analysis, vendor contract review. Deliverable: Current-state assessment with prioritized recommendations."
  },
  {
    phase: "Strategy & Roadmap (Weeks 3-6)",
    activities: "Future-state design workshops, transformation roadmap development, investment sequencing, risk mitigation planning, governance structure design. Deliverable: Multi-year transformation roadmap with ROI projections and governance framework."
  },
  {
    phase: "Execution Support (Months 2-12+)",
    activities: "Vendor selection and management, steering committee participation, executive coaching, change management oversight, value realization tracking. Deliverable: Monthly board updates, quarterly deep-dives, ongoing advisory as needed."
  },
  {
    phase: "Transition & Sustainment (Final Quarter)",
    activities: "Knowledge transfer to internal teams, process documentation, performance metrics handoff, vendor relationship transition. Deliverable: Operational playbooks, sustainability framework, ongoing advisory retainer (optional)."
  }
];

const whyWorkWithMe = [
  {
    differentiator: "Operator, Not Consultant",
    explanation: "I have run engineering, supply chain, and finance platforms with P&L responsibility -- managing budgets up to INR 3B, leading teams up to 2,500 professionals, delivering measurable ROI under board scrutiny. I do not advise on things I have not done."
  },
  {
    differentiator: "Execution Discipline",
    explanation: "Delivered 6 world-class ERP implementations, deployed robotics across 18 warehouses, scaled GCCs from zero to 200+ engineers. Featured in SAP Annual Report, received CIO 100 Award, achieved CMMI Level 3 appraisal through KPMG. Track record speaks louder than sales pitch."
  },
  {
    differentiator: "Vendor Independence",
    explanation: "No vendor kickbacks, no implementation partner commissions. Built long-term relationships with Microsoft, SAP, Oracle, Infor, Deloitte, PwC -- leverage network for competitive vendor dynamics and best-in-class implementation support."
  },
  {
    differentiator: "C-Suite Fluency",
    explanation: "30+ years board-level experience: FTSE 250 public company (THG), PE portfolio governance (Stellar with Warburg Pincus), public company board participation (Future Group). Translate technology decisions to business outcomes in language boards understand."
  },
  {
    differentiator: "Hands-On AI Expertise",
    explanation: "Daily user of ChatGPT, Claude Code, Claude Cowork, Google Gemini AI Studio, n8n, NotebookLM, VS Code. Not AI hype evangelist -- practical implementer deploying production AI systems with measurable ROI and operational discipline."
  }
];

export default function StrategicAdvisorPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-600 to-purple-600 text-white py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
                Strategic Advisor & Transformation Partner
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Technology investments<br />that produce P&L impact.
              </h1>
              <p className="text-xl sm:text-2xl text-blue-100 mb-6 leading-relaxed">
                AI transformation advisory. GCC strategy & scaling. Fractional CTO leadership. Enterprise modernization. <strong className="text-white">30+ years operator experience</strong> translating technology investments into measurable business outcomes.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold">6</div>
                  <div className="text-sm text-blue-100">ERP Transformations</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold">18</div>
                  <div className="text-sm text-blue-100">Warehouses Automated</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold">200+</div>
                  <div className="text-sm text-blue-100">GCC Engineers Scaled</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold">14</div>
                  <div className="text-sm text-blue-100">Countries</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors shadow-lg text-lg"
                >
                  Start Transformation Conversation
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/experience"
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors border-2 border-white/20 text-lg"
                >
                  View Track Record
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Four Advisory Services */}
        <AnimatedSection>
          <section className="py-16 sm:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Four Advisory Services
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Strategic partnerships for enterprise transformation
                </p>
              </div>

              <div className="space-y-12">
                {advisoryServices.map((service, index) => (
                  <AnimatedCard key={service.id} delay={index * 0.1} className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-6 sm:p-8 hover:border-blue-500 transition-all hover:shadow-xl">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="text-5xl flex-shrink-0">{service.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                          {service.title}
                        </h3>
                        <div className="space-y-3">
                          <div>
                            <p className="text-sm font-semibold text-red-600 mb-1">The Business Problem:</p>
                            <p className="text-gray-700">{service.businessProblem}</p>
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-green-600 mb-1">How I Help:</p>
                            <p className="text-gray-700">{service.solution}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <p className="text-sm font-semibold text-blue-600 mb-4">What You Get:</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {service.whatYouGet.map((item, idx) => (
                            <div key={idx} className="bg-white border border-gray-200 rounded-lg p-4">
                              <p className="font-semibold text-gray-900 mb-2 text-sm">{item.deliverable}</p>
                              <p className="text-gray-600 text-xs">{item.details}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-gray-900 mb-3">Typical Outcomes:</p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {service.outcomes.map((outcome, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <svg className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span className="text-gray-700 text-sm">{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                        <div>
                          <p className="text-xs font-semibold text-gray-500 mb-1">Engagement Model:</p>
                          <p className="text-sm text-gray-700">{service.engagement}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-gray-500 mb-1">Industries:</p>
                          <p className="text-sm text-gray-700">{service.industries}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-200">
                        {service.tags.map((tag, idx) => (
                          <span key={idx} className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-700 font-medium">
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
                Major transformations delivered with execution discipline and measurable ROI
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {trackRecord.map((record, index) => (
                <AnimatedCard key={index} delay={index * 0.1} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-500 transition-all hover:shadow-lg">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{record.transformation}</h3>
                    <p className="text-blue-600 font-semibold text-sm">{record.scale}</p>
                  </div>

                  <ul className="space-y-2">
                    {record.outcomes.map((outcome, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <svg className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* Engagement Style */}
        <AnimatedSection>
          <section className="py-16 sm:py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Engagement Approach
                </h2>
                <p className="text-xl text-gray-600">
                  Structured phases with clear deliverables and accountability
                </p>
              </div>

              <div className="space-y-6">
                {engagementStyle.map((phase, index) => (
                  <div key={index} className="bg-gradient-to-r from-blue-50 to-white border-2 border-blue-200 rounded-lg p-6 hover:border-blue-500 transition-all hover:shadow-md">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{phase.phase}</h3>
                    <p className="text-gray-700">{phase.activities}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Why Work With Me */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Why Work With Me
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Five differentiators that matter when transformation stakes are high
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyWorkWithMe.map((item, index) => (
                <AnimatedCard key={index} delay={index * 0.1} className="bg-white border-2 border-blue-200 rounded-xl p-6 hover:border-blue-500 transition-all hover:shadow-lg">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    ✓ {item.differentiator}
                  </h3>
                  <p className="text-gray-700 text-sm">
                    {item.explanation}
                  </p>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* The Transformation Lens */}
        <section className="py-16 sm:py-20 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
              The Transformation Lens
            </h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                I do not sell PowerPoint strategy. I do not bring frameworks that sound rigorous in boardrooms but collapse under production load. I do not advise on things I have not done.
              </p>
              <p>
                When I discuss <strong className="text-white">AI transformation</strong>, I have deployed production AI systems across 18 warehouses serving 300+ brands. When I discuss <strong className="text-white">GCC strategy</strong>, I have built capability centers from zero to 200+ engineers running 24x7 operations. When I discuss <strong className="text-white">ERP modernization</strong>, I have implemented 6 world-class systems across 8 industries and 14 countries -- featured in SAP Annual Report for execution excellence.
              </p>
              <p>
                I work with executives who are <strong className="text-white">serious about outcomes</strong> -- not transformation theater, not consultant dependency, not vendor lock-in games. Executives who value operational discipline, financial rigor, and accountability tied to measurable business results.
              </p>
              <p className="text-xl font-semibold text-white">
                If you are investing in transformation that must produce P&L impact -- start a conversation.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Start a Transformation Conversation
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Whether you need AI transformation advisory, GCC strategy, fractional CTO leadership, or enterprise modernization support -- explore whether there is a fit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors shadow-lg text-lg"
              >
                Schedule a Conversation
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/experience"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors border-2 border-white/20 text-lg"
              >
                View Track Record
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
