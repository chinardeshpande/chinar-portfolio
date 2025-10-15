import React from 'react';
import { Container } from './Container';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  padding?: 'default' | 'small' | 'none';
  background?: 'cream' | 'white' | 'ivory';
}

export function Section({
  children,
  id,
  className = '',
  padding = 'default',
  background = 'cream',
}: SectionProps) {
  const paddingStyles = {
    default: 'section-padding',
    small: 'section-padding-sm',
    none: '',
  };

  const backgroundStyles = {
    cream: 'bg-boardroom-cream',
    white: 'bg-white',
    ivory: 'bg-ivory-50',
  };

  return (
    <section
      id={id}
      className={`${paddingStyles[padding]} ${backgroundStyles[background]} ${className}`}
    >
      <Container>
        {children}
      </Container>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  align = 'center',
  className = '',
}: SectionHeaderProps) {
  const alignStyles = {
    left: 'text-left items-start',
    center: 'text-center items-center',
  };

  return (
    <div className={`flex flex-col ${alignStyles[align]} mb-16 ${className}`}>
      <h2 className="font-display text-display-lg text-slate-900 mb-4">
        {title}
      </h2>
      <div className="divider-gold mb-6"></div>
      {subtitle && (
        <p className="text-body-xl text-slate-600 max-w-3xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
