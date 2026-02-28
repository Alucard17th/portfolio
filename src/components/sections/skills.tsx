import { Cloud, Code, Database, Server, Wrench } from "lucide-react";

import type { SkillCategory } from "@/data/portfolio";

import { SectionShell } from "@/components/sections/section-shell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Reveal } from "@/components/motion/reveal";

const iconMap = {
  code: Code,
  server: Server,
  database: Database,
  cloud: Cloud,
  wrench: Wrench,
} as const;

export function SkillsSection({ data }: { data: SkillCategory[] }) {
  return (
    <SectionShell
      id="skills"
      eyebrow="What I use to ship"
      title="Skills"
      description="A clear snapshot of strengths across the stack—optimized for recruiter scanning."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        {data.map((cat, idx) => (
          <Reveal key={cat.category} delay={0.06 * idx}>
            <Card className="bg-card/70 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-base">{cat.category}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {cat.items.map((item) => {
                  const Icon = iconMap[item.icon];
                  return (
                    <div key={item.name} className="space-y-2">
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-2">
                          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border bg-background/50">
                            <Icon className="h-4 w-4" />
                          </span>
                          <div>
                            <p className="text-sm font-medium">{item.name}</p>
                            <div className="mt-1 flex flex-wrap gap-1.5">
                              {item.highlights.map((h) => (
                                <Badge key={h} variant="subtle">
                                  {h}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {item.level}%
                        </span>
                      </div>
                      <Progress value={item.level} />
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
