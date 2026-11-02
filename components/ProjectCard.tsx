"use client";

import { useState } from "react";
import ImageCarousel from "./ImageCarousel";
import { useToast } from "./ToastContext";

export interface ProjectData {
  id: string;
  title: string;
  category: "Enterprise & Management" | "E-Commerce";
  tagline: string;
  overview: string;
  keyFeatures: string[];
  technologies: string[];
  role: string;
  githubUrl: string;
  images: string[];
}

export default function ProjectCard({ project }: { project: ProjectData }) {
  const { showToast } = useToast();
  const [activeTab, setActiveTab] = useState<"overview" | "features" | "tech">("overview");
  const [copiedLink, setCopiedLink] = useState(false);

  const copyGithubLink = () => {
    navigator.clipboard.writeText(project.githubUrl);
    setCopiedLink(true);
    showToast(`GitHub link copied for "${project.title}"`);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <article className="group bg-surface/80 border border-border rounded-sm hover:border-accent transition-all duration-300 flex flex-col lg:flex-row overflow-hidden shadow-xs hover:shadow-md">
      {/* Visual / Screenshot Carousel Half */}
      <div className="w-full lg:w-3/5 p-5 md:p-8 border-b lg:border-b-0 lg:border-r border-border flex flex-col justify-center bg-background/40">
        <ImageCarousel 
          images={project.images} 
          alt={`${project.title} Screenshot`} 
        />
      </div>

      {/* Interactive Information & Tabs Half */}
      <div className="w-full lg:w-2/5 p-6 md:p-10 flex flex-col justify-between">
        <div>
          {/* Header & Category Badge */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="text-[11px] font-sans font-semibold tracking-widest uppercase text-accent px-2 py-0.5 bg-background border border-border rounded-xs">
              {project.category}
            </span>
            <span className="text-xs text-foreground/50 tracking-wider">
              {project.role}
            </span>
          </div>

          <h3 className="text-2xl md:text-3xl font-serif font-semibold text-foreground group-hover:text-accent transition-colors mb-2">
            {project.title}
          </h3>
          <p className="text-xs text-accent font-medium tracking-wide uppercase mb-6">
            {project.tagline}
          </p>

          {/* Interactive Navigation Tabs inside Card */}
          <div className="flex border-b border-border mb-6">
            <button
              onClick={() => setActiveTab("overview")}
              className={`pb-2.5 px-3 text-xs uppercase tracking-wider font-semibold transition-all relative cursor-pointer ${
                activeTab === "overview"
                  ? "text-accent font-bold"
                  : "text-foreground/60 hover:text-foreground"
              }`}
            >
              Overview
              {activeTab === "overview" && (
                <span className="absolute bottom-0 inset-x-0 h-0.5 bg-accent" />
              )}
            </button>

            <button
              onClick={() => setActiveTab("features")}
              className={`pb-2.5 px-3 text-xs uppercase tracking-wider font-semibold transition-all relative cursor-pointer ${
                activeTab === "features"
                  ? "text-accent font-bold"
                  : "text-foreground/60 hover:text-foreground"
              }`}
            >
              Key Features
              {activeTab === "features" && (
                <span className="absolute bottom-0 inset-x-0 h-0.5 bg-accent" />
              )}
            </button>

            <button
              onClick={() => setActiveTab("tech")}
              className={`pb-2.5 px-3 text-xs uppercase tracking-wider font-semibold transition-all relative cursor-pointer ${
                activeTab === "tech"
                  ? "text-accent font-bold"
                  : "text-foreground/60 hover:text-foreground"
              }`}
            >
              Tech Stack
              {activeTab === "tech" && (
                <span className="absolute bottom-0 inset-x-0 h-0.5 bg-accent" />
              )}
            </button>
          </div>

          {/* Tab Content Panels */}
          <div className="min-h-[140px] text-sm">
            {activeTab === "overview" && (
              <p className="text-foreground/80 leading-relaxed font-light text-base animate-in fade-in duration-200">
                {project.overview}
              </p>
            )}

            {activeTab === "features" && (
              <ul className="flex flex-col gap-2.5 animate-in fade-in duration-200">
                {project.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-foreground/80 leading-normal">
                    <span className="text-accent font-bold mt-0.5">✦</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            )}

            {activeTab === "tech" && (
              <div className="flex flex-wrap gap-2 animate-in fade-in duration-200">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-background border border-border text-xs font-medium text-foreground/85 rounded-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons Bar */}
        <div className="pt-6 border-t border-border flex items-center justify-between gap-4 mt-6">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent hover:text-foreground group/link transition-colors"
          >
            <span>View on GitHub</span>
            <span className="text-sm group-hover/link:translate-x-1 transition-transform">→</span>
          </a>

          <button
            onClick={copyGithubLink}
            className="text-xs uppercase tracking-wider text-foreground/60 hover:text-accent flex items-center gap-1.5 transition-colors cursor-pointer"
            title="Copy GitHub repository link"
          >
            {copiedLink ? (
              <span className="text-accent font-bold">Link Copied! ✓</span>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
                <span>Copy Repo</span>
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  );
}
