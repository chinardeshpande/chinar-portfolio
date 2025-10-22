import { Navigation, Footer, HeroCarousel } from '@/components/sections';
import { JsonLd, personSchema, breadcrumbSchema } from '@/components/JsonLd';
import AnimatedCard from '@/components/ui/AnimatedCard';
import AnimatedSection from '@/components/ui/AnimatedSection';

const highlights = [
  {
    title: 'Technology Leadership',
    description: '30+ years as CTO and Group CIO across global organizations, leading digital transformation initiatives.',
    icon: '💡',
    tags: ['Digital Strategy', 'Innovation', 'Leadership'],
  },
  {
    title: 'Robotics & Automation',
    description: 'Leading robotics implementation across 18 warehouses with Autostore, Geek+, and T-sorter technologies.',
    icon: '🤖',
    tags: ['Robotics', 'Automation', 'AI'],
  },
  {
    title: 'Global Operations',
    description: 'Experience managing operations across 14 countries and 8 industries, serving 300+ e-commerce brands.',
    icon: '🌍',
    tags: ['Global', 'E-commerce', 'Logistics'],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* JSON-LD Structured Data for SEO */}
      <JsonLd data={personSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: 'https://www.chinardeshpande.com' },
        ])}
      />

      <Navigation />

      <main>
        <HeroCarousel />

        {/* Key Highlights Section - Compact */}
        <AnimatedSection>
          <section className="py-4 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Compact cards with integrated SVG icons */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Technology Leadership */}
                <AnimatedCard delay={0} className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-lg text-gray-900 mb-1">Technology Leadership</h3>
                    <p className="text-sm text-gray-600 mb-2">30+ years as CIO, CTO and CEO across global organizations, leading digital transformation initiatives, and building disruptive products and markets.</p>
                    <div className="flex flex-wrap gap-1.5">
                      {['Digital Strategy', 'Innovation', 'Leadership'].map((tag, i) => (
                        <span key={i} className="px-2 py-0.5 text-xs rounded-full bg-gray-100 text-gray-700">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                </AnimatedCard>

                {/* Robotics & Automation */}
                <AnimatedCard delay={0.1} className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-lg text-gray-900 mb-1">Robotics & AI</h3>
                    <p className="text-sm text-gray-600 mb-2">Leading robotics implementation globally with Autostore, Geek+, and T-sorters. Driving Business AI adoption and AI-driven eCommerce experience.</p>
                    <div className="flex flex-wrap gap-1.5">
                      {['Robotics', 'Automation', 'AI'].map((tag, i) => (
                        <span key={i} className="px-2 py-0.5 text-xs rounded-full bg-gray-100 text-gray-700">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                </AnimatedCard>

                {/* Global Operations */}
                <AnimatedCard delay={0.2} className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-lg text-gray-900 mb-1">Global Operations & GCC Setup</h3>
                    <p className="text-sm text-gray-600 mb-2">Championing large-scale operations across 14 countries and 8 industries, serving 300+ global brands. Masterfully setting up new GCCs from scratch in India.</p>
                    <div className="flex flex-wrap gap-1.5">
                      {['Global', 'E-commerce', 'Logistics'].map((tag, i) => (
                        <span key={i} className="px-2 py-0.5 text-xs rounded-full bg-gray-100 text-gray-700">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                </AnimatedCard>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </main>

      <Footer />
    </div>
  );
}
