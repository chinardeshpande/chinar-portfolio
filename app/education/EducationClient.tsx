'use client';

import { useState } from 'react';
import { ImageModal } from '@/components/ui';
import Image from 'next/image';

interface EducationClientProps {
  content: any;
}

export function EducationClient({ content }: EducationClientProps) {
  const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <>
      <main className="pt-20">
        {/* Hero - Left aligned */}
        <section className="bg-gradient-to-br from-gray-50 to-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Education
            </h1>
          </div>
        </section>

        {/* Formal Education - Cards with Logo Heroes */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
              {content.degrees.map((degree: any, idx: number) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden hover:shadow-lg hover:border-primary-300 transition-all duration-300"
                >
                  {/* University Logo Hero with Name & Year - Side by Side */}
                  <div className="bg-white p-6 border-b-2 border-gray-100">
                    <div className="flex items-center gap-5">
                      <div className="relative h-20 w-32 flex-shrink-0">
                        <Image
                          src={degree.logo}
                          alt={degree.institution}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1 min-w-0 flex items-baseline gap-4">
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-gray-900 leading-tight">
                            {degree.institution === 'Veermata Jijabai Technological Institute (VJTI)'
                              ? 'VJTI, Mumbai University'
                              : degree.institution
                            }
                          </h4>
                        </div>
                        <div className="text-4xl font-bold text-primary-600 font-serif leading-none">
                          {degree.year}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Degree Content */}
                  <div className="p-5">
                    {/* Highlighted Degree Name */}
                    <div className="bg-gradient-to-r from-primary-50 to-blue-50 border-l-4 border-primary-600 p-3 mb-3 rounded-r min-h-[70px] flex items-center">
                      <h3 className="text-2xl font-serif font-bold text-primary-900 leading-tight">
                        {degree.degree.includes('Master of Science') ? (
                          <>
                            Master of Science<br /><span className="text-xl">(MS)</span>
                          </>
                        ) : (
                          degree.degree
                        )}
                      </h3>
                    </div>

                    <p className="text-lg font-medium text-gray-700 mb-4 leading-snug">
                      {degree.specialization}
                    </p>

                    {/* Certificate Thumbnail - Larger */}
                    {degree.certificate && (
                      <button
                        onClick={() =>
                          setModalImage({
                            src: degree.certificate,
                            alt: `${degree.degree} Certificate - ${degree.institution}`,
                          })
                        }
                        className="w-full group"
                      >
                        <div className="relative h-48 rounded-lg overflow-hidden border-2 border-gray-200 group-hover:border-primary-500 transition-all shadow-sm">
                          <Image
                            src={degree.certificate}
                            alt={`${degree.degree} Certificate`}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all flex items-center justify-center">
                            <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                              <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <p className="text-xs text-gray-500 mt-2 text-center group-hover:text-primary-600 transition-colors font-medium">
                          Click to view certificate
                        </p>
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Professional Certifications */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900">
                Professional Certifications
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {content.certifications.map((cert: any, idx: number) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>

                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-gray-900 mb-1">
                        {cert.certification}
                      </h4>
                      <p className="text-sm text-primary-600 font-medium mb-2">
                        {cert.issuing_organization}
                      </p>
                      <p className="text-sm text-gray-600 mb-3">
                        {cert.description}
                      </p>
                      <div className="flex items-center gap-3 text-xs">
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded">
                          {cert.year}
                        </span>
                        <span
                          className={`px-2 py-1 rounded ${
                            cert.status === 'Active'
                              ? 'bg-green-50 text-green-700 border border-green-200'
                              : 'bg-gray-50 text-gray-600'
                          }`}
                        >
                          {cert.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Image Modal */}
      {modalImage && (
        <ImageModal
          isOpen={!!modalImage}
          onClose={() => setModalImage(null)}
          imageSrc={modalImage.src}
          imageAlt={modalImage.alt}
        />
      )}
    </>
  );
}
