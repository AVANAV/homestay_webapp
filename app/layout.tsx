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
  title: "Veera Homestay | Himalayan Retreat in Patal Bhuvaneshwar",
  description:
    "Experience peaceful Himalayan mornings, authentic mountain hospitality, valley views, and warm cedar stays at Veera Homestay in Patal Bhuvaneshwar, Uttarakhand.",

  keywords: [
    "Veera Homestay",
    "Patal Bhuvaneshwar homestay",
    "Uttarakhand mountain stay",
    "Himalayan retreat",
    "luxury homestay Uttarakhand",
    "mountain homestay India",
    "peaceful valley stay",
  ],

  openGraph: {
    title: "Veera Homestay",
    description:
      "A cinematic Himalayan retreat rooted in warm hospitality and peaceful mountain living.",
    url: "https://veerahomestay.in",
    siteName: "Veera Homestay",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Veera Homestay Himalayan View",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
icons: {
  icon: "/favicon.ico",
  apple: "/apple-touch-icon.png",
},
  twitter: {
    card: "summary_large_image",
    title: "Veera Homestay",
    description:
      "Peaceful Himalayan mornings and warm mountain hospitality in Uttarakhand.",
    images: ["/og-image.jpg"],
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
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
