export default function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Chinar Deshpande",
    givenName: "Chinar",
    familyName: "Deshpande",
    jobTitle: "Independent Non-Executive Director",
    description: "Visionary technology leader with 30+ years driving digital transformation across 14 countries",
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
      "Digital Transformation",
      "Technology Leadership",
      "ERP Implementation",
      "Robotics",
      "Artificial Intelligence",
      "Global Capability Centers",
      "Board Advisory",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Chief Technology Officer",
      occupationLocation: {
        "@type": "Country",
        name: "United Kingdom",
      },
    },
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Chinar Deshpande - Technology Leadership & Board Advisory",
    description: "Independent Non-Executive Director providing strategic technology leadership and board advisory services",
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
      "Board Advisory",
      "Technology Strategy",
      "Digital Transformation",
      "ERP Implementation",
      "Innovation Leadership",
    ],
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
