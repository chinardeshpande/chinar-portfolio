import { Metadata } from 'next';
import { Navigation, Footer } from '@/components/sections';
import { AboutTabs } from '@/components/ui';
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export const metadata: Metadata = {
  title: 'About Chinar Deshpande | Independent Non-Executive Director UK | INED | Board Governance Expert',
  description: '30+ years technology leadership. Independent Non-Executive Director (INED) available for UK & global board positions. Expert in board governance, technology strategy, AI, digital transformation. CTO at THG (FTSE 250). Harvard, MIT, London Business School alumnus.',
  keywords: [
    'Independent Non-Executive Director',
    'INED UK',
    'Board Governance',
    'Technology Board Director',
    'Digital Transformation Leader',
    'AI Strategy Expert',
    'Board Advisor',
    'Technology Committee Chair',
    'FTSE Board Director',
    'Corporate Governance UK'
  ],
  openGraph: {
    title: 'About Chinar Deshpande | INED UK | Board Governance Expert',
    description: 'Independent Non-Executive Director • Technology Visionary • Board Leader • AI Evangelist • 30+ Years Global Experience',
    type: 'profile',
    locale: 'en_GB',
  },
  alternates: {
    canonical: '/about',
  },
};

function loadContent() {
  const contentPath = path.join(process.cwd(), 'content', 'about.yaml');
  return yaml.load(fs.readFileSync(contentPath, 'utf8')) as any;
}

export default function AboutPage() {
  const content = loadContent();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="pt-20">
        {/* Clean White Section */}
        <section className="min-h-screen bg-white">
          {/* Content */}
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <AboutTabs
                introduction={content.introduction}
                rolePositions={content.role_positions}
                differentiators={content.differentiators}
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
