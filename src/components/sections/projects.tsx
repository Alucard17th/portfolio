import * as React from "react";
import {
  ArrowUpRight,
  ExternalLink,
  FolderGit2,
  Github,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";

import type { PortfolioData, Project } from "@/data/portfolio";

import { SectionShell } from "@/components/sections/section-shell";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function uniqueTech(projects: Project[]) {
  const set = new Set<string>();
  for (const p of projects) for (const t of p.tech) set.add(t);
  return ["All", ...Array.from(set).sort((a, b) => a.localeCompare(b))];
}

export function ProjectsSection({ data }: { data: PortfolioData["projects"] }) {
  const techOptions = React.useMemo(() => uniqueTech(data.items), [data.items]);
  const [filter, setFilter] = React.useState<string>("All");

  const visible = React.useMemo(() => {
    return data.items
      .filter((p) => (filter === "All" ? true : p.tech.includes(filter)))
      .sort((a, b) => Number(b.featured) - Number(a.featured));
  }, [data.items, filter]);

  return (
    <SectionShell
      id="projects"
      eyebrow="Proof of work"
      title={data.heading}
      description={data.subheading}
      icon={<FolderGit2 />}
    >
      <div className="flex flex-col gap-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Tabs value={filter} onValueChange={setFilter}>
            <TabsList className="flex flex-wrap justify-start bg-card/50 backdrop-blur">
              {techOptions.slice(0, 7).map((t) => (
                <TabsTrigger key={t} value={t} className="cursor-pointer">
                  {t}
                </TabsTrigger>
              ))}
            </TabsList>
            <TabsContent value={filter} />
          </Tabs>

          <p className="text-sm text-muted-foreground">
            <span className="font-mono text-foreground">{visible.length}</span>{" "}
            project{visible.length === 1 ? "" : "s"}
          </p>
        </div>

        <div className="grid gap-6">
          {visible.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx + 1}
              reversed={idx % 2 === 1}
              delay={0.05 * idx}
            />
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

function ProjectCard({
  project,
  index,
  reversed,
  delay,
}: {
  project: Project;
  index: number;
  reversed: boolean;
  delay: number;
}) {
  const ref = React.useRef<HTMLElement | null>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <Reveal delay={delay}>
      <motion.article
        ref={ref as never}
        onMouseMove={onMouseMove}
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 260, damping: 24 }}
        className="group relative overflow-hidden rounded-3xl border border-border/70 bg-card/40 backdrop-blur-xl transition-colors hover:border-[hsl(var(--grad-2)/0.5)]"
      >
        {/* Cursor-follow spotlight */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(450px circle at var(--mx,50%) var(--my,50%), hsl(var(--grad-1)/0.14), transparent 50%)",
          }}
        />

        <div
          className={
            "relative grid gap-0 md:grid-cols-[1.05fr_0.95fr] " +
            (reversed ? "md:[&>*:first-child]:order-2" : "")
          }
        >
          {/* IMAGE side */}
          <div className="relative aspect-[16/11] overflow-hidden md:aspect-auto md:min-h-[360px]">
            <img
              src={project.image.src}
              alt={project.image.alt}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
            />
            {/* Edge fade into card body */}
            <div
              className={
                "pointer-events-none absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent " +
                (reversed
                  ? "md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-card"
                  : "md:bg-gradient-to-l md:from-transparent md:via-transparent md:to-card")
              }
            />

            {/* Top-left: index + featured */}
            <div className="absolute left-4 top-4 flex items-center gap-2">
              <span className="inline-flex items-center rounded-md border border-border/70 bg-background/80 px-2 py-1 font-mono text-[11px] text-muted-foreground backdrop-blur">
                {String(index).padStart(2, "0")}
              </span>
              {project.featured ? (
                <span className="inline-flex items-center gap-1 rounded-md border border-[hsl(var(--grad-2)/0.4)] bg-background/80 px-2 py-1 text-[10px] font-medium uppercase tracking-wider backdrop-blur">
                  <Sparkles className="h-3 w-3 text-[hsl(var(--grad-2))]" />
                  Featured
                </span>
              ) : null}
            </div>

            {/* Top-right: floating top techs */}
            <div className="absolute right-4 top-4 flex flex-wrap justify-end gap-1.5">
              {project.tech.slice(0, 3).map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded-full border border-border/70 bg-background/80 px-2.5 py-1 text-[10px] font-medium backdrop-blur"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* BODY side */}
          <div className="relative flex flex-col gap-5 p-6 sm:p-8">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                {project.tagline}
              </p>
              <div className="mt-2 flex items-start justify-between gap-3">
                <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                  <span className="bg-gradient-to-r from-foreground to-foreground bg-clip-text transition-all duration-500 group-hover:from-[hsl(var(--grad-1))] group-hover:to-[hsl(var(--grad-3))] group-hover:bg-gradient-to-r group-hover:text-transparent">
                    {project.name}
                  </span>
                </h3>
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border/70 bg-background/40 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-[hsl(var(--grad-2)/0.6)] group-hover:text-foreground">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>

            {/* Impact metrics */}
            {project.results.length > 0 ? (
              <div className="grid gap-2 sm:grid-cols-2">
                {project.results.slice(0, 2).map((r) => (
                  <div
                    key={r}
                    className="relative overflow-hidden rounded-xl border border-border/60 bg-background/30 p-3"
                  >
                    <div className="flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                      <TrendingUp className="h-3 w-3 text-[hsl(var(--grad-2))]" />
                      Impact
                    </div>
                    <p className="mt-1 text-sm leading-snug">{r}</p>
                  </div>
                ))}
              </div>
            ) : null}

            {/* Tech stack */}
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded-md border border-border/60 bg-background/40 px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-auto flex flex-wrap gap-2 pt-2">
              {project.links.live ? (
                <Button
                  asChild
                  className="cursor-pointer bg-gradient-accent text-white shadow-[0_10px_30px_-12px_hsl(var(--grad-1)/0.55)] hover:opacity-95"
                >
                  <a href={project.links.live} target="_blank" rel="noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    View live
                  </a>
                </Button>
              ) : null}
              {project.links.github ? (
                <Button asChild variant="outline" className="cursor-pointer backdrop-blur">
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github className="h-4 w-4" />
                    Source
                  </a>
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </motion.article>
    </Reveal>
  );
}
