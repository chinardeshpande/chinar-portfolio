'use client';

import React from 'react';
import { Button, Container, StatCard } from '../ui';

interface HeroProps {
  headline: string;
  subheadline: string;
  introduction: string;
  description: string;
  cta_primary: {
    text: string;
    href: string;
  };
  cta_secondary: {
    text: string;
    href: string;
    download?: boolean;
  };
  stats: Array<{
    number: string;
    label: string;
    suffix?: string;
  }>;
}

export function Hero({
  headline,
  subheadline,
  introduction,
  description,
  cta_primary,
  cta_secondary,
  stats,
}: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-ivory-50 via-boardroom-cream to-white pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl"></div>
      </div>

      <Container className="relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 py-20">
          {/* Eyebrow */}
          <div className="inline-block px-6 py-2 bg-gold-500/10 border border-gold-500/20 rounded-full">
            <span className="text-sm font-medium text-gold-700 uppercase tracking-wider">
              {headline}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-hero text-slate-900 animate-fade-in">
            {subheadline}
          </h1>

          {/* Introduction */}
          <p className="text-display-sm font-serif text-slate-700 max-w-4xl mx-auto animate-slide-up">
            {introduction}
          </p>

          {/* Description */}
          <p className="text-body-xl text-slate-600 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            {description}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 animate-slide-up">
            <Button href={cta_primary.href} variant="primary" className="text-lg px-10 py-4">
              {cta_primary.text}
            </Button>
            {cta_secondary.download ? (
              <a
                href={cta_secondary.href}
                download
                className="btn-secondary text-lg px-10 py-4 inline-flex items-center"
              >
                {cta_secondary.text}
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </a>
            ) : (
              <Button href={cta_secondary.href} variant="secondary" className="text-lg px-10 py-4">
                {cta_secondary.text}
              </Button>
            )}
          </div>

          {/* Stats */}
          <div className="pt-16">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 border-t border-gold-500/20 pt-12">
              {stats.map((stat, index) => (
                <StatCard
                  key={index}
                  number={stat.number}
                  label={stat.label}
                  suffix={stat.suffix}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gold-500/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-gold-500 rounded-full"></div>
          </div>
        </div>
      </Container>
    </section>
  );
}
