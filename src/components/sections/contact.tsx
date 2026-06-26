import * as React from "react";
import { ArrowUpRight, Copy, Check, Github, Linkedin, Mail, MapPin, Phone, Send, X } from "lucide-react";

import type { ContactData, SocialLink } from "@/data/portfolio";

import { SectionShell } from "@/components/sections/section-shell";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";

const iconForSocial: Record<SocialLink["icon"], React.ComponentType<{ className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  x: X,
  email: Mail,
};

export function ContactSection({ data }: { data: ContactData }) {
  const [copied, setCopied] = React.useState(false);

  const onCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(data.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* noop */
    }
  };

  return (
    <SectionShell
      id="contact"
      eyebrow="Let's work together"
      title={data.heading}
      description={data.blurb}
      icon={<Send />}
      align="center"
    >
      <Reveal>
        <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-[hsl(var(--lime)/0.2)] bg-card/50 p-8 backdrop-blur-xl sm:p-10">
          {/* glow */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[hsl(var(--lime)/0.08)] blur-3xl" />
          <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-[hsl(var(--orange)/0.07)] blur-3xl" />

          <div className="relative flex flex-col items-center text-center">
            <h3 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
              Have a project in mind?
            </h3>
            <p className="mt-2 max-w-md text-sm text-muted-foreground">
              I respond fast and I'm easy to work with. Drop a message — let's see if we're a fit.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${data.email}`}
                className="inline-flex h-11 items-center gap-2 rounded-full bg-[hsl(var(--lime))] px-6 text-sm font-semibold text-[hsl(228_35%_5%)] shadow-[0_8px_32px_-8px_hsl(var(--lime)/0.45)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-8px_hsl(var(--lime)/0.6)]"
              >
                <Mail className="h-4 w-4" />
                Send an email
              </a>
              <Button
                type="button"
                size="lg"
                variant="outline"
                onClick={onCopyEmail}
                className="backdrop-blur"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-emerald-400" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    Copy address
                  </>
                )}
              </Button>
            </div>

            {/* Quick info */}
            <div className="relative mt-8 grid w-full gap-3 text-left sm:grid-cols-3">
              <InfoTile icon={Mail} label="Email" value={data.email} href={`mailto:${data.email}`} />
              {data.phone ? (
                <InfoTile icon={Phone} label="Phone" value={data.phone} href={`tel:${data.phone}`} />
              ) : null}
              <InfoTile icon={MapPin} label="Based in" value="Agadir, Morocco · Remote" />
            </div>

            {/* Socials */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              {(data.socials ?? []).map((s) => {
                const Icon = iconForSocial[s.icon];
                const isMail = s.href.startsWith("mailto:");
                return (
                  <a
                    key={s.href}
                    href={s.href}
                    target={isMail ? undefined : "_blank"}
                    rel={isMail ? undefined : "noreferrer"}
                    className="group inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/40 px-4 py-2 text-sm font-medium backdrop-blur transition hover:-translate-y-0.5 hover:border-[hsl(var(--lime)/0.5)]"
                  >
                    <Icon className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" />
                    {s.label}
                    <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}

function InfoTile({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="h-full rounded-xl border border-border/60 bg-background/30 p-3 transition-colors hover:border-[hsl(var(--grad-2)/0.5)]">
      <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-muted-foreground">
        <Icon className="h-3.5 w-3.5" />
        {label}
      </div>
      <p className="mt-1 break-all text-sm font-medium">{value}</p>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}
