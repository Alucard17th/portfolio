import type * as React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

import type { FooterData, SocialLink } from "@/data/portfolio";

const iconMap: Record<SocialLink["icon"], React.ComponentType<{ className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  x: Github,
  email: Mail,
};

export function Footer({ data }: { data: FooterData }) {
  return (
    <footer className="border-t border-border/70 bg-background/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {data.copyrightName}. All rights reserved.
        </p>

        <div className="flex items-center gap-3">
          {data.socials.map((s) => {
            const Icon = iconMap[s.icon];
            return (
              <a
                key={s.href}
                href={s.href}
                target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={s.href.startsWith("mailto:") ? undefined : "noreferrer"}
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-card text-muted-foreground transition hover:bg-accent hover:text-foreground"
                aria-label={s.label}
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
