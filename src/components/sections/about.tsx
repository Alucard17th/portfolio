import type { AboutData } from "@/data/portfolio";
import { GraduationCap, Layers, User, Wrench } from "lucide-react";

import { SectionShell } from "@/components/sections/section-shell";
import { Reveal } from "@/components/motion/reveal";

const principleIcons = [GraduationCap, Layers, Wrench];

export function AboutSection({ data }: { data: AboutData }) {
  return (
    <SectionShell
      id="about"
      eyebrow="About me"
      title={data.heading}
      icon={<User />}
      description="A concise story that communicates clarity, ownership, and impact."
    >
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Bio */}
        <Reveal direction="left">
          <div className="relative h-full overflow-hidden rounded-2xl border border-border/60 bg-card/50 p-6 backdrop-blur-xl sm:p-8">
            <div className="absolute -left-12 -top-12 h-40 w-40 rounded-full bg-[hsl(var(--lime)/0.1)] blur-3xl" />
            <span
              aria-hidden
              className="font-display absolute left-5 top-2 select-none text-8xl italic leading-none text-[hsl(var(--lime)/0.2)]"
            >
              "
            </span>

            <div className="relative space-y-4 pt-8">
              {data.paragraphs.map((p, i) => (
                <p
                  key={p}
                  className={
                    i === 0
                      ? "text-[15px] leading-relaxed text-foreground/90 sm:text-base"
                      : "text-sm leading-relaxed text-muted-foreground sm:text-[15px]"
                  }
                >
                  {p}
                </p>
              ))}
            </div>

            {/* Inline metric badges */}
            {data.metrics && data.metrics.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-3 border-t border-border/50 pt-5">
                {data.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="flex items-baseline gap-1.5 rounded-full border border-[hsl(var(--lime)/0.25)] bg-[hsl(var(--lime)/0.06)] px-4 py-1.5"
                  >
                    <span className="font-mono-custom text-lg font-semibold text-[hsl(var(--lime))]">
                      {m.value}
                    </span>
                    <span className="text-xs text-muted-foreground">{m.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Reveal>

        {/* Principles */}
        <div className="grid gap-4">
          {data.principles.map((pr, idx) => {
            const Icon = principleIcons[idx % principleIcons.length];
            return (
              <Reveal key={pr.title} direction="right" delay={0.07 * idx}>
                <div className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/50 p-5 backdrop-blur-xl transition-colors hover:border-[hsl(var(--lime)/0.35)]">
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[hsl(var(--lime)/0.3)] bg-[hsl(var(--lime)/0.08)] text-[hsl(var(--lime))]">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold tracking-tight">
                        {pr.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {pr.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}
