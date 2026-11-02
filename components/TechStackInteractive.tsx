"use client";

import { useState, useMemo } from "react";

interface SkillItem {
  name: string;
  category: "Languages & Fundamentals" | "Frameworks & Libraries" | "Database & Architecture";
  projects: string[];
  note?: string;
}

const ALL_SKILLS: SkillItem[] = [
  // Languages & Fundamentals
  { name: "HTML", category: "Languages & Fundamentals", projects: ["Building Reservation", "Asset Loaning", "E-Commerce"], note: "Semantic structure & accessibility" },
  { name: "CSS", category: "Languages & Fundamentals", projects: ["Building Reservation", "Asset Loaning", "E-Commerce"], note: "Responsive styling & layouts" },
  { name: "PHP", category: "Languages & Fundamentals", projects: ["Building Reservation", "Asset Loaning", "E-Commerce"], note: "Backend services & OOP business logic" },
  { name: "JavaScript", category: "Languages & Fundamentals", projects: ["E-Commerce Marketplace", "Portfolio"], note: "Dynamic DOM interactions & asynchronous data fetching" },
  { name: "C", category: "Languages & Fundamentals", projects: ["Academic Algorithms"], note: "Memory management & algorithmic foundations" },
  { name: "Java", category: "Languages & Fundamentals", projects: ["Academic Software Projects"], note: "Object-oriented architecture & design patterns" },

  // Frameworks & Libraries
  { name: "Laravel", category: "Frameworks & Libraries", projects: ["Building Reservation", "Asset Loaning", "E-Commerce"], note: "MVC architecture, Eloquent ORM, Blade, migrations & auth" },
  { name: "React", category: "Frameworks & Libraries", projects: ["E-Commerce Marketplace", "Portfolio"], note: "Component-based architecture, state management & hooks" },
  { name: "Next.js", category: "Frameworks & Libraries", projects: ["Portfolio Web App"], note: "Server-side rendering, App Router & modern web standards" },
  { name: "Bootstrap", category: "Frameworks & Libraries", projects: ["Building Reservation", "Asset Loaning"], note: "Rapid responsive grid & enterprise dashboard UI" },
  { name: "Tailwind CSS", category: "Frameworks & Libraries", projects: ["E-Commerce Marketplace", "Portfolio"], note: "Utility-first design systems & high customizability" },
  { name: "Laravel Socialite", category: "Frameworks & Libraries", projects: ["Authentication Module"], note: "OAuth third-party social logins" },
  { name: "Laravel Mail", category: "Frameworks & Libraries", projects: ["Building Reservation"], note: "Automated booking confirmations & operational alerts" },

  // Database & Architecture
  { name: "MySQL", category: "Database & Architecture", projects: ["Building Reservation", "Asset Loaning", "E-Commerce"], note: "Relational database schema, indexing, joins & foreign keys" },
  { name: "RestAPI", category: "Database & Architecture", projects: ["Asset Loaning", "E-Commerce"], note: "JSON endpoints, HTTP methods, authentication & integration" },
];

export default function TechStackInteractive() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All", "Languages & Fundamentals", "Frameworks & Libraries", "Database & Architecture"];

  const allCategoryMatches = useMemo(() => {
    if (!searchQuery.trim()) return [];
    return ALL_SKILLS.filter((skill) => {
      return (
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (skill.note && skill.note.toLowerCase().includes(searchQuery.toLowerCase())) ||
        skill.projects.some((p) => p.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    });
  }, [searchQuery]);

  const filteredSkills = useMemo(() => {
    return ALL_SKILLS.filter((skill) => {
      const matchesCategory = selectedCategory === "All" || skill.category === selectedCategory;
      const matchesQuery =
        !searchQuery.trim() ||
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (skill.note && skill.note.toLowerCase().includes(searchQuery.toLowerCase())) ||
        skill.projects.some((p) => p.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="skills" className="flex flex-col gap-8 pt-4">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <p className="uppercase tracking-widest text-xs text-accent font-semibold mb-2">Technical Toolkit</p>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">Technologies & Capabilities</h2>
        </div>
      </div>

      {/* Interactive Controls Bar: Category Filters + Search */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-3 bg-surface/70 border border-border rounded-sm">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-sm transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-foreground text-background shadow-xs"
                  : "bg-background border border-border/80 text-foreground/70 hover:text-accent hover:border-accent"
              }`}
            >
              {cat === "Languages & Fundamentals" ? "Languages" : cat === "Frameworks & Libraries" ? "Frameworks" : cat === "Database & Architecture" ? "Database" : "All Stack"}
            </button>
          ))}
        </div>
      </div>

      {/* Categorized or Filtered View */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSkills.length === 0 ? (
          <div className="col-span-full p-8 text-center bg-surface/40 border border-border/60 rounded-sm flex flex-col items-center gap-3">
            <p className="text-sm text-foreground/80">
              No technologies found in &ldquo;{selectedCategory}&rdquo; matching &ldquo;{searchQuery}&rdquo;.
            </p>
            {allCategoryMatches.length > 0 && selectedCategory !== "All" && (
              <button
                onClick={() => setSelectedCategory("All")}
                className="px-4 py-2 bg-foreground text-background text-xs uppercase tracking-wider font-semibold rounded-sm hover:bg-accent transition-colors cursor-pointer"
              >
                Switch to All Stack ({allCategoryMatches.length} match{allCategoryMatches.length > 1 ? "es" : ""} found) →
              </button>
            )}
            <button
              onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
              className="text-xs uppercase tracking-wider text-accent font-semibold underline cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="p-4 rounded-sm border transition-all duration-200 bg-surface/50 hover:bg-surface border-border/80 hover:border-accent flex flex-col justify-between gap-3 group"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-serif font-bold text-base text-foreground group-hover:text-accent transition-colors">
                    {skill.name}
                  </span>
                </div>
                <span className="text-[10px] font-sans tracking-widest uppercase text-foreground/50 px-1.5 py-0.5 bg-background border border-border/70 rounded-xs">
                  {skill.category.split(" ")[0]}
                </span>
              </div>

              {skill.note && (
                <p className="text-xs text-foreground/70 font-light leading-relaxed">
                  {skill.note}
                </p>
              )}

              <div className="pt-2 border-t border-border/50 flex flex-wrap items-center gap-1.5 text-[11px]">
                <span className="text-accent font-semibold">Used in:</span>
                {skill.projects.map((proj, pIdx) => (
                  <span
                    key={pIdx}
                    className="px-2 py-0.5 bg-background border border-border/70 text-foreground/80 rounded-xs text-[10px]"
                  >
                    {proj}
                  </span>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
