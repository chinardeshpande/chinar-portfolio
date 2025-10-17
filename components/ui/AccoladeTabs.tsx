'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ImageModal } from './ImageModal';

interface AccoladeTabsProps {
  pressPublications: any[];
  awards: any[];
  eventsMedia: any[];
  mediaCoverage: any[];
  linkedinPosts: any[];
}

export function AccoladeTabs({ pressPublications, awards, eventsMedia, mediaCoverage, linkedinPosts }: AccoladeTabsProps) {
  const [activeTab, setActiveTab] = useState('press');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleCardClick = (item: any) => {
    // Priority 1: If it's a video (has video_platform), always open the URL
    if (item.video_platform && item.url && item.url !== '#') {
      window.open(item.url, '_blank', 'noopener,noreferrer');
      return;
    }

    // Priority 2: If URL is a PDF, open it directly regardless of image
    if (item.url && item.url.endsWith('.pdf')) {
      window.open(item.url, '_blank', 'noopener,noreferrer');
      return;
    }

    // Priority 3: If has image, show in modal (for photos, event images, etc.)
    if (item.image) {
      setSelectedImage(item.image);
      return;
    }

    // Priority 4: Otherwise open URL if available
    if (item.url && item.url !== '#') {
      window.open(item.url, '_blank', 'noopener,noreferrer');
    }
  };

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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {pressPublications.map((item: any, index: number) => (
                <div
                  key={index}
                  className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg hover:border-blue-400 transition-all group cursor-pointer"
                  onClick={() => handleCardClick(item)}
                >
                  {/* Thumbnail - Always Present */}
                  <div className="relative h-40 bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-contain hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center px-4">
                          <svg className="w-12 h-12 mx-auto text-blue-300 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                          </svg>
                          <p className="text-xs font-semibold text-blue-600">{item.publication}</p>
                        </div>
                      </div>
                    )}

                    {/* Click Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all flex items-center justify-center pointer-events-none">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 px-3 py-1.5 rounded-md">
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-900">
                          {item.image ? (
                            <>
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                              </svg>
                              Click to enlarge
                            </>
                          ) : item.url && item.url !== '#' ? (
                            <>
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                              Click to view
                            </>
                          ) : (
                            <>
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              Click for details
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <span className="inline-block px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-2">
                      {item.type}
                    </span>

                    <h3 className="text-sm font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors min-h-[2.5rem]">
                      {item.title}
                    </h3>

                    <div className="flex items-center gap-1.5 text-xs text-gray-600 mb-2">
                      <svg className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
                      </svg>
                      <span className="font-medium truncate">{item.publication}</span>
                    </div>

                    <div className="text-xs text-gray-500 mb-2">
                      {item.date}
                    </div>

                    <p className="text-xs text-gray-600 mb-2 leading-relaxed line-clamp-3">
                      {item.description}
                    </p>

                    {/* Action indicator */}
                    <div className="flex items-center gap-1 text-xs font-semibold text-blue-600">
                      {item.image ? (
                        <span className="flex items-center gap-1">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          View Image
                        </span>
                      ) : item.url && item.url !== '#' ? (
                        <span className="flex items-center gap-1">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          Open Link
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-gray-400">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Press Feature
                        </span>
                      )}
                    </div>
                  </div>
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {awards.map((award: any, index: number) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br from-yellow-50 to-amber-50 rounded-lg border-2 border-yellow-200 p-4 hover:shadow-xl hover:scale-105 transition-all ${award.image ? 'cursor-pointer' : ''}`}
                  onClick={() => award.image && handleCardClick(award)}
                >
                  {/* Award Image or Icon */}
                  {award.image ? (
                    <div className="relative w-full h-32 mb-3 rounded-lg overflow-hidden bg-white shadow-md group">
                      <Image
                        src={award.image}
                        alt={award.title}
                        fill
                        className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all flex items-center justify-center pointer-events-none">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 px-2 py-1 rounded-md">
                          <div className="flex items-center gap-1 text-xs font-semibold text-gray-900">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                            </svg>
                            Click to enlarge
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  )}

                  {/* Award Title */}
                  <h3 className="text-sm font-bold text-gray-900 mb-2 text-center line-clamp-2 min-h-[2.5rem]">
                    {award.title}
                  </h3>

                  {/* Organization */}
                  <p className="text-xs text-amber-700 font-semibold mb-2 text-center line-clamp-1">
                    {award.organization}
                  </p>

                  {/* Category */}
                  <div className="text-center mb-2">
                    <span className="inline-block px-2 py-0.5 bg-amber-100 text-amber-800 text-xs font-medium rounded-full">
                      {award.category}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-gray-700 leading-relaxed text-center line-clamp-3">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {eventsMedia.map((event: any, index: number) => (
                <div
                  key={index}
                  className={`bg-white rounded-xl border-2 overflow-hidden hover:shadow-2xl transition-all group ${
                    event.media_type === 'Video'
                      ? 'border-red-200 hover:border-red-400'
                      : event.media_type === 'Speaking'
                      ? 'border-purple-200 hover:border-purple-400'
                      : 'border-blue-200 hover:border-blue-400'
                  } ${(event.url && event.url !== '#') || event.image ? 'cursor-pointer' : ''}`}
                  onClick={() => ((event.url && event.url !== '#') || event.image) && handleCardClick(event)}
                >
                  {/* Image/Video Thumbnail */}
                  <div className="relative h-48 bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
                    {event.image ? (
                      <>
                        <Image
                          src={event.image}
                          alt={event.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        {/* Video Play Overlay for Videos */}
                        {event.media_type === 'Video' && (
                          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:bg-red-500 transition-colors shadow-lg">
                              <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z"/>
                              </svg>
                            </div>
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className={`w-20 h-20 rounded-full flex items-center justify-center ${
                          event.media_type === 'Video'
                            ? 'bg-gradient-to-br from-red-500 to-red-600'
                            : event.media_type === 'Speaking'
                            ? 'bg-gradient-to-br from-purple-500 to-purple-600'
                            : 'bg-gradient-to-br from-blue-500 to-blue-600'
                        }`}>
                          {event.media_type === 'Video' ? (
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                          ) : event.media_type === 'Speaking' ? (
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                            </svg>
                          ) : (
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Video Platform Badge */}
                    {event.video_platform && (
                      <div className="absolute top-3 right-3">
                        <span className={`px-3 py-1 text-xs font-bold rounded-full shadow-lg ${
                          event.video_platform === 'YouTube'
                            ? 'bg-red-600 text-white'
                            : event.video_platform === 'Facebook'
                            ? 'bg-blue-600 text-white'
                            : 'bg-purple-600 text-white'
                        }`}>
                          {event.video_platform}
                        </span>
                      </div>
                    )}

                    {/* Click Overlay */}
                    {event.url && event.url !== '#' && (
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center pointer-events-none">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 px-4 py-2 rounded-lg shadow-lg">
                          <div className="flex items-center gap-2 text-sm font-bold text-gray-900">
                            {event.media_type === 'Video' ? (
                              <>
                                <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M8 5v14l11-7z"/>
                                </svg>
                                Watch Video
                              </>
                            ) : event.image ? (
                              <>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                </svg>
                                Click to enlarge
                              </>
                            ) : (
                              <>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                                View Details
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-5">
                    {/* Type Badge */}
                    <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full mb-3 ${
                      event.media_type === 'Video'
                        ? 'bg-red-100 text-red-700'
                        : event.media_type === 'Speaking'
                        ? 'bg-purple-100 text-purple-700'
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {event.type}
                    </span>

                    {/* Title */}
                    <h3 className="text-base font-bold text-gray-900 mb-2 line-clamp-2 min-h-[3rem] group-hover:text-purple-600 transition-colors">
                      {event.title}
                    </h3>

                    {/* Event Name */}
                    <div className="flex items-start gap-2 mb-3">
                      <svg className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <p className="text-sm font-semibold text-gray-700 line-clamp-1">
                        {event.event}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-gray-600 leading-relaxed mb-4 line-clamp-3">
                      {event.description}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center gap-3 text-xs text-gray-500 pt-3 border-t border-gray-100">
                      <div className="flex items-center gap-1">
                        <svg className="w-3.5 h-3.5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="font-medium">{event.date}</span>
                      </div>
                      {event.location && (
                        <>
                          <span>•</span>
                          <div className="flex items-center gap-1">
                            <svg className="w-3.5 h-3.5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            </svg>
                            <span className="truncate">{event.location}</span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={!!selectedImage}
        imageSrc={selectedImage || ''}
        imageAlt="Accolade"
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
}
