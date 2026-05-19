'use client';

import Link from 'next/link';

interface TransformationWizardProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TransformationWizard({ isOpen, onClose }: TransformationWizardProps) {
  if (!isOpen) return null;

  const roleIcons: Record<string, any> = {
    briefcase: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    ),
    users: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    ),
    rocket: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    ),
    brain: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    ),
  };

  const journeyOptions = [
    {
      id: 'independent-director',
      title: 'Independent Director',
      subtitle: 'Board-Level Governance',
      description: 'Board oversight for AI adoption, GCC strategy, and transformation',
      icon: 'briefcase',
      color: 'from-blue-500 to-blue-600',
      contactUrl: '/contact?role=independent-director',
      learnMoreUrl: '/independent-director'
    },
    {
      id: 'advisory-board',
      title: 'Advisory Board Member',
      subtitle: 'Strategic Counsel',
      description: 'Global board advisory for technology transformation',
      icon: 'users',
      color: 'from-purple-500 to-purple-600',
      contactUrl: '/contact?role=advisory-board',
      learnMoreUrl: '/advisory-board'
    },
    {
      id: 'startup-mentor',
      title: 'Startup Mentor',
      subtitle: 'Hands-On Guidance',
      description: 'Strategic mentorship for early-stage technology companies',
      icon: 'rocket',
      color: 'from-green-500 to-green-600',
      contactUrl: '/contact?role=startup-mentor',
      learnMoreUrl: '/startup-mentor'
    },
    {
      id: 'ai-strategist',
      title: 'AI Transformation Strategist',
      subtitle: 'Intelligent Systems',
      description: 'Hands-on AI deployment and ethical governance',
      icon: 'brain',
      color: 'from-orange-500 to-pink-600',
      contactUrl: '/contact?role=ai-strategist',
      learnMoreUrl: '/ai-strategist'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="relative bg-white rounded-2xl shadow-2xl max-w-6xl w-full animate-fadeIn">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Header */}
          <div className="border-b border-gray-200 px-8 py-6">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">
              How Can I Help You?
            </h2>
            <p className="text-gray-600 text-center">
              Select the area where you need guidance
            </p>
          </div>

          {/* Body - 4 Role Cards in Horizontal Grid */}
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {journeyOptions.map((option) => (
                <div
                  key={option.id}
                  className="group bg-white rounded-xl border-2 border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  {/* Icon */}
                  <div className="p-6 bg-gradient-to-br from-gray-50 to-white">
                    <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${option.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform shadow-md`}>
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {roleIcons[option.icon]}
                      </svg>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 text-center">
                    <h4 className="text-base font-bold text-gray-900 mb-1">
                      {option.title}
                    </h4>
                    <p className="text-xs font-semibold text-blue-600 mb-2">
                      {option.subtitle}
                    </p>
                    <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                      {option.description}
                    </p>

                    {/* Buttons */}
                    <div className="space-y-2">
                      <Link
                        href={option.contactUrl}
                        onClick={onClose}
                        className="block w-full px-4 py-2 bg-blue-600 text-white text-xs font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Schedule Conversation
                      </Link>
                      <Link
                        href={option.learnMoreUrl}
                        onClick={onClose}
                        className="block w-full px-4 py-2 border-2 border-gray-300 text-gray-700 text-xs font-semibold rounded-lg hover:border-blue-400 hover:text-blue-600 transition-colors"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
