'use client';

import { useState } from 'react';
import { RoleCarousel } from './RoleCarousel';
import { DifferentiatorsCarousel } from './DifferentiatorsCarousel';

interface AboutTabsProps {
  introduction: {title: string; paragraphs: string[]};
  rolePositions: any[];
  differentiators: Array<{category: string; items: string[]}>;
}

export function AboutTabs({ introduction, rolePositions, differentiators }: AboutTabsProps) {
  const [activeTab, setActiveTab] = useState('intro');

  const tabs = [
    {
      id: 'intro',
      label: 'Introduction',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      id: 'apart',
      label: 'What Sets Me Apart',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
    },
    {
      id: 'value',
      label: 'Potential Board Roles',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="w-full">
      {/* Tab Navigation */}
      <div className="border-b border-slate-200 mb-6">
        <div className="flex overflow-x-auto scrollbar-hide -mb-px">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex items-center gap-3 px-8 py-4 text-base font-semibold whitespace-nowrap border-b-4 transition-all
                ${activeTab === tab.id
                  ? 'border-blue-600 text-blue-600 bg-blue-50/50'
                  : 'border-transparent text-slate-600 hover:text-slate-900 hover:border-slate-300'
                }
              `}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="min-h-[500px]">
        {/* Introduction Tab */}
        {activeTab === 'intro' && (
          <div className="animate-fadeIn">
            <div className="max-w-6xl mx-auto space-y-8">

              {/* Opening with drop cap */}
              <div className="grid grid-cols-[120px_1fr] gap-6 items-start">
                <div className="pt-2 border-t-2 border-slate-900">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500">01 / Identity</span>
                </div>
                <p className="text-2xl font-serif leading-snug text-slate-900 first-letter:text-6xl first-letter:font-bold first-letter:text-blue-600 first-letter:float-left first-letter:pr-3 first-letter:leading-[0.85]">
                  {introduction.paragraphs[0]}
                </p>
              </div>

              {/* Story 1: Journey + Pull Quote on Right */}
              <div className="grid grid-cols-[120px_1fr_280px] gap-6 items-start">
                <div className="sticky top-24">
                  <div className="text-4xl font-serif font-medium text-slate-900">02</div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mt-1">Career · Scope</div>
                  <div className="text-base font-bold text-slate-900 mt-3 leading-tight">Where the work has lived</div>
                </div>
                <div className="text-sm text-slate-700 leading-relaxed space-y-3 max-w-3xl">
                  <p>{introduction.paragraphs[1]}</p>
                  <p className="text-base leading-relaxed">
                    My professional journey has given me the rare privilege of operating across{' '}
                    <span className="font-bold text-blue-600">boardrooms</span>,{' '}
                    <span className="font-bold text-purple-600">shop floors</span>,{' '}
                    <span className="font-bold text-indigo-600">warehouses</span>,{' '}
                    <span className="font-bold text-violet-600">technology labs</span>,{' '}
                    <span className="font-bold text-pink-600">leadership tables</span>, and{' '}
                    <span className="font-bold text-emerald-600">entrepreneurial trenches</span>.
                  </p>
                </div>

                {/* Pull Quote - Right Side */}
                <div className="sticky top-24">
                  <div className="relative overflow-hidden bg-gradient-to-br from-blue-50/80 via-purple-50/60 to-pink-50/40 rounded-xl p-6 border border-blue-100/50 shadow-sm">
                    {/* Watermark effect */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.08),transparent_50%)]"></div>
                    <div className="absolute top-3 left-4 text-7xl leading-none text-blue-600/15 font-serif">&ldquo;</div>
                    <blockquote className="relative text-sm font-serif leading-snug text-slate-800 italic">
                      {introduction.paragraphs[6]}
                    </blockquote>
                    <div className="flex items-center gap-2 mt-4 text-[10px] text-slate-500">
                      <span className="w-4 h-px bg-slate-400"></span>
                      <span className="font-mono uppercase tracking-wider">CD</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Story 2: Leadership Values - 4 Cards + Beyond Work Quote on Right */}
              <div className="grid grid-cols-[120px_1fr_280px] gap-6 items-start">
                <div className="sticky top-24">
                  <div className="text-4xl font-serif font-medium text-slate-900">03</div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mt-1">Leadership · Style</div>
                  <div className="text-base font-bold text-slate-900 mt-3 leading-tight">Four values</div>
                </div>
                <div>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-white border border-slate-200 rounded-lg p-3 relative overflow-hidden min-h-[110px]">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-indigo-600"></div>
                      <span className="text-[9px] font-mono uppercase tracking-wider text-slate-500">V · 01</span>
                      <h4 className="text-base font-serif font-semibold text-slate-900 mt-1 mb-1">Clarity</h4>
                      <p className="text-[11px] text-slate-600 leading-snug">I like to dream big, but I do not romanticise execution. Vision must eventually become architecture.</p>
                    </div>
                    <div className="bg-white border border-slate-200 rounded-lg p-3 relative overflow-hidden min-h-[110px]">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-600 to-purple-600"></div>
                      <span className="text-[9px] font-mono uppercase tracking-wider text-slate-500">V · 02</span>
                      <h4 className="text-base font-serif font-semibold text-slate-900 mt-1 mb-1">Compassion</h4>
                      <p className="text-[11px] text-slate-600 leading-snug">People are never "resources". They are energy, emotion, aspiration and possibility.</p>
                    </div>
                    <div className="bg-white border border-slate-200 rounded-lg p-3 relative overflow-hidden min-h-[110px]">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-500 to-purple-600"></div>
                      <span className="text-[9px] font-mono uppercase tracking-wider text-slate-500">V · 03</span>
                      <h4 className="text-base font-serif font-semibold text-slate-900 mt-1 mb-1">Courage</h4>
                      <p className="text-[11px] text-slate-600 leading-snug">Carrying responsibility in situations where judgement matters more than title.</p>
                    </div>
                    <div className="bg-white border border-slate-200 rounded-lg p-3 relative overflow-hidden min-h-[110px]">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-green-500 to-blue-500"></div>
                      <span className="text-[9px] font-mono uppercase tracking-wider text-slate-500">V · 04</span>
                      <h4 className="text-base font-serif font-semibold text-slate-900 mt-1 mb-1">Accountability</h4>
                      <p className="text-[11px] text-slate-600 leading-snug">Architecture must become a plan, and a plan must produce results. Outcomes — never noise.</p>
                    </div>
                  </div>
                </div>

                {/* Beyond Work Quote - Right Side */}
                <div className="sticky top-24">
                  <div className="relative overflow-hidden bg-gradient-to-br from-green-50/80 via-emerald-50/60 to-teal-50/40 rounded-xl p-6 border border-green-100/50 shadow-sm">
                    {/* Watermark effect */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_50%)]"></div>
                    <div className="absolute top-3 left-4 text-7xl leading-none text-green-600/10 font-serif">&ldquo;</div>
                    <blockquote className="relative text-sm font-serif leading-relaxed text-slate-800">
                      {introduction.paragraphs[9]}
                    </blockquote>
                    <div className="flex items-center gap-2 mt-4 text-[10px] text-slate-500">
                      <span className="w-4 h-px bg-slate-400"></span>
                      <span className="font-mono uppercase tracking-wider">Beyond Work</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Personal Grid + Quote on Right */}
              <div className="grid grid-cols-[120px_1fr_280px] gap-6 items-start">
                <div className="sticky top-24">
                  <div className="text-4xl font-serif font-medium text-slate-900">04</div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mt-1">Beyond · Work</div>
                  <div className="text-base font-bold text-slate-900 mt-3 leading-tight">Personal values</div>
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white mb-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 20c0-4 4-6 8-6s8 2 8 6"/></svg>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1">Family</h4>
                    <p className="text-[11px] text-slate-600 leading-snug">A proud father and committed family man — the anchor for everything else.</p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white mb-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1">Spirituality</h4>
                    <p className="text-[11px] text-slate-600 leading-snug">Restraint, humility, inner alignment — the quiet discipline behind the work.</p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center text-white mb-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1">Sport</h4>
                    <p className="text-[11px] text-slate-600 leading-snug">Resilience, timing, competitive grace, and deep respect for the opponent.</p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white mb-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1">Service</h4>
                    <p className="text-[11px] text-slate-600 leading-snug">Indian roots, cultural pride, and a desire to contribute meaningfully to society.</p>
                  </div>
                </div>

                {/* Vision Quote - Right Side */}
                <div className="sticky top-24">
                  <div className="relative overflow-hidden bg-gradient-to-br from-amber-50/80 via-orange-50/60 to-rose-50/40 rounded-xl p-6 border border-amber-100/50 shadow-sm">
                    {/* Watermark effect */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(251,146,60,0.08),transparent_50%)]"></div>
                    <div className="absolute bottom-3 right-4 text-7xl leading-none text-amber-600/10 font-serif">&rdquo;</div>
                    <blockquote className="relative text-sm font-serif leading-relaxed text-slate-800">
                      {introduction.paragraphs[8]}
                    </blockquote>
                    <div className="flex items-center gap-2 mt-4 text-[10px] text-slate-500">
                      <span className="w-4 h-px bg-slate-400"></span>
                      <span className="font-mono uppercase tracking-wider">Vision</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* How I Add Value Tab */}
        {activeTab === 'value' && (
          <div className="animate-fadeIn">
            <RoleCarousel roles={rolePositions} />
          </div>
        )}

        {/* What Sets Me Apart Tab */}
        {activeTab === 'apart' && (
          <div className="animate-fadeIn">
            <DifferentiatorsCarousel differentiators={differentiators} />
          </div>
        )}
      </div>
    </div>
  );
}
