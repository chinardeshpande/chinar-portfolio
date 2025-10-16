'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const photos = [
  '/images/profile/photo-1.jpg',
  '/images/profile/photo-2.jpg',
  '/images/profile/photo-3.jpg',
  '/images/profile/photo-4.jpg',
  '/images/profile/photo-5.jpg',
  '/images/profile/photo-8.jpg',
];

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center min-h-[500px]">
          {/* Content */}
          <div className="px-6 sm:px-8 lg:px-12 py-8 lg:py-0 order-2 lg:order-1">
            <div className="max-w-xl">
              <div className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-3">
                Independent Director
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-gray-900 mb-3 leading-tight">
                Chinar Deshpande
              </h1>
              <p className="text-lg text-gray-600 mb-4">
                Technology Leader & Board Advisor
              </p>
              {/* Hero Punchlines */}
              <div className="space-y-3 mb-6">
                {/* First Punchline */}
                <div className="bg-gradient-to-r from-primary-50 to-blue-50 border-l-4 border-primary-600 rounded-r-lg p-3 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0">
                      <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </div>
                    <p className="text-base font-semibold">
                      <span className="text-gray-900">Experience:</span>{' '}
                      <span className="text-primary-700">30+ years</span> |
                      <span className="text-primary-700"> 14+ countries</span> |
                      <span className="text-primary-700"> 8 Industries</span>
                    </p>
                  </div>
                </div>

                {/* Second Punchline */}
                <div className="bg-gradient-to-r from-blue-50 to-primary-50 border-l-4 border-blue-600 rounded-r-lg p-3 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <p className="text-base font-semibold">
                      <span className="text-gray-900">Led:</span>{' '}
                      <span className="text-blue-700">2500+ Professionals</span> |
                      <span className="text-blue-700"> 6 World-class ERPs</span> |
                      <span className="text-blue-700"> 15 Products</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-5 py-2.5 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
                >
                  Schedule Introduction
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/board-bio"
                  className="inline-flex items-center px-5 py-2.5 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-50 transition-colors border border-gray-300"
                >
                  View Board Bio
                </Link>
              </div>
            </div>
          </div>

          {/* Carousel */}
          <div className="relative h-[400px] lg:h-[500px] order-1 lg:order-2">
            {/* Images */}
            <div className="relative h-full overflow-hidden bg-gray-100">
              {photos.map((photo, index) => (
                <div
                  key={photo}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <Image
                    src={photo}
                    alt={`Chinar Deshpande - Photo ${index + 1}`}
                    fill
                    className="object-contain"
                    priority={index === 0}
                  />
                </div>
              ))}

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent lg:bg-gradient-to-r lg:from-gray-50/60 lg:to-transparent" />
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
              aria-label="Previous photo"
            >
              <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
              aria-label="Next photo"
            >
              <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {photos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-white w-8'
                      : 'bg-white/60 hover:bg-white/80'
                  }`}
                  aria-label={`Go to photo ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
