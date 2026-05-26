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
        <div
          className="absolute -left-[10%] top-[-15%] h-[55vh] w-[55vh] rounded-full opacity-60 blur-3xl animate-aurora"
          style={{ background: "radial-gradient(closest-side, hsl(var(--grad-1) / 0.45), transparent)" }}
        />
        <div
          className="absolute right-[-10%] top-[10%] h-[50vh] w-[50vh] rounded-full opacity-50 blur-3xl animate-aurora"
          style={{ background: "radial-gradient(closest-side, hsl(var(--grad-2) / 0.40), transparent)", animationDelay: "-7s" }}
        />
        <div
          className="absolute left-[20%] bottom-[-20%] h-[60vh] w-[60vh] rounded-full opacity-40 blur-3xl animate-aurora"
          style={{ background: "radial-gradient(closest-side, hsl(var(--grad-3) / 0.30), transparent)", animationDelay: "-14s" }}
        />
        <div className="absolute inset-0 opacity-[0.10] [background-image:linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_85%)]" />
        <div className="absolute inset-0 noise opacity-[0.35] mix-blend-overlay" />
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
