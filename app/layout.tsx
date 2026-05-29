import Script from "next/script";
import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Geist_Mono } from "next/font/google";

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

  title: "Veera Homestay | Himalayan Retreat in Patal Bhuvaneshwar",

  description:
    "Experience peaceful Himalayan mornings, authentic mountain hospitality, valley views, and warm cedar stays at Veera Homestay in Patal Bhuvaneshwar, Uttarakhand.",

  keywords: [
    "Veera Homestay",
    "Patal Bhuvaneshwar homestay",
    "Uttarakhand mountain stay",
    "Himalayan retreat",
    "mountain homestay India",
    "peaceful valley stay",
    "homestay in Pithoragarh",
    "best homestay in Uttarakhand",
  ],

  alternates: {
    canonical: "https://www.veerahomestay.in",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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

        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}