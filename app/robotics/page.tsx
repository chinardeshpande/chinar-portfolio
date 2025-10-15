import { Metadata } from 'next';
import { Navigation, Footer } from '@/components/sections';
import { Section, SectionHeader, Card } from '@/components/ui';
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export const metadata: Metadata = {
  title: 'Robotics & Automation Platforms | Chinar Deshpande',
  description: 'Leading warehouse automation: Autostore, Geek+, T-sorter, Libiao Robotics, proprietary WCS. 18 global facilities, 300+ brands, 40% efficiency gains. Videos and case studies.',
  openGraph: {
    title: 'Robotics & Automation - Chinar Deshpande',
    description: 'Hands-on technology leadership implementing cutting-edge warehouse automation at global scale',
  },
};

function loadContent() {
  const roboticsPath = path.join(process.cwd(), 'content', 'robotics.yaml');
  const postsPath = path.join(process.cwd(), 'content', 'linkedin-posts.yaml');

  const roboticsContent = yaml.load(fs.readFileSync(roboticsPath, 'utf8')) as any;
  const postsContent = yaml.load(fs.readFileSync(postsPath, 'utf8')) as any;

  return { robotics: roboticsContent, posts: postsContent.posts };
}

export default function RoboticsPage() {
  const { robotics, posts } = loadContent();

  // Create a map of post IDs to post data for easy lookup
  const postsMap = posts.reduce((acc: any, post: any) => {
    acc[post.id] = post;
    return acc;
  }, {});

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-20">
        {/* Hero */}
        <Section background="ivory" padding="default">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-display-xl text-slate-900 mb-6">
              {robotics.headline}
            </h1>
            <p className="text-h3 text-gold-600 mb-8 font-display font-light">
              {robotics.subheadline}
            </p>
            <p className="text-body-xl text-slate-600 leading-relaxed">
              {robotics.introduction}
            </p>
          </div>
        </Section>

        {/* Technology Platforms */}
        <Section background="white" padding="default">
          <SectionHeader
            title="Technology Platforms"
            subtitle="Hands-on experience with leading warehouse automation technologies"
            align="center"
          />

          <div className="max-w-6xl mx-auto space-y-8">
            {robotics.platforms.map((platform: any, idx: number) => (
              <Card key={idx} variant="boardroom" className="border-l-4 border-gold-500">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Platform Image Placeholder */}
                  <div className="flex-shrink-0 lg:w-64 h-48 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center">
                    <span className="text-sm text-slate-400">Platform Image</span>
                  </div>

                  {/* Platform Details */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="font-display text-2xl text-slate-900 mb-2">
                          {platform.name}
                        </h3>
                        <p className="text-gold-600 font-semibold mb-2">
                          {platform.type}
                        </p>
                        <p className="text-sm text-slate-500">
                          Deployment: {platform.deployment}
                        </p>
                      </div>
                    </div>

                    <p className="text-slate-600 leading-relaxed mb-3">
                      {platform.description}
                    </p>

                    <div className="bg-slate-50 rounded-lg p-4 mb-4 border border-slate-200">
                      <p className="text-sm text-slate-500 uppercase tracking-wider mb-1 font-medium">
                        Use Case
                      </p>
                      <p className="text-slate-700">
                        {platform.use_case}
                      </p>
                    </div>

                    {/* Key Metrics */}
                    <div>
                      <p className="text-sm text-slate-500 uppercase tracking-wider mb-3 font-medium">
                        Key Metrics
                      </p>
                      <div className="grid sm:grid-cols-3 gap-3">
                        {platform.key_metrics.map((metric: string, metricIdx: number) => (
                          <div
                            key={metricIdx}
                            className="flex items-start gap-2 bg-gold-50 rounded-lg p-3 border border-gold-200"
                          >
                            <svg className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm text-slate-700 font-medium">{metric}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* Video Showcases with LinkedIn Embeds */}
        <Section background="cream" padding="default">
          <SectionHeader
            title="Video Showcases"
            subtitle="Real-world demonstrations of robotics deployment and operations"
            align="center"
          />

          <div className="max-w-6xl mx-auto space-y-8">
            {robotics.video_showcases.map((video: any, idx: number) => {
              const linkedinPost = postsMap[video.linkedin_post_id];

              return (
                <Card key={idx} variant="boardroom">
                  <div className="grid lg:grid-cols-2 gap-6">
                    {/* Video Embed */}
                    <div className="space-y-4">
                      <h3 className="font-display text-2xl text-slate-900">
                        {video.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {video.description}
                      </p>

                      {/* Technologies */}
                      <div>
                        <p className="text-sm text-slate-500 uppercase tracking-wider mb-2 font-medium">
                          Technologies
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {video.technologies.map((tech: string, techIdx: number) => (
                            <span
                              key={techIdx}
                              className="px-3 py-1 bg-gold-50 text-gold-700 text-sm rounded-full border border-gold-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Highlights */}
                      <div>
                        <p className="text-sm text-slate-500 uppercase tracking-wider mb-2 font-medium">
                          Highlights
                        </p>
                        <ul className="space-y-2">
                          {video.highlights.map((highlight: string, highlightIdx: number) => (
                            <li key={highlightIdx} className="flex items-start gap-2">
                              <svg className="w-4 h-4 text-gold-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span className="text-sm text-slate-700">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* LinkedIn Embed Placeholder / Link */}
                    <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg p-8 flex flex-col items-center justify-center text-center">
                      <div className="w-16 h-16 bg-[#0A66C2] rounded-lg flex items-center justify-center mb-4">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </div>
                      <p className="text-slate-600 mb-4">
                        {linkedinPost ? linkedinPost.title : 'LinkedIn Video'}
                      </p>
                      {linkedinPost && (
                        <a
                          href={linkedinPost.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A66C2] hover:bg-[#004182] text-white font-medium rounded-lg transition-colors"
                        >
                          View on LinkedIn
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </Section>

        {/* Technology Stack */}
        <Section background="white" padding="default">
          <SectionHeader
            title="Technology Stack & Integration"
            subtitle="Four-layer architecture enabling seamless multi-vendor robotics orchestration"
            align="center"
          />

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Robotics Layer */}
            <Card variant="boardroom" className="h-full">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h4 className="font-display text-lg text-slate-900">Robotics Layer</h4>
              </div>
              <ul className="space-y-2">
                {robotics.technology_stack.robotics_layer.map((item: string, idx: number) => (
                  <li key={idx} className="text-sm text-slate-600 leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </Card>

            {/* Control Layer */}
            <Card variant="boardroom" className="h-full">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h4 className="font-display text-lg text-slate-900">Control Layer</h4>
              </div>
              <ul className="space-y-2">
                {robotics.technology_stack.control_layer.map((item: string, idx: number) => (
                  <li key={idx} className="text-sm text-slate-600 leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </Card>

            {/* Management Layer */}
            <Card variant="boardroom" className="h-full">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <h4 className="font-display text-lg text-slate-900">Management Layer</h4>
              </div>
              <ul className="space-y-2">
                {robotics.technology_stack.management_layer.map((item: string, idx: number) => (
                  <li key={idx} className="text-sm text-slate-600 leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </Card>

            {/* Analytics Layer */}
            <Card variant="boardroom" className="h-full">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gold-500 to-gold-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h4 className="font-display text-lg text-slate-900">Analytics Layer</h4>
              </div>
              <ul className="space-y-2">
                {robotics.technology_stack.analytics_layer.map((item: string, idx: number) => (
                  <li key={idx} className="text-sm text-slate-600 leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </Section>

        {/* Innovation Highlights */}
        <Section background="cream" padding="default">
          <SectionHeader
            title="Innovation Highlights"
            subtitle="Differentiated approaches creating competitive advantage"
            align="center"
          />

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
            {robotics.innovation_highlights.map((innovation: any, idx: number) => (
              <Card key={idx} variant="boardroom" className="h-full border-l-4 border-gold-500">
                <h4 className="font-display text-xl text-slate-900 mb-3">
                  {innovation.title}
                </h4>
                <p className="text-slate-600 leading-relaxed mb-4">
                  {innovation.description}
                </p>
                <div className="flex items-start gap-2 bg-gold-50 rounded-lg p-4 border border-gold-200">
                  <svg className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Impact</p>
                    <p className="text-sm text-slate-700 font-medium">{innovation.impact}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* Board Value Proposition */}
        <Section background="white" padding="default">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-boardroom-navy to-slate-800 rounded-2xl p-12 text-white">
              <h2 className="font-display text-3xl mb-8 text-center">
                Board Value Proposition
              </h2>

              <div className="space-y-6">
                {Object.entries(robotics.board_value).map(([key, value]: [string, any], idx: number) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gold-500 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-display text-lg text-gold-400 mb-1 capitalize">
                        {key.replace('_', ' ')}
                      </h4>
                      <p className="text-slate-200 leading-relaxed">
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
