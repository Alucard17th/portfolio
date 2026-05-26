import type * as React from "react";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

import type { FooterData, SocialLink } from "@/data/portfolio";
import { scrollToHash } from "@/lib/scroll";

const iconMap: Record<SocialLink["icon"], React.ComponentType<{ className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  x: Github,
  email: Mail,
};

export function Footer({ data }: { data: FooterData }) {
  return (
    <footer className="relative mt-16 border-t border-border/60 bg-background/40 backdrop-blur">
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[hsl(var(--grad-2)/0.5)] to-transparent" />

      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg ring-gradient bg-card text-xs font-bold">
            <span className="bg-gradient-to-br from-[hsl(var(--grad-1))] via-[hsl(var(--grad-2))] to-[hsl(var(--grad-3))] bg-clip-text text-transparent">
              NE
            </span>
          </span>
          <div>
            <p className="text-sm font-medium tracking-tight">
              {data.copyrightName}
            </p>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} · Crafted with care.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {data.socials.map((s) => {
            const Icon = iconMap[s.icon];
            const isMail = s.href.startsWith("mailto:");
            return (
              <a
                key={s.href}
                href={s.href}
                target={isMail ? undefined : "_blank"}
                rel={isMail ? undefined : "noreferrer"}
                aria-label={s.label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border/70 bg-card/60 text-muted-foreground backdrop-blur transition hover:-translate-y-0.5 hover:border-[hsl(var(--grad-2)/0.6)] hover:text-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}

          <button
            type="button"
            onClick={() => scrollToHash("#top")}
            aria-label="Back to top"
            className="ml-1 inline-flex h-10 w-10 items-center justify-center rounded-lg ring-gradient bg-card/60 text-foreground backdrop-blur transition hover:-translate-y-0.5"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
