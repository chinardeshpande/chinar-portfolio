import { Navigation, Footer, HeroCarousel } from '@/components/sections';
import { JsonLd, personSchema, breadcrumbSchema } from '@/components/JsonLd';
import AnimatedCard from '@/components/ui/AnimatedCard';
import AnimatedSection from '@/components/ui/AnimatedSection';

const highlights = [
  {
    title: 'AI Adoption Beyond Pilot Stage',
    description: 'Deploying enterprise AI at production scale with measurable P&L impact. Moving from proof-of-concept to AI-native workflows across operations, supply chain, and business intelligence.',
    icon: '🚀',
    tags: ['AI Governance', 'Enterprise AI', 'Productivity'],
  },
  {
    title: 'GCC Strategy & Scaling',
    description: 'Built India GCC from zero to 200+ engineers running 24x7 operations. Expert in designing capability centers that compound value, not just arbitrage cost.',
    icon: '🏢',
    tags: ['GCC Strategy', 'India Operations', 'Capability Centers'],
  },
  {
    title: 'Technology-Led Transformation',
    description: 'Leading robotics deployment across 18 warehouses (Autostore, Geek+), enterprise modernization, and intelligent automation. Operational discipline with board-level rigor.',
    icon: '⚡',
    tags: ['Automation', 'Modernization', 'Operations'],
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
          <section className="py-3 sm:py-4 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Compact cards with integrated SVG icons */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                {highlights.map((highlight, index) => (
                  <AnimatedCard key={index} delay={index * 0.1} className="bg-white rounded-lg border border-gray-200 p-3 sm:p-4 shadow-sm hover:border-primary-500 hover:shadow-md transition-all">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <div className="text-3xl sm:text-4xl flex-shrink-0">
                        {highlight.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-base sm:text-lg text-gray-900 mb-1">{highlight.title}</h3>
                        <p className="text-xs sm:text-sm text-gray-600 mb-2">{highlight.description}</p>
                        <div className="flex flex-wrap gap-1 sm:gap-1.5">
                          {highlight.tags.map((tag, i) => (
                            <span key={i} className="px-1.5 sm:px-2 py-0.5 text-[10px] sm:text-xs rounded-full bg-gray-100 text-gray-700">
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
      </main>

      <Footer />
    </div>
  );
}
