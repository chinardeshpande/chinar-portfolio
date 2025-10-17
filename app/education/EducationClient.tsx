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
        {/* Hero - Banner Format */}
        <section className="bg-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Education
              </h1>
              <div className="flex-1 border-l-2 border-gray-300 pl-6">
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  B.E. (Electrical Engineering), MS (Computer Science),<br />
                  MBA (Operations Management)
                </p>
              </div>
            </div>
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
