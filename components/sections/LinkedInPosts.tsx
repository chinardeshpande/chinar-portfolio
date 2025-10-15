'use client';

import React, { useRef } from 'react';
import { Section, SectionHeader, Card } from '../ui';

interface LinkedInPost {
  id: string;
  url: string;
  title: string;
  excerpt: string;
  tags: string[];
  date: string;
}

interface LinkedInPostsProps {
  posts: LinkedInPost[];
}

export function LinkedInPosts({ posts }: LinkedInPostsProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const targetScroll =
        direction === 'left'
          ? currentScroll - scrollAmount
          : currentScroll + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Section background="white" padding="default">
      <SectionHeader
        title="Latest Insights & Updates"
        subtitle="Follow my journey in technology leadership, digital transformation, and innovation across robotics, automation, and global logistics."
        align="center"
      />

      <div className="relative">
        {/* Scroll buttons */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white shadow-luxury rounded-full flex items-center justify-center text-slate-600 hover:text-gold-600 hover:shadow-gold-glow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold-500"
          aria-label="Scroll left"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white shadow-luxury rounded-full flex items-center justify-center text-slate-600 hover:text-gold-600 hover:shadow-gold-glow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold-500"
          aria-label="Scroll right"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Posts carousel */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {posts.map((post) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-none w-80 group"
            >
              <Card variant="boardroom" className="h-full flex flex-col justify-between">
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0077B5] to-[#00669C] rounded flex items-center justify-center shadow-md">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-serif text-xl text-slate-900 mb-3 group-hover:text-gold-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gold-500/10 text-gold-700 text-xs font-medium rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* View link */}
                <div className="flex items-center text-sm font-medium text-gold-600 group-hover:text-gold-700">
                  View on LinkedIn
                  <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Card>
            </a>
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-12">
          <a
            href="https://www.linkedin.com/in/chinardeshpande/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-slate-600 hover:text-gold-600 font-medium transition-colors"
          >
            View all posts on LinkedIn
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </Section>
  );
}
