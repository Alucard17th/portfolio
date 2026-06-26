import type { PortfolioData } from "@/data/portfolio";
import { Briefcase } from "lucide-react";

import { SectionShell } from "@/components/sections/section-shell";
import { Reveal } from "@/components/motion/reveal";

export function ExperienceSection({
  data,
}: {
  data: PortfolioData["experience"];
}) {
  return (
    <SectionShell
      id="experience"
      eyebrow="Career timeline"
      title={data.heading}
      icon={<Briefcase />}
      description="A results-first timeline highlighting measurable outcomes and ownership."
    >
      <div className="relative">
        {/* Vertical gradient rail */}
        <div className="absolute left-[18px] top-2 bottom-2 w-px bg-gradient-to-b from-[hsl(var(--lime)/0.7)] via-[hsl(var(--lime)/0.2)] to-transparent sm:left-[22px]" />

        <div className="space-y-5">
          {data.items.map((item, idx) => (
            <Reveal key={`${item.org}-${item.period}`} delay={0.06 * idx} direction="left">
              <div className="relative pl-12 sm:pl-16">
                {/* Dot */}
                <div className="absolute left-[10px] top-6 sm:left-[14px]">
                  <span className="relative flex h-4 w-4 items-center justify-center">
                    <span className="absolute inset-0 rounded-full bg-[hsl(var(--lime)/0.4)] blur-md" />
                    <span className="relative h-2.5 w-2.5 rounded-full bg-[hsl(var(--lime))] ring-4 ring-background" />
                  </span>
                </div>

                <div className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/50 p-5 backdrop-blur-xl transition-colors hover:border-[hsl(var(--lime)/0.35)] sm:p-6">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <div>
                      <h3 className="text-base font-semibold tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium text-[hsl(var(--lime))]">
                          {item.org}
                        </span>
                        {item.location ? ` · ${item.location}` : ""}
                      </p>
                    </div>
                    <span className="inline-flex w-fit items-center rounded-full border border-border/70 bg-background/50 px-2.5 py-0.5 text-[11px] font-mono text-muted-foreground">
                      {item.period}
                    </span>
                  </div>

                  <ul className="mt-4 space-y-2 text-sm">
                    {item.achievements.map((a) => (
                      <li key={a} className="flex gap-2.5 text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--lime)/0.7)]" />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
