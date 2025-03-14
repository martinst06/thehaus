import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Montserrat } from 'next/font/google';
import "./globals.css";
import Link from 'next/link';

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
          <header className="py-8 px-10 border-b border-[var(--foreground)] backdrop-blur-sm bg-[var(--haus-white)] sticky top-0 z-10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
              <Link href="/" className="hover:opacity-80 transition-opacity">
                <h1 className="text-3xl font-bold mb-6 md:mb-0 tracking-tight text-[var(--haus-black)]">The Haus</h1>
              </Link>
              
              <nav className="flex flex-wrap gap-8 text-lg">
                <a href="/bazaar" className="text-[var(--haus-black)] relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[var(--haus-black)] hover:after:w-full after:transition-all">Bazaar</a>
                <a href="/design" className="text-[var(--haus-black)] relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[var(--haus-black)] hover:after:w-full after:transition-all">Design</a>
                <a href="/event" className="text-[var(--haus-black)] relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[var(--haus-black)] hover:after:w-full after:transition-all">Event</a>
                <a href="/social" className="text-[var(--haus-black)] relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[var(--haus-black)] hover:after:w-full after:transition-all">Social</a>
                <a href="/society" className="text-[var(--haus-black)] relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[var(--haus-black)] hover:after:w-full after:transition-all">Society</a>
              </nav>
            </div>
          </header>
          
          {children}
          
          <footer className="py-8 px-10 border-t border-[var(--foreground)] text-center text-[var(--foreground)]">
            <div className="max-w-7xl mx-auto">
              <p>© 2025 The Haus. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
