'use client';

import { Navigation, Footer } from '@/components/sections';
import { Section, Card } from '@/components/ui';
import { useState, useEffect } from 'react';
import Link from 'next/link';

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
            <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                Professional Experience
              </h1>
              <div className="flex-1 md:border-l-2 border-gray-300 md:pl-6">
                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                  30+ years of technology leadership across multinational corporations,
                  driving digital transformation, innovation, and operational excellence across 14 countries.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Career Timeline - Horizontal Carousel */}
        <Section background="cream" padding="default">
          <div className="mb-16"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Horizontal Carousel with Navigation */}
            <div className="relative group">
              {/* Left Arrow - Hidden on mobile */}
              <button
                onClick={() => {
                  const container = document.getElementById('experience-carousel');
                  if (container) container.scrollBy({ left: -440, behavior: 'smooth' });
                }}
                className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -ml-5"
                aria-label="Previous experience"
              >
                <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Right Arrow - Hidden on mobile */}
              <button
                onClick={() => {
                  const container = document.getElementById('experience-carousel');
                  if (container) container.scrollBy({ left: 440, behavior: 'smooth' });
                }}
                className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -mr-5"
                aria-label="Next experience"
              >
                <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Carousel Container */}
              <div id="experience-carousel" className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide scroll-smooth snap-x snap-mandatory">
                <div className="flex gap-4 md:gap-6 min-w-max">
                  {content.timeline.map((role: any, index: number) => (
                    <Link
                      key={index}
                      href={`/experience/${role.slug}`}
                      className="block w-[340px] sm:w-[380px] md:w-[420px] snap-center"
                    >
                      <Card variant="boardroom" className="h-full group flex flex-col hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                      {/* Company Logo/Header */}
                      <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-t-lg overflow-hidden border-b border-gray-200 p-4">
                        <div className="flex items-center gap-4">
                          {/* Company Logo */}
                          {role.logo ? (
                            <div className="w-14 h-14 flex-shrink-0 bg-white rounded-xl shadow-md flex items-center justify-center p-2 overflow-hidden group-hover:scale-110 transition-transform duration-300">
                              <img
                                src={role.logo}
                                alt={`${role.company} logo`}
                                className="w-full h-full object-contain"
                                onError={(e) => {
                                  // Fallback to letter if image fails
                                  e.currentTarget.style.display = 'none';
                                  if (e.currentTarget.parentElement) {
                                    e.currentTarget.parentElement.innerHTML = `<span class="text-xl font-bold text-gray-800">${role.company.charAt(0)}</span>`;
                                  }
                                }}
                              />
                            </div>
                          ) : (
                            <div className="w-14 h-14 flex-shrink-0 bg-white rounded-xl shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                              <span className="text-xl font-bold text-gray-800">
                                {role.company.charAt(0)}
                              </span>
                            </div>
                          )}
                          {/* Company Name */}
                          <div className="flex-1 min-w-0">
                            <h3 className="text-xl font-bold text-gray-900 truncate">
                              {role.company}
                            </h3>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-4 md:p-5 flex flex-col flex-1">
                        {/* Title & Duration */}
                        <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                          {role.title}
                        </h4>

                        <div className="flex items-center gap-1.5 md:gap-2 text-[10px] md:text-xs text-gray-500 mb-3 md:mb-4 flex-wrap">
                          <svg className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          </svg>
                          <span className="whitespace-nowrap">{role.location}</span>
                          <span>•</span>
                          <span className="whitespace-nowrap">{role.start_date} - {role.end_date}</span>
                          <span>•</span>
                          <span className="font-semibold text-blue-600 whitespace-nowrap">{role.duration}</span>
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

                        {/* Click to View Details Indicator */}
                        <div className="mt-4 pt-4 border-t border-gray-200 flex items-center justify-center text-blue-600 group-hover:text-blue-700 font-medium text-sm">
                          <span>Click to view full details</span>
                          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
