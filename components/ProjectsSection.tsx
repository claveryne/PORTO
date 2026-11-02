"use client";

import ProjectCard, { ProjectData } from "./ProjectCard";

const PROJECTS: ProjectData[] = [
  {
    id: "ta",
    title: "Building Reservation System",
    category: "Enterprise & Management",
    tagline: "End-to-End Venue Booking & Operations Portal",
    overview: "An end-to-end building reservation and internal management system designed to streamline venue scheduling, eliminate booking collisions, and simplify day-to-day operations for administrators and clients.",
    keyFeatures: [
      "Dynamic room availability calendar with conflict-prevention validation",
      "Multi-level role management: Clients, Event Staff, and Senior Administrators",
      "Automated transactional email receipts and status dispatch via Laravel Mail",
      "Administrative dashboard for venue capacity, analytics, and operational logs"
    ],
    technologies: ["Laravel", "PHP", "MySQL", "Bootstrap", "JavaScript", "RestAPI", "Laravel Mail", "Laravel Socialite"],
    role: "Full-Stack Developer",
    githubUrl: "https://github.com/claveryne/TA.git",
    images: [
      "/ta-1.png",
      "/ta-2.png",
      "/ta-3.png",
      "/ta-4.png",
      "/ta-5.png"
    ],
  },
  {
    id: "magang",
    title: "Asset Loaning & Inventory",
    category: "Enterprise & Management",
    tagline: "Internal Corporate Resource & Handover Platform",
    overview: "An integrated internal platform engineered to manage the company's equipment loaning lifecycle, track multi-department hardware inventories, and maintain accurate employee accountability records.",
    keyFeatures: [
      "End-to-end asset lending lifecycle: Request, Approval, Handover, and Return verification",
      "Real-time stock status, item depreciation tracking, and hardware condition logs",
      "Employee directory integration to audit item possession by department",
      "Ergonomic admin interface designed for rapid daily operations without friction"
    ],
    technologies: ["Laravel", "PHP", "MySQL", "Bootstrap", "JavaScript", "Laravel Mail", "Laravel Socialite"],
    role: "Full-Stack Intern",
    githubUrl: "https://github.com/claveryne/MAGANG.git",
    images: [
      "/ma-1.png",
      "/ma-2.png",
      "/ma-3.png",
      "/ma-4.png",
      "/ma-5.png"
    ],
  },
  {
    id: "reusemart",
    title: "E-Commerce Marketplace",
    category: "E-Commerce",
    tagline: "Sustainable Pre-Owned Goods Trading Platform",
    overview: "A specialized marketplace platform connecting sellers and conscious shoppers to buy and sell pre-owned and second-hand items, championing sustainability and smooth digital commerce.",
    keyFeatures: [
      "Catalog browsing with categorization, keyword search, and item condition grading",
      "Interactive shopping cart and transparent price / checkout workflow",
      "Seller dashboard with item listing management, photo uploads, and order dispatch",
      "Responsive, clean UI engineered for both mobile and desktop shoppers"
    ],
    technologies: ["Laravel", "PHP", "React", "JavaScript", "MySQL", "Tailwind CSS", "Laravel Mail", "RestAPI", "Flutter", "Dart"],
    role: "Full-Stack Developer",
    githubUrl: "https://github.com/unnamedboyy/ReuseMart.git",
    images: [
      "/p3l-1.png",
      "/p3l-2.png",
      "/p3l-3.png",
      "/p3l-4.png"
    ],
  },
];

export default function ProjectsSection() {
  return (
    <section id="works" className="flex flex-col gap-10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border pb-6">
        <div>
          <p className="uppercase tracking-widest text-xs text-accent font-semibold mb-2">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground">Selected Works</h2>
        </div>
      </div>

      {/* Projects List */}
      <div className="flex flex-col gap-14">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
