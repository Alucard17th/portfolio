import { Navbar } from "./components/navigation/navbar";
import { CommandPalette } from "./components/navigation/command-palette";

import { HeroSection } from "./components/sections/hero";
import { SkillsSection } from "./components/sections/skills";
import { ProjectsSection } from "./components/sections/projects";
import { CaseStudySection } from "./components/sections/case-study";
import { RemoteWorkSection } from "./components/sections/remote";
import { ExperienceSection } from "./components/sections/experience";
import { AboutSection } from "./components/sections/about";
import { ContactSection } from "./components/sections/contact";
import { Footer } from "./components/sections/footer";

import * as React from "react";

import { portfolio } from "./data/portfolio";
import { getPortfolioProjectsFromCosmic } from "./lib/cosmic";

export default function App() {
  const [projects, setProjects] = React.useState(portfolio.projects.items);

  React.useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const items = await getPortfolioProjectsFromCosmic();
        if (cancelled) return;
        if (items.length > 0) setProjects(items);
      } catch {
        if (cancelled) return;
        setProjects(portfolio.projects.items);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        {/* Mesh gradient — one slow-drifting warm-to-cool field */}
        <div className="absolute inset-0 mesh-bg" />
        {/* Lime glow — upper left, very subtle */}
        <div
          className="absolute -left-[8%] top-[-10%] h-[45vh] w-[45vh] rounded-full blur-[120px] opacity-20 animate-aurora"
          style={{ background: "radial-gradient(closest-side, hsl(var(--lime) / 0.6), transparent)" }}
        />
        {/* Orange glow — upper right */}
        <div
          className="absolute right-[-8%] top-[5%] h-[40vh] w-[40vh] rounded-full blur-[140px] opacity-15 animate-aurora"
          style={{ background: "radial-gradient(closest-side, hsl(var(--orange) / 0.55), transparent)", animationDelay: "-9s" }}
        />
        {/* Blue glow — bottom center */}
        <div
          className="absolute left-[25%] bottom-[-15%] h-[50vh] w-[50vh] rounded-full blur-[150px] opacity-12 animate-aurora"
          style={{ background: "radial-gradient(closest-side, hsl(var(--blue-code) / 0.45), transparent)", animationDelay: "-18s" }}
        />
        {/* Fine dot grid — barely visible */}
        <div className="absolute inset-0 opacity-[0.045] [background-image:radial-gradient(circle,hsl(var(--foreground))_1px,transparent_1px)] [background-size:32px_32px]" />
        {/* Noise overlay */}
        <div className="absolute inset-0 noise opacity-[0.28] mix-blend-overlay" />
      </div>

      <Navbar />
      <CommandPalette />

      <main className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <HeroSection data={portfolio.hero} />
        <SkillsSection data={portfolio.skills} />
        <ProjectsSection data={{ ...portfolio.projects, items: projects }} />
        <CaseStudySection />
        <RemoteWorkSection data={portfolio.remote} />
        <ExperienceSection data={portfolio.experience} />
        <AboutSection data={portfolio.about} />
        <ContactSection data={portfolio.contact} />
      </main>

      <Footer data={portfolio.footer} />
    </div>
  );
}
