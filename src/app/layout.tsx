// app/layout.tsx
import { Instrument_Sans } from 'next/font/google';
import { ReactNode } from "react";
import { Metadata } from 'next';
import QueryProvider from "@components/providers/query-provider"
import "./globals.css";

export const metadata: Metadata = {
  title: "Stephen Karlle — Full-Stack Developer",
  description: "Full-Stack Developer and UI/UX Designer based in San Fernando, Pampanga. Specializing in Next.js, React, and TypeScript.",
  keywords: ["Stephen Karlle", "Full-Stack Developer", "React", "Next.js", "TypeScript", "Philippines"],
  authors: [{ name: "Stephen Karlle" }],
  openGraph: {
    title: "Stephen Karlle — Full-Stack Developer",
    description: "Full-Stack Developer and UI/UX Designer based in San Fernando, Pampanga.",
    url: "https://karlle.vercel.app",
    siteName: "Stephen Karlle",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://karlle.vercel.app/og.png", 
        width: 1200,
        height: 630,
        alt: "Stephen Karlle — Full-Stack Developer",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stephen Karlle — Full-Stack Developer",
    description: "Full-Stack Developer and UI/UX Designer based in San Fernando, Pampanga.",
    images: ["https://karlle.vercel.app/og.png"],
  },
}

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={instrumentSans.variable + " overflow-hidden"}>
      <body className="antialiased">
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}