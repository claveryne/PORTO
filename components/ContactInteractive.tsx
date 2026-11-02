"use client";

import { useState } from "react";
import { useToast } from "./ToastContext";

export default function ContactInteractive() {
  const { showToast } = useToast();
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("claveryne@gmail.com");
    setCopiedEmail(true);
    showToast("Email address copied to clipboard (claveryne@gmail.com)");
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const socials = [
    {
      name: "LinkedIn",
      handle: "in/claveryne",
      url: "https://www.linkedin.com/in/claveryne",
      desc: "Professional career & network",
    },
    {
      name: "GitHub",
      handle: "@claveryne",
      url: "https://github.com/claveryne",
      desc: "Repositories & project source code",
    },
    {
      name: "Instagram",
      handle: "@claveryne",
      url: "https://www.instagram.com/claveryne",
      desc: "Personal life updates",
    },
    {
      name: "Email",
      handle: "claveryne@gmail.com",
      url: "mailto:claveryne@gmail.com",
      desc: "Direct inbox communication",
    },
  ];

  return (
    <section id="contact" className="flex flex-col gap-12 pt-4 pb-20">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border pb-6">
        <div>
          <p className="uppercase tracking-widest text-xs text-accent font-semibold mb-2">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground">Let&apos;s Connect</h2>
        </div>
      </div>

      {/* Main Grid: Direct Contact & CV Sejajar Kiri-Kanan */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        
        {/* Left Column: Direct Contact Card */}
        <div className="p-5 sm:p-6 md:p-8 bg-surface/70 border border-border rounded-sm flex flex-col justify-between gap-6 shadow-xs">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-widest text-accent">Direct Contact</span>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-serif font-medium text-foreground mb-1">
                Start a Conversation
              </h3>
              <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed font-light">
                Feel free to reach out directly via email for inquiries, collaborations, or job opportunities.
              </p>
            </div>

            <div className="p-3.5 sm:p-4 bg-background border border-border rounded-sm flex flex-col gap-1 mt-2">
              <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-foreground/60 font-semibold">Email Address</span>
              <span className="font-serif text-base sm:text-lg md:text-xl font-bold text-foreground break-all">
                claveryne@gmail.com
              </span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4 border-t border-border/60">
            <button
              onClick={copyEmail}
              className="flex-1 py-3 px-4 bg-background border border-border text-xs uppercase tracking-wider font-semibold rounded-sm hover:border-accent hover:text-accent transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              {copiedEmail ? (
                <span className="text-accent font-bold">Email Copied! ✓</span>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                  </svg>
                  <span>Copy Address</span>
                </>
              )}
            </button>
            
            <a
              href="mailto:claveryne@gmail.com"
              className="py-3 px-5 bg-foreground text-background text-xs uppercase tracking-wider font-semibold rounded-sm hover:bg-accent transition-colors text-center"
            >
              Send Email ↗
            </a>
          </div>
        </div>

        {/* Right Column: Curriculum Vitae Download Cards */}
        <div className="p-5 sm:p-6 md:p-8 bg-surface/70 border border-border rounded-sm flex flex-col justify-between gap-6 shadow-xs">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-widest text-accent">Curriculum Vitae</span>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-serif font-medium text-foreground mb-1">
                Resume & Experience
              </h3>
              <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed font-light">
                Download or preview my updated curriculum vitae in English or Indonesian.
              </p>
            </div>

            <div className="flex flex-col gap-3 mt-2">
              {/* English CV */}
              <div className="p-3.5 bg-background border border-border hover:border-accent rounded-sm transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-8 h-8 rounded-xs bg-surface border border-border flex items-center justify-center text-accent font-bold text-xs shrink-0">
                    EN
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs font-semibold text-foreground truncate">CV English</span>
                    <span className="text-[10px] text-foreground/50 truncate">PDF • 1.3 MB</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
                  <a
                    href="/ClaudiaFeLiviaXaveryne_CV_EN.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="px-2.5 py-1.5 text-foreground/70 hover:text-accent border border-border/60 hover:border-accent rounded-xs transition-colors text-xs"
                    title="View in new tab"
                  >
                    View ↗
                  </a>
                  <a
                    href="/ClaudiaFeLiviaXaveryne_CV_EN.pdf"
                    download="ClaudiaFeLiviaXaveryne_CV_EN.pdf"
                    className="px-3 py-1.5 bg-foreground text-background text-[11px] uppercase tracking-wider font-semibold rounded-xs hover:bg-accent transition-colors text-center"
                  >
                    Download
                  </a>
                </div>
              </div>

              {/* Indonesian CV */}
              <div className="p-3.5 bg-background border border-border hover:border-accent rounded-sm transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-8 h-8 rounded-xs bg-surface border border-border flex items-center justify-center text-accent font-bold text-xs shrink-0">
                    ID
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs font-semibold text-foreground truncate">CV Bahasa Indonesia</span>
                    <span className="text-[10px] text-foreground/50 truncate">PDF • 1.3 MB</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
                  <a
                    href="/ClaudiaFeLiviaXaveryne_CV_ID.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="px-2.5 py-1.5 text-foreground/70 hover:text-accent border border-border/60 hover:border-accent rounded-xs transition-colors text-xs"
                    title="Lihat di tab baru"
                  >
                    Lihat ↗
                  </a>
                  <a
                    href="/ClaudiaFeLiviaXaveryne_CV_ID.pdf"
                    download="ClaudiaFeLiviaXaveryne_CV_ID.pdf"
                    className="px-3 py-1.5 bg-foreground text-background text-[11px] uppercase tracking-wider font-semibold rounded-xs hover:bg-accent transition-colors text-center"
                  >
                    Unduh
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-2 text-[11px] text-foreground/50 flex items-center justify-between">
            <span>Updated: Nov 2026</span>
          </div>
        </div>

      </div>

      {/* Social Network Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-border">
        {socials.map((soc) => (
          <a
            key={soc.name}
            href={soc.url}
            target="_blank"
            rel="noreferrer"
            className="p-4 bg-surface/40 hover:bg-surface border border-border/70 hover:border-accent rounded-sm transition-all duration-200 flex flex-col gap-1 group"
          >
            <div className="flex items-center justify-between">
              <span className="font-serif font-semibold text-foreground group-hover:text-accent transition-colors">
                {soc.name}
              </span>
              <span className="text-sm text-foreground/40 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-accent">
                ↗
              </span>
            </div>
            <span className="text-xs text-accent font-mono font-medium">{soc.handle}</span>
            <p className="text-[11px] text-foreground/60 mt-1">{soc.desc}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
