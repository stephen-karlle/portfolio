import { Instrument_Sans } from 'next/font/google';
import { ReactNode } from "react";
import { Metadata } from 'next';
import "./globals.css";

export const metadata: Metadata = {
  title: "Stephen Karlle",
  description: "Portfolio of Stephen Karlle, a full-stack developer.", 
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
    <html lang="en" className={instrumentSans.variable + " overflow-hidden "}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
