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
  align?: "left" | "center";
};

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  icon,
  children,
  className,
  align = "left",
}: SectionShellProps) {
  const centered = align === "center";
  return (
    <section id={id} className={cn("py-20 sm:py-24 scroll-mt-20", className)}>
      <Reveal className={cn("max-w-2xl", centered && "mx-auto text-center")}>
        {eyebrow ? (
          <div className={cn("flex", centered ? "justify-center" : "justify-start")}>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
              {icon ? (
                <span className="text-foreground/80 [&_svg]:h-3.5 [&_svg]:w-3.5">
                  {icon}
                </span>
              ) : null}
              <span className="bg-gradient-to-r from-[hsl(var(--grad-1))] via-[hsl(var(--grad-2))] to-[hsl(var(--grad-3))] bg-clip-text text-transparent">
                {eyebrow}
              </span>
            </span>
          </div>
        ) : null}

        <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          {title}
        </h2>

        {description ? (
          <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground sm:text-base">
            {description}
          </p>
        ) : null}

        <div
          className={cn(
            "mt-6 h-px w-24 bg-gradient-to-r from-transparent via-[hsl(var(--grad-2)/0.7)] to-transparent",
            centered && "mx-auto"
          )}
        />
      </Reveal>

      <div className="mt-12">{children}</div>
    </section>
  );
}
