import { Navbar } from "./components/navigation/navbar";
import { CommandPalette } from "./components/navigation/command-palette";

import { HeroSection } from "./components/sections/hero";
import { SkillsSection } from "./components/sections/skills";
import { ProjectsSection } from "./components/sections/projects";
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
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_10%,hsl(var(--ring)/0.14),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_80%_30%,hsl(var(--accent-foreground)/0.10),transparent_55%)]" />
        <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] [background-size:56px_56px]" />
      </div>

      <Navbar />
      <CommandPalette />

      <main className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <HeroSection data={portfolio.hero} />
        <SkillsSection data={portfolio.skills} />
        <ProjectsSection data={{ ...portfolio.projects, items: projects }} />
        <ExperienceSection data={portfolio.experience} />
        <AboutSection data={portfolio.about} />
        <ContactSection data={portfolio.contact} />
      </main>

      <Footer data={portfolio.footer} />
    </div>
  );
}
