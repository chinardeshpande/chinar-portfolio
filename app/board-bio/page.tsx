import { Metadata } from 'next';
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { PrintButton } from '@/components/ui/PrintButton';

export const metadata: Metadata = {
  title: 'Board Biography - Chinar Deshpande | Independent Non-Executive Director (INED) | Board CV',
  description: 'Comprehensive board biography for Chinar Deshpande - Independent Non-Executive Director candidate. Technology Leader, Transformation Architect, Builder of Institutions. 30+ years global C-suite experience across 14 countries. Available for UK & global board positions, Technology Committee Chair, Audit/Risk Committee roles.',
  keywords: [
    'Independent Non-Executive Director CV',
    'INED Biography',
    'Board Director CV',
    'Technology Board Director Biography',
    'Board Candidate Profile',
    'Non-Executive Director UK',
    'FTSE Board Candidate',
    'Technology Committee Chair',
    'Board Governance Expert'
  ],
  openGraph: {
    title: 'Board Biography - Chinar Deshpande | INED Candidate',
    description: 'Independent Non-Executive Director • Technology Leader • Transformation Architect • 30+ Years Global C-Suite Experience',
    type: 'profile',
    locale: 'en_GB',
  },
  alternates: {
    canonical: '/board-bio',
  },
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
          <div className="p-12 print:p-12">

            {/* Header */}
            <div className="border-b-2 border-gradient-to-r from-blue-600 to-purple-600 pb-5 mb-5">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {bio.name}
              </h1>
              <p className="text-lg text-slate-700 font-semibold mb-1">
                {bio.title}
              </p>
              <p className="text-sm text-slate-600 italic mb-3">
                {bio.subtitle}
              </p>
              <div className="flex items-center gap-4 text-xs text-slate-600">
                <div className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{bio.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span>{bio.linkedin}</span>
                </div>
              </div>
            </div>

            {/* Executive Summary */}
            <div className="mb-4">
              <h2 className="text-lg font-bold text-blue-600 mb-2">Executive Summary</h2>
              <p className="text-xs text-slate-700 leading-relaxed italic">
                {bio.executive_summary}
              </p>
            </div>

            {/* Leadership Values */}
            <div className="mb-4">
              <h2 className="text-lg font-bold text-blue-600 mb-2">Leadership Values</h2>
              <div className="grid grid-cols-2 gap-2">
                {bio.leadership_values.map((value: any, idx: number) => (
                  <div key={idx} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded p-2 border border-blue-100">
                    <h3 className="font-bold text-xs text-blue-700 mb-0.5">{value.name}</h3>
                    <p className="text-[10px] text-slate-600 leading-tight">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Differentiators */}
            <div className="mb-4">
              <h2 className="text-lg font-bold text-blue-600 mb-2">Key Differentiators</h2>
              <div className="space-y-2">
                {bio.key_differentiators.map((diff: any, idx: number) => (
                  <div key={idx}>
                    <h3 className="font-bold text-xs text-slate-900 mb-1">{diff.category}</h3>
                    <ul className="space-y-0.5 pl-3">
                      {diff.details.map((detail: string, didx: number) => (
                        <li key={didx} className="text-[10px] text-slate-600 leading-tight flex items-start gap-1">
                          <span className="text-blue-500 mt-0.5">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Career Highlights */}
            <div className="mb-4">
              <h2 className="text-lg font-bold text-blue-600 mb-2">Career Highlights</h2>
              <div className="space-y-2">
                {bio.career_highlights.map((highlight: any, idx: number) => (
                  <div key={idx} className="border-l-2 border-blue-500 pl-2">
                    <div className="flex items-start justify-between mb-0.5">
                      <h3 className="font-semibold text-xs text-slate-900">{highlight.role}</h3>
                      <span className="text-[9px] text-slate-500 whitespace-nowrap ml-2">{highlight.period}</span>
                    </div>
                    <p className="text-[10px] text-slate-700 leading-tight">{highlight.achievement}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Transformational Impact */}
            <div className="mb-4">
              <h2 className="text-lg font-bold text-blue-600 mb-2">Transformational Impact</h2>
              <div className="grid grid-cols-2 gap-x-3 gap-y-1">
                {bio.transformational_impact.map((impact: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-1.5">
                    <svg className="w-3 h-3 text-blue-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[10px] text-slate-700 leading-tight">{impact}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Board Competencies & Roles */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <h2 className="text-lg font-bold text-blue-600 mb-2">Board-Ready Competencies</h2>
                <div className="space-y-2">
                  {Object.entries(bio.board_skills).map(([category, skills]: [string, any]) => (
                    <div key={category}>
                      <h3 className="font-semibold text-xs text-slate-900 mb-1 capitalize">{category.replace(/_/g, ' ')}</h3>
                      <ul className="space-y-0.5">
                        {(skills as string[]).map((skill: string, idx: number) => (
                          <li key={idx} className="text-[9px] text-slate-600 pl-2 border-l border-blue-200 leading-tight">
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-lg font-bold text-blue-600 mb-2">Ideal Board Roles</h2>
                <ul className="space-y-0.5 mb-3">
                  {bio.ideal_board_roles.map((role: string, idx: number) => (
                    <li key={idx} className="text-[10px] text-slate-700 flex items-start gap-1">
                      <span className="text-blue-500">•</span>
                      <span>{role}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="font-semibold text-xs text-slate-900 mb-1">Target Industries</h3>
                <ul className="space-y-0.5">
                  {bio.target_industries.map((industry: string, idx: number) => (
                    <li key={idx} className="text-[9px] text-slate-600">• {industry}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Board Committee Fit */}
            <div className="mb-4">
              <h2 className="text-lg font-bold text-blue-600 mb-2">Board Committee Fit</h2>
              <div className="space-y-1">
                {bio.committee_fit.map((committee: string, idx: number) => (
                  <p key={idx} className="text-[10px] text-slate-700 leading-tight">
                    <strong className="text-slate-900">{committee.split(' - ')[0]}</strong> — {committee.split(' - ')[1]}
                  </p>
                ))}
              </div>
            </div>

            {/* What I Seek */}
            <div className="mb-4">
              <h2 className="text-lg font-bold text-blue-600 mb-2">What I Seek in Board Opportunities</h2>
              <ul className="space-y-0.5">
                {bio.board_opportunity_criteria.map((criteria: string, idx: number) => (
                  <li key={idx} className="text-[10px] text-slate-700 leading-tight flex items-start gap-1">
                    <span className="text-purple-500 mt-0.5">•</span>
                    <span>{criteria}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Personal Foundation */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded p-3 mb-4 border border-indigo-100">
              <h2 className="text-sm font-bold text-indigo-700 mb-1">Beyond Work — Personal Foundation</h2>
              <p className="text-[10px] text-slate-700 leading-relaxed italic">
                {bio.personal_foundation}
              </p>
            </div>

            {/* Footer */}
            <div className="pt-3 border-t border-slate-200">
              <div className="grid grid-cols-3 gap-3 text-[10px] text-slate-600">
                <div>
                  <p className="font-semibold text-slate-900 mb-0.5">Availability</p>
                  <p>{bio.availability}</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-0.5">Contact</p>
                  <p>{bio.contact}</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-0.5">Notice</p>
                  <p>{bio.notice}</p>
                </div>
              </div>
              <p className="text-[9px] text-slate-400 mt-3 text-center">
                © {new Date().getFullYear()} Chinar Deshpande. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
