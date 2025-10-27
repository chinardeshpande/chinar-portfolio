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
  title: "Chinar Deshpande | Independent Non-Executive Director (INED) | Board Advisor | Technology Consultant",
  description: "Independent Non-Executive Director (INED) with 30+ years in technology leadership. Expert in board governance, digital transformation, AI, robotics, ERP, GCC setup, and startup mentorship. Available for board positions, consulting, and government advisory roles across India and globally.",
  keywords: [
    // Primary Roles
    "Independent Non-Executive Director",
    "INED India",
    "Board Member",
    "Board Advisor",
    "Technology Board Director",
    "Non-Executive Director Technology",

    // Leadership Roles
    "Chief Technology Officer",
    "CTO Consultant",
    "Technology Leadership",
    "Digital Transformation Leader",
    "Technology Consultant",
    "CIO Advisor",

    // Specializations
    "Digital Transformation",
    "Digital Transformation Consulting",
    "ERP Implementation",
    "SAP Implementation",
    "Oracle ERP",
    "Robotics Automation",
    "AI Strategy",
    "Artificial Intelligence Consulting",
    "Warehouse Automation",
    "Autostore",
    "Geek+ Robotics",

    // Services
    "Board Advisory Services",
    "Corporate Governance",
    "Technology Strategy",
    "GCC Setup India",
    "Global Capability Center",
    "Startup Mentor",
    "Startup Technology Advisor",
    "Technology Due Diligence",
    "Government Technology Advisory",

    // Industries
    "E-commerce Technology",
    "Supply Chain Technology",
    "Retail Technology",
    "Manufacturing Digital Transformation",

    // Geographic
    "INED Mumbai",
    "Board Advisor India",
    "Technology Consultant India",
    "Digital Transformation India",

    // Education
    "Harvard Business School",
    "MIT Sloan",
    "London Business School",
  ],
  authors: [{ name: "Chinar Deshpande" }],
  creator: "Chinar Deshpande",
  metadataBase: new URL("https://www.chinardeshpande.tech"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.chinardeshpande.tech",
    title: "Chinar Deshpande | INED | Board Advisor | Technology Consultant | Startup Mentor",
    description: "Independent Non-Executive Director (INED) available for board positions. Expert in digital transformation, AI, robotics, ERP, GCC setup. CTO at THG. 30+ years across 14 countries. Harvard, MIT, London Business School alumnus.",
    siteName: "Chinar Deshpande - Technology Leadership & Board Advisory",
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
    title: "Chinar Deshpande | INED | Board Advisor | Tech Consultant",
    description: "Independent Non-Executive Director. Digital Transformation, AI, Robotics, ERP, GCC Setup Expert. CTO @ THG. Harvard, MIT, LBS alumnus. Available for board & advisory roles.",
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
