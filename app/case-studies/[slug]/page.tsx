import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Navigation, Footer } from '@/components/sections';
import { Section, Card, Button } from '@/components/ui';
import Image from 'next/image';
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

interface CaseStudyPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const caseStudy = await loadCaseStudy(params.slug);

  if (!caseStudy) {
    return {
      title: 'Case Study Not Found',
    };
  }

  return {
    title: `${caseStudy.metadata.title} | Case Study`,
    description: caseStudy.executive_summary,
    openGraph: {
      title: caseStudy.metadata.title,
      description: caseStudy.executive_summary,
    },
  };
}

async function loadCaseStudy(slug: string) {
  try {
    const contentPath = path.join(process.cwd(), 'content', 'case-studies', `${slug}.yaml`);
    return yaml.load(fs.readFileSync(contentPath, 'utf8')) as any;
  } catch (error) {
    return null;
  }
}

export default async function CaseStudyDetailPage({ params }: CaseStudyPageProps) {
  const caseStudy = await loadCaseStudy(params.slug);

  if (!caseStudy) {
    notFound();
  }

  const { metadata, executive_summary, challenge, solution, implementation, results, lessons_learned, board_value } = caseStudy;

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-20">
        {/* Hero - Updated to match main website styling */}
        <section className="bg-gradient-to-br from-gray-50 to-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
              <Link href="/case-studies" className="hover:text-primary-600 transition-colors">
                Case Studies
              </Link>
              <span>→</span>
              <span className="text-gray-900">{metadata.title}</span>
            </div>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full">
                {metadata.category}
              </span>
              {metadata.industries.map((industry: string, idx: number) => (
                <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
                  {industry}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              {metadata.title}
            </h1>
            <p className="text-base text-gray-600 mb-4">
              {metadata.subtitle}
            </p>

            {/* Project Details - Thin single line with logo */}
            <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-lg border-l-4 border-primary-600 p-3 shadow-sm">
                <div className="flex items-center justify-between gap-6">
                  {/* Company Logo */}
                  {metadata.logo && (
                    <div className="flex-shrink-0">
                      <div className="relative h-12 w-32 bg-white rounded px-2 py-1">
                        <Image
                          src={metadata.logo}
                          alt={metadata.client}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  )}

                  {/* Project Info - Single Line */}
                  <div className="flex-1 flex items-center justify-around gap-8">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-primary-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <div>
                        <p className="text-xs text-gray-500 font-medium uppercase">Organization</p>
                        <p className="font-bold text-gray-900">{metadata.client}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <div>
                        <p className="text-xs text-gray-500 font-medium uppercase">Role</p>
                        <p className="font-bold text-gray-900">{metadata.role}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <div>
                        <p className="text-xs text-gray-500 font-medium uppercase">Duration</p>
                        <p className="font-bold text-gray-900">{metadata.duration}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </section>

        {/* Executive Summary & Quantitative Impact - Compact Two Column Layout */}
        <section className="py-6 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Executive Summary */}
              <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-xl p-5 border-l-4 border-primary-600 shadow-md">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">Executive Summary</h2>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {executive_summary}
                </p>
              </div>

              {/* Quantitative Impact */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-5 border-l-4 border-green-600 shadow-md">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">Quantitative Impact</h2>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {results.quantitative.map((result: any, idx: number) => (
                    <div key={idx} className="bg-white rounded-lg p-3 shadow-sm">
                      <div className="text-2xl font-bold text-green-600 mb-0.5">{result.value}</div>
                      <div className="text-xs uppercase tracking-wider text-gray-500 mb-1 font-semibold">{result.metric}</div>
                      <p className="text-xs text-gray-600 leading-tight">{result.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenge */}
        <Section background="cream" padding="default">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-display-md text-slate-900 mb-4">The Challenge</h2>
            <div className="divider-gold mb-8"></div>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg text-slate-800 mb-3">Situation</h3>
                <p className="text-slate-700 leading-relaxed">{challenge.situation}</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg text-slate-800 mb-3">Key Problems</h3>
                <ul className="space-y-2">
                  {challenge.problems.map((problem: string, idx: number) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span className="text-slate-700">{problem}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Card variant="luxury" className="border-l-4 border-gold-500">
                <p className="text-slate-700 italic leading-relaxed">
                  <strong className="text-gold-700">Stakes:</strong> {challenge.stakes}
                </p>
              </Card>
            </div>
          </div>
        </Section>

        {/* Solution */}
        <Section background="white" padding="default">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-display-md text-slate-900 mb-4">The Solution</h2>
            <div className="divider-gold mb-8"></div>

            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              {solution.strategy}
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {solution.key_initiatives.map((initiative: any, idx: number) => (
                <Card key={idx} variant="boardroom">
                  <h4 className="font-semibold text-slate-900 mb-2">{initiative.title}</h4>
                  <p className="text-sm text-slate-600">{initiative.description}</p>
                </Card>
              ))}
            </div>

            <div>
              <h3 className="font-semibold text-lg text-slate-800 mb-4">Technologies Deployed</h3>
              <div className="flex flex-wrap gap-3">
                {solution.technologies_deployed.map((tech: any, idx: number) => (
                  <div key={idx} className="px-4 py-2 bg-slate-100 rounded-lg border border-slate-200">
                    <p className="font-medium text-slate-900">{tech.name}</p>
                    <p className="text-xs text-slate-600">{tech.purpose}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* Results - Qualitative Only */}
        <Section background="white" padding="default">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-display-md text-slate-900 mb-4">Additional Impact</h2>
            <div className="divider-gold mb-8"></div>

            {/* Qualitative Results */}
            <div className="mb-12">
              <h3 className="font-semibold text-lg text-slate-800 mb-4">Qualitative Impact</h3>
              <ul className="space-y-2">
                {results.qualitative.map((result: string, idx: number) => (
                  <li key={idx} className="flex items-start space-x-3 p-3 bg-emerald-50 rounded-lg">
                    <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-700">{result}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Business Impact */}
            <div>
              <h3 className="font-semibold text-lg text-slate-800 mb-4">Business Impact</h3>
              <ul className="space-y-2">
                {results.business_impact.map((impact: string, idx: number) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <span className="text-gold-600 text-xl mt-0.5">▸</span>
                    <span className="text-slate-700">{impact}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* Lessons Learned */}
        <Section background="cream" padding="default">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-display-md text-slate-900 mb-4">Lessons Learned</h2>
            <div className="divider-gold mb-8"></div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-lg text-emerald-700 mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  What Worked
                </h3>
                <ul className="space-y-2">
                  {lessons_learned.successes.map((success: string, idx: number) => (
                    <li key={idx} className="text-sm text-slate-700 bg-emerald-50 p-3 rounded-lg">
                      {success}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg text-amber-700 mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  Challenges
                </h3>
                <ul className="space-y-2">
                  {lessons_learned.challenges.map((challenge: string, idx: number) => (
                    <li key={idx} className="text-sm text-slate-700 bg-amber-50 p-3 rounded-lg">
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-semibold text-lg text-slate-800 mb-4">Key Takeaways</h3>
              <ul className="space-y-2">
                {lessons_learned.key_takeaways.map((takeaway: string, idx: number) => (
                  <li key={idx} className="flex items-start space-x-3 p-4 bg-white rounded-lg border-l-4 border-gold-500">
                    <span className="text-gold-600 text-xl">✓</span>
                    <span className="text-slate-700">{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* Board Value */}
        <Section background="white" padding="default">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-boardroom-navy to-slate-800 rounded-2xl p-12 text-white">
              <h2 className="font-display text-3xl mb-6">Board-Level Value Demonstrated</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {Object.entries(board_value).map(([key, value]: [string, any]) => (
                  <div key={key} className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-gold-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gold-400 capitalize mb-1">{key}</p>
                      <p className="text-sm text-slate-300">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* CTA */}
        <Section background="cream" padding="default">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-display text-2xl text-slate-900 mb-4">
              Interested in Similar Transformational Results?
            </h3>
            <p className="text-slate-600 mb-8">
              Let's discuss how strategic technology leadership can drive your organization forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary">
                Schedule Introduction Call
              </Button>
              <Button href="/case-studies" variant="secondary">
                View More Case Studies
              </Button>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
