import { Metadata } from 'next';
import { Navigation, Footer } from '@/components/sections';
import { AccoladeTabs } from '@/components/ui/AccoladeTabs';
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export const metadata: Metadata = {
  title: 'Accolades | Chinar Deshpande',
  description: 'Awards, recognition, press publications, speaking engagements, and media coverage showcasing technology leadership excellence.',
  openGraph: {
    title: 'Accolades - Chinar Deshpande',
    description: 'Recognition and achievements in technology leadership, digital transformation, and innovation',
  },
};

function loadContent() {
  const contentPath = path.join(process.cwd(), 'content', 'accolades.yaml');
  return yaml.load(fs.readFileSync(contentPath, 'utf8')) as any;
}

export default function AccoladesPage() {
  const content = loadContent();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="pt-20">
        {/* Hero Banner */}
        <section className="bg-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Accolades
              </h1>
              <div className="flex-1 border-l-2 border-gray-300 pl-6">
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  Recognition in technology leadership, innovation,<br />
                  and digital transformation excellence
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tabs Section */}
        <section className="min-h-screen bg-white py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AccoladeTabs
              pressPublications={content.press_publications}
              awards={content.awards}
              eventsMedia={content.events_media}
              mediaCoverage={content.media_coverage}
              linkedinPosts={content.linkedin_posts}
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
