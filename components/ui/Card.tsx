import React from 'react';

interface CardProps {
  children: React.ReactNode;
  variant?: 'luxury' | 'boardroom';
  className?: string;
  hover?: boolean;
}

export function Card({
  children,
  variant = 'boardroom',
  className = '',
  hover = true,
}: CardProps) {
  const variantStyles = {
    luxury: 'card-luxury',
    boardroom: 'card-boardroom',
  };

  const hoverClass = hover ? '' : '!hover:shadow-luxury';

  return (
    <div className={`${variantStyles[variant]} ${hoverClass} ${className}`}>
      {children}
    </div>
  );
}

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export function CardHeader({ children, className = '' }: CardHeaderProps) {
  return (
    <div className={`mb-4 ${className}`}>
      {children}
    </div>
  );
}

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function CardTitle({ children, className = '' }: CardTitleProps) {
  return (
    <h3 className={`font-display text-display-sm text-slate-900 ${className}`}>
      {children}
    </h3>
  );
}

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export function CardContent({ children, className = '' }: CardContentProps) {
  return (
    <div className={`text-slate-600 ${className}`}>
      {children}
    </div>
  );
}
