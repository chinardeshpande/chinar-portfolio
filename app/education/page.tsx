import { Metadata } from 'next';
import { Navigation, Footer } from '@/components/sections';
import { EducationClient } from './EducationClient';
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export const metadata: Metadata = {
  title: 'Education | Chinar Deshpande',
  description: 'Academic excellence: MBA (Operations Management), MS (Computer Science), BE (Electrical Engineering) from University of Louisville and VJTI Mumbai.',
  openGraph: {
    title: 'Education - Chinar Deshpande',
    description: 'Foundation for global technology leadership: Premier degrees, executive education, professional certifications',
  },
};

function loadContent() {
  const contentPath = path.join(process.cwd(), 'content', 'education.yaml');
  return yaml.load(fs.readFileSync(contentPath, 'utf8')) as any;
}

export default function EducationPage() {
  const content = loadContent();

  return (
    <div className="min-h-screen">
      <Navigation />
      <EducationClient content={content} />
      <Footer />
    </div>
  );
}
