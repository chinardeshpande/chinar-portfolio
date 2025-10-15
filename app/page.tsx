import { Navigation, Footer, HeroCarousel, LinkedInPosts } from '@/components/sections';
import { JsonLd, personSchema, breadcrumbSchema } from '@/components/JsonLd';
import { CompactCard, CardGrid } from '@/components/ui';
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

// Load content from YAML files
function loadContent() {
  const postsPath = path.join(process.cwd(), 'content', 'linkedin-posts.yaml');
  const postsContent = yaml.load(fs.readFileSync(postsPath, 'utf8')) as any;

  return {
    posts: postsContent.posts,
  };
}

const highlights = [
  {
    title: 'Technology Leadership',
    description: '30+ years as CTO and Group CIO across global organizations, leading digital transformation initiatives.',
    icon: '💡',
    tags: ['Digital Strategy', 'Innovation', 'Leadership'],
  },
  {
    title: 'Robotics & Automation',
    description: 'Leading robotics implementation across 18 warehouses with Autostore, Geek+, and T-sorter technologies.',
    icon: '🤖',
    tags: ['Robotics', 'Automation', 'AI'],
  },
  {
    title: 'Global Operations',
    description: 'Experience managing operations across 14 countries and 8 industries, serving 300+ e-commerce brands.',
    icon: '🌍',
    tags: ['Global', 'E-commerce', 'Logistics'],
  },
];

export default function Home() {
  const { posts } = loadContent();

  return (
    <div className="min-h-screen">
      {/* JSON-LD Structured Data for SEO */}
      <JsonLd data={personSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: 'https://www.chinardeshpande.com' },
        ])}
      />

      <Navigation />

      <main>
        <HeroCarousel />

        {/* Key Highlights Section - Compact */}
        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Single-line header with size/color differentiation */}
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                <span className="text-3xl text-primary-700">Key Expertise</span>
                {' '}<span className="text-gray-400">|</span>{' '}
                <span className="text-lg font-normal text-gray-600">
                  Bringing strategic technology leadership and operational excellence to boardrooms worldwide
                </span>
              </h2>
            </div>

            {/* Compact cards with integrated SVG icons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
              {/* Technology Leadership */}
              <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-all">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-lg text-gray-900 mb-1">Technology Leadership</h3>
                    <p className="text-sm text-gray-600 mb-2">30+ years as CTO and Group CIO across global organizations, leading digital transformation initiatives.</p>
                    <div className="flex flex-wrap gap-1.5">
                      {['Digital Strategy', 'Innovation', 'Leadership'].map((tag, i) => (
                        <span key={i} className="px-2 py-0.5 text-xs rounded-full bg-gray-100 text-gray-700">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Robotics & Automation */}
              <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-all">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-lg text-gray-900 mb-1">Robotics & Automation</h3>
                    <p className="text-sm text-gray-600 mb-2">Leading robotics implementation across 18 warehouses with Autostore, Geek+, and T-sorter technologies.</p>
                    <div className="flex flex-wrap gap-1.5">
                      {['Robotics', 'Automation', 'AI'].map((tag, i) => (
                        <span key={i} className="px-2 py-0.5 text-xs rounded-full bg-gray-100 text-gray-700">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Global Operations */}
              <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-all">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-lg text-gray-900 mb-1">Global Operations</h3>
                    <p className="text-sm text-gray-600 mb-2">Experience managing operations across 14 countries and 8 industries, serving 300+ e-commerce brands.</p>
                    <div className="flex flex-wrap gap-1.5">
                      {['Global', 'E-commerce', 'Logistics'].map((tag, i) => (
                        <span key={i} className="px-2 py-0.5 text-xs rounded-full bg-gray-100 text-gray-700">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <LinkedInPosts posts={posts} />
      </main>

      <Footer />
    </div>
  );
}
