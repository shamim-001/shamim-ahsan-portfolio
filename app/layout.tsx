import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import {
  generateLocalBusinessSchema,
  generateWebsiteSchema,
} from "@/lib/structured-data";
import { Toaster } from "@/components/ui/toaster";

// Add the Google Analytics import
import GoogleAnalytics from "@/components/analytics/google-analytics";

// Optimize font loading
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

// Base URL from environment variable
const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://theshamimahsan.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Shamim Ahsan | Local SEO Expert",
  description:
    "Professional Local SEO services to improve your business visibility and rankings. Boost your Google Business Profile and optimize your website for local search.",
  keywords: [
    "Local SEO",
    "SEO Expert",
    "Google Business Profile",
    "GBP Optimization",
    "Bangladesh SEO",
  ],
  authors: [{ name: "Shamim Ahsan" }],
  creator: "Shamim Ahsan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Shamim Ahsan - Local SEO Expert",
    title: "Shamim Ahsan | Local SEO Expert",
    description:
      "Professional Local SEO services to improve your business visibility and rankings",
    images: [
      {
        url: "/images/shamim-ahsan-seo-expert.webp",
        width: 1200,
        height: 630,
        alt: "Shamim Ahsan - Local SEO Expert",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shamim Ahsan | Local SEO Expert",
    description:
      "Professional Local SEO services to improve your business visibility and rankings",
    images: ["/images/shamim-ahsan-seo-expert.webp"],
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
  alternates: {
    canonical: baseUrl,
  },
};

// Simple header fallback component
function HeaderFallback() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <div className="flex-shrink-0">
            <div className="text-2xl font-bold text-primary">Shamim Ahsan</div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = generateLocalBusinessSchema();
  const websiteSchema = generateWebsiteSchema();

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="theme-color" content="#1e40af" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        {/* Google site verification */}
        <meta
          name="google-site-verification"
          content="5f-aKuPAczVRroblrd3Llr19y0YX6al04M6BA10VGi0"
        />
        <script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="ri+H8X0o74gkFOAycDyLsQ"
          async
        ></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics
            measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}
          />
        )}
      </head>
      <body className={inter.className}>
        <Suspense fallback={<HeaderFallback />}>
          <Header />
        </Suspense>
        <main>
          <Suspense
            fallback={
              <div className="min-h-screen flex items-center justify-center">
                <div className="h-12 w-12 border-4 border-t-primary border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
              </div>
            }
          >
            {children}
          </Suspense>
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}

import "./globals.css";
