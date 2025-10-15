'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer';

interface StatCardProps {
  number: string;
  label: string;
  suffix?: string;
  className?: string;
}

export function StatCard({ number, label, suffix = '', className = '' }: StatCardProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center text-center p-6 ${inView ? 'animate-fade-in' : 'opacity-0'} ${className}`}
    >
      <div className="stat-number mb-2">
        {number}{suffix}
      </div>
      <div className="stat-label">
        {label}
      </div>
    </div>
  );
}
