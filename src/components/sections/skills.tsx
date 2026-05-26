import { Cloud, Code, Database, Sparkles, Server, Wrench } from "lucide-react";
import { motion, useInView } from "framer-motion";
import * as React from "react";

import type { SkillCategory } from "@/data/portfolio";

import { SectionShell } from "@/components/sections/section-shell";
import { Reveal } from "@/components/motion/reveal";

const iconMap = {
  code: Code,
  server: Server,
  database: Database,
  cloud: Cloud,
  wrench: Wrench,
} as const;

const categoryIcon: Record<SkillCategory["category"], React.ComponentType<{ className?: string }>> = {
  Frontend: Code,
  Backend: Server,
  Database: Database,
  DevOps: Cloud,
  Tools: Wrench,
};

export function SkillsSection({ data }: { data: SkillCategory[] }) {
  return (
    <SectionShell
      id="skills"
      eyebrow="What I ship with"
      title="Skills & expertise"
      description="A clear snapshot of strengths across the stack — built from years of shipping production software."
      icon={<Sparkles />}
    >
      <div className="grid gap-5 md:grid-cols-2">
        {data.map((cat, idx) => {
          const CatIcon = categoryIcon[cat.category];
          return (
            <Reveal key={cat.category} delay={0.06 * idx} className="h-full">
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border/70 bg-card/50 p-6 backdrop-blur-xl transition-colors hover:border-[hsl(var(--grad-2)/0.45)]">
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-accent opacity-[0.08] blur-2xl transition-opacity duration-500 group-hover:opacity-20" />

                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl ring-gradient bg-card text-foreground">
                    <CatIcon className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold tracking-tight">
                      {cat.category}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {cat.items.length} focus area{cat.items.length === 1 ? "" : "s"}
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-5">
                  {cat.items.map((item) => {
                    const Icon = iconMap[item.icon];
                    return (
                      <div key={item.name} className="space-y-2">
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex items-center gap-2.5 min-w-0">
                            <Icon className="h-4 w-4 shrink-0 text-muted-foreground" />
                            <p className="truncate text-sm font-medium">
                              {item.name}
                            </p>
                          </div>
                          <span className="text-xs font-mono text-muted-foreground">
                            {item.level}%
                          </span>
                        </div>

                        <GradientProgress value={item.level} />

                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {item.highlights.map((h) => (
                            <span
                              key={h}
                              className="inline-flex items-center rounded-md border border-border/60 bg-background/40 px-2 py-0.5 text-[11px] text-muted-foreground"
                            >
                              {h}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </SectionShell>
  );
}

function GradientProgress({ value }: { value: number }) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <div
      ref={ref}
      className="relative h-1.5 w-full overflow-hidden rounded-full bg-secondary/60"
    >
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: inView ? `${value}%` : 0 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="relative h-full rounded-full bg-gradient-accent"
      >
        <span className="absolute inset-0 shimmer rounded-full" />
      </motion.div>
    </div>
  );
}
