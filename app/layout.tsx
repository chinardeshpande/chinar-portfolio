import type { Metadata } from "next";
import { Inter, Playfair_Display, Cormorant_Garamond } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import StructuredData from "./components/StructuredData";
import { WebVitals } from "./components/WebVitals";
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
  title: "Chinar Deshpande | Independent Non-Executive Director (INED)",
  description: "Visionary technology leader with 30+ years driving digital transformation across 14 countries. CTO at THG, board advisor, and India's most valuable INED.",
  keywords: [
    "Independent Non-Executive Director",
    "INED",
    "Board Member",
    "Technology Leadership",
    "Digital Transformation",
    "CTO",
    "THG",
    "ERP Implementation",
    "Innovation",
    "Global Business",
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
    title: "Chinar Deshpande | Independent Non-Executive Director",
    description: "30+ years driving technology excellence across 14 countries. CTO at THG, board advisor, innovation leader.",
    siteName: "Chinar Deshpande",
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
    title: "Chinar Deshpande | INED & Technology Leader",
    description: "30+ years driving technology excellence across 14 countries",
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
        {children}
        <ScrollToTop />
        <Analytics />
      </body>
    </html>
  );
}
