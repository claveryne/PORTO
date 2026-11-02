export default function ExperienceHighlights() {
  const experiences = [
    {
      company: "PT Tiga Pilar Keamanan (Fourtrezz)",
      location: "Yogyakarta, Indonesia",
      period: "Sep 2025 - Mar 2026",
      role: "Full-Stack Developer Intern",
      type: "Industry Internship",
      bullets: [
        "Designed and developed an end-to-end asset lending and employee management platform, centralizing operations and building a real-time self-service dashboard that empowered 20+ employees while streamlining HR tasks.",
        "Authored comprehensive technical documentation and user guides to ensure seamless day-to-day operations, system maintenance, and user adoption across the organization.",
      ],
    },
    {
      company: "Universitas Atma Jaya Yogyakarta",
      location: "Yogyakarta, Indonesia",
      period: "Aug 2024 - Jan 2025",
      role: "Teaching Assistant Coordinator",
      type: "Academic Leadership",
      bullets: [
        "Spearheaded the operations of a 7-member teaching assistant team supporting 10 Design Thinking & Creativity classes, acting as the key liaison for 3 lecturers to streamline class activities, grading, and course execution.",
        "Executed the full range of teaching assistant duties while maintaining high standards of academic and operational support.",
      ],
    },
    {
      company: "Universitas Atma Jaya Yogyakarta",
      location: "Yogyakarta, Indonesia",
      period: "Aug 2023 - Jan 2024",
      role: "Teaching Assistant",
      type: "Academic Support",
      bullets: [
        "Led project mentoring and interactive group discussions for 30+ students in 3 Design Thinking & Creativity classes, helping them apply core Design Thinking principles to solve complex project challenges.",
        "Streamlined academic support operations by coordinating grading workflows, managing 4+ course materials, and monitoring 20+ student project deliverables.",
      ],
    },
    {
      company: "Universitas Atma Jaya Yogyakarta",
      location: "Yogyakarta, Indonesia",
      period: "Aug 2023 - Jul 2024",
      role: "Programming Study Group Mentor",
      type: "Technical Mentorship",
      bullets: [
        "Mentored 4 junior students through foundational C programming and problem-solving, providing hands-on mentorship to enhance their logical reasoning and coding proficiency.",
        "Authored structured learning materials, practice problems, and self-learning modules to systematically support and evaluate student progress.",
      ],
    },
  ];

  return (
    <section id="experience" className="flex flex-col gap-8 pt-4">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <p className="uppercase tracking-widest text-xs text-accent font-semibold mb-2">Work History</p>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">Work Experience</h2>
        </div>
      </div>

      {/* Experience Cards List */}
      <div className="flex flex-col gap-5">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="p-5 sm:p-6 md:p-8 bg-surface/50 hover:bg-surface border border-border/80 hover:border-accent rounded-sm transition-all duration-300 flex flex-col gap-4 group shadow-xs"
          >
            {/* Header: Role, Badges, Company, Period */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 pb-4 border-b border-border/60">
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-foreground group-hover:text-accent transition-colors">
                    {exp.role}
                  </h3>
                  <span className="text-[10px] font-sans tracking-widest uppercase text-accent px-2 py-0.5 bg-background border border-border rounded-xs font-semibold">
                    {exp.type}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs md:text-sm text-foreground/80 flex-wrap">
                  <span className="font-semibold text-foreground">{exp.company}</span>
                  <span className="text-foreground/40">•</span>
                  <span className="text-foreground/60">{exp.location}</span>
                </div>
              </div>

              <div className="flex items-center md:items-end self-start md:self-auto shrink-0">
                <span className="px-3 py-1 bg-background border border-border text-xs font-mono text-accent rounded-xs font-medium">
                  {exp.period}
                </span>
              </div>
            </div>

            {/* Bullets */}
            <ul className="flex flex-col gap-2.5 pt-1">
              {exp.bullets.map((bullet, bIdx) => (
                <li key={bIdx} className="flex items-start gap-3 text-xs md:text-sm text-foreground/75 leading-relaxed font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
