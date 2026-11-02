"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsScrolled(currentScroll > 20);

      // Section spy
      const sections = ["contact", "works", "experience", "skills", "about"];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills & Stack" },
    { id: "experience", label: "Experience" },
    { id: "works", label: "Selected Works" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header 
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled 
          ? "bg-surface/85 backdrop-blur-md border-b border-border/80 shadow-xs py-3.5" 
          : "bg-background/80 backdrop-blur-xs border-b border-border/40 py-5"
      }`}
    >
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link 
          href="#about"
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="w-9 h-9 rounded-sm bg-surface border border-border flex items-center justify-center font-serif font-bold text-accent group-hover:border-accent group-hover:bg-accent group-hover:text-background transition-all">
            CX
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-semibold text-foreground text-lg leading-tight tracking-tight group-hover:text-accent transition-colors">
              Claudia Xaveryne
            </span>
            <span className="text-[10px] sm:text-[11px] font-sans tracking-widest uppercase text-accent font-medium">
              Based in Yogyakarta
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setActiveSection(link.id)}
                className={`px-3.5 py-1.5 text-xs uppercase tracking-widest font-semibold rounded-sm transition-all ${
                  isActive
                    ? "text-accent bg-background border border-border shadow-xs"
                    : "text-foreground/70 hover:text-foreground hover:bg-surface/60"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Action / Status */}
        <div className="hidden lg:flex items-center">
          <div className="flex items-center gap-2 px-3 py-1 bg-surface border border-border rounded-full text-xs font-medium text-foreground/80">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span>Available for Hire</span>
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-foreground hover:text-accent focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface border-b border-border px-6 py-6 flex flex-col gap-4 animate-in slide-in-from-top-2 duration-200">
          <div className="flex items-center gap-2 pb-2 border-b border-border text-xs font-medium text-foreground/80">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span>Available for Hire</span>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => {
                setActiveSection(link.id);
                setMobileMenuOpen(false);
              }}
              className={`text-sm uppercase tracking-wider font-semibold py-2 px-3 rounded-sm transition-colors ${
                activeSection === link.id
                  ? "text-accent bg-background border border-border"
                  : "text-foreground/80 hover:text-accent"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
