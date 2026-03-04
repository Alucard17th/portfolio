import * as React from "react";
import { ExternalLink, FolderGit2, Github } from "lucide-react";
import { motion } from "framer-motion";

import type { PortfolioData, Project } from "@/data/portfolio";

import { SectionShell } from "@/components/sections/section-shell";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
    const list = data.items
      .filter((p) => (filter === "All" ? true : p.tech.includes(filter)))
      .sort((a, b) => Number(b.featured) - Number(a.featured));
    return list;
  }, [data.items, filter]);

  return (
    <SectionShell
      id="projects"
      eyebrow="Proof of work"
      title={data.heading}
      description={data.subheading}
      icon={<FolderGit2 className="h-5 w-5" />}
    >
      <div className="flex flex-col gap-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Tabs value={filter} onValueChange={setFilter}>
            <TabsList className="flex flex-wrap justify-start">
              {techOptions.slice(0, 7).map((t) => (
                <TabsTrigger key={t} value={t}>
                  {t}
                </TabsTrigger>
              ))}
            </TabsList>
            <TabsContent value={filter} />
          </Tabs>

          <p className="text-sm text-muted-foreground">
            Showing {visible.length} project{visible.length === 1 ? "" : "s"}
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {visible.map((project, idx) => (
            <ProjectCard key={project.id} project={project} delay={0.04 * idx} />
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

function ProjectCard({
  project,
  delay,
}: {
  project: Project;
  delay: number;
}) {
  return (
    <Reveal delay={delay}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="h-full"
      >
        <Card className="group h-full overflow-hidden bg-card/70 backdrop-blur">
          <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-border">
            <img
              src={project.image.src}
              alt={project.image.alt}
              loading="lazy"
              className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,hsl(var(--background)/0.9),transparent_55%)]" />
            {project.featured ? (
              <div className="absolute left-3 top-3">
                <Badge className="bg-background/70">Featured</Badge>
              </div>
            ) : null}
          </div>

          <CardHeader>
            <div className="flex items-start justify-between gap-4">
              <div>
                <CardTitle className="text-base sm:text-lg">
                  {project.name}
                </CardTitle>
                <CardDescription className="mt-1">
                  {project.tagline}
                </CardDescription>
              </div>
            </div>

            <div className="mt-2.5 flex flex-wrap gap-1.5">
              {project.tech.slice(0, 7).map((t) => (
                <Badge key={t} variant="outline">
                  {t}
                </Badge>
              ))}
            </div>
          </CardHeader>

          <CardContent className="space-y-3.5">
            <p className="text-sm text-muted-foreground">{project.description}</p>

            <div>
              <p className="text-sm font-medium">Impact</p>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                {project.results.map((r) => (
                  <li key={r} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>

          <CardFooter className="gap-2">
            {project.links.github ? (
              <Button asChild variant="outline" className="flex-1">
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </Button>
            ) : null}

            {project.links.live ? (
              <Button asChild className="flex-1">
                <a href={project.links.live} target="_blank" rel="noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            ) : null}
          </CardFooter>
        </Card>
      </motion.div>
    </Reveal>
  );
}
