'use client';

import { useState } from 'react';
import { Navigation, Footer, HeroCarousel } from '@/components/sections';
import TransformationWizard from '@/components/TransformationWizard';
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
  const [isWizardOpen, setIsWizardOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        <HeroCarousel onStartJourney={() => setIsWizardOpen(true)} />

        {/* Key Highlights Section - Compact */}
        <AnimatedSection>
          <section className="py-3 sm:py-4 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Compact cards with integrated SVG icons */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                {/* AI Adoption Beyond Pilot Stage */}
                <AnimatedCard delay={0} className="bg-white rounded-lg border border-gray-200 p-3 sm:p-4 shadow-sm">
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-base sm:text-lg text-gray-900 mb-1">AI Adoption Beyond Pilot Stage</h3>
                    <p className="text-xs sm:text-sm text-gray-600 mb-2">Deploying enterprise AI at production scale with measurable P&L impact. Moving from proof-of-concept to AI-native workflows across operations, supply chain, and business intelligence.</p>
                    <div className="flex flex-wrap gap-1 sm:gap-1.5">
                      {['AI Governance', 'Enterprise AI', 'Productivity'].map((tag, i) => (
                        <span key={i} className="px-1.5 sm:px-2 py-0.5 text-[10px] sm:text-xs rounded-full bg-gray-100 text-gray-700">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                </AnimatedCard>

                {/* GCC Strategy & Scaling */}
                <AnimatedCard delay={0.1} className="bg-white rounded-lg border border-gray-200 p-3 sm:p-4 shadow-sm">
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-base sm:text-lg text-gray-900 mb-1">GCC Strategy & Scaling</h3>
                    <p className="text-xs sm:text-sm text-gray-600 mb-2">Built India GCC from zero to 200+ engineers running 24x7 operations. Expert in designing capability centers that compound value, not just arbitrage cost.</p>
                    <div className="flex flex-wrap gap-1 sm:gap-1.5">
                      {['GCC Strategy', 'India Operations', 'Capability Centers'].map((tag, i) => (
                        <span key={i} className="px-1.5 sm:px-2 py-0.5 text-[10px] sm:text-xs rounded-full bg-gray-100 text-gray-700">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                </AnimatedCard>

                {/* Technology-Led Transformation */}
                <AnimatedCard delay={0.2} className="bg-white rounded-lg border border-gray-200 p-3 sm:p-4 shadow-sm">
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-base sm:text-lg text-gray-900 mb-1">Technology-Led Transformation</h3>
                    <p className="text-xs sm:text-sm text-gray-600 mb-2">Leading robotics deployment across 18 warehouses (Autostore, Geek+), enterprise modernization, and intelligent automation. Operational discipline with board-level rigor.</p>
                    <div className="flex flex-wrap gap-1 sm:gap-1.5">
                      {['Automation', 'Modernization', 'Operations'].map((tag, i) => (
                        <span key={i} className="px-1.5 sm:px-2 py-0.5 text-[10px] sm:text-xs rounded-full bg-gray-100 text-gray-700">
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

      {/* Transformation Wizard Modal */}
      <TransformationWizard
        isOpen={isWizardOpen}
        onClose={() => setIsWizardOpen(false)}
      />
    </div>
  );
}
