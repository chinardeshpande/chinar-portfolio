import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface CompactCardProps {
  title: string;
  description: string;
  thumbnail?: string;
  icon?: React.ReactNode;
  href?: string;
  tags?: string[];
  metadata?: string;
  variant?: 'default' | 'highlighted';
}

export function CompactCard({
  title,
  description,
  thumbnail,
  icon,
  href,
  tags,
  metadata,
  variant = 'default',
}: CompactCardProps) {
  const cardClasses = `
    group relative overflow-hidden rounded-lg border transition-all duration-300
    ${variant === 'highlighted'
      ? 'border-primary-200 bg-primary-50 hover:border-primary-400 hover:shadow-lg'
      : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
    }
    ${href ? 'cursor-pointer' : ''}
  `;

  const content = (
    <>
      {/* Thumbnail or Icon */}
      {thumbnail ? (
        <div className="relative h-32 w-full overflow-hidden bg-gray-100">
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      ) : icon ? (
        <div className={`p-4 ${variant === 'highlighted' ? 'bg-primary-100' : 'bg-gray-50'}`}>
          <div className={`text-2xl ${variant === 'highlighted' ? 'text-primary-600' : 'text-gray-600'}`}>
            {icon}
          </div>
        </div>
      ) : null}

      {/* Content */}
      <div className="p-4">
        {metadata && (
          <div className="mb-1 text-xs text-gray-500 font-medium uppercase tracking-wider">
            {metadata}
          </div>
        )}
        <h3 className={`font-semibold mb-2 line-clamp-2 ${variant === 'highlighted' ? 'text-primary-900' : 'text-gray-900'}`}>
          {title}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-2 mb-3">
          {description}
        </p>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className={`px-2 py-0.5 text-xs rounded-full ${
                  variant === 'highlighted'
                    ? 'bg-primary-200 text-primary-700'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                {tag}
              </span>
            ))}
            {tags.length > 3 && (
              <span className="px-2 py-0.5 text-xs text-gray-500">
                +{tags.length - 3}
              </span>
            )}
          </div>
        )}

        {/* Arrow indicator for links */}
        {href && (
          <div className={`mt-3 flex items-center text-sm font-medium ${variant === 'highlighted' ? 'text-primary-600' : 'text-primary-600'} group-hover:gap-2 transition-all`}>
            <span>View details</span>
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        )}
      </div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cardClasses}>
        {content}
      </Link>
    );
  }

  return <div className={cardClasses}>{content}</div>;
}

interface GridContainerProps {
  children: React.ReactNode;
  columns?: 1 | 2 | 3 | 4;
}

export function CardGrid({ children, columns = 3 }: GridContainerProps) {
  const gridClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div className={`grid ${gridClasses[columns]} gap-6`}>
      {children}
    </div>
  );
}
