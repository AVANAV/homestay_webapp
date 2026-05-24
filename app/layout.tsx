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
  title: "Veera Homestay",
  description:
    "A luxury mountain homestay in Patal Bhuvaneshwar rooted in warm hospitality",
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
