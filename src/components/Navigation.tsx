"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close mobile menu when window is resized to desktop view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Add/remove overflow hidden to body when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      
      // Add overlay div to the body
      const overlay = document.createElement('div');
      overlay.id = 'menu-overlay';
      overlay.style.position = 'fixed';
      overlay.style.top = '0';
      overlay.style.left = '0';
      overlay.style.width = '100%';
      overlay.style.height = '100%';
      overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
      overlay.style.zIndex = '10';
      document.body.appendChild(overlay);
      
      // Add click event to close menu when overlay is clicked
      overlay.addEventListener('click', () => setIsMenuOpen(false));
    } else {
      document.body.style.overflow = '';
      
      // Remove overlay div from the body
      const overlay = document.getElementById('menu-overlay');
      if (overlay) {
        overlay.removeEventListener('click', () => setIsMenuOpen(false));
        document.body.removeChild(overlay);
      }
    }
    
    return () => {
      document.body.style.overflow = '';
      const overlay = document.getElementById('menu-overlay');
      if (overlay) {
        document.body.removeChild(overlay);
      }
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="md:hidden text-[var(--haus-black)] z-30"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <div className="w-6 h-5 flex flex-col justify-between">
          <span
            className={`w-full h-0.5 bg-[var(--haus-black)] block transition-all ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`w-full h-0.5 bg-[var(--haus-black)] block transition-all ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`w-full h-0.5 bg-[var(--haus-black)] block transition-all ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </div>
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex flex-row gap-8 text-lg">
        <Link
          href="/bazaar"
          className="text-[var(--haus-black)] relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[var(--haus-black)] hover:after:w-full after:transition-all"
        >
          Bazaar
        </Link>
        <Link
          href="/design"
          className="text-[var(--haus-black)] relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[var(--haus-black)] hover:after:w-full after:transition-all"
        >
          Design
        </Link>
        <Link
          href="/event"
          className="text-[var(--haus-black)] relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[var(--haus-black)] hover:after:w-full after:transition-all"
        >
          Events
        </Link>
        <Link
          href="/social"
          className="text-[var(--haus-black)] relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[var(--haus-black)] hover:after:w-full after:transition-all"
        >
          Social
        </Link>
        <Link
          href="/society"
          className="text-[var(--haus-black)] relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[var(--haus-black)] hover:after:w-full after:transition-all"
        >
          Society
        </Link>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden fixed top-[72px] left-0 right-0 bg-[var(--haus-white)] border-b border-[var(--foreground)] py-4 px-6 flex flex-col gap-6 text-lg z-20">
          <Link
            href="/bazaar"
            className="text-[var(--haus-black)] relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[var(--haus-black)] hover:after:w-full after:transition-all"
            onClick={() => setIsMenuOpen(false)}
          >
            Bazaar
          </Link>
          <Link
            href="/design"
            className="text-[var(--haus-black)] relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[var(--haus-black)] hover:after:w-full after:transition-all"
            onClick={() => setIsMenuOpen(false)}
          >
            Design
          </Link>
          <Link
            href="/event"
            className="text-[var(--haus-black)] relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[var(--haus-black)] hover:after:w-full after:transition-all"
            onClick={() => setIsMenuOpen(false)}
          >
            Events
          </Link>
          <Link
            href="/social"
            className="text-[var(--haus-black)] relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[var(--haus-black)] hover:after:w-full after:transition-all"
            onClick={() => setIsMenuOpen(false)}
          >
            Social
          </Link>
          <Link
            href="/society"
            className="text-[var(--haus-black)] relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[var(--haus-black)] hover:after:w-full after:transition-all"
            onClick={() => setIsMenuOpen(false)}
          >
            Society
          </Link>
        </nav>
      )}
    </>
  );
}