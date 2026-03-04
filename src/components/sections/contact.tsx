import * as React from "react";
import { Github, Linkedin, Mail, X } from "lucide-react";

import type { ContactData, SocialLink } from "@/data/portfolio";

import { SectionShell } from "@/components/sections/section-shell";
import { Reveal } from "@/components/motion/reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const iconForSocial: Record<SocialLink["icon"], React.ComponentType<{ className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  x: X,
  email: Mail,
};

export function ContactSection({ data }: { data: ContactData }) {
  return (
    <SectionShell
      id="contact"
      eyebrow="Let’s build"
      title={data.heading}
      description={data.blurb}
      icon={<Mail className="h-5 w-5" />}
    >
      <Reveal>
        <Card className="bg-card/70 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-base">Find me online</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2 rounded-lg border border-border bg-background/40 p-4 text-sm">
              <div className="flex items-center justify-between gap-3">
                <span className="text-muted-foreground">Email</span>
                <a className="font-medium hover:underline" href={`mailto:${data.email}`}>
                  {data.email}
                </a>
              </div>
              {data.phone ? (
                <div className="flex items-center justify-between gap-3">
                  <span className="text-muted-foreground">Phone</span>
                  <a className="font-medium hover:underline" href={`tel:${data.phone}`}>
                    {data.phone}
                  </a>
                </div>
              ) : null}
              {data.website ? (
                <div className="flex items-center justify-between gap-3">
                  <span className="text-muted-foreground">Website</span>
                  <a
                    className="font-medium hover:underline"
                    href={data.website}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {data.website}
                  </a>
                </div>
              ) : null}
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {(data.socials ?? []).map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={s.href.startsWith("mailto:") ? undefined : "noreferrer"}
                  className="group flex items-center justify-between rounded-lg border border-border bg-background/40 px-4 py-3 text-sm transition hover:bg-accent"
                >
                  <span className="flex items-center gap-2">
                    {React.createElement(iconForSocial[s.icon], {
                      className: "h-4 w-4 text-muted-foreground group-hover:text-foreground",
                    })}
                    {s.label}
                  </span>
                  <span className="text-xs text-muted-foreground">Open</span>
                </a>
              ))}
            </div>
          </CardContent>
        </Card>
      </Reveal>
    </SectionShell>
  );
}
