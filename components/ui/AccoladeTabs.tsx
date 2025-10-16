'use client';

import { useState } from 'react';

interface AccoladeTabsProps {
  pressPublications: any[];
  awards: any[];
  eventsMedia: any[];
  mediaCoverage: any[];
  linkedinPosts: any[];
}

export function AccoladeTabs({ pressPublications, awards, eventsMedia, mediaCoverage, linkedinPosts }: AccoladeTabsProps) {
  const [activeTab, setActiveTab] = useState('press');

  const tabs = [
    {
      id: 'press',
      label: 'Press & Publications',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      ),
    },
    {
      id: 'linkedin',
      label: 'LinkedIn Posts',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
    },
    {
      id: 'awards',
      label: 'Awards & Recognition',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
    {
      id: 'events',
      label: 'Events & Media',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="w-full">
      {/* Tab Navigation */}
      <div className="border-b border-slate-200 mb-8">
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
        {/* Press & Publications Tab */}
        {activeTab === 'press' && (
          <div className="animate-fadeIn">
            <div className="grid md:grid-cols-2 gap-6">
              {pressPublications.map((item: any, index: number) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-blue-300 transition-all group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-3">
                        {item.type}
                      </span>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">{item.publication}</span>
                    <span>•</span>
                    <span>{item.date}</span>
                  </div>

                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {item.url && item.url !== '#' && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      Read More
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* Media Coverage Section */}
            {mediaCoverage && mediaCoverage.length > 0 && (
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Media Coverage</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {mediaCoverage.map((item: any, index: number) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-4 border border-blue-200"
                    >
                      <span className="text-xs font-semibold text-blue-600 mb-2 block">{item.type}</span>
                      <h4 className="font-bold text-sm text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-xs text-gray-600 mb-2">{item.description}</p>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span className="font-medium">{item.publication}</span>
                        <span>•</span>
                        <span>{item.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* LinkedIn Posts Tab */}
        {activeTab === 'linkedin' && (
          <div className="animate-fadeIn">
            {/* Embedded LinkedIn Video Posts */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Video Post 1 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow">
                <iframe
                  src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7343209008129843202?collapsed=1"
                  height="542"
                  width="100%"
                  frameBorder="0"
                  allowFullScreen={true}
                  title="LinkedIn Video Post 1"
                  className="w-full"
                ></iframe>
              </div>

              {/* Video Post 2 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow">
                <iframe
                  src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7377328696728231936?compact=1"
                  height="399"
                  width="100%"
                  frameBorder="0"
                  allowFullScreen={true}
                  title="LinkedIn Video Post 2"
                  className="w-full"
                ></iframe>
              </div>

              {/* Video Post 3 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow">
                <iframe
                  src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7373980971605585921?collapsed=1"
                  height="581"
                  width="100%"
                  frameBorder="0"
                  allowFullScreen={true}
                  title="LinkedIn Video Post 3"
                  className="w-full"
                ></iframe>
              </div>

              {/* Video Post 4 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow">
                <iframe
                  src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7353348984712622081?collapsed=1"
                  height="877"
                  width="100%"
                  frameBorder="0"
                  allowFullScreen={true}
                  title="LinkedIn Video Post 4"
                  className="w-full"
                ></iframe>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-12 text-center">
              <div className="bg-gradient-to-r from-[#0A66C2]/10 to-blue-50 rounded-xl p-8 border-2 border-[#0A66C2]/20">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Follow for More Insights</h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Join thousands of technology leaders following my LinkedIn for regular insights on AI, robotics, digital transformation, and technology governance.
                </p>
                <a
                  href="https://www.linkedin.com/in/chinardeshpande/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-3 bg-[#0A66C2] text-white font-semibold rounded-lg hover:bg-[#084d94] transition-colors shadow-lg"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  Follow on LinkedIn
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Awards & Recognition Tab */}
        {activeTab === 'awards' && (
          <div className="animate-fadeIn">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {awards.map((award: any, index: number) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl border-2 border-yellow-200 p-6 hover:shadow-xl hover:scale-105 transition-all"
                >
                  {/* Award Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>

                  {/* Year Badge */}
                  <div className="text-center mb-3">
                    <span className="inline-block px-4 py-1 bg-white text-amber-700 text-lg font-bold rounded-full shadow-sm border border-amber-300">
                      {award.year}
                    </span>
                  </div>

                  {/* Award Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">
                    {award.title}
                  </h3>

                  {/* Organization */}
                  <p className="text-sm text-amber-700 font-semibold mb-3 text-center">
                    {award.organization}
                  </p>

                  {/* Category */}
                  <div className="text-center mb-3">
                    <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-xs font-medium rounded-full">
                      {award.category}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-gray-700 leading-relaxed text-center">
                    {award.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Events & Media Tab */}
        {activeTab === 'events' && (
          <div className="animate-fadeIn">
            <div className="space-y-6">
              {eventsMedia.map((event: any, index: number) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-purple-300 transition-all"
                >
                  <div className="flex items-start gap-6">
                    {/* Icon/Badge */}
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 rounded-lg flex items-center justify-center ${
                        event.media_type === 'Speaking'
                          ? 'bg-gradient-to-br from-purple-500 to-purple-600'
                          : 'bg-gradient-to-br from-blue-500 to-blue-600'
                      }`}>
                        {event.media_type === 'Speaking' ? (
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                          </svg>
                        ) : (
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-2 ${
                            event.media_type === 'Speaking'
                              ? 'bg-purple-100 text-purple-700'
                              : 'bg-blue-100 text-blue-700'
                          }`}>
                            {event.type}
                          </span>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {event.title}
                          </h3>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span className="font-medium">{event.date}</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          </svg>
                          <span>{event.location}</span>
                        </div>
                      </div>

                      <div className="bg-purple-50 rounded-lg p-4 mb-3 border border-purple-100">
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm">{event.event}</h4>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {event.description}
                        </p>
                      </div>

                      {event.url && event.url !== '#' && (
                        <a
                          href={event.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm font-semibold text-purple-600 hover:text-purple-700 transition-colors"
                        >
                          View Details
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
