import { Metadata } from 'next';
import { Navigation, Footer } from '@/components/sections';
import { AboutTabs } from '@/components/ui';
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export const metadata: Metadata = {
  title: 'About Chinar Deshpande | INED, Board Advisor, AI Evangelist',
  description: '30+ years technology leadership. Board governance expert, startup mentor, strategic advisor, and AI evangelist. Transforming organizations across 14 countries.',
  openGraph: {
    title: 'About Chinar Deshpande',
    description: 'Technology Visionary • Board Leader • AI Evangelist',
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
                rolePositions={content.role_positions}
                aiExpertise={content.ai_expertise}
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
