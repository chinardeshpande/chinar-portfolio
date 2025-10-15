import { Metadata } from 'next';
import Link from 'next/link';
import { Navigation, Footer } from '@/components/sections';
import { Section, SectionHeader, Card } from '@/components/ui';
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export const metadata: Metadata = {
  title: 'Articles & Insights | Chinar Deshpande',
  description: 'Thought leadership on robotics automation, digital transformation, sustainability, ERP implementation, innovation, and board governance. Published in LinkedIn, CIO Magazine, HBR.',
  openGraph: {
    title: 'Articles & Insights - Chinar Deshpande',
    description: 'Technology thought leadership and insights from 30+ years of innovation',
  },
};

function loadContent() {
  const contentPath = path.join(process.cwd(), 'content', 'articles.yaml');
  return yaml.load(fs.readFileSync(contentPath, 'utf8')) as any;
}

export default function ArticlesPage() {
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

        {/* Topic Categories */}
        <Section background="white" padding="default">
          <SectionHeader
            title="Topics & Expertise"
            subtitle="Areas of thought leadership and industry contribution"
            align="center"
          />

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.topic_categories.map((category: any, idx: number) => (
              <Card key={idx} variant="boardroom" className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl text-slate-900 mb-2">
                  {category.category}
                </h3>
                <p className="text-sm text-slate-600 mb-4">
                  {category.description}
                </p>
                <span className="inline-block px-3 py-1 bg-gold-50 text-gold-700 text-sm rounded-full border border-gold-200">
                  {category.articles_count} articles
                </span>
              </Card>
            ))}
          </div>
        </Section>

        {/* Featured Articles */}
        <Section background="cream" padding="default">
          <SectionHeader
            title="Featured Articles"
            subtitle="In-depth insights on technology, transformation, and leadership"
            align="center"
          />

          <div className="max-w-6xl mx-auto space-y-8">
            {content.featured_articles.map((article: any, idx: number) => (
              <Card key={idx} variant="boardroom" className="border-l-4 border-gold-500">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Article Image Placeholder */}
                  <div className="flex-shrink-0 lg:w-64 h-48 lg:h-auto bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center">
                    <span className="text-sm text-slate-400">Article Image</span>
                  </div>

                  {/* Article Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-gold-50 text-gold-700 text-sm rounded-full border border-gold-200">
                        {article.category}
                      </span>
                      <span className="text-sm text-slate-500">
                        {article.publication}
                      </span>
                      <span className="text-sm text-slate-400">•</span>
                      <span className="text-sm text-slate-500">
                        {article.date}
                      </span>
                      <span className="text-sm text-slate-400">•</span>
                      <span className="text-sm text-slate-500">
                        {article.read_time}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl text-slate-900 mb-3">
                      {article.title}
                    </h3>

                    <p className="text-slate-600 leading-relaxed mb-4">
                      {article.summary}
                    </p>

                    {/* Key Insights */}
                    <div className="mb-4">
                      <p className="text-sm text-slate-500 uppercase tracking-wider mb-2 font-medium">
                        Key Insights
                      </p>
                      <ul className="space-y-2">
                        {article.key_insights.map((insight: string, insightIdx: number) => (
                          <li key={insightIdx} className="flex items-start gap-2">
                            <svg className="w-4 h-4 text-gold-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm text-slate-700">{insight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tags and Read Link */}
                    <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200">
                      <div className="flex flex-wrap gap-2">
                        {article.tags.map((tag: string, tagIdx: number) => (
                          <span
                            key={tagIdx}
                            className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      {article.url !== '#' && (
                        <Link
                          href={article.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gold-600 font-medium hover:text-gold-700 transition-colors"
                        >
                          Read Article
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* LinkedIn Thought Leadership */}
        <Section background="white" padding="default">
          <SectionHeader
            title="LinkedIn Thought Leadership"
            subtitle="Engaging the professional community with insights and perspectives"
            align="center"
          />

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.linkedin_posts.map((post: any, idx: number) => (
              <Link
                key={idx}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card variant="boardroom" className="h-full group cursor-pointer hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-3 mb-4">
                    {/* LinkedIn Icon */}
                    <div className="flex-shrink-0 w-10 h-10 bg-[#0A66C2] rounded flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-slate-500">{post.date}</p>
                    </div>
                  </div>

                  <h4 className="font-semibold text-lg text-slate-900 mb-2 group-hover:text-gold-600 transition-colors">
                    {post.title}
                  </h4>

                  <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                    {post.summary}
                  </p>

                  <div className="flex items-center gap-2 text-xs text-slate-500 pt-3 border-t border-slate-200">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                    <span>{post.engagement}</span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Section>

        {/* Speaking Topics */}
        <Section background="cream" padding="default">
          <SectionHeader
            title="Speaking & Workshop Topics"
            subtitle="Available for keynotes, panels, and executive workshops"
            align="center"
          />

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            {content.speaking_topics.map((topic: any, idx: number) => (
              <Card key={idx} variant="boardroom" className="h-full">
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  </div>

                  <div className="flex-1">
                    <h4 className="font-display text-xl text-slate-900 mb-2">
                      {topic.topic}
                    </h4>
                    <p className="text-slate-600 mb-3 leading-relaxed">
                      {topic.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm">
                      <svg className="w-4 h-4 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                      </svg>
                      <span className="text-slate-500">{topic.target_audience}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* Upcoming Content */}
        <Section background="white" padding="default">
          <SectionHeader
            title="Upcoming Content"
            subtitle="Articles and publications in development"
            align="center"
          />

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
            {content.upcoming_content.map((upcoming: any, idx: number) => (
              <Card key={idx} variant="boardroom" className="h-full">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      upcoming.status === 'In Development'
                        ? 'bg-blue-50 text-blue-700 border border-blue-200'
                        : upcoming.status === 'Research Phase'
                        ? 'bg-purple-50 text-purple-700 border border-purple-200'
                        : 'bg-slate-50 text-slate-700 border border-slate-200'
                    }`}>
                      {upcoming.status}
                    </span>
                  </div>

                  <h4 className="font-semibold text-lg text-slate-900">
                    {upcoming.title}
                  </h4>

                  <div className="space-y-1 text-sm">
                    <p className="text-gold-600 font-medium">
                      {upcoming.publication}
                    </p>
                    <p className="text-slate-500">
                      Planned: {upcoming.planned_date}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* Call to Action */}
        <Section background="cream" padding="default">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-boardroom-navy to-slate-800 rounded-2xl p-12 text-white">
              <h2 className="font-display text-3xl mb-6 text-center">
                Engage & Collaborate
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Speaking Inquiries */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                    <h3 className="font-display text-xl text-gold-400">Speaking Inquiries</h3>
                  </div>
                  <p className="text-slate-200 text-sm leading-relaxed">
                    {content.content_engagement.speaking_inquiries}
                  </p>
                </div>

                {/* Article Collaborations */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    <h3 className="font-display text-xl text-gold-400">Article Collaborations</h3>
                  </div>
                  <p className="text-slate-200 text-sm leading-relaxed">
                    {content.content_engagement.article_collaborations}
                  </p>
                </div>

                {/* Advisory Opportunities */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    <h3 className="font-display text-xl text-gold-400">Advisory Opportunities</h3>
                  </div>
                  <p className="text-slate-200 text-sm leading-relaxed">
                    {content.content_engagement.advisory_opportunities}
                  </p>
                </div>

                {/* Board Contributions */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <h3 className="font-display text-xl text-gold-400">Board Contributions</h3>
                  </div>
                  <p className="text-slate-200 text-sm leading-relaxed">
                    {content.content_engagement.board_contributions}
                  </p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-gold-500 hover:bg-gold-600 text-white font-medium rounded-lg transition-colors"
                >
                  Get in Touch
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
