import { Metadata } from 'next';
import { Navigation, Footer } from '@/components/sections';
import { Section, SectionHeader, Card } from '@/components/ui';
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export const metadata: Metadata = {
  title: 'Board Skills Matrix | Chinar Deshpande',
  description: 'Comprehensive board skills assessment: Strategic, operational, financial, governance, and industry expertise. 95% board readiness score.',
  openGraph: {
    title: 'Board Skills Matrix - Chinar Deshpande',
    description: 'Expert-level competencies across strategic, operational, and governance dimensions',
  },
};

function loadContent() {
  const contentPath = path.join(process.cwd(), 'content', 'board-skills.yaml');
  return yaml.load(fs.readFileSync(contentPath, 'utf8')) as any;
}

function SkillBar({ level }: { level: number }) {
  const percentage = (level / 5) * 100;

  return (
    <div className="relative w-full h-2 bg-slate-200 rounded-full overflow-hidden">
      <div
        className="absolute top-0 left-0 h-full bg-gradient-to-r from-gold-500 to-gold-600 transition-all duration-500"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
}

function ProficiencyBadge({ level }: { level: number }) {
  const labels = {
    5: { text: 'Expert', color: 'bg-emerald-500 text-white' },
    4: { text: 'Advanced', color: 'bg-blue-500 text-white' },
    3: { text: 'Proficient', color: 'bg-indigo-500 text-white' },
    2: { text: 'Developing', color: 'bg-amber-500 text-white' },
    1: { text: 'Basic', color: 'bg-slate-500 text-white' },
  };

  const badge = labels[level as keyof typeof labels] || labels[3];

  return (
    <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${badge.color}`}>
      {badge.text}
    </span>
  );
}

export default function BoardSkillsPage() {
  const content = loadContent();

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-20">
        {/* Hero */}
        <Section background="ivory" padding="default">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-display-xl text-slate-900 mb-6">
              {content.introduction.title}
            </h1>
            <p className="text-body-xl text-slate-600 leading-relaxed">
              {content.introduction.description}
            </p>
          </div>
        </Section>

        {/* Overall Assessment */}
        <Section background="white" padding="default">
          <div className="max-w-5xl mx-auto">
            <Card variant="luxury" className="border-2 border-gold-500/30">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="text-center md:border-r border-gold-500/20">
                  <div className="stat-number text-emerald-600 mb-2">
                    {content.overall_assessment.readiness_score}%
                  </div>
                  <div className="stat-label mb-2">Board Readiness Score</div>
                  <p className="text-sm text-slate-600">Exceptional</p>
                </div>
                <div className="md:col-span-2">
                  <h3 className="font-semibold text-slate-800 mb-3">Assessment Summary</h3>
                  <p className="text-slate-600 leading-relaxed">
                    {content.overall_assessment.summary}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </Section>

        {/* Skills Categories */}
        {Object.entries(content.skills_categories).map(([categoryKey, category]: [string, any]) => (
          <Section key={categoryKey} background={categoryKey === 'strategic' || categoryKey === 'governance' ? 'cream' : 'white'} padding="default">
            <div className="max-w-5xl mx-auto">
              <div className="mb-12">
                <h2 className="font-display text-display-md text-slate-900 mb-3">
                  {category.title}
                </h2>
                <p className="text-slate-600">{category.description}</p>
                <div className="divider-gold mt-6"></div>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill: any, index: number) => (
                  <Card key={index} variant="boardroom">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div className="flex-1 mb-4 md:mb-0">
                        <h4 className="font-semibold text-lg text-slate-900 mb-2">
                          {skill.skill}
                        </h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {skill.description}
                        </p>
                      </div>
                      <div className="md:ml-6 flex-shrink-0">
                        <ProficiencyBadge level={skill.level} />
                      </div>
                    </div>
                    <SkillBar level={skill.level} />
                  </Card>
                ))}
              </div>
            </div>
          </Section>
        ))}

        {/* Strengths & Development */}
        <Section background="white" padding="default">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Strengths */}
              <Card variant="luxury">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <h3 className="font-display text-xl text-slate-900">Key Strengths</h3>
                </div>
                <ul className="space-y-3">
                  {content.overall_assessment.strengths.map((strength: string, index: number) => (
                    <li key={index} className="flex items-start space-x-3">
                      <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-slate-700">{strength}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Development Areas */}
              <Card variant="boardroom">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                  </div>
                  <h3 className="font-display text-xl text-slate-900">Continuous Development</h3>
                </div>
                <ul className="space-y-3">
                  {content.overall_assessment.development_areas.map((area: string, index: number) => (
                    <li key={index} className="flex items-start space-x-3">
                      <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                      </svg>
                      <span className="text-slate-700">{area}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </Section>

        {/* Ideal Board Roles */}
        <Section background="cream" padding="default">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-display-md text-slate-900 text-center mb-4">
              Ideal Board Roles
            </h2>
            <div className="divider-gold mx-auto mb-12"></div>

            <div className="grid md:grid-cols-2 gap-4">
              {content.ideal_board_roles.map((role: string, index: number) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg border border-gold-500/20 shadow-sm">
                  <div className="w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold">{index + 1}</span>
                  </div>
                  <p className="font-medium text-slate-800">{role}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Target Industries */}
        <Section background="white" padding="default">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-display-md text-slate-900 text-center mb-4">
              Target Industry Sectors
            </h2>
            <div className="divider-gold mx-auto mb-12"></div>

            <div className="flex flex-wrap justify-center gap-3">
              {content.target_industries.map((industry: string, index: number) => (
                <span
                  key={index}
                  className="px-6 py-3 bg-gradient-to-br from-gold-500 to-gold-600 text-white font-medium rounded-full shadow-gold-glow hover:shadow-luxury-lg transition-shadow"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
