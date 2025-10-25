export default function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Chinar Deshpande",
    givenName: "Chinar",
    familyName: "Deshpande",
    jobTitle: [
      "Independent Non-Executive Director (INED)",
      "Chief Technology Officer",
      "Digital Transformation Leader",
      "Board Advisor",
      "Technology Consultant",
      "Startup Mentor",
      "GCC Setup Expert"
    ],
    description: "Independent Non-Executive Director and Technology Leader with 30+ years driving digital transformation, board governance, and innovation across 14 countries. Expert in robotics, AI, ERP implementation, GCC setup, and startup mentorship. Available for board positions, advisory roles, and government projects.",
    url: "https://www.chinardeshpande.tech",
    image: "https://www.chinardeshpande.tech/og-image.jpg",
    email: "chinardeshpande@gmail.com",
    telephone: "+91-98201-99922",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
    },
    sameAs: [
      "https://www.linkedin.com/in/chinar-deshpande",
    ],
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "Harvard Business School",
      },
      {
        "@type": "EducationalOrganization",
        name: "MIT Sloan School of Management",
      },
      {
        "@type": "EducationalOrganization",
        name: "London Business School",
      },
      {
        "@type": "EducationalOrganization",
        name: "University of Louisville",
      },
      {
        "@type": "EducationalOrganization",
        name: "Veermata Jijabai Technological Institute",
      },
    ],
    worksFor: {
      "@type": "Organization",
      name: "THG (The Hut Group)",
      url: "https://www.thg.com",
    },
    knowsAbout: [
      "Independent Non-Executive Director",
      "Board Governance",
      "Digital Transformation",
      "Technology Leadership",
      "Chief Technology Officer",
      "ERP Implementation",
      "SAP Implementation",
      "Oracle ERP",
      "Robotics Automation",
      "Artificial Intelligence",
      "Machine Learning",
      "Global Capability Centers",
      "GCC Setup India",
      "Board Advisory Services",
      "Corporate Governance",
      "Technology Strategy",
      "Innovation Management",
      "Startup Mentorship",
      "Technology Consulting",
      "E-commerce Technology",
      "Supply Chain Technology",
      "Warehouse Automation",
      "Autostore Implementation",
      "Geek+ Robotics",
      "Change Management",
      "Technology Due Diligence",
      "IT Governance",
      "Cybersecurity Strategy",
      "Cloud Transformation",
      "Agile Transformation",
      "DevOps Leadership",
      "Government Technology Projects",
      "Public Sector Advisory"
    ],
    hasOccupation: [
      {
        "@type": "Occupation",
        name: "Independent Non-Executive Director",
        description: "Board-level technology and digital transformation advisory",
        skills: "Board Governance, Technology Strategy, Risk Management, Digital Transformation",
        occupationLocation: {
          "@type": "Country",
          name: "India",
        },
      },
      {
        "@type": "Occupation",
        name: "Chief Technology Officer",
        description: "Leading technology operations for global e-commerce",
        occupationLocation: {
          "@type": "Country",
          name: "United Kingdom",
        },
      },
      {
        "@type": "Occupation",
        name: "Technology Consultant",
        description: "Strategic technology consulting for enterprises and startups",
        skills: "Digital Strategy, ERP, Robotics, AI, Cloud, GCC Setup",
      },
      {
        "@type": "Occupation",
        name: "Startup Mentor",
        description: "Mentoring technology startups on scaling and innovation",
      }
    ],
    award: [
      "CIO 100 Award",
      "Supply Chain Excellence Award",
      "Technology Innovation Leadership",
      "Digital Transformation Leader"
    ],
    seeks: [
      "Independent Non-Executive Director positions",
      "Board Advisory roles",
      "Technology consulting engagements",
      "Startup mentorship opportunities",
      "Government project advisory",
      "GCC setup consulting"
    ],
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Chinar Deshpande - Independent Non-Executive Director (INED) | Board Advisory | Technology Consulting",
    description: "Independent Non-Executive Director (INED) and technology leader providing board governance, digital transformation consulting, startup mentorship, and GCC setup expertise. Specialized in AI, robotics, ERP implementation, and government technology projects across India, UK, and globally.",
    url: "https://www.chinardeshpande.tech",
    image: "https://www.chinardeshpande.tech/og-image.jpg",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
    },
    priceRange: "Premium",
    areaServed: [
      {
        "@type": "Place",
        name: "India",
      },
      {
        "@type": "Place",
        name: "United Kingdom",
      },
      {
        "@type": "Place",
        name: "United States",
      },
      {
        "@type": "Place",
        name: "Global",
      },
    ],
    serviceType: [
      "Independent Non-Executive Director (INED)",
      "Board Advisory Services",
      "Corporate Governance Consulting",
      "Technology Strategy Consulting",
      "Digital Transformation Consulting",
      "CTO Advisory",
      "ERP Implementation Consulting",
      "SAP Implementation",
      "Oracle ERP Consulting",
      "Robotics & AI Consulting",
      "Warehouse Automation Consulting",
      "Innovation Leadership Training",
      "Startup Mentorship",
      "Technology Due Diligence",
      "GCC Setup Consulting",
      "Global Capability Center Advisory",
      "Government Technology Advisory",
      "Public Sector Digital Transformation",
      "Change Management Consulting",
      "IT Governance Advisory",
      "Cybersecurity Strategy",
      "Cloud Transformation Consulting",
      "E-commerce Technology Consulting",
      "Supply Chain Digitalization"
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Professional Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Independent Non-Executive Director (INED) Services",
            description: "Board-level governance and technology strategic advisory for Indian and global companies"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Digital Transformation Consulting",
            description: "End-to-end digital transformation strategy and implementation for enterprises"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "GCC Setup & Management",
            description: "Complete Global Capability Center setup and operational excellence consulting in India"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Startup Technology Mentorship",
            description: "Strategic mentorship for technology startups on scaling, fundraising, and innovation"
          }
        }
      ]
    },
    telephone: "+91-98201-99922",
    email: "chinardeshpande@gmail.com",
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Chinar Deshpande",
    url: "https://www.chinardeshpande.tech",
    logo: "https://www.chinardeshpande.tech/og-image.jpg",
    image: "https://www.chinardeshpande.tech/og-image.jpg",
    description: "Technology leadership and board advisory services with 30+ years of global experience",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-98201-99922",
      email: "chinardeshpande@gmail.com",
      contactType: "Professional Services",
      areaServed: "Global",
      availableLanguage: ["English", "Hindi"],
    },
    founder: {
      "@type": "Person",
      name: "Chinar Deshpande",
    },
    sameAs: [
      "https://www.linkedin.com/in/chinar-deshpande",
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.chinardeshpande.tech",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: "https://www.chinardeshpande.tech/about",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Experience",
        item: "https://www.chinardeshpande.tech/experience",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Case Studies",
        item: "https://www.chinardeshpande.tech/case-studies",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Contact",
        item: "https://www.chinardeshpande.tech/contact",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
