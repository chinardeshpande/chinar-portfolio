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

function loadBoardSkills() {
  const contentPath = path.join(process.cwd(), 'content', 'board-skills.yaml');
  const data = yaml.load(fs.readFileSync(contentPath, 'utf8')) as any;

  // Extract top 10 expert-level skills for compact display
  const topSkills: any[] = [];
  Object.values(data.skills_categories).forEach((category: any) => {
    category.skills.forEach((skill: any) => {
      if (skill.level >= 4) {
        topSkills.push(skill);
      }
    });
  });

  return {
    readiness_score: data.overall_assessment.readiness_score,
    top_skills: topSkills.slice(0, 10),
    ideal_board_roles: data.ideal_board_roles,
    target_industries: data.target_industries,
  };
}

export default function AboutPage() {
  const content = loadContent();
  const boardSkills = loadBoardSkills();

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
                boardSkills={boardSkills}
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
