import Navbar from "../components/Navbar";
import HeroInteractive from "../components/HeroInteractive";
import TechStackInteractive from "../components/TechStackInteractive";
import ExperienceHighlights from "../components/ExperienceHighlights";
import ProjectsSection from "../components/ProjectsSection";
import ContactInteractive from "../components/ContactInteractive";
import { ToastProvider } from "../components/ToastContext";

export default function Home() {
  return (
    <ToastProvider>
      <div className="min-h-screen bg-background text-foreground flex flex-col items-center selection:bg-accent selection:text-white">
        {/* Sticky Floating Navbar with Scroll Progress Bar */}
        <Navbar />

        {/* Main Content Area */}
        <main className="w-full max-w-[1440px] px-4 sm:px-8 md:px-12 lg:px-24 py-8 sm:py-12 md:py-16 flex flex-col gap-16 sm:gap-24 md:gap-32">
          {/* Interactive Hero with Mouse Glow & Value Metrics */}
          <HeroInteractive />

          {/* Interactive Tech Stack Explorer */}
          <TechStackInteractive />

          {/* Development & Design Approach */}
          <ExperienceHighlights />

          {/* Interactive Projects Showcase */}
          <ProjectsSection />

          {/* Interactive Contact & CV Center */}
          <ContactInteractive />
        </main>

        {/* Elegant Footer */}
        <footer className="w-full border-t border-border/80 bg-surface/50 py-10 mt-auto">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-24 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-foreground/65">
            <div className="flex items-center gap-2">
              <span className="font-serif font-bold text-accent">CX</span>
              <span>•</span>
              <span>© {new Date().getFullYear()} Claudia Fe Livia Xaveryne. All rights reserved.</span>
            </div>

            <div className="flex items-center gap-6">
              <a href="#about" className="hover:text-accent transition-colors">Back to Top ↑</a>
            </div>
          </div>
        </footer>
      </div>
    </ToastProvider>
  );
}
