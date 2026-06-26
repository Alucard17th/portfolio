import type * as React from "react";
import { ArrowUp, Github, Linkedin, Mail, X } from "lucide-react";

import type { FooterData, SocialLink } from "@/data/portfolio";
import { scrollToHash } from "@/lib/scroll";

const iconMap: Record<SocialLink["icon"], React.ComponentType<{ className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  x: X,
  email: Mail,
};

export function Footer({ data }: { data: FooterData }) {
  return (
    <footer className="relative mt-16 border-t border-border/60 bg-background/40 backdrop-blur">
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[hsl(var(--lime)/0.4)] to-transparent" />

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          {/* Branding */}
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[hsl(var(--lime))] text-[11px] font-bold text-[hsl(228_35%_5%)] shadow-[0_0_16px_hsl(var(--lime)/0.35)]">
              NE
            </span>
            <div>
              <p className="text-sm font-semibold tracking-tight">{data.copyrightName}</p>
              <p className="text-xs text-muted-foreground">
                © {new Date().getFullYear()} · Full-Stack Developer
              </p>
            </div>
          </div>

          {/* Socials + back to top */}
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
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/70 bg-card/60 text-muted-foreground backdrop-blur transition hover:-translate-y-0.5 hover:border-[hsl(var(--lime)/0.5)] hover:text-[hsl(var(--lime))]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}

            <button
              type="button"
              onClick={() => scrollToHash("#top")}
              aria-label="Back to top"
              className="ml-1 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[hsl(var(--lime)/0.3)] bg-[hsl(var(--lime)/0.08)] text-[hsl(var(--lime))] backdrop-blur transition hover:-translate-y-0.5 hover:bg-[hsl(var(--lime)/0.15)]"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
