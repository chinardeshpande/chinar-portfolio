import type { Metadata } from "next";
import { Inter, Playfair_Display, Cormorant_Garamond } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import StructuredData from "./components/StructuredData";
import { WebVitals } from "./components/WebVitals";
import GoogleAnalytics from "./components/GoogleAnalytics";
import ScrollToTop from "@/components/ui/ScrollToTop";
import ProgressBar from "@/components/ui/ProgressBar";
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
  title: "Chinar Deshpande | Independent Non-Executive Director UK | INED | Board Advisor | Technology Consultant",
  description: "Independent Non-Executive Director (INED) with 30+ years in technology leadership. Expert in board governance, digital transformation, AI, robotics, ERP, GCC setup, and startup mentorship. Available for board positions, consulting, and government advisory roles across UK, India and globally.",
  keywords: [
    // Primary Roles - UK Focused
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

    // Industries
    "E-commerce Board Advisor",
    "Supply Chain Technology",
    "Retail Technology",
    "Logistics Technology",
    "Manufacturing Digital Transformation",
    "SaaS Board Advisor",
    "Technology Services Board",

    // Geographic - UK
    "INED Manchester",
    "Board Advisor London",
    "Technology Consultant UK",
    "Digital Transformation London",
    "Board Director Manchester",

    // Geographic - India
    "INED Mumbai",
    "Board Advisor India",
    "Technology Consultant India",
    "Digital Transformation India",
    "Independent Director Mumbai",

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
        {/* Preconnect to Google Fonts for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <StructuredData />
      </head>
      <body className="antialiased">
        <ProgressBar />
        <WebVitals />
        <GoogleAnalytics />
        {children}
        <ScrollToTop />
        <Analytics />
      </body>
    </html>
  );
}
