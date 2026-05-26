import * as React from "react";
import {
  ArrowRight,
  Download,
  Mail,
  Sparkles,
  Code2,
  Server,
  Database,
  Github,
  Linkedin,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import type { HeroData } from "@/data/portfolio";
import { scrollToHash } from "@/lib/scroll";
import { portfolio } from "@/data/portfolio";

import { Button } from "@/components/ui/button";

const TECH_STACK = [
  "PHP",
  "Laravel",
  "TypeScript",
  "React",
  "Vue",
  "Nuxt",
  "Node.js",
  "Express",
  "REST APIs",
  "PostgreSQL",
  "Tailwind",
  "Docker",
];

export function HeroSection({ data }: { data: HeroData }) {
  const reduceMotion = useReducedMotion();
  const cvHref = `${import.meta.env.BASE_URL}${data.ctas.downloadCv.href.replace(/^\//, "")}`;
  const avatarSrc = `${import.meta.env.BASE_URL}nordin.png`;

  const socials = portfolio.contact.socials;
  const githubHref = socials.find((s) => s.icon === "github")?.href;
  const linkedinHref = socials.find((s) => s.icon === "linkedin")?.href;

  return (
    <section id="top" className="relative pt-10 pb-16 sm:pt-16 sm:pb-24">
      <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        {/* LEFT — copy */}
        <div className="relative">
          {/* Status pill */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-emerald-400 animate-pulse-ring" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for full-remote roles
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
            className="mt-5 text-balance text-[40px] font-semibold leading-[1.05] tracking-tight sm:text-[56px] lg:text-[64px]"
          >
            Building{" "}
            <span className="text-gradient">performant web apps</span>{" "}
            <span className="text-muted-foreground/70">&</span>{" "}
            <span className="text-gradient">scalable APIs</span>.
          </motion.h1>

          {/* Subhead */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.15 }}
            className="mt-5 max-w-xl text-pretty text-[15px] leading-relaxed text-muted-foreground sm:text-[17px]"
          >
            I'm <span className="font-medium text-foreground">Noureddine Eddallal</span> — a
            full-stack developer with 10+ years shipping production software in PHP/Laravel
            and modern JavaScript (React, Vue, Nuxt, Node).
          </motion.p>

          {/* Meta row */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.22 }}
            className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground"
          >
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1 w-1 rounded-full bg-muted-foreground/60" />
              Agadir, Morocco · GMT+0
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1 w-1 rounded-full bg-muted-foreground/60" />
              Full-remote · Flexible hours
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1 w-1 rounded-full bg-muted-foreground/60" />
              Async-friendly
            </span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button
              type="button"
              size="lg"
              onClick={() => scrollToHash(data.ctas.primary.href)}
              className="group relative overflow-hidden bg-gradient-accent text-white shadow-[0_10px_40px_-12px_hsl(var(--grad-1)/0.55)] hover:opacity-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                {data.ctas.primary.label}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </Button>

            <Button
              type="button"
              variant="outline"
              size="lg"
              onClick={() => scrollToHash(data.ctas.secondary.href)}
              className="backdrop-blur"
            >
              <Mail className="h-4 w-4" />
              {data.ctas.secondary.label}
            </Button>

            <Button asChild type="button" variant="ghost" size="lg">
              <a href={cvHref} download className="group">
                <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                {data.ctas.downloadCv.label}
              </a>
            </Button>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 flex items-center gap-2"
          >
            {githubHref ? (
              <SocialIcon href={githubHref} label="GitHub">
                <Github className="h-4 w-4" />
              </SocialIcon>
            ) : null}
            {linkedinHref ? (
              <SocialIcon href={linkedinHref} label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </SocialIcon>
            ) : null}
            <SocialIcon href={`mailto:${portfolio.contact.email}`} label="Email">
              <Mail className="h-4 w-4" />
            </SocialIcon>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            className="mt-10 grid max-w-xl gap-3 sm:grid-cols-3"
          >
            {data.stats.map((s) => (
              <div
                key={s.label}
                className="ring-gradient rounded-xl bg-card/40 p-4 backdrop-blur transition hover:bg-card/70"
              >
                <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                  {s.label}
                </p>
                <p className="mt-1 text-base font-semibold tracking-tight">
                  {s.value}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — avatar card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="relative mx-auto w-full max-w-md"
        >
          {/* Outer glow */}
          <div className="absolute -inset-8 -z-10 rounded-[36px] bg-gradient-accent opacity-30 blur-3xl" />

          {/* Floating chips */}
          {!reduceMotion && (
            <>
              <FloatChip
                className="absolute -left-6 top-10 hidden sm:flex"
                delay={0}
                icon={<Code2 className="h-3.5 w-3.5 text-[hsl(var(--grad-1))]" />}
                label="React • Vue"
              />
              <FloatChip
                className="absolute -right-4 top-28 hidden sm:flex"
                delay={1.5}
                icon={<Server className="h-3.5 w-3.5 text-[hsl(var(--grad-2))]" />}
                label="Laravel • Node"
              />
              <FloatChip
                className="absolute -right-6 bottom-32 hidden sm:flex"
                delay={3}
                icon={<Database className="h-3.5 w-3.5 text-[hsl(var(--grad-3))]" />}
                label="REST APIs"
              />
            </>
          )}

          <div className="ring-gradient relative overflow-hidden rounded-3xl bg-card/60 p-2 backdrop-blur-xl glow-soft">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-[radial-gradient(circle_at_30%_20%,hsl(var(--grad-1)/0.18),transparent_55%),radial-gradient(circle_at_75%_75%,hsl(var(--grad-2)/0.18),transparent_55%)]">
              {/* Grid texture */}
              <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] [background-size:28px_28px]" />

              {/* Avatar */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative"
                >
                  <div className="absolute -inset-4 rounded-full bg-gradient-accent opacity-40 blur-2xl" />
                  <img
                    src={avatarSrc}
                    alt={data.headline}
                    loading="eager"
                    className="relative h-44 w-44 rounded-2xl border border-border/80 object-cover shadow-2xl"
                  />
                </motion.div>
              </div>

              {/* Bottom badge */}
              <div className="absolute inset-x-3 bottom-3 flex items-center justify-between rounded-xl border border-border/70 bg-background/70 px-3 py-2 text-[11px] backdrop-blur">
                <span className="flex items-center gap-1.5 font-medium">
                  <Sparkles className="h-3 w-3 text-[hsl(var(--grad-2))]" />
                  10+ yrs full-stack
                </span>
                <span className="text-muted-foreground">v2026</span>
              </div>
            </div>

            {/* Card footer */}
            <div className="px-3 pt-3 pb-2">
              <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                Currently
              </p>
              <p className="mt-0.5 text-sm">
                Building production telehealth dashboards & APIs at{" "}
                <span className="font-medium">Jobase</span>.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Tech marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative mt-16 overflow-hidden"
      >
        <p className="mb-4 text-center text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Stack I work with daily
        </p>
        <div className="relative [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="flex w-max animate-marquee gap-3 will-change-transform">
            {[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-accent" />
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  const isMail = href.startsWith("mailto:");
  return (
    <a
      href={href}
      aria-label={label}
      target={isMail ? undefined : "_blank"}
      rel={isMail ? undefined : "noreferrer"}
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card/60 text-muted-foreground backdrop-blur transition hover:-translate-y-0.5 hover:border-[hsl(var(--grad-1)/0.6)] hover:text-foreground"
    >
      {children}
    </a>
  );
}

function FloatChip({
  className,
  icon,
  label,
  delay,
}: {
  className?: string;
  icon: React.ReactNode;
  label: string;
  delay: number;
}) {
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay }}
      className={`z-10 inline-flex items-center gap-1.5 rounded-full border border-border bg-card/80 px-3 py-1.5 text-xs font-medium backdrop-blur shadow-lg shadow-black/20 ${className ?? ""}`}
    >
      {icon}
      {label}
    </motion.div>
  );
}
