import { Metadata } from 'next';
import { Navigation, Footer } from '@/components/sections';
import { Section, SectionHeader, Card } from '@/components/ui';
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export const metadata: Metadata = {
  title: 'Awards & Recognition | Chinar Deshpande',
  description: 'Industry recognition: CIO 100 Award, SAP Annual Report feature, Supply Chain Excellence, CII Energy Management, ASSOCHAM Sustainability, Education Innovation awards.',
  openGraph: {
    title: 'Awards & Recognition - Chinar Deshpande',
    description: 'Three decades of industry recognition for technology leadership and innovation',
  },
};

function loadContent() {
  const contentPath = path.join(process.cwd(), 'content', 'awards.yaml');
  return yaml.load(fs.readFileSync(contentPath, 'utf8')) as any;
}

export default function AwardsPage() {
  const content = loadContent();

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-20">
        {/* Hero */}
        <Section background="ivory" padding="default">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-display-xl text-slate-900 mb-6">
              {content.headline}
            </h1>
            <p className="text-h3 text-gold-600 mb-8 font-display font-light">
              {content.subheadline}
            </p>
            <p className="text-body-xl text-slate-600 leading-relaxed">
              {content.introduction}
            </p>
          </div>
        </Section>

        {/* Major Awards */}
        <Section background="white" padding="default">
          <SectionHeader
            title="Major Awards & Honors"
            subtitle="Prestigious industry recognition across technology leadership, innovation, and sustainability"
            align="center"
          />

          <div className="max-w-6xl mx-auto space-y-8">
            {content.awards.map((award: any, idx: number) => (
              <Card key={idx} variant="boardroom" className="border-l-4 border-gold-500">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Award Image Placeholder */}
                  <div className="flex-shrink-0 lg:w-48 h-48 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center">
                    <span className="text-sm text-slate-400">Award Image</span>
                  </div>

                  {/* Award Details */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="font-display text-2xl text-slate-900 mb-2">
                          {award.award}
                        </h3>
                        <p className="text-gold-600 font-semibold mb-1">
                          {award.organization}
                        </p>
                        <p className="text-sm text-slate-500">
                          {award.category}
                        </p>
                      </div>
                      <div className="flex-shrink-0">
                        <div className="px-4 py-2 bg-gold-50 border border-gold-200 rounded-lg">
                          <span className="text-2xl font-display font-light text-gold-700">{award.year}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-slate-600 leading-relaxed mb-4">
                      {award.description}
                    </p>

                    <div className="flex items-start gap-2 bg-slate-50 rounded-lg p-4 border border-slate-200">
                      <svg className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Significance</p>
                        <p className="text-sm text-slate-700 font-medium">{award.significance}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* Recognition Timeline */}
        <Section background="cream" padding="default">
          <SectionHeader
            title="Recognition Timeline"
            subtitle="Three decades of consistent industry recognition and thought leadership"
            align="center"
          />

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold-500 via-gold-400 to-gold-500"></div>

              {/* Timeline Items */}
              <div className="space-y-12">
                {content.recognition_timeline.map((period: any, idx: number) => (
                  <div key={idx} className="relative pl-20">
                    {/* Timeline Dot */}
                    <div className="absolute left-5 top-2 w-8 h-8 bg-gold-500 rounded-full border-4 border-boardroom-cream flex items-center justify-center">
                      <span className="text-xs text-white font-bold">{idx + 1}</span>
                    </div>

                    <Card variant="boardroom">
                      <h3 className="font-display text-2xl text-slate-900 mb-4">
                        {period.year}
                      </h3>
                      <ul className="space-y-3">
                        {period.achievements.map((achievement: string, achIdx: number) => (
                          <li key={achIdx} className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-slate-700">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* Press Features & Media */}
        <Section background="white" padding="default">
          <SectionHeader
            title="Press Features & Media Coverage"
            subtitle="Featured in leading business and technology publications"
            align="center"
          />

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.press_features.map((feature: any, idx: number) => (
              <Card key={idx} variant="boardroom" className="h-full">
                <div className="space-y-3">
                  {/* Publication Badge */}
                  <div className="flex items-start justify-between">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                    </div>
                    <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded">
                      {feature.year}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg text-slate-900 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gold-600 font-medium mb-2">
                      {feature.publication}
                    </p>
                    <p className="text-sm text-slate-600 mb-3">
                      {feature.description}
                    </p>
                    <span className="inline-block px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded border border-blue-200">
                      {feature.type}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* Speaking Engagements */}
        <Section background="cream" padding="default">
          <SectionHeader
            title="Speaking Engagements & Conferences"
            subtitle="Sharing expertise with industry leaders at premier events"
            align="center"
          />

          <div className="max-w-5xl mx-auto space-y-6">
            {content.speaking_engagements.map((engagement: any, idx: number) => (
              <Card key={idx} variant="boardroom">
                <div className="flex items-start gap-4">
                  {/* Speaker Icon */}
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <h4 className="font-display text-xl text-slate-900">
                        {engagement.event}
                      </h4>
                      <span className="px-3 py-1 bg-purple-50 text-purple-700 text-sm rounded border border-purple-200">
                        {engagement.year}
                      </span>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-4 mb-3">
                      <div>
                        <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Role</p>
                        <p className="text-sm font-medium text-slate-700">{engagement.role}</p>
                      </div>
                      <div className="sm:col-span-2">
                        <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Topic</p>
                        <p className="text-sm font-medium text-slate-700">{engagement.topic}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <svg className="w-4 h-4 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                      </svg>
                      <span>{engagement.audience}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* Notable Quotes */}
        <Section background="white" padding="default">
          <SectionHeader
            title="Notable Quotes"
            subtitle="Recognition from industry leaders and award citations"
            align="center"
          />

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            {content.notable_quotes.map((quoteItem: any, idx: number) => (
              <Card key={idx} variant="boardroom" className="h-full">
                <div className="space-y-4">
                  {/* Quote Icon */}
                  <svg className="w-8 h-8 text-gold-400 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>

                  <blockquote className="text-slate-700 leading-relaxed italic">
                    "{quoteItem.quote}"
                  </blockquote>

                  <div className="pt-4 border-t border-slate-200">
                    <p className="font-semibold text-slate-900 mb-1">
                      {quoteItem.source}
                    </p>
                    <p className="text-sm text-gold-600">
                      {quoteItem.context}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* Board-Relevant Recognition Summary */}
        <Section background="cream" padding="default">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-boardroom-navy to-slate-800 rounded-2xl p-12 text-white">
              <h2 className="font-display text-3xl mb-8 text-center">
                Recognition Demonstrating Board Readiness
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Strategic Impact */}
                <div>
                  <h3 className="font-display text-xl text-gold-400 mb-4">Strategic Impact</h3>
                  <ul className="space-y-2">
                    {content.board_recognition_highlights.strategic_impact.map((item: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-slate-200 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Thought Leadership */}
                <div>
                  <h3 className="font-display text-xl text-gold-400 mb-4">Thought Leadership</h3>
                  <ul className="space-y-2">
                    {content.board_recognition_highlights.thought_leadership.map((item: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-slate-200 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Innovation Recognition */}
                <div>
                  <h3 className="font-display text-xl text-gold-400 mb-4">Innovation Recognition</h3>
                  <ul className="space-y-2">
                    {content.board_recognition_highlights.innovation_recognition.map((item: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-slate-200 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Industry Credibility */}
                <div>
                  <h3 className="font-display text-xl text-gold-400 mb-4">Industry Credibility</h3>
                  <ul className="space-y-2">
                    {content.board_recognition_highlights.industry_credibility.map((item: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-slate-200 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
