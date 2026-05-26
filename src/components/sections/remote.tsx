import type { RemoteWorkData } from "@/data/portfolio";
import { Clock, Globe, Languages, Wrench } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { SectionShell } from "@/components/sections/section-shell";

export function RemoteWorkSection({ data }: { data: RemoteWorkData }) {
  const facts = [
    { icon: Globe, label: "Timezone", value: data.timezone },
    { icon: Clock, label: "Hours", value: data.availability },
    { icon: Languages, label: "English", value: data.englishLevel },
  ];

  return (
    <SectionShell
      id="remote"
      eyebrow="Remote-ready"
      title={data.heading}
      description={data.blurb}
      icon={<Globe />}
    >
      <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
        <Reveal className="h-full">
          <div className="h-full rounded-2xl border border-border/70 bg-card/50 p-6 backdrop-blur-xl">
            <div className="grid gap-3 sm:grid-cols-3">
              {facts.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="rounded-xl border border-border/60 bg-background/30 p-3"
                >
                  <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-muted-foreground">
                    <Icon className="h-3.5 w-3.5" />
                    {label}
                  </div>
                  <p className="mt-1.5 text-sm font-medium">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <p className="text-sm font-semibold">Work style</p>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {data.workStyle.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal className="h-full" delay={0.06}>
          <div className="h-full rounded-2xl border border-border/70 bg-card/50 p-6 backdrop-blur-xl">
            <div className="flex items-center gap-2">
              <Wrench className="h-4 w-4 text-muted-foreground" />
              <p className="text-sm font-semibold">Tools I collaborate with</p>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
              Comfortable plugging into established remote stacks.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {data.tools.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-background/40 px-3 py-1 text-xs font-medium transition hover:border-[hsl(var(--grad-2)/0.6)] hover:text-foreground"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-gradient-accent" />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
