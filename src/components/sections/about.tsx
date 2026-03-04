import type { AboutData } from "@/data/portfolio";
import { User } from "lucide-react";

import { SectionShell } from "@/components/sections/section-shell";
import { Reveal } from "@/components/motion/reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AboutSection({ data }: { data: AboutData }) {
  return (
    <SectionShell
      id="about"
      eyebrow="A bit about me"
      title={data.heading}
      icon={<User className="h-5 w-5" />}
      description="A concise story that communicates clarity, ownership, and impact."
    >
      <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          <Card className="bg-card/70 p-5 backdrop-blur">
            <div className="space-y-3">
              {data.paragraphs.map((p) => (
                <p key={p} className="text-sm leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
            </div>
          </Card>
        </Reveal>

        <div className="grid gap-4">
          {data.principles.map((pr, idx) => (
            <Reveal key={pr.title} delay={0.06 * idx}>
              <Card className="bg-card/70 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-base">{pr.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{pr.description}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
