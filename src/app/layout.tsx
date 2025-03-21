import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Montserrat } from 'next/font/google';
import "./globals.css";
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from "@/components/Footer";

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
  title: "THE HAUS",
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
        <header className="py-4 px-6 md:py-8 md:px-10 border-b border-[var(--foreground)] bg-[var(--haus-white)] sticky top-0 z-10">
          <div className="max-w-7xl mx-auto flex flex-row justify-between items-center">
            <div className="flex-grow text-center md:text-left">
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--haus-black)]">
                <Link href="/" className="hover:opacity-80 transition-opacity">
                  THE HAUS
                </Link>
              </h1>
            </div>
            
            <Navigation />
          </div>
        </header>
          
          {children}
          
          <footer>
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}