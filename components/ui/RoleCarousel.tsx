'use client';

import { useRef, useEffect, useState } from 'react';

const roleIcons: Record<string, any> = {
  briefcase: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  ),
  users: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  ),
  rocket: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  ),
  compass: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  ),
  brain: (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  ),
};

interface RoleCarouselProps {
  roles: Array<{
    role: string;
    icon: string;
    tagline: string;
    value: string;
  }>;
}

export function RoleCarousel({ roles }: RoleCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = roles.length;

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      scrollToNext();
    }, 5000); // Auto-scroll every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  const scrollToNext = () => {
    const nextIndex = (currentIndex + 1) % totalCards;
    scrollToIndex(nextIndex);
  };

  const scrollToPrev = () => {
    const prevIndex = currentIndex === 0 ? totalCards - 1 : currentIndex - 1;
    scrollToIndex(prevIndex);
  };

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const cardWidth = 320 + 16; // card width (w-80 = 320px) + gap (gap-4 = 16px)
      scrollContainerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth',
      });
      setCurrentIndex(index);
    }
  };

  return (
    <div className="mb-12">
      <h2 className="font-display text-xl md:text-2xl text-slate-900 mb-6 text-center">
        How I Add Value
      </h2>

      {/* Horizontal Scroll Container */}
      <div className="relative">
        {/* Previous Button */}
        <button
          onClick={scrollToPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/95 backdrop-blur-sm rounded-full shadow-lg border border-blue-200 flex items-center justify-center hover:bg-blue-50 hover:border-blue-400 transition-all group"
          aria-label="Previous card"
        >
          <svg className="w-6 h-6 text-blue-600 group-hover:text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Next Button */}
        <button
          onClick={scrollToNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/95 backdrop-blur-sm rounded-full shadow-lg border border-blue-200 flex items-center justify-center hover:bg-blue-50 hover:border-blue-400 transition-all group"
          aria-label="Next card"
        >
          <svg className="w-6 h-6 text-blue-600 group-hover:text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div ref={scrollContainerRef} className="overflow-x-auto pb-4 px-16 scrollbar-hide">
          <div className="flex gap-4 min-w-max">
            {roles.map((role, index) => {
              const colors = [
                { from: 'from-blue-500', to: 'to-blue-600', border: 'border-blue-200', bg: 'from-blue-50/80', icon: 'text-blue-600' },
                { from: 'from-purple-500', to: 'to-purple-600', border: 'border-purple-200', bg: 'from-purple-50/80', icon: 'text-purple-600' },
                { from: 'from-indigo-500', to: 'to-indigo-600', border: 'border-indigo-200', bg: 'from-indigo-50/80', icon: 'text-indigo-600' },
                { from: 'from-violet-500', to: 'to-violet-600', border: 'border-violet-200', bg: 'from-violet-50/80', icon: 'text-violet-600' },
                { from: 'from-blue-500', to: 'to-purple-600', border: 'border-blue-200', bg: 'from-blue-50/80', icon: 'text-blue-600' },
              ];
              const color = colors[index];

              return (
                <div
                  key={index}
                  className={`group bg-gradient-to-br ${color.bg} to-white/95 backdrop-blur-sm rounded-xl p-5 border ${color.border} shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-80 flex-shrink-0`}
                >
                  {/* Icon */}
                  <div className={`w-12 h-12 bg-gradient-to-br ${color.from} ${color.to} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md`}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {roleIcons[role.icon]}
                    </svg>
                  </div>

                  {/* Role Title */}
                  <h3 className="font-display text-lg text-slate-900 mb-2">
                    {role.role}
                  </h3>

                  {/* Tagline */}
                  <p className={`text-sm font-semibold ${color.icon} mb-3`}>
                    {role.tagline}
                  </p>

                  {/* Full Value Proposition */}
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {role.value}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {Array.from({ length: totalCards }).map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                currentIndex === index
                  ? 'w-8 h-2 bg-gradient-to-r from-blue-600 to-purple-600'
                  : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to card ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
