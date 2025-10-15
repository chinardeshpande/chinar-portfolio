'use client';

import { Navigation, Footer } from '@/components/sections';
import { Section, Card } from '@/components/ui';
import { useState, useEffect } from 'react';

export default function ExperiencePage() {
  const [content, setContent] = useState<any>(null);

  useEffect(() => {
    // Load content from API
    fetch('/api/experience')
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
              Professional Experience
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mb-8">
              30+ years of technology leadership across multinational corporations,
              driving digital transformation, innovation, and operational excellence across 14 countries.
            </p>

            {/* Career Stats - Inline */}
            <div className="flex flex-wrap gap-6 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-blue-600">{content.career_stats.total_years}</span>
                <span className="text-sm text-gray-600">Years of Excellence</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-blue-600">{content.career_stats.countries}</span>
                <span className="text-sm text-gray-600">Countries</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-blue-600">{content.career_stats.professionals_led}</span>
                <span className="text-sm text-gray-600">Professionals Led</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-blue-600">{content.career_stats.technology_budget}</span>
                <span className="text-sm text-gray-600">Max Tech Budget</span>
              </div>
            </div>
          </div>
        </Section>

        {/* Career Timeline - Horizontal Carousel */}
        <Section background="cream" padding="default">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Career Timeline</h2>

            {/* Horizontal Carousel with Navigation */}
            <div className="relative group">
              {/* Left Arrow */}
              <button
                onClick={() => {
                  const container = document.getElementById('experience-carousel');
                  if (container) container.scrollBy({ left: -440, behavior: 'smooth' });
                }}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -ml-5"
                aria-label="Previous experience"
              >
                <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Right Arrow */}
              <button
                onClick={() => {
                  const container = document.getElementById('experience-carousel');
                  if (container) container.scrollBy({ left: 440, behavior: 'smooth' });
                }}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -mr-5"
                aria-label="Next experience"
              >
                <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Carousel Container */}
              <div id="experience-carousel" className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide scroll-smooth">
                <div className="flex gap-6 min-w-max">
                  {content.timeline.map((role: any, index: number) => (
                    <Card key={index} variant="boardroom" className="w-[420px] group flex flex-col">
                      {/* Company Logo/Header */}
                      <div className="relative h-32 bg-gradient-to-br from-blue-50 to-purple-50 rounded-t-lg overflow-hidden flex items-center justify-center border-b border-gray-200">
                        {/* Company Logo - placeholder or actual */}
                        <div className="text-center px-4">
                          <h3 className="text-2xl font-bold text-gray-900 mb-1">
                            {role.company}
                          </h3>
                          <div className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                            {role.type}
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5 flex flex-col flex-1">
                        {/* Title & Duration */}
                        <h4 className="text-xl font-bold text-gray-900 mb-2">
                          {role.title}
                        </h4>

                        <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          </svg>
                          <span>{role.location}</span>
                          <span>•</span>
                          <span>{role.start_date} - {role.end_date}</span>
                          <span>•</span>
                          <span className="font-semibold text-blue-600">{role.duration}</span>
                        </div>

                        {/* Key Highlights */}
                        <div className="mb-4 flex-1">
                          <h5 className="font-semibold text-gray-800 mb-2 text-xs uppercase tracking-wider">
                            Key Responsibilities
                          </h5>
                          <div className="space-y-2">
                            {role.highlights.slice(0, 3).map((highlight: string, idx: number) => (
                              <div key={idx} className="flex items-start space-x-2">
                                <svg className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-xs text-gray-700 leading-relaxed">{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Achievements */}
                        {role.achievements && role.achievements.length > 0 && (
                          <div className="border-t border-gray-200 pt-3">
                            <h5 className="font-semibold text-gray-800 mb-2 text-xs uppercase tracking-wider flex items-center">
                              <svg className="w-4 h-4 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              Notable Achievements
                            </h5>
                            <div className="space-y-1">
                              {role.achievements.slice(0, 2).map((achievement: string, idx: number) => (
                                <div key={idx} className="flex items-start space-x-2 text-xs text-gray-700 bg-yellow-50 p-2 rounded">
                                  <span className="text-yellow-600 font-bold">▸</span>
                                  <span>{achievement}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </Card>
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
