import { Metadata } from 'next';
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { PrintButton } from '@/components/ui/PrintButton';

export const metadata: Metadata = {
  title: 'Board Bio - Chinar Deshpande | INED Candidate',
  description: 'One-page board biography for Chinar Deshpande - Independent Non-Executive Director candidate with 30+ years global technology leadership.',
};

function loadContent() {
  const contentPath = path.join(process.cwd(), 'content', 'board-bio.yaml');
  return yaml.load(fs.readFileSync(contentPath, 'utf8')) as any;
}

export default function BoardBioPage() {
  const bio = loadContent();

  return (
    <>

      {/* Print Button - Hidden when printing */}
      <div className="print:hidden fixed top-4 right-4 z-50">
        <PrintButton />
      </div>

      {/* A4 Page Container */}
      <div className="min-h-screen bg-slate-100 p-8 print:p-0 print:bg-white">
        <div className="max-w-4xl mx-auto bg-white shadow-2xl print:shadow-none" style={{ minHeight: '297mm', width: '210mm', margin: '0 auto' }}>
          <div className="p-12 print:p-16">
            {/* Header */}
            <div className="border-b-2 border-primary-500 pb-6 mb-6">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                {bio.name}
              </h1>
              <p className="text-xl text-primary-600 font-semibold mb-3">
                {bio.title}
              </p>
              <div className="flex items-center gap-4 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{bio.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span>{bio.linkedin}</span>
                </div>
              </div>
            </div>

            {/* Executive Summary */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-primary-600 mb-3">Executive Summary</h2>
              <p className="text-slate-700 leading-relaxed">
                {bio.executive_summary}
              </p>
            </div>

            {/* Key Qualifications */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-primary-600 mb-3">Key Qualifications</h2>
              <ul className="space-y-1">
                {bio.qualifications.map((qual: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-primary-500 mt-1">•</span>
                    <span>{qual}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Board-Ready Skills */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-primary-600 mb-3">Board-Ready Skills</h2>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(bio.board_skills).map(([category, skills]: [string, any]) => (
                  <div key={category}>
                    <h3 className="font-semibold text-sm text-slate-900 mb-2 capitalize">{category}</h3>
                    <ul className="space-y-1">
                      {(skills as string[]).map((skill: string, idx: number) => (
                        <li key={idx} className="text-xs text-slate-600 pl-3 border-l-2 border-primary-200">
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Career Highlights */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-primary-600 mb-3">Career Highlights</h2>
              <div className="space-y-3">
                {bio.career_highlights.map((highlight: any, idx: number) => (
                  <div key={idx} className="border-l-3 border-primary-500 pl-3">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="font-semibold text-sm text-slate-900">{highlight.role}</h3>
                      <span className="text-xs text-slate-500 whitespace-nowrap ml-2">{highlight.period}</span>
                    </div>
                    <p className="text-xs text-slate-700">{highlight.achievement}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Transformational Impact */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-primary-600 mb-3">Transformational Impact</h2>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                {bio.transformational_impact.map((impact: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs text-slate-700">{impact}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Board Committee Fit & Ideal Opportunities */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h2 className="text-xl font-bold text-primary-600 mb-2">Board Committee Fit</h2>
                <ul className="space-y-1">
                  {bio.committee_fit.map((committee: string, idx: number) => (
                    <li key={idx} className="text-xs text-slate-700 leading-relaxed">
                      <strong className="text-slate-900">{committee.split(' - ')[0]}</strong> - {committee.split(' - ')[1]}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-primary-600 mb-2">Ideal Board Opportunities</h2>
                <div className="mb-3">
                  <h3 className="font-semibold text-xs text-slate-900 mb-1">Sectors:</h3>
                  <ul className="space-y-0.5">
                    {bio.ideal_boards.sectors.map((sector: string, idx: number) => (
                      <li key={idx} className="text-xs text-slate-600">• {sector}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-8 pt-4 border-t border-slate-200">
              <div className="grid grid-cols-3 gap-4 text-xs text-slate-600">
                <div>
                  <p className="font-semibold text-slate-900 mb-1">Availability</p>
                  <p>{bio.availability}</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-1">Contact</p>
                  <p>{bio.contact}</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-1">Notice</p>
                  <p>{bio.notice}</p>
                </div>
              </div>
              <p className="text-xs text-slate-400 mt-4 text-center">
                © {new Date().getFullYear()} Chinar Deshpande. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
