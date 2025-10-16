'use client';

import { useState } from 'react';
import { RoleCarousel } from './RoleCarousel';

interface AboutTabsProps {
  rolePositions: any[];
  aiExpertise: any;
  differentiators: string[];
  boardSkills: any;
}

export function AboutTabs({ rolePositions, aiExpertise, differentiators, boardSkills }: AboutTabsProps) {
  const [activeTab, setActiveTab] = useState('value');

  const tabs = [
    {
      id: 'value',
      label: 'How I Add Value',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
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
      id: 'skills',
      label: 'Board Skills',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
    },
    {
      id: 'available',
      label: 'Available For',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
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
        {/* How I Add Value Tab */}
        {activeTab === 'value' && (
          <div className="animate-fadeIn">
            <RoleCarousel roles={rolePositions} />
          </div>
        )}

        {/* What Sets Me Apart Tab */}
        {activeTab === 'apart' && (
          <div className="animate-fadeIn">
            <h2 className="font-display text-2xl md:text-3xl text-slate-900 mb-8 text-center flex items-center justify-center">
              <span className="w-2 h-8 bg-gradient-to-b from-blue-600 to-purple-600 mr-3 rounded-full"></span>
              What Sets Me Apart
            </h2>
            <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
              {differentiators.map((item: string, index: number) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-5 bg-white/95 backdrop-blur-sm rounded-xl border border-slate-200 shadow-md hover:shadow-lg transition-all hover:border-purple-300"
                >
                  <svg className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-base text-slate-700 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills Matrix Tab */}
        {activeTab === 'skills' && (
          <div className="animate-fadeIn">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-6 mb-8">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Board Skills Matrix
                </h2>
                <div className="flex-1 border-l-2 border-gray-300 pl-6">
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    Expert-level competencies across strategic,<br />
                    operational, and governance dimensions
                  </p>
                </div>
              </div>

              {/* Top Skills Grid */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {boardSkills.top_skills.map((skill: any, index: number) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all hover:border-blue-300"
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      skill.level === 5 ? 'bg-emerald-500' : 'bg-blue-500'
                    }`}>
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-slate-900 text-sm mb-1">{skill.skill}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{skill.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Board Roles & Industries */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Ideal Board Roles */}
                <div className="bg-gradient-to-br from-blue-50/80 to-purple-50/80 rounded-xl p-6 border border-blue-200/50">
                  <h3 className="font-semibold text-slate-900 mb-4 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
                    Ideal Board Roles
                  </h3>
                  <div className="space-y-2">
                    {boardSkills.ideal_board_roles.map((role: string, index: number) => (
                      <div key={index} className="flex items-center space-x-2 text-sm text-slate-700">
                        <svg className="w-4 h-4 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{role}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Target Industries */}
                <div className="bg-gradient-to-br from-purple-50/80 to-pink-50/80 rounded-xl p-6 border border-purple-200/50">
                  <h3 className="font-semibold text-slate-900 mb-4 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                    </svg>
                    Target Industries
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {boardSkills.target_industries.map((industry: string, index: number) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white text-purple-700 text-xs font-medium rounded-full border border-purple-200"
                      >
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Available For Tab */}
        {activeTab === 'available' && (
          <div className="animate-fadeIn">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-2xl md:text-3xl text-slate-900 mb-8 text-center">
                Available For
              </h2>

              <div className="bg-gradient-to-br from-blue-50/80 to-purple-50/80 backdrop-blur-sm rounded-2xl p-10 border border-blue-200/50 shadow-lg mb-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-xl font-semibold text-slate-900 mb-2">Independent Board Roles</p>
                    <p className="text-sm text-slate-600">Bringing strategic technology governance and digital transformation expertise to boardrooms</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-xl font-semibold text-slate-900 mb-2">Advisory Mandates</p>
                    <p className="text-sm text-slate-600">Strategic counsel for organizations navigating digital disruption and AI transformation</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-xl font-semibold text-slate-900 mb-2">Strategic AI Transformation</p>
                    <p className="text-sm text-slate-600">Hands-on AI implementation and intelligent automation partnerships</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-6 justify-center mt-8">
                <a
                  href="/contact"
                  className="px-12 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg shadow-xl transition-all hover:scale-105"
                >
                  Let's Connect →
                </a>
                <a
                  href="/board-bio"
                  className="px-12 py-4 text-lg font-semibold border-2 border-blue-600 text-blue-700 hover:bg-blue-50 rounded-lg transition-all"
                >
                  View Profile
                </a>
              </div>

              {/* LinkedIn */}
              <div className="text-center mt-8">
                <a
                  href="https://www.linkedin.com/in/chinardeshpande"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-slate-600 hover:text-blue-600 transition-colors text-base font-medium"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
