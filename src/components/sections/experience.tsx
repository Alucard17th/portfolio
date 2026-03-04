import type { PortfolioData } from "@/data/portfolio";
import { Briefcase } from "lucide-react";

import { SectionShell } from "@/components/sections/section-shell";
import { Reveal } from "@/components/motion/reveal";
import { Card } from "@/components/ui/card";

export function ExperienceSection({
  data,
}: {
  data: PortfolioData["experience"];
}) {
  return (
    <SectionShell
      id="experience"
      eyebrow="Career"
      title={data.heading}
      icon={<Briefcase className="h-5 w-5" />}
      description="A results-first timeline highlighting measurable outcomes."
    >
      <div className="relative">
        <div className="absolute left-4 top-0 h-full w-px bg-border sm:left-5" />

        <div className="space-y-4">
          {data.items.map((item, idx) => (
            <Reveal key={`${item.org}-${item.period}`} delay={0.06 * idx}>
              <div className="relative pl-12 sm:pl-14">
                <div className="absolute left-3 top-6 h-3 w-3 rounded-full border border-border bg-background sm:left-4" />
                <Card className="bg-card/70 p-5 backdrop-blur">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <p className="text-sm font-semibold">
                      {item.title} · {item.org}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {item.period} • {item.location}
                    </p>
                  </div>

                  <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                    {item.achievements.map((a) => (
                      <li key={a} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground" />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
