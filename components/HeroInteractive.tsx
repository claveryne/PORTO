"use client";

import { useState } from "react";
import { useToast } from "./ToastContext";

export default function HeroInteractive() {
  const { showToast } = useToast();
  const [copied, setCopied] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("claveryne@gmail.com");
    setCopied(true);
    showToast("Email address copied to clipboard (claveryne@gmail.com)");
    setTimeout(() => setCopied(false), 2500);
  };



  return (
    <section 
      id="about"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="relative flex flex-col gap-10 pt-4 md:pt-8"
    >
      {/* Subtle Ambient Mouse Spotlight */}
      {isHovering && (
        <div 
          className="pointer-events-none absolute -inset-10 transition-opacity duration-300 opacity-100 hidden md:block"
          style={{
            background: `radial-gradient(550px circle at ${mousePos.x}px ${mousePos.y}px, rgba(176, 141, 87, 0.08), transparent 70%)`,
          }}
        />
      )}

      {/* Top Meta Badges */}
      <div className="flex flex-wrap items-center gap-3">
        <span className="inline-flex items-center gap-2 px-3 py-1 bg-surface border border-border text-xs uppercase tracking-widest text-accent font-semibold rounded-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          Fresh Graduate Informatics
        </span>
        <span className="text-xs uppercase tracking-widest text-foreground/60 hidden sm:inline">
          • Atma Jaya Yogyakarta University
        </span>
      </div>

      {/* Main Title & Hero Pitch */}
      <div className="flex flex-col gap-5 max-w-4xl">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-foreground leading-[1.08] tracking-tight">
          Claudia Xaveryne
        </h1>
        <p className="max-w-3xl text-xl md:text-2xl leading-relaxed text-foreground/80 font-light mt-2">
          Developing end-to-end solutions with a user-first mindset. Love creating systems with interfaces that are easy to learn for everyday users.
        </p>
      </div>

      {/* Interactive Actions CTA Bar */}
      <div className="flex flex-wrap items-center gap-4 pt-2">
        <a
          href="#works"
          className="px-8 py-4 bg-foreground text-background font-semibold uppercase tracking-widest text-xs rounded-sm hover:bg-accent transition-all duration-300 shadow-sm hover:shadow-md flex items-center gap-3 group"
        >
          <span>Explore Selected Works</span>
          <span className="text-sm group-hover:translate-y-0.5 transition-transform">↓</span>
        </a>

        <button
          onClick={copyEmail}
          className="px-6 py-4 bg-surface border border-border text-foreground font-semibold uppercase tracking-widest text-xs rounded-sm hover:border-accent hover:text-accent transition-all duration-300 flex items-center gap-2 group cursor-pointer"
          title="Click to copy email address"
        >
          {copied ? (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="text-accent font-bold">Email Copied!</span>
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform">
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
              </svg>
              <span>Copy Email</span>
            </>
          )}
        </button>

        <a
          href="#contact"
          className="px-6 py-4 bg-background border border-border text-foreground/80 font-semibold uppercase tracking-widest text-xs rounded-sm hover:border-accent hover:text-foreground transition-all duration-300"
        >
          View CV & Contacts
        </a>
      </div>


    </section>
  );
}
