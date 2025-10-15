// JSON-LD Structured Data Component
// Provides rich snippets for search engines

interface JsonLdProps {
  data: Record<string, any>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Person Schema - Use on About page and Home page
export function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Chinar Deshpande',
    jobTitle: 'CTO Global Logistics & Finance at THG',
    description: 'Visionary technology leader with 30+ years driving digital transformation across 14 countries. Independent Non-Executive Director (INED) candidate with expertise in robotics automation, ERP implementation, and innovation leadership.',
    url: 'https://www.chinardeshpande.com',
    image: 'https://www.chinardeshpande.com/images/chinar-deshpande.jpg',
    sameAs: [
      'https://www.linkedin.com/in/chinardeshpande/',
    ],
    alumniOf: [
      {
        '@type': 'EducationalOrganization',
        name: 'K.J. Somaiya Institute of Management Studies & Research',
        url: 'https://www.somaiya.edu/',
      },
      {
        '@type': 'EducationalOrganization',
        name: 'Walchand College of Engineering',
        url: 'https://www.walchandsangli.ac.in/',
      },
      {
        '@type': 'EducationalOrganization',
        name: 'Harvard Business School',
        url: 'https://www.hbs.edu/',
      },
      {
        '@type': 'EducationalOrganization',
        name: 'London Business School',
        url: 'https://www.london.edu/',
      },
      {
        '@type': 'EducationalOrganization',
        name: 'MIT Sloan School of Management',
        url: 'https://mitsloan.mit.edu/',
      },
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'THG - The Hut Group',
      url: 'https://www.thg.com/',
    },
    knowsAbout: [
      'Digital Transformation',
      'Robotics Automation',
      'Warehouse Management',
      'ERP Implementation',
      'Supply Chain Management',
      'Technology Leadership',
      'Innovation Management',
      'Board Governance',
      'Cybersecurity',
      'AI and Machine Learning',
    ],
    award: [
      'CIO 100 Award (2006)',
      'Supply Chain & Logistics Excellence Award (2018)',
      'CII National Award for Excellence in Energy Management (2019)',
      'ASSOCHAM Award for Sustainable Logistics Practices (2020)',
      'Education Excellence Award for Technology Innovation (2022)',
    ],
  };
}

// Organization Schema - Use on About/Experience pages
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Chinar Deshpande - Technology Leadership',
    url: 'https://www.chinardeshpande.com',
    logo: 'https://www.chinardeshpande.com/images/logo.png',
    description: 'Professional portfolio of Chinar Deshpande, global technology leader and Independent Non-Executive Director (INED) candidate.',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Professional Inquiries',
      url: 'https://www.chinardeshpande.com/contact',
    },
  };
}

// BreadcrumbList Schema - Use on all pages
export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// Article Schema - Use on Articles page and individual articles
export function articleSchema(article: {
  title: string;
  description: string;
  author: string;
  datePublished: string;
  url: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    datePublished: article.datePublished,
    url: article.url,
    image: article.image || 'https://www.chinardeshpande.com/images/default-article.jpg',
  };
}

// VideoObject Schema - Use on Robotics page
export function videoSchema(video: {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  contentUrl: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: video.name,
    description: video.description,
    thumbnailUrl: video.thumbnailUrl,
    uploadDate: video.uploadDate,
    contentUrl: video.contentUrl,
  };
}

// ProfilePage Schema - Use on About page
export function profilePageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: personSchema(),
    breadcrumb: breadcrumbSchema([
      { name: 'Home', url: 'https://www.chinardeshpande.com' },
      { name: 'About', url: 'https://www.chinardeshpande.com/about' },
    ]),
  };
}

// ItemList Schema - Use on Case Studies listing page
export function itemListSchema(items: { name: string; url: string; description: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: item.url,
      description: item.description,
    })),
  };
}
