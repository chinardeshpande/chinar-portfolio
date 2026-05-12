'use client';

const categoryIcons: Record<string, any> = {
  'Governance & Strategic Advisory': (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  ),
  'Technology, AI & Data': (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  ),
  'Multidimensional People Leadership': (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  ),
  'Large-Scale Execution': (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  ),
  'Thought Leadership': (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  ),
  'Soft Skills': (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  ),
};

interface DifferentiatorsCarouselProps {
  differentiators: Array<{
    category: string;
    items: string[];
  }>;
}

export function DifferentiatorsCarousel({ differentiators }: DifferentiatorsCarouselProps) {
  const colors = [
    { from: 'from-blue-500', to: 'to-blue-600', bg: 'from-blue-50/80', border: 'border-blue-200' },
    { from: 'from-purple-500', to: 'to-purple-600', bg: 'from-purple-50/80', border: 'border-purple-200' },
    { from: 'from-indigo-500', to: 'to-indigo-600', bg: 'from-indigo-50/80', border: 'border-indigo-200' },
    { from: 'from-violet-500', to: 'to-violet-600', bg: 'from-violet-50/80', border: 'border-violet-200' },
    { from: 'from-pink-500', to: 'to-pink-600', bg: 'from-pink-50/80', border: 'border-pink-200' },
    { from: 'from-rose-500', to: 'to-rose-600', bg: 'from-rose-50/80', border: 'border-rose-200' },
  ];

  return (
    <div className="mb-8">
      <h2 className="font-display text-2xl md:text-3xl text-slate-900 mb-6 text-center flex items-center justify-center">
        <span className="w-2 h-8 bg-gradient-to-b from-blue-600 to-purple-600 mr-3 rounded-full"></span>
        What Sets Me Apart
      </h2>

      {/* Grid Layout - 2 rows x 3 columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
        {differentiators.map((category, catIndex) => {
          const color = colors[catIndex % colors.length];

          return (
            <div
              key={catIndex}
              className={`group bg-gradient-to-br ${color.bg} to-white/95 backdrop-blur-sm rounded-lg p-4 border ${color.border} shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
            >
              {/* Icon */}
              <div className={`w-10 h-10 bg-gradient-to-br ${color.from} ${color.to} rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-md`}>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {categoryIcons[category.category]}
                </svg>
              </div>

              {/* Category Title */}
              <h3 className="text-sm font-bold text-slate-900 mb-3">
                {category.category}
              </h3>

              {/* Items List */}
              <div className="space-y-1.5">
                {category.items.map((item: string, itemIndex: number) => (
                  <div
                    key={itemIndex}
                    className="flex items-start space-x-2"
                  >
                    <span className="text-slate-500 font-medium text-xs mt-0.5 flex-shrink-0">
                      {String.fromCharCode(97 + itemIndex)}.
                    </span>
                    <span className="text-xs text-slate-700 leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
