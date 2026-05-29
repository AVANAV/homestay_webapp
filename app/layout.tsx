import Script from "next/script";
import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  DM_Sans,
  Geist_Mono,
} from "next/font/google";

import { Navbar } from "@/components/Navbar";
import { Providers } from "@/components/providers";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.veerahomestay.in"),

  title: {
    default: "Veera Homestay",
    template: "%s | Veera Homestay",
  },

  description:
    "Experience peaceful Himalayan mornings, authentic mountain hospitality, valley views, and warm cedar stays at Veera Homestay in Patal Bhuvaneshwar, Uttarakhand.",

  keywords: [
    "Veera Homestay",
    "Patal Bhuvaneshwar homestay",
    "Homestay in Pithoragarh",
    "Homestay Uttarakhand",
    "Mountain View Homestay",
    "Luxury Homestay Uttarakhand",
    "Best Homestay Near Patal Bhuvaneshwar",
    "Himalayan Retreat",
    "Valley View Stay",
    "Uttarakhand Tourism",
  ],

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "Veera Homestay",
    description:
      "A cinematic Himalayan retreat rooted in warm hospitality and peaceful mountain living.",

    url: "https://www.veerahomestay.in",
    siteName: "Veera Homestay",
    locale: "en_IN",
    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Veera Homestay Himalayan View",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Veera Homestay",
    description:
      "Peaceful Himalayan mornings and warm mountain hospitality in Uttarakhand.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  category: "travel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "Veera Homestay",
    url: "https://www.veerahomestay.in",
    image: "https://www.veerahomestay.in/og-image.jpg",
    description:
      "Peaceful Himalayan homestay in Patal Bhuvaneshwar, Uttarakhand.",

    address: {
      "@type": "PostalAddress",
      addressLocality: "Patal Bhuvaneshwar",
      addressRegion: "Uttarakhand",
      postalCode: "262522",
      addressCountry: "IN",
    },

    areaServed: "Uttarakhand",
  };

  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${cormorant.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-clip">
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1C4N14Z6ZB"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1C4N14Z6ZB');
          `}
        </Script>

        {/* Structured Data */}
        <Script
          id="schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />

        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}