import * as React from "react";

import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/reveal";

type SectionShellProps = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  icon,
  children,
  className,
}: SectionShellProps) {
  return (
    <section id={id} className={cn("py-12 sm:py-16", className)}>
      <Reveal className="max-w-2xl">
        <div className="flex items-center gap-3">
          {icon ? (
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card/50 text-foreground">
              {icon}
            </span>
          ) : null}

          <div>
            {eyebrow ? (
              <p className="text-sm font-medium text-muted-foreground">{eyebrow}</p>
            ) : null}
            <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-[28px]">
              {title}
            </h2>
          </div>
        </div>

        <div className="mt-4 h-px w-full bg-[linear-gradient(to_right,transparent,hsl(var(--border)/0.7),transparent)]" />
        {description ? (
          <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
            {description}
          </p>
        ) : null}
      </Reveal>

      <div className="mt-8">{children}</div>
    </section>
  );
}
