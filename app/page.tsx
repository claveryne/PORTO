import Link from "next/link";
import ImageCarousel from "../components/ImageCarousel";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center">
      <main className="w-full max-w-[1440px] px-8 md:px-16 lg:px-24 py-24 flex flex-col gap-32">
        
        {/* Hero Section */}
        <section className="flex flex-col gap-6 text-center md:text-left pt-12 max-w-4xl">
          <p className="uppercase tracking-widest text-sm text-accent font-semibold">Fresh Graduate Informatics Student</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-foreground leading-tight">
            Claudia Xaveryne
          </h1>
          <p className="max-w-2xl text-xl md:text-2xl leading-relaxed text-foreground/80 font-light mt-6">
            Developing end-to-end solutions with a user-first mindset. Love creating systems with interfaces that are easy to learn for everyday users.
          </p>

          {/* Tech Stack / Technologies */}
          <div className="mt-6 flex flex-col gap-4 text-left">
            <p className="uppercase tracking-widest text-xs text-accent font-semibold">Technologies & Tools</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 bg-surface/60 border border-border/80 rounded-sm flex flex-col gap-3 hover:border-accent transition-colors">
                <span className="text-sm font-serif font-semibold text-foreground/90">Languages & Fundamentals</span>
                <div className="flex flex-wrap gap-2">
                  {["HTML", "CSS", "JavaScript", "PHP", "Java", "C"].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-background border border-border text-xs font-medium tracking-wider text-foreground/80 rounded-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-surface/60 border border-border/80 rounded-sm flex flex-col gap-3 hover:border-accent transition-colors">
                <span className="text-sm font-serif font-semibold text-foreground/90">Frameworks & Libraries</span>
                <div className="flex flex-wrap gap-2">
                  {["Laravel", "React", "Next.js", "Bootstrap", "Tailwind CSS", "Laravel Socialite", "Laravel Mail"].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-background border border-border text-xs font-medium tracking-wider text-foreground/80 rounded-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-surface/60 border border-border/80 rounded-sm flex flex-col gap-3 hover:border-accent transition-colors sm:col-span-2 lg:col-span-1">
                <span className="text-sm font-serif font-semibold text-foreground/90">Database & Architecture</span>
                <div className="flex flex-wrap gap-2">
                  {["MySQL", "RestAPI"].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-background border border-border text-xs font-medium tracking-wider text-foreground/80 rounded-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="flex flex-col gap-16">
          <div className="flex items-center gap-6">
            <h2 className="text-4xl md:text-5xl font-serif font-semibold">Selected Works</h2>
            <div className="h-px bg-border flex-1 mt-2"></div>
          </div>
          
          <div className="flex flex-col gap-16">
            {/* Project 1 */}
            <div className="group bg-surface border border-border rounded-sm hover:border-accent transition-colors duration-300 flex flex-col lg:flex-row overflow-hidden">
              <div className="w-full lg:w-3/5 p-6 md:p-10 border-b lg:border-b-0 lg:border-r border-border flex items-center bg-background/30">
                <div className="w-full shadow-lg">
                  <ImageCarousel 
                    images={[
                      "/ta-1.png",
                      "/ta-2.png",
                      "/ta-3.png",
                      "/ta-4.png",
                      "/ta-5.png"
                    ]} 
                    alt="Building Reservation Screenshot" 
                  />
                </div>
              </div>
              <div className="w-full lg:w-2/5 p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-3xl md:text-4xl font-serif font-medium mb-6 group-hover:text-accent transition-colors">Building Reservation</h3>
                <p className="text-lg text-foreground/70 mb-10 leading-relaxed">
                  An end-to-end building reservation and internal management system. Designed to simplify the booking process and manage daily operational tasks for administrators.
                </p>
                <div className="mt-auto">
                  <a 
                    href="https://github.com/claveryne/TA.git" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center text-sm font-semibold uppercase tracking-widest text-accent hover:text-foreground transition-colors"
                  >
                    View on GitHub <span className="ml-3 text-lg">→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group bg-surface border border-border rounded-sm hover:border-accent transition-colors duration-300 flex flex-col lg:flex-row overflow-hidden">
              <div className="w-full lg:w-3/5 p-6 md:p-10 border-b lg:border-b-0 lg:border-r border-border flex items-center bg-background/30">
                <div className="w-full shadow-lg">
                  <ImageCarousel 
                    images={[
                      "/ma-1.png",
                      "/ma-2.png",
                      "/ma-3.png",
                      "/ma-4.png",
                      "/ma-5.png"
                    ]} 
                    alt="Asset Loaning Screenshot" 
                  />
                </div>
              </div>
              <div className="w-full lg:w-2/5 p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-3xl md:text-4xl font-serif font-medium mb-6 group-hover:text-accent transition-colors">Asset Loaning</h3>
                <p className="text-lg text-foreground/70 mb-10 leading-relaxed">
                  An integrated internal platform to track asset loaning, manage inventory, and oversee employee data. Built with a focus on delivering a clear and easy experience for company staff.
                </p>
                <div className="mt-auto">
                  <a 
                    href="https://github.com/claveryne/MAGANG.git" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center text-sm font-semibold uppercase tracking-widest text-accent hover:text-foreground transition-colors"
                  >
                    View on GitHub <span className="ml-3 text-lg">→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group bg-surface border border-border rounded-sm hover:border-accent transition-colors duration-300 flex flex-col lg:flex-row overflow-hidden">
              <div className="w-full lg:w-3/5 p-6 md:p-10 border-b lg:border-b-0 lg:border-r border-border flex items-center bg-background/30">
                <div className="w-full shadow-lg">
                  <ImageCarousel 
                    images={[
                      "/p3l-1.png",
                      "/p3l-2.png",
                      "/p3l-3.png",
                      "/p3l-4.png"
                    ]} 
                    alt="ReUseMart Screenshot" 
                  />
                </div>
              </div>
              <div className="w-full lg:w-2/5 p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-3xl md:text-4xl font-serif font-medium mb-6 group-hover:text-accent transition-colors">E-Commerce Marketplace</h3>
                <p className="text-lg text-foreground/70 mb-10 leading-relaxed">
                  A platform for buying and selling pre-owned and second-hand goods. Designed to provide a seamless, sustainable, and user-friendly shopping experience.
                </p>
                <div className="mt-auto">
                  <a 
                    href="https://github.com/unnamedboyy/ReuseMart.git" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center text-sm font-semibold uppercase tracking-widest text-accent hover:text-foreground transition-colors"
                  >
                    View on GitHub <span className="ml-3 text-lg">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="flex flex-col gap-10 pb-24">
          <div className="flex items-center gap-6">
            <h2 className="text-4xl md:text-5xl font-serif font-semibold">Get In Touch</h2>
            <div className="h-px bg-border flex-1 mt-2"></div>
          </div>
          
          <p className="text-xl text-foreground/80 max-w-2xl leading-relaxed">
            I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>

          <div className="flex flex-col md:flex-row gap-8 mt-6">
            <div className="flex flex-wrap gap-8 text-base uppercase tracking-widest font-semibold">
              <a href="mailto:[claveryne@gmail.com]" className="hover:text-accent transition-colors">Email</a>
              <a href="https://www.linkedin.com/in/claveryne" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">LinkedIn</a>
              <a href="https://github.com/claveryne" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">GitHub</a>
              <a href="https://www.instagram.com/claveryne" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">Instagram</a>
            </div>
          </div>

          <div className="flex flex-row gap-8">
            <div>
              <a 
                href="/ClaudiaFeLiviaXaveryne_CV_EN.pdf"
                download="ClaudiaFeLiviaXaveryne_CV_EN.pdf"
                target="_blank"
                className="inline-block px-10 py-5 bg-foreground text-background font-semibold uppercase tracking-widest text-sm hover:bg-accent transition-colors shadow-lg"
              >
                Download CV
              </a>
            </div>

            <div>
              <a 
                href="/ClaudiaFeLiviaXaveryne_CV_ID.pdf"
                download="ClaudiaFeLiviaXaveryne_CV_ID.pdf"
                target="_blank"
                className="inline-block px-10 py-5 bg-foreground text-background font-semibold uppercase tracking-widest text-sm hover:bg-accent transition-colors shadow-lg"
              >
                Unduh CV
              </a>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
