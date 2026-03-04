"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isNews = pathname?.startsWith("/news");

  const navLinks = [
    { label: "About", href: isNews ? "/#about" : "#about" },
    { label: "Services", href: isNews ? "/#services" : "#services" },
    { label: "Ecosystem", href: isNews ? "/#ecosystem" : "#ecosystem" },
    { label: "Projects", href: isNews ? "/#projects" : "#projects" },
    { label: "News", href: "/news" },
    { label: "Contact", href: isNews ? "/#contact" : "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-md border-b border-gray-800/80 shadow-xl shadow-black/20"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3 group">
            <Image
              src="/kyvra_logo.png"
              alt="Kyvra Tech"
              width={36}
              height={36}
              className="w-9 h-9 transition-transform duration-200 group-hover:scale-105"
            />
            <span className="text-lg font-bold tracking-tight text-white">
              Kyvra Tech
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  link.label === "News" && isNews
                    ? "text-[#00b2a9]"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link
              href={isNews ? "/#contact" : "#contact"}
              className="hidden md:inline-flex items-center px-5 py-2 rounded-full bg-[#00b2a9] hover:bg-[#00d4c7] text-black text-sm font-semibold transition-all duration-200 hover:scale-105 shadow-lg shadow-[#00b2a9]/20"
            >
              Get Started
            </Link>

            {/* Mobile toggle */}
            <button
              className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden mt-4 pt-4 pb-2 border-t border-gray-800 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  link.label === "News" && isNews
                    ? "text-[#00b2a9]"
                    : "text-gray-400 hover:text-white hover:bg-gray-800"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href={isNews ? "/#contact" : "#contact"}
                onClick={() => setMobileOpen(false)}
                className="block px-5 py-2.5 rounded-full bg-[#00b2a9] text-black text-sm font-semibold text-center"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
