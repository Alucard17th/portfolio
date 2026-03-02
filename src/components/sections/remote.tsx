import type { RemoteWorkData } from "@/data/portfolio";

import { Reveal } from "@/components/motion/reveal";
import { SectionShell } from "@/components/sections/section-shell";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function RemoteWorkSection({
  data,
}: {
  data: RemoteWorkData;
}) {
  return (
    <SectionShell
      id="remote"
      eyebrow="Remote-ready"
      title={data.heading}
      description={data.blurb}
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <Reveal className="h-full">
          <Card className="h-full bg-card/70 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-base">Availability</CardTitle>
              <CardDescription>
                Timezone, hours, and communication expectations.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <div className="grid gap-2">
                <div className="flex items-center justify-between gap-4">
                  <span>Timezone</span>
                  <span className="font-medium text-foreground">{data.timezone}</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span>Hours</span>
                  <span className="font-medium text-foreground">{data.availability}</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span>English</span>
                  <span className="font-medium text-foreground">{data.englishLevel}</span>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-foreground">Work style</p>
                <ul className="mt-2 space-y-1.5">
                  {data.workStyle.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </Reveal>

        <Reveal className="h-full" delay={0.04}>
          <Card className="h-full bg-card/70 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-base">Tools</CardTitle>
              <CardDescription>
                Comfortable collaborating with modern remote tooling.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-1.5">
                {data.tools.map((t) => (
                  <Badge key={t} variant="outline">
                    {t}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </SectionShell>
  );
}
