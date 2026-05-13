import type { Metadata } from "next";
import { Inter, Playfair_Display, Cormorant_Garamond } from "next/font/google";
import StructuredData from "./components/StructuredData";
import { WebVitals } from "./components/WebVitals";
import GoogleAnalytics from "./components/GoogleAnalytics";
import ScrollToTop from "@/components/ui/ScrollToTop";
import ProgressBar from "@/components/ui/ProgressBar";
import { Providers } from "./providers";
import "./globals.css";

// Ultra-luxury editorial fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Chinar Deshpande | INED | Strategy Consultant | Interim CTO | Board Advisor | Investment Advisory",
  description: "Independent Non-Executive Director (INED) and senior strategy consultant with 30+ years technology leadership. Available for board positions, strategy consulting, interim CTO roles, investment advisory, and C-suite advisory across UK, India, UAE, United States, and globally. Expert in digital transformation, AI governance, M&A integration, and organizational effectiveness.",
  keywords: [
    // Primary Roles - Global Coverage (UK, India, UAE, US)
    "Independent Non-Executive Director",
    "INED UK",
    "INED London",
    "Non-Executive Director UK",
    "Board Member UK",
    "Board Director UK",
    "Technology Board Director UK",
    "Independent Director Technology",
    "Non-Executive Director Technology",
    "FTSE Board Director",

    // India Board Roles
    "INED India",
    "Independent Director India",
    "Board Member India",
    "SEBI Independent Director",
    "Companies Act Independent Director",

    // Board Advisory
    "Board Advisor",
    "Board Advisory Services",
    "Corporate Governance UK",
    "Corporate Governance India",
    "Technology Committee Chair",
    "Audit Committee Member",
    "Risk Committee Member",

    // Leadership Roles
    "Chief Technology Officer",
    "CTO Consultant",
    "CTO Advisory",
    "Technology Leadership",
    "Digital Transformation Leader",
    "Technology Consultant",
    "CIO Advisor",
    "Fractional CTO",

    // Specializations
    "Digital Transformation",
    "Digital Transformation Consulting UK",
    "ERP Implementation",
    "SAP Implementation",
    "Oracle ERP",
    "Robotics Automation",
    "AI Strategy",
    "AI Governance",
    "Artificial Intelligence Consulting",
    "Warehouse Automation",
    "Autostore",
    "Geek+ Robotics",
    "E-commerce Technology",

    // Services
    "Technology Strategy",
    "Technology Due Diligence",
    "Strategic Advisor",
    "Executive Mentor",
    "Startup Mentor",
    "Startup Technology Advisor",
    "Scale-up Advisor",
    "GCC Setup India",
    "Global Capability Center",
    "Government Technology Advisory",

    // Strategy Consulting
    "Management Consulting",
    "Strategy Consulting",
    "Strategy Consulting UK",
    "Corporate Strategy Advisor",
    "Business Strategy Consultant",
    "Business Transformation Consultant",
    "Corporate Transformation",
    "Enterprise Transformation",
    "Operating Model Design",
    "Target Operating Model",
    "Performance Improvement Consulting",
    "Post-Merger Integration",
    "M&A Integration Consultant",
    "M&A Integration Advisory",
    "Strategic Planning Consultant",
    "Growth Strategy Consultant",
    "Organizational Effectiveness",

    // Executive Advisory & Interim
    "C-Suite Advisory",
    "C-Suite Consultant",
    "Executive Advisory Services",
    "Interim CTO",
    "Interim Chief Technology Officer",
    "Interim CIO",
    "Interim Executive",
    "Executive Coaching",
    "Leadership Coaching",
    "Executive Development",
    "Leadership Development",
    "Organizational Transformation",
    "Change Leadership",
    "Cultural Transformation",

    // Investment & Venture
    "Venture Partner",
    "Venture Partner Technology",
    "Investment Advisory",
    "Technology Investment Advisor",
    "Portfolio Company Advisor",
    "Startup Board Advisor",
    "Tech Due Diligence Expert",
    "Investment Committee Member",
    "Venture Capital Advisor",
    "Private Equity Technology Advisor",

    // Thought Leadership & Speaking
    "Keynote Speaker",
    "Conference Speaker",
    "Technology Speaker",
    "Digital Transformation Speaker",
    "AI Speaker",
    "Technology Thought Leader",
    "Industry Thought Leader",
    "Executive Education",
    "Leadership Speaker",

    // Industries
    "E-commerce Board Advisor",
    "Supply Chain Technology",
    "Retail Technology",
    "Logistics Technology",
    "Manufacturing Digital Transformation",
    "SaaS Board Advisor",
    "Technology Services Board",

    // Geographic - UK
    "INED UK",
    "INED London",
    "INED Manchester",
    "Board Advisor London",
    "Board Advisor UK",
    "Technology Consultant UK",
    "Digital Transformation London",
    "Board Director Manchester",
    "Strategy Consultant London",
    "Interim CTO London",
    "Interim CTO UK",

    // Geographic - India (Major Cities)
    "INED India",
    "INED Mumbai",
    "INED Delhi",
    "INED Bangalore",
    "INED Pune",
    "INED Hyderabad",
    "INED Chennai",
    "Independent Director India",
    "Independent Director Mumbai",
    "Independent Director Delhi",
    "Independent Director Bangalore",
    "Board Advisor India",
    "Board Advisor Mumbai",
    "Board Advisor Bangalore",
    "Technology Consultant India",
    "Strategy Consultant India",
    "Strategy Consultant Mumbai",
    "Digital Transformation India",
    "Digital Transformation Mumbai",
    "Digital Transformation Bangalore",
    "Interim CTO India",
    "Interim CTO Mumbai",
    "Interim CTO Bangalore",
    "Management Consultant India",
    "M&A Consultant India",

    // Geographic - UAE (Dubai, Abu Dhabi)
    "INED UAE",
    "INED Dubai",
    "INED Abu Dhabi",
    "Independent Director UAE",
    "Independent Director Dubai",
    "Independent Director Abu Dhabi",
    "Board Advisor UAE",
    "Board Advisor Dubai",
    "Board Advisor Abu Dhabi",
    "DIFC Board Director",
    "ADGM Board Director",
    "Technology Consultant UAE",
    "Technology Consultant Dubai",
    "Strategy Consultant Dubai",
    "Strategy Consultant UAE",
    "Digital Transformation Dubai",
    "Digital Transformation UAE",
    "Interim CTO Dubai",
    "Interim CTO UAE",
    "Management Consultant Dubai",
    "GCC Technology Advisor",

    // Geographic - United States
    "Independent Director US",
    "Independent Director USA",
    "Independent Director New York",
    "Independent Director Silicon Valley",
    "Independent Director San Francisco",
    "Board Advisor US",
    "Board Advisor New York",
    "Board Advisor Silicon Valley",
    "Board Advisor San Francisco",
    "Board Advisor Boston",
    "Technology Consultant US",
    "Technology Consultant New York",
    "Strategy Consultant US",
    "Strategy Consultant New York",
    "Strategy Consultant San Francisco",
    "Digital Transformation US",
    "Digital Transformation New York",
    "Interim CTO US",
    "Interim CTO New York",
    "Interim CTO Silicon Valley",
    "Venture Partner Silicon Valley",
    "Venture Partner US",
    "Technology Advisor Silicon Valley",
    "NYSE Board Director",
    "NASDAQ Board Director",
    "Management Consultant US",
    "M&A Consultant New York",

    // Education
    "Harvard Business School",
    "MIT Sloan",
    "London Business School",

    // Credentials
    "THG CTO",
    "FTSE 250 Technology Leader",
    "CIO 100 Award Winner",
  ],
  authors: [{ name: "Chinar Deshpande" }],
  creator: "Chinar Deshpande",
  metadataBase: new URL("https://www.chinardeshpande.tech"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    alternateLocale: ["en_US", "en_IN"],
    url: "https://www.chinardeshpande.tech",
    title: "Chinar Deshpande | INED UK | Independent Non-Executive Director | Board Advisor | Technology Consultant",
    description: "Independent Non-Executive Director (INED) available for UK & global board positions. Expert in board governance, digital transformation, AI, robotics, ERP. CTO at THG (FTSE 250). 30+ years across 14 countries. Harvard, MIT, London Business School alumnus.",
    siteName: "Chinar Deshpande - Independent Non-Executive Director & Technology Leadership",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Chinar Deshpande - Technology Leadership",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chinar Deshpande | INED UK | Board Advisor | Tech Consultant",
    description: "Independent Non-Executive Director (UK & Global). Board Governance, Digital Transformation, AI, Robotics Expert. CTO @ THG (FTSE 250). Harvard, MIT, LBS alumnus. Available for board & advisory roles.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${cormorant.variable}`}>
      <head>
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="8u2qoePADCCCHo1qQ6gjjOA5mbZg9tJyevBG5PpCZ6Q" />
        {/* Preconnect to Google Fonts for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <StructuredData />
      </head>
      <body className="antialiased">
        <Providers>
          <ProgressBar />
          <WebVitals />
          <GoogleAnalytics />
          {children}
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
