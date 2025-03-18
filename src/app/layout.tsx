import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Montserrat } from 'next/font/google';
import "./globals.css";
import Link from 'next/link';
import Navigation from '../componets/Navigation';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "The Haus",
  description: "THE HAUS is a dynamic and sophisticated brand that seamlessly blends fashion, design, and community through its diverse sub-brands",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${montserrat.className} antialiased`}>
        <div className="min-h-screen bg-[var(--haus-black)] text-white flex flex-col font-bold">
          <header className="py-4 px-6 md:py-8 md:px-10 border-b border-[var(--foreground)] backdrop-blur-sm bg-[var(--haus-white)] sticky top-0 z-10">
            <div className="max-w-7xl mx-auto flex flex-row justify-between items-center">
              <Link href="/" className="hover:opacity-80 transition-opacity">
                <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--haus-black)]">The Haus</h1>
              </Link>
              
              <Navigation />
            </div>
          </header>
          
          {children}
          
          <footer className="py-4 px-6 md:py-8 md:px-10 border-t border-[var(--foreground)] text-center text-[var(--foreground)]">
            <div className="max-w-7xl mx-auto">
              <p>© 2025 The Haus. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}