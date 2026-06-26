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
    <section id={id} className={cn("py-20 sm:py-28 scroll-mt-20", className)}>
      <Reveal className={cn("max-w-2xl", centered && "mx-auto text-center")}>
        {eyebrow ? (
          <div className={cn("flex", centered ? "justify-center" : "justify-start")}>
            <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--lime)/0.3)] bg-[hsl(var(--lime)/0.07)] px-3 py-1 text-[11px] font-medium tracking-widest uppercase text-[hsl(var(--lime))]">
              {icon ? (
                <span className="[&_svg]:h-3 [&_svg]:w-3 opacity-70">
                  {icon}
                </span>
              ) : null}
              {eyebrow}
            </span>
          </div>
        ) : null}

        <h2 className={cn(
          "font-display mt-5 text-balance text-3xl italic leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl",
          centered ? "mx-auto" : "ring-lime relative inline-block pb-3"
        )}>
          {title}
        </h2>

        {description ? (
          <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground sm:text-base">
            {description}
          </p>
        ) : null}
      </Reveal>

      <div className="mt-14">{children}</div>
    </section>
  );
}
