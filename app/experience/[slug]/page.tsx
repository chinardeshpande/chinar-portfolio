'use client';

import { Navigation, Footer } from '@/components/sections';
import { Section } from '@/components/ui';
import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function ExperienceDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const [experience, setExperience] = useState<any>(null);
  const [allExperiences, setAllExperiences] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'achievements' | 'impact'>('achievements');

  // Enhanced experience data for all companies
  const experienceData: Record<string, any> = {
    'thg-cto-global-logistics-finance': {
      infographics: [
        { section: 'GLOBAL FOOTPRINT & REACH', stats: [
          { number: '300', label: 'E-Commerce Brands', sublabel: '' },
          { number: '198', label: 'DESTINATIONS', sublabel: '18 WAREHOUSES' },
        ], description: 'Powering the worldwide logistics of major e-commerce brands like Google, PlayStation, and 300+ brands across 31 global data centers.' },
        { section: 'TECHNOLOGY DEPTH & INNOVATION', stats: [
          { number: '80%', label: 'AUTOMATION', sublabel: 'IN WCS MICROSERVICES' },
        ], description: 'Advanced robotics integration (Autostore, Geek+, T-sort) and MI/ML architecture drive a frictionless world-class fulfillment network.' },
        { section: 'FINANCIAL CONTRIBUTION & EFFICIENCY', stats: [
          { number: '£15M', label: 'ANNUALIZED SAVINGS;', sublabel: '33% FASTER ONBOARDING' },
        ], description: 'Reduced client onboarding from 12 to 8 weeks while architecting an India GCC for high-quality, cost-effective 24x7 support.' },
        { section: 'STRATEGIC HUMAN CAPITAL', stats: [
          { number: '200+', label: 'ENGINEER GLOBAL', sublabel: 'DELIVERY CENTRE' },
        ], description: 'Built a 24x7 Global Support and NOC-ready capability in India delivering development, infrastructure, and operations support.' }
      ],
      achievements: [
        { title: 'Transformation to Fulfillment-as-a-Service (FaaS)', description: 'Led strategic pivot from internal operations to commercial fulfillment platform, creating new revenue streams by offering end-to-end supply chain services to external brands. Built scalable technology infrastructure supporting multi-tenant operations across global warehouse network.' },
        { title: 'Warehouse Automation & Modernization', description: 'Orchestrated deployment of cutting-edge robotics technologies (Autostore, Geek+, T-sort) across 18 facilities. Developed proprietary Warehouse Control System (WCS) serving as intelligent orchestration layer, achieving 80%+ automation coverage.' },
        { title: 'Enterprise Brand Delivery Programs', description: 'Established white-glove technology programs for premium global brands including Google and PlayStation. Designed specialized fulfillment solutions with enhanced SLAs, real-time visibility, and custom integrations.' },
        { title: 'Foundation of India Global Capability Center', description: 'Built world-class technology hub from ground up, growing to 200+ engineers delivering 24/7 support across development, infrastructure, and operations. Generated £15M annualized savings while maintaining premium quality standards.' },
        { title: 'Digital Transformation of Global Supply Chain', description: 'Modernized entire technology stack spanning 31 data centers, warehouse management systems, transportation networks, and financial operations. Implemented real-time visibility platforms, predictive analytics, and AI-driven decision engines supporting 300+ brands.' },
      ],
      impact: [
        { category: 'Operational Excellence', impacts: ['Zero uncontrolled production releases', '33% reduction in brand onboarding time (12→8 weeks)', '99.9%+ uptime across global fulfillment network', '3x volume growth without proportional cost increase'] },
        { category: 'Revenue & Cost Optimization', impacts: ['Launched FaaS platform creating new high-margin revenue', '£15M annualized savings through India GCC', 'Unlocked marketplace fulfillment opportunities', 'Reduced per-unit fulfillment costs through automation'] },
        { category: 'Innovation & Technology', impacts: ['Pioneered robotics integration at scale', 'Proprietary WCS as competitive differentiation', '24/7 global NOC for proactive incident management', 'AI/ML for demand forecasting and optimization'] },
        { category: 'Strategic Partnerships', impacts: ['Secured enterprise clients (Google, PlayStation)', 'Technology alliances with robotics leaders', 'India as strategic offshore technology hub', 'Center of excellence model across organization'] }
      ]
    },
    'ampersand-group-cto': {
      infographics: [
        { section: 'MULTI-VERTICAL TRANSFORMATION', stats: [
          { number: '5', label: 'BUSINESS', sublabel: 'VERTICALS' },
        ], description: 'Schools chain, EPC business, multi-channel retail, health-tech, and hospitality - all digitally transformed under unified technology vision.' },
        { section: 'DIGITAL INNOVATION', stats: [
          { number: '100%', label: 'SCHOOL OPS', sublabel: 'DIGITIZED' },
        ], description: 'Real-time control room with live feeds of all school operations, GPS-enabled bus tracking, and parent communication apps.' },
        { section: 'ENTERPRISE INTEGRATION', stats: [
          { number: '1', label: 'GROUP-LEVEL', sublabel: 'ERP PLATFORM' },
        ], description: 'Consolidated financial management with integrated procure-to-pay and order-to-cash across all business units.' },
        { section: 'STRATEGIC PARTNERSHIP', stats: [
          { number: 'DELOITTE', label: 'DIGITAL', sublabel: 'TRANSFORMATION' },
        ], description: 'Led comprehensive digital transformation project with Deloitte as strategic partner driving group-wide innovation.' }
      ],
      achievements: [
        { title: 'Digital Transformation of Education Ecosystem', description: 'Set up connected ecosystem with live feeds of all school operations in centralized control room. Deployed eLMS for delivery of digital content for pre-primary students across India, revolutionizing early education delivery.' },
        { title: 'Smart Transportation & Safety Systems', description: 'Implemented comprehensive school bus GPS tracking with optimal route planning and real-time parent communication app. Enhanced student safety while optimizing operational efficiency across the schools network.' },
        { title: 'Group-Level ERP Consolidation', description: 'Designed and implemented unified ERP platform consolidating financial management with integrated procure-to-pay and order-to-cash cycles across schools, EPC, retail, health-tech, and hospitality verticals.' },
        { title: 'Multi-Business Technology Vision', description: 'Spearheaded digital transformation of multi-business conglomerate pioneering Indian education industry. Drove technology vision across diverse portfolio creating synergies and operational excellence.' },
      ],
      impact: [
        { category: 'Operational Visibility', impacts: ['Real-time monitoring of all school operations', 'Centralized control room for multi-location oversight', 'GPS tracking for 100% fleet visibility', 'Parent engagement through mobile apps'] },
        { category: 'Educational Innovation', impacts: ['eLMS deployment across India network', 'Digital content delivery for pre-primary segment', 'Enhanced learning outcomes through technology', 'Scalable platform for future expansion'] },
        { category: 'Enterprise Efficiency', impacts: ['Unified financial management platform', 'Integrated procure-to-pay automation', 'Consolidated order-to-cash processes', 'Cross-vertical operational synergies'] },
        { category: 'Strategic Partnerships', impacts: ['Deloitte engagement for transformation roadmap', 'Technology vendor ecosystem development', 'Best practices adoption from consulting partners', 'Change management across organization'] }
      ]
    },
    'stellar-value-chain-cto-innovation': {
      infographics: [
        { section: 'INFRASTRUCTURE SCALE', stats: [
          { number: '50M', label: 'SQ. FT.', sublabel: 'WAREHOUSING' },
          { number: '21', label: 'CITIES', sublabel: 'PAN-INDIA' },
        ], description: 'Managed 50 million sq. ft. of highly automated warehousing infrastructure across 21 cities serving India\'s largest brands.' },
        { section: 'WORKFORCE & OPERATIONS', stats: [
          { number: '1,500', label: 'ON-ROLL', sublabel: 'EMPLOYEES' },
          { number: '4,000+', label: 'CONTRACT', sublabel: 'WORKERS' },
        ], description: 'As Group HR Head, managed 1,500 on-roll employees and 4,000+ contract workers across 52 vendor partners.' },
        { section: 'ENTERPRISE CLIENTS', stats: [
          { number: '6M', label: 'SQ. FT.', sublabel: 'MODERN WH' },
        ], description: 'Operated 6 million sq. ft. of modern warehousing serving Tata Motors, Reliance, VIP, Kohler, Amazon, and Flipkart.' },
        { section: 'TECHNOLOGY LEADERSHIP', stats: [
          { number: 'ORACLE', label: 'FUSION +', sublabel: 'INFOR WMS' },
        ], description: 'Established strategic partnerships with Oracle and Infor, implementing Oracle Fusion Cloud and Infor WMS at enterprise scale.' }
      ],
      achievements: [
        { title: 'State-of-the-Art Logistics Infrastructure', description: 'Built highly automated warehousing infrastructure with industrial automation, robotics, and IoT platforms across 50 million sq. ft. spanning 21 cities. Positioned company as India\'s premier 3PL provider.' },
        { title: 'Enterprise Technology Partnerships', description: 'Established long-term strategic relationships with Oracle and Infor, successfully implementing Oracle Fusion Cloud and Infor WMS. Delivered enterprise-grade technology foundation for scale operations.' },
        { title: 'Innovation and Incubation Cell', description: 'Founded and led Innovation Cell driving solar power initiatives, electric mobility solutions, and advanced BI platforms. Pioneered sustainability and technology innovation in 3PL industry.' },
        { title: 'Customer Experience Centers', description: 'Built first-of-its-kind Customer Experience Centers across 4 major cities, showcasing warehouse automation and logistics innovation. Elevated industry standards for client engagement.' },
        { title: 'HR Digital Transformation', description: 'As Group HR Head, implemented ZingHR cloud-based SaaS HRMS for complete digital transformation of HR function managing 1,500+ employees and 4,000+ contract workers across 52 vendors.' },
      ],
      impact: [
        { category: 'Infrastructure Excellence', impacts: ['50M sq. ft. automated warehousing', '21-city Pan-India presence', 'Modern facilities for tier-1 brands', 'Industrial automation and robotics integration'] },
        { category: 'Client Portfolio', impacts: ['Tata Motors partnership', 'Reliance logistics operations', 'Amazon & Flipkart fulfillment', 'Premium brands (VIP, Kohler)'] },
        { category: 'Innovation Leadership', impacts: ['Solar power implementation', 'Electric mobility pilots', 'Advanced BI platforms', 'Industry-first Customer Experience Centers'] },
        { category: 'Workforce Management', impacts: ['ZingHR HRMS implementation', '1,500 employees managed', '4,000+ contract workers', '52 vendor partners coordinated'] }
      ]
    },
    'millennium-sports-cofounder-cto': {
      infographics: [
        { section: 'BUSINESS MODEL', stats: [
          { number: '6', label: 'BUSINESS', sublabel: 'PILLARS' },
        ], description: 'Sports Infrastructure, Events Management, Coaching & Talent, Sports Retail, Sports Education, and Corporate Wellness.' },
        { section: 'TECHNOLOGY PLATFORM', stats: [
          { number: 'CLOUD', label: 'SPORTS TECH', sublabel: 'PLATFORM' },
        ], description: 'State-of-the-art platform for complete life-cycle management of sportsmen and sports enthusiasts with cloud-based ERP.' },
        { section: 'INFRASTRUCTURE PROJECTS', stats: [
          { number: '5', label: 'LARGE', sublabel: 'PROJECTS' },
        ], description: 'World-class sports complex, international sports school, and multiple coaching centers with certified coaches.' },
        { section: 'EVENTS & PARTNERSHIPS', stats: [
          { number: 'NATIONAL', label: 'LEVEL', sublabel: 'EVENTS' },
        ], description: 'Organized national events in Table Tennis, Cricket, Football, Skating with partners including AXIS Bank and Celebrity Cricket League.' }
      ],
      achievements: [
        { title: 'Comprehensive Sports Technology Platform', description: 'Spearheaded development of state-of-the-art SPORTS TECHNOLOGY PLATFORM for complete life-cycle management. Built cloud-based ERP enabling entire operations including membership management, fee collection, facility booking, and events management.' },
        { title: 'Multi-Pillar Business Development', description: 'Co-founded innovation-led sports management company operating across 6 pillars: Sports Infrastructure, Events Management, Coaching & Talent Management, Sports Retail, Sports Education, and Corporate Wellness. Created comprehensive sports ecosystem.' },
        { title: 'Digital Strategy & Social Media Excellence', description: 'Drove digital strategy to promote club memberships, events, and players through social media collaboration, mobile apps, and cloud-hosted technology platform. Pioneered digital marketing in Indian sports industry.' },
        { title: 'Large Infrastructure Development', description: 'Led 5 large infrastructure projects including world-class sports complex and international sports school. Successfully launched sports club at CP Goenka International School.' },
      ],
      impact: [
        { category: 'Platform Innovation', impacts: ['Cloud-based sports management ERP', 'Membership & fee collection automation', 'Facility booking system', 'Events management platform'] },
        { category: 'Business Expansion', impacts: ['6-pillar business model', 'Sports retail chain established', 'Coaching centers at multiple locations', 'Corporate wellness programs'] },
        { category: 'Events & Partnerships', impacts: ['National-level events in 4 sports', 'AXIS Bank Premier League partnership', 'Celebrity Cricket League alliance', 'CP Goenka International School club'] },
        { category: 'Digital Excellence', impacts: ['Social media marketing leadership', 'Mobile app development', 'Cloud platform deployment', 'Online membership growth'] }
      ]
    },
    'citi-usa-ceo-india-europe': {
      infographics: [
        { section: 'BUSINESS SCALE', stats: [
          { number: '₹1B', label: 'BUSINESS', sublabel: 'RESPONSIBILITY' },
        ], description: 'CEO responsible for INR 1 Billion business development & delivery across India and Europe operations.' },
        { section: 'GLOBAL DELIVERY CENTER', stats: [
          { number: '150', label: 'IT PROS', sublabel: '20K SQ. FT.' },
        ], description: 'Built and ran Global IT Delivery Centre across 20,000 sq. ft. housing 150 IT professionals serving US, Europe, and India.' },
        { section: 'PRODUCT FOOTPRINT', stats: [
          { number: '4', label: 'EUROPEAN', sublabel: 'COUNTRIES' },
          { number: '350+', label: 'STORES', sublabel: '40 NATIONS' },
        ], description: 'Spectrum retail product running across 4 European countries; Prememan solution across 40 countries with 350+ stores.' },
        { section: 'QUALITY & MATURITY', stats: [
          { number: 'CMMI-3', label: 'APPRAISED', sublabel: 'VIA KPMG' },
        ], description: 'Company appraised at CMMI Level 3 through KPMG in 2013, demonstrating world-class process maturity.' }
      ],
      achievements: [
        { title: 'Global IT Delivery Centre Excellence', description: 'Built and ran Global IT Delivery Centre across 20,000 sq. ft. housing 150 IT professionals. Created offshore delivery model serving customers across US, Europe, and India with exceptional quality and efficiency.' },
        { title: 'Innovative Product Development', description: 'Built innovative products in Retail, Healthcare & Biometrics verticals. Successfully launched "Spectrum" retail product at NRF 2011 (US) and IRF (India), running live across 4 European countries.' },
        { title: 'European Retail Transformation', description: 'Revamped e-commerce solution for European retailer Prememan - integrated business model for online and offline customers across 40 countries with 350+ stores. Implemented Microsoft Navision - LS Retail ERP for MyDollarStore.' },
        { title: 'Strategic Technology Partnerships', description: 'Forged long-term relationships with IBM, SAP, Microsoft, and Fujitsu with aggressive joint-go-to-market strategies. Elevated company positioning through tier-1 technology alliances.' },
      ],
      impact: [
        { category: 'Business Growth', impacts: ['INR 1B revenue responsibility', 'Multi-geography operations (US/EU/India)', 'Product-led growth strategy', 'Consulting services expansion'] },
        { category: 'Product Success', impacts: ['Spectrum across 4 EU countries', 'NRF 2011 product launch success', 'Prememan: 40 countries, 350+ stores', 'Healthcare & Biometrics solutions'] },
        { category: 'Operational Excellence', impacts: ['150-person delivery center', '20,000 sq. ft. facility management', 'CMMI Level 3 appraisal (KPMG)', 'Quality-driven delivery model'] },
        { category: 'Strategic Alliances', impacts: ['IBM partnership established', 'SAP collaboration', 'Microsoft joint go-to-market', 'Fujitsu technology alliance'] }
      ]
    },
    'future-group-cio': {
      infographics: [
        { section: 'TECHNOLOGY BUDGET', stats: [
          { number: '₹3B', label: 'TECH', sublabel: 'BUDGET' },
        ], description: 'Managed technology budget of INR 3 Billion for India\'s largest retailer with nationwide operations.' },
        { section: 'SAP IMPLEMENTATION', stats: [
          { number: '3,200', label: 'SAP USERS', sublabel: '' },
          { number: '900+', label: 'STORES', sublabel: '35 WH' },
        ], description: 'Implemented SAP IS Retail for 3,200 users across 900+ stores, 35 warehouses, and 4 branch offices.' },
        { section: 'NETWORK & COLLABORATION', stats: [
          { number: '1,000+', label: 'LOCATIONS', sublabel: 'CONNECTED' },
          { number: '32K+', label: 'EXCHANGE', sublabel: 'MAILBOXES' },
        ], description: 'Connected 1,000+ locations on high-bandwidth private network with 32,000+ Microsoft Exchange mailboxes.' },
        { section: 'CUSTOMER SCALE', stats: [
          { number: '300M+', label: 'CUSTOMERS', sublabel: '' },
          { number: '3.5M', label: 'SKUS', sublabel: '' },
        ], description: 'Deployed Point-of-Sale and Loyalty Program for 900 stores serving 300M+ customers with 3.5M SKUs.' }
      ],
      achievements: [
        { title: 'SAP IS Retail at National Scale', description: 'Implemented SAP IS Retail for 3,200 users across 900+ stores, 35 warehouses, and 4 branch offices. Featured as center-fold story in SAP Annual Report 2005-06 for implementation excellence.' },
        { title: 'E-Commerce Pioneer', description: 'Launched e-commerce initiative (futurebazaar.com) complementing brick-and-mortar business. Led India retail industry\'s digital commerce transformation.' },
        { title: 'Enterprise Data Warehouse & Analytics', description: 'Designed and deployed business Data Warehouse and Analytics solution. Implemented online real-time management dashboards for executive board enabling data-driven decision making.' },
        { title: 'Nationwide Loyalty Program', description: 'Deployed Point-of-Sale and Loyalty Program for 900 stores serving 300M+ customers with 3.5M SKUs. Built India\'s largest retail loyalty ecosystem.' },
        { title: 'CIO 100 Award Recognition', description: 'Received prestigious CIO 100 Award (2006) for technology leadership and innovation in Indian retail industry.' },
      ],
      impact: [
        { category: 'Enterprise Systems', impacts: ['SAP IS Retail implementation', '3,200 users onboarded', 'SAP Annual Report feature (2005-06)', 'INR 3B budget management'] },
        { category: 'Digital Commerce', impacts: ['Futurebazaar.com launch', 'Omni-channel retail model', 'Online-offline integration', 'Industry digital leadership'] },
        { category: 'Infrastructure Scale', impacts: ['900+ stores connected', '1,000+ locations on network', '32,000+ Exchange mailboxes', '35 warehouses integrated'] },
        { category: 'Customer Excellence', impacts: ['300M+ customers served', '3.5M SKUs managed', 'Loyalty program deployment', 'Real-time POS across stores'] }
      ]
    },
    'hul-it-manager': {
      infographics: [
        { section: 'GLOBAL IMPLEMENTATION', stats: [
          { number: '120', label: 'COUNTRIES', sublabel: '' },
          { number: '10K+', label: 'MANAGERS', sublabel: 'GLOBAL' },
        ], description: 'Implemented PeopleSoft HRMS for 120 countries covering 10,000+ managers globally as part of Project Garuda.' },
        { section: 'Y2K COMPLIANCE', stats: [
          { number: '64+', label: 'SYSTEMS', sublabel: 'COMPLIANT' },
        ], description: 'Successfully managed Y2K compliance projects for 64+ systems ensuring business continuity across Unilever.' },
        { section: 'REMOTE ACCESS', stats: [
          { number: '2,000+', label: 'CITRIX', sublabel: 'USERS' },
        ], description: 'Implemented Citrix Solution connecting 2,000+ users for remote PeopleSoft access across India operations.' },
        { section: 'SUPPLY CHAIN', stats: [
          { number: 'MFG-PRO', label: 'COMPANY', sublabel: 'WIDE ERP' },
        ], description: 'Managed company-wide ERP solution (Mfg-Pro) encompassing entire supply chain from manufacturing to distribution.' }
      ],
      achievements: [
        { title: 'Global PeopleSoft HRMS Implementation', description: 'Implemented PeopleSoft HRMS for 120 countries covering 10,000+ managers globally. Key team member of Project Garuda - Worldwide PeopleSoft implementation for Unilever.' },
        { title: 'Common Core Data Architecture', description: 'Designed Common Core Data Architecture for Unilever and set up central Data Consolidation Unit in Rotterdam. Instrumental in setting up PeopleSoft Excellence Center in Unilever US (Lipton House, New Jersey).' },
        { title: 'Y2K Program Leadership', description: 'Successfully managed Y2K compliance projects for 64+ systems across HUL. Ensured zero business disruption during critical millennium transition period.' },
        { title: 'Enterprise Infrastructure Solutions', description: 'Implemented Citrix Solution connecting 2,000+ users for remote PeopleSoft access. Managed company-wide Mfg-Pro ERP solution encompassing entire supply chain.' },
      ],
      impact: [
        { category: 'Global Scale', impacts: ['120 countries deployment', '10,000+ managers globally', 'Rotterdam Data Consolidation Unit', 'Unilever US Excellence Center'] },
        { category: 'Project Leadership', impacts: ['Project Garuda (Worldwide)', 'Y2K: 64+ systems compliant', 'Zero business disruption', 'Enterprise architecture design'] },
        { category: 'Technology Innovation', impacts: ['Common Core Data Architecture', 'Citrix remote access (2,000+ users)', 'PeopleSoft Excellence Center', 'Mfg-Pro supply chain ERP'] },
        { category: 'Security & Compliance', impacts: ['TATA Honeywell Security System', '3D facility view implementation', 'Y2K compliance achieved', 'Enterprise access control'] }
      ]
    },
    'mercer-senior-software-engineer': {
      infographics: [
        { section: 'PRODUCT DEVELOPMENT', stats: [
          { number: 'C++', label: 'VISUAL', sublabel: 'DEVELOPMENT' },
        ], description: 'Developed compensation management software solutions in Visual C++ for Fortune 500 companies.' },
        { section: 'MERITLINK™ PRODUCT', stats: [
          { number: 'EXCEL', label: 'MS EXCEL +', sublabel: 'VB FRONTEND' },
        ], description: 'Designed complex spreadsheet application MeritLink™ in MS Excel with VB front-end for large organizations.' },
        { section: 'ENTERPRISE FEATURES', stats: [
          { number: '4', label: 'CORE', sublabel: 'MODULES' },
        ], description: 'Budgeting, merit modeling, bonus modeling, and performance evaluation - comprehensive compensation suite.' },
        { section: 'CLIENT BASE', stats: [
          { number: 'F500', label: 'FORTUNE', sublabel: 'COMPANIES' },
        ], description: 'Built enterprise-grade compensation management tools adopted by Fortune 500 companies worldwide.' }
      ],
      achievements: [
        { title: 'MeritLink™ Product Development', description: 'Designed complex spreadsheet application MeritLink™ in MS Excel with VB front-end. Product used by large organizations for budgeting, merit modeling, bonus modeling, and performance evaluation.' },
        { title: 'Visual C++ Compensation Solutions', description: 'Developed compensation management software solutions in Visual C++. Designed Data Export and Report Writer tools for MercerPRISM compensation software.' },
        { title: 'Enterprise-Grade Tools', description: 'Built enterprise-grade compensation management tools adopted by Fortune 500 companies. Delivered solutions that became industry standards in HR technology.' },
      ],
      impact: [
        { category: 'Product Innovation', impacts: ['MeritLink™ platform development', 'Visual C++ solutions', 'MS Excel + VB architecture', 'MercerPRISM enhancements'] },
        { category: 'Feature Development', impacts: ['Budgeting module', 'Merit modeling tools', 'Bonus calculation engine', 'Performance evaluation system'] },
        { category: 'Enterprise Adoption', impacts: ['Fortune 500 client base', 'Industry-standard tools', 'Wide enterprise adoption', 'Compensation best practices'] },
        { category: 'Technical Excellence', impacts: ['Data Export tools', 'Report Writer capabilities', 'Complex spreadsheet logic', 'VB front-end development'] }
      ]
    }
  };

  useEffect(() => {
    // Load all experiences
    fetch('/api/experience')
      .then(res => res.json())
      .then(data => {
        const experiences = data.timeline || [];
        setAllExperiences(experiences);

        // Find the specific experience by slug
        const exp = experiences.find((e: any) => e.slug === slug);
        setExperience(exp);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading experience details...</p>
        </div>
      </div>
    );
  }

  if (!experience) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <main className="pt-20 pb-20">
          <Section background="white" padding="default">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Experience Not Found</h1>
              <p className="text-gray-600 mb-8">The experience you're looking for doesn't exist.</p>
              <button
                onClick={() => router.push('/experience')}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Back to All Experiences
              </button>
            </div>
          </Section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main className="pt-20">
        {/* Hero Section with Company Info - Ultra Compact */}
        <Section background="white" padding="compact">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-xl p-4 shadow-lg"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-3">
                {/* Company Logo */}
                <div className="flex-shrink-0">
                  {experience.logo ? (
                    <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center overflow-hidden">
                      <img
                        src={experience.logo}
                        alt={`${experience.company} logo`}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          if (e.currentTarget.parentElement) {
                            e.currentTarget.parentElement.classList.add('bg-white', 'rounded-lg', 'shadow-md');
                            e.currentTarget.parentElement.innerHTML = `<span class="text-2xl md:text-3xl font-bold text-gray-800">${experience.company.charAt(0)}</span>`;
                          }
                        }}
                      />
                    </div>
                  ) : (
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-lg shadow-md flex items-center justify-center">
                      <span className="text-2xl md:text-3xl font-bold text-gray-800">
                        {experience.company.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>

                {/* Company Info & All Tags/Buttons */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                    <h1 className="text-xl md:text-2xl font-bold text-gray-900">
                      {experience.company}
                    </h1>
                    <span className="hidden sm:inline text-gray-400">•</span>
                    <h2 className="text-base md:text-lg text-gray-700">
                      {experience.title}
                    </h2>
                  </div>

                  {/* All Tags and Navigation Buttons in One Row */}
                  <div className="flex flex-wrap items-center gap-2">
                    {/* Info Tags */}
                    <span className="inline-flex items-center px-2.5 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                      {experience.type}
                    </span>
                    <span className="inline-flex items-center px-2.5 py-1 bg-white text-gray-700 text-xs font-semibold rounded-full shadow-sm">
                      <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      {experience.location}
                    </span>
                    <span className="inline-flex items-center px-2.5 py-1 bg-white text-gray-700 text-xs font-semibold rounded-full shadow-sm">
                      <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {experience.start_date} - {experience.end_date}
                    </span>
                    <span className="inline-flex items-center px-2.5 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold rounded-full shadow-lg">
                      {experience.duration}
                    </span>

                    {/* Separator */}
                    <span className="hidden lg:inline text-gray-400 mx-1">|</span>

                    {/* Navigation Buttons */}
                    <button
                      onClick={() => router.push('/experience')}
                      className="inline-flex items-center px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-700 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300 group text-xs font-medium border border-gray-200/50"
                    >
                      <svg className="w-3 h-3 mr-1 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      All
                    </button>

                    {/* Previous Experience */}
                    {allExperiences.findIndex((e: any) => e.slug === slug) > 0 && (
                      <button
                        onClick={() => {
                          const currentIndex = allExperiences.findIndex((e: any) => e.slug === slug);
                          const prevExp = allExperiences[currentIndex - 1];
                          router.push(`/experience/${prevExp.slug}`);
                        }}
                        className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 hover:shadow-lg transition-all duration-300 group text-xs font-medium"
                        title={allExperiences[allExperiences.findIndex((e: any) => e.slug === slug) - 1].company}
                      >
                        <svg className="w-3 h-3 mr-1 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Previous
                      </button>
                    )}

                    {/* Next Experience */}
                    {allExperiences.findIndex((e: any) => e.slug === slug) < allExperiences.length - 1 && (
                      <button
                        onClick={() => {
                          const currentIndex = allExperiences.findIndex((e: any) => e.slug === slug);
                          const nextExp = allExperiences[currentIndex + 1];
                          router.push(`/experience/${nextExp.slug}`);
                        }}
                        className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 hover:shadow-lg transition-all duration-300 group text-xs font-medium"
                        title={allExperiences[allExperiences.findIndex((e: any) => e.slug === slug) + 1].company}
                      >
                        Next
                        <svg className="w-3 h-3 ml-1 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Section>

        {/* Detailed Content - Enhanced Layout for All Experiences */}
        {experienceData[slug] ? (
          <Section background="white" padding="default">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column - Tabbed Content */}
                <div className="lg:col-span-2">
                  {/* Tab Buttons */}
                  <div className="border-b-2 border-gray-200 mb-0">
                    <div className="flex gap-1">
                      <button
                        onClick={() => setActiveTab('achievements')}
                        className={`relative px-6 py-3 font-semibold text-sm transition-all duration-300 rounded-t-lg ${
                          activeTab === 'achievements'
                            ? 'bg-white text-purple-600 border-l-2 border-r-2 border-t-2 border-purple-600 -mb-0.5'
                            : 'bg-gray-50 text-gray-600 hover:bg-gray-100 border-b-2 border-transparent'
                        }`}
                      >
                        <div className="flex items-center justify-center gap-2">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                          </svg>
                          Signature Achievements
                        </div>
                        {activeTab === 'achievements' && (
                          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"></div>
                        )}
                      </button>
                      <button
                        onClick={() => setActiveTab('impact')}
                        className={`relative px-6 py-3 font-semibold text-sm transition-all duration-300 rounded-t-lg ${
                          activeTab === 'impact'
                            ? 'bg-white text-green-600 border-l-2 border-r-2 border-t-2 border-green-600 -mb-0.5'
                            : 'bg-gray-50 text-gray-600 hover:bg-gray-100 border-b-2 border-transparent'
                        }`}
                      >
                        <div className="flex items-center justify-center gap-2">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                          </svg>
                          Business Impact
                        </div>
                        {activeTab === 'impact' && (
                          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"></div>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Tab Content */}
                  {activeTab === 'achievements' && (
                    <motion.div
                      key="achievements"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className="bg-white rounded-b-lg rounded-tr-lg border-2 border-purple-600 border-t-0 p-6 space-y-3"
                    >
                      {experienceData[slug].achievements.map((achievement: any, index: number) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-4 border-l-4 border-purple-600 hover:shadow-md transition-shadow"
                        >
                          <h4 className="text-base font-bold text-gray-900 mb-2">{achievement.title}</h4>
                          <p className="text-sm text-gray-700 leading-normal">{achievement.description}</p>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}

                  {activeTab === 'impact' && (
                    <motion.div
                      key="impact"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className="bg-white rounded-b-lg rounded-tr-lg border-2 border-green-600 border-t-0 p-6"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {experienceData[slug].impact.map((section: any, index: number) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-4 border border-green-200"
                        >
                          <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center">
                            <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                            {section.category}
                          </h4>
                          <ul className="space-y-2">
                            {section.impacts.map((impact: string, idx: number) => (
                              <li key={idx} className="flex items-start text-xs text-gray-700 leading-snug">
                                <svg className="w-3 h-3 text-green-600 flex-shrink-0 mr-1.5 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span>{impact}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      ))}
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Right Column - Infographic Stats */}
                <div className="lg:col-span-1">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-200 sticky top-24 space-y-6"
                  >
                    {/* Header */}
                    <div className="border-b-2 border-gray-900 pb-4">
                      <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-1">{experience.company.toUpperCase()} IMPACT:</h3>
                      <h4 className="text-sm font-bold text-gray-900 uppercase">{experience.title.toUpperCase()}</h4>
                    </div>

                    {/* Dynamic Infographic Sections */}
                    {experienceData[slug].infographics.map((section: any, index: number) => (
                      <div key={index} className={index < experienceData[slug].infographics.length - 1 ? "border-b border-gray-200 pb-4" : ""}>
                        <p className="text-xs font-bold text-gray-900 uppercase tracking-wide mb-3">{section.section}</p>
                        {section.stats.map((stat: any, idx: number) => (
                          <div key={idx}>
                            {section.stats.length > 1 && idx === 0 ? (
                              <div className="flex items-end gap-2 mb-2">
                                <div className="text-5xl font-bold text-[#1e3a5f]">{stat.number}</div>
                                {section.stats[1] && <div className="text-xl font-bold text-[#1e3a5f] pb-2">| {section.stats[1].number}</div>}
                              </div>
                            ) : section.stats.length === 1 ? (
                              <div className={`font-bold text-[#1e3a5f] mb-1 ${stat.number.length > 10 ? 'text-3xl' : stat.number.length > 5 ? 'text-4xl' : 'text-6xl'}`}>{stat.number}</div>
                            ) : null}
                            {idx < 2 && (
                              <>
                                <p className="text-xs font-bold text-gray-900 mb-1">{stat.label}</p>
                                {stat.sublabel && <p className="text-xs text-gray-600 mb-2">{stat.sublabel}</p>}
                              </>
                            )}
                          </div>
                        ))}
                        <p className="text-[10px] text-gray-500 mt-2 leading-tight">{section.description}</p>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </Section>
        ) : (
          /* Standard Layout for Other Experiences */
          <Section background="white" padding="default">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content - 2/3 width */}
                <div className="lg:col-span-2 space-y-8">
                  {/* Key Responsibilities */}
                  {experience.highlights && experience.highlights.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                    >
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                        <svg className="w-6 h-6 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        Key Responsibilities
                      </h3>
                      <div className="space-y-3">
                        {experience.highlights.map((highlight: string, index: number) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                            className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
                          >
                            <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                              {index + 1}
                            </div>
                            <p className="text-gray-700 leading-relaxed flex-1">{highlight}</p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Notable Achievements */}
                  {experience.achievements && experience.achievements.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                        <svg className="w-6 h-6 text-yellow-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        Notable Achievements
                      </h3>
                      <div className="space-y-3">
                        {experience.achievements.map((achievement: string, index: number) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                            className="flex items-start gap-3 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border-l-4 border-yellow-400"
                          >
                            <svg className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <p className="text-gray-700 leading-relaxed flex-1 font-medium">{achievement}</p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Detailed Description (if available) */}
                  {experience.detailed_description && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">About the Role</h3>
                      <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                        {experience.detailed_description}
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Sidebar - 1/3 width */}
                <div className="space-y-6">
                  {/* Quick Info Card */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 sticky top-24"
                  >
                    <h4 className="text-lg font-bold text-gray-900 mb-4">Quick Info</h4>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Company</p>
                        <p className="font-semibold text-gray-900">{experience.company}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Role</p>
                        <p className="font-semibold text-gray-900">{experience.title}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Duration</p>
                        <p className="font-semibold text-gray-900">{experience.duration}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Location</p>
                        <p className="font-semibold text-gray-900">{experience.location}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Type</p>
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
                          {experience.type}
                        </span>
                      </div>
                    </div>

                    {/* Navigate to Other Experiences */}
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <p className="text-sm text-gray-500 mb-3">Explore Other Roles</p>
                      <button
                        onClick={() => router.push('/experience')}
                        className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
                      >
                        View All Experiences
                      </button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </Section>
        )}

      </main>

      <Footer />
    </div>
  );
}
