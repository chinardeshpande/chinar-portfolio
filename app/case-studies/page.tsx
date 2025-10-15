'use client';

import Link from 'next/link';
import { Navigation, Footer } from '@/components/sections';
import { Section, Card } from '@/components/ui';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function CaseStudiesPage() {
  const [content, setContent] = useState<any>(null);

  useEffect(() => {
    fetch('/api/case-studies')
      .then(res => res.json())
      .then(data => setContent(data));
  }, []);

  if (!content) return null;

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-20">
        {/* Hero */}
        <Section background="white" padding="default">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Case Studies
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Real-world transformational projects demonstrating strategic technology leadership,
              operational excellence, and measurable business impact across industries.
            </p>
          </div>
        </Section>

        {/* Featured Case Studies */}
        <Section background="cream" padding="default">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Transformational Projects</h2>

            {/* Horizontal Carousel with Navigation */}
            <div className="relative group">
              {/* Left Arrow */}
              <button
                onClick={() => {
                  const container = document.getElementById('case-studies-carousel');
                  if (container) container.scrollBy({ left: -440, behavior: 'smooth' });
                }}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -ml-5"
                aria-label="Previous case studies"
              >
                <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Right Arrow */}
              <button
                onClick={() => {
                  const container = document.getElementById('case-studies-carousel');
                  if (container) container.scrollBy({ left: 440, behavior: 'smooth' });
                }}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -mr-5"
                aria-label="Next case studies"
              >
                <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Carousel Container */}
              <div id="case-studies-carousel" className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide scroll-smooth">
                <div className="flex gap-6 min-w-max">
                {content.featured_cases
                  .filter((caseStudy: any) => caseStudy.featured)
                  .map((caseStudy: any) => (
                    <Link key={caseStudy.id} href={`/case-studies/${caseStudy.id}`}>
                      <Card variant="boardroom" className="w-[420px] group cursor-pointer flex flex-col">
                        {/* Image - Collage for THG and SAP, Placeholder for others */}
                        {caseStudy.id === 'thg-robotics-transformation' ? (
                          <div className="relative h-48 rounded-t-lg overflow-hidden bg-gray-900">
                            {/* 2x2 Grid Collage */}
                            <div className="grid grid-cols-2 grid-rows-2 h-full gap-1">
                              <div className="relative">
                                <Image
                                  src="/images/case-studies/thg-robotics1.png"
                                  alt="THG Robotics"
                                  fill
                                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                              </div>
                              <div className="relative">
                                <Image
                                  src="/images/case-studies/thg-robotics4.jpeg"
                                  alt="THG Warehouse"
                                  fill
                                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                              </div>
                              <div className="relative">
                                <Image
                                  src="/images/case-studies/thg-robotics3.jpg"
                                  alt="THG Automation"
                                  fill
                                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                              </div>
                              <div className="relative">
                                <Image
                                  src="/images/case-studies/thg-warehouse.jpg"
                                  alt="THG Facility"
                                  fill
                                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                              </div>
                            </div>
                            <div className="absolute top-3 right-3 z-10">
                              <span className="px-3 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full shadow-lg">
                                {caseStudy.category}
                              </span>
                            </div>
                          </div>
                        ) : caseStudy.id === 'future-group-sap-transformation' ? (
                          <div className="relative h-48 rounded-t-lg overflow-hidden bg-white">
                            <Image
                              src="/images/case-studies/sap-main.png"
                              alt="SAP ERP Transformation"
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-3 right-3 z-10">
                              <span className="px-3 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full shadow-lg">
                                {caseStudy.category}
                              </span>
                            </div>
                          </div>
                        ) : caseStudy.id === 'hul-global-peoplesoft' ? (
                          <div className="relative h-48 rounded-t-lg overflow-hidden bg-blue-50">
                            {/* 2x3 Grid Collage */}
                            <div className="grid grid-cols-3 grid-rows-2 h-full gap-1">
                              <div className="relative">
                                <Image
                                  src="/images/case-studies/peoplesoft1.png"
                                  alt="PeopleSoft System"
                                  fill
                                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                              </div>
                              <div className="relative">
                                <Image
                                  src="/images/case-studies/peoplesoft2.jpeg"
                                  alt="Global HR Implementation"
                                  fill
                                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                              </div>
                              <div className="relative">
                                <Image
                                  src="/images/case-studies/peoplesoft3.avif"
                                  alt="Unilever Operations"
                                  fill
                                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                              </div>
                              <div className="relative col-span-2">
                                <Image
                                  src="/images/case-studies/peoplesoft4.png"
                                  alt="PeopleSoft Dashboard"
                                  fill
                                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                              </div>
                              <div className="relative">
                                <Image
                                  src="/images/case-studies/leena-nair.webp"
                                  alt="Leena Nair - Unilever CHRO"
                                  fill
                                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                              </div>
                            </div>
                            <div className="absolute top-3 right-3 z-10">
                              <span className="px-3 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full shadow-lg">
                                {caseStudy.category}
                              </span>
                            </div>
                          </div>
                        ) : (
                          <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-lg overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-gray-400 text-sm font-medium">Case Study Image</span>
                            </div>
                            <div className="absolute top-3 right-3">
                              <span className="px-3 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full shadow-lg">
                                {caseStudy.category}
                              </span>
                            </div>
                          </div>
                        )}

                        {/* Content */}
                        <div className="p-5 flex flex-col flex-1">
                          <div className="flex items-center space-x-2 text-xs text-gray-500 mb-2">
                            <span className="font-medium">{caseStudy.industry}</span>
                            <span>•</span>
                            <span>{caseStudy.year}</span>
                          </div>

                          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                            {caseStudy.title}
                          </h3>

                          <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                            {caseStudy.subtitle}
                          </p>

                          {/* Key Impact Metrics */}
                          <div className="grid grid-cols-1 gap-2 mb-4 flex-1">
                            {caseStudy.impact.slice(0, 2).map((impact: string, idx: number) => (
                              <div key={idx} className="flex items-start space-x-2">
                                <svg className="w-4 h-4 text-primary-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-xs text-gray-700 font-medium">{impact}</span>
                              </div>
                            ))}
                          </div>

                          {/* Read More */}
                          <div className="flex items-center text-sm text-primary-600 font-semibold group-hover:text-primary-700 border-t border-gray-200 pt-3 mt-auto">
                            View Case Study
                            <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
