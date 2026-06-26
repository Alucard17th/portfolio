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


export function HeroSection({ data }: { data: HeroData }) {
  const reduceMotion = useReducedMotion();
  const cvHref = `${import.meta.env.BASE_URL}${data.ctas.downloadCv.href.replace(/^\//, "")}`;
  const avatarSrc = `${import.meta.env.BASE_URL}nordin.png`;

  const socials = portfolio.contact.socials;
  const githubHref = socials.find((s) => s.icon === "github")?.href;
  const linkedinHref = socials.find((s) => s.icon === "linkedin")?.href;

  return (
    <section id="top" className="relative pt-12 pb-16 sm:pt-20 sm:pb-28">
      <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        {/* LEFT — copy */}
        <div className="relative">
          {/* Status pill */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--lime)/0.3)] bg-[hsl(var(--lime)/0.07)] px-3 py-1.5 text-xs font-medium text-[hsl(var(--lime))]"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-[hsl(var(--lime))] animate-pulse-ring" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[hsl(var(--lime))]" />
            </span>
            Available for full-remote roles
          </motion.div>

          {/* Headline — DM Serif Display, italic, big */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.07 }}
            className="font-display mt-5 text-balance italic leading-[1.06] tracking-tight text-[42px] sm:text-[60px] lg:text-[72px]"
          >
            Building{" "}
            <em className="not-italic text-gradient">performant</em>{" "}
            <br className="hidden sm:block" />
            web apps &{" "}
            <em className="not-italic text-gradient">scalable APIs.</em>
          </motion.h1>

          {/* Subhead */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.18 }}
            className="mt-6 max-w-lg text-pretty text-[15px] leading-relaxed text-muted-foreground sm:text-[17px]"
          >
            I'm <span className="font-semibold text-foreground">Noureddine Eddallal</span> — a
            full-stack developer with 10+ years shipping production software in PHP/Laravel
            and modern JavaScript (React, Vue, Nuxt, Node).
          </motion.p>

          {/* Meta row */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.25 }}
            className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground font-mono-custom"
          >
            <span>Agadir, Morocco · GMT+0</span>
            <span className="h-3 w-px bg-border" />
            <span>Full-remote · Flexible hours</span>
            <span className="h-3 w-px bg-border" />
            <span>Async-friendly</span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.33 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            {/* Primary CTA — lime fill */}
            <button
              type="button"
              onClick={() => scrollToHash(data.ctas.primary.href)}
              className="group relative inline-flex h-11 items-center gap-2 overflow-hidden rounded-full bg-[hsl(var(--lime))] px-6 text-sm font-semibold text-[hsl(228_35%_5%)] shadow-[0_8px_32px_-8px_hsl(var(--lime)/0.5)] transition-all hover:shadow-[0_12px_40px_-8px_hsl(var(--lime)/0.65)] hover:-translate-y-0.5 active:translate-y-0"
            >
              {data.ctas.primary.label}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-600 group-hover:translate-x-full" />
            </button>

            {/* Secondary CTA — outline */}
            <button
              type="button"
              onClick={() => scrollToHash(data.ctas.secondary.href)}
              className="inline-flex h-11 items-center gap-2 rounded-full border border-border bg-card/50 px-6 text-sm font-medium text-foreground backdrop-blur transition hover:border-[hsl(var(--lime)/0.5)] hover:bg-card/80 hover:-translate-y-0.5"
            >
              <Mail className="h-4 w-4" />
              {data.ctas.secondary.label}
            </button>

            {/* CV download — ghost */}
            <a
              href={cvHref}
              download
              className="group inline-flex h-11 items-center gap-2 rounded-full px-5 text-sm font-medium text-muted-foreground transition hover:text-foreground"
            >
              <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              {data.ctas.downloadCv.label}
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-7 flex items-center gap-2"
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

          {/* Stats — minimal, mono numbers */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.55 }}
            className="mt-10 flex flex-wrap gap-6"
          >
            {data.stats.map((s) => (
              <div key={s.label} className="min-w-[90px]">
                <p className="font-mono-custom text-2xl font-medium text-[hsl(var(--lime))] sm:text-3xl">
                  {s.value}
                </p>
                <p className="mt-0.5 text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — avatar card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.22 }}
          className="relative mx-auto w-full max-w-[380px]"
        >
          {/* Glow behind card */}
          <div className="absolute -inset-6 -z-10 rounded-[36px] bg-[hsl(var(--lime)/0.12)] blur-3xl" />

          {/* Floating chips */}
          {!reduceMotion && (
            <>
              <FloatChip
                className="absolute -left-8 top-12 hidden sm:flex"
                delay={0}
                icon={<Code2 className="h-3.5 w-3.5 text-[hsl(var(--lime))]" />}
                label="React • Vue"
              />
              <FloatChip
                className="absolute -right-6 top-24 hidden sm:flex"
                delay={1.8}
                icon={<Server className="h-3.5 w-3.5 text-[hsl(var(--orange))]" />}
                label="Laravel • Node"
              />
              <FloatChip
                className="absolute -right-8 bottom-28 hidden sm:flex"
                delay={3.5}
                icon={<Database className="h-3.5 w-3.5 text-[hsl(var(--blue-code))]" />}
                label="REST APIs"
              />
            </>
          )}

          <div className="relative overflow-hidden rounded-3xl border border-[hsl(var(--lime)/0.2)] bg-card/70 p-2 backdrop-blur-xl glow-soft">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-[hsl(var(--card))]">
              {/* Subtle dot grid inside card */}
              <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle,hsl(var(--foreground))_1px,transparent_1px)] [background-size:20px_20px]" />

              {/* Avatar */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative"
                >
                  {/* Lime glow behind avatar */}
                  <div className="absolute -inset-5 rounded-full bg-[hsl(var(--lime)/0.25)] blur-2xl" />
                  <img
                    src={avatarSrc}
                    alt={data.headline}
                    loading="eager"
                    className="relative h-48 w-48 rounded-2xl border-2 border-[hsl(var(--lime)/0.4)] object-cover shadow-2xl"
                  />
                </motion.div>
              </div>

              {/* Bottom badge */}
              <div className="absolute inset-x-3 bottom-3 flex items-center justify-between rounded-xl border border-border/50 bg-background/80 px-3 py-2 text-[11px] backdrop-blur">
                <span className="flex items-center gap-1.5 font-medium">
                  <Sparkles className="h-3 w-3 text-[hsl(var(--lime))]" />
                  10+ yrs full-stack
                </span>
                <span className="font-mono-custom text-muted-foreground">2026</span>
              </div>
            </div>

            {/* Card footer */}
            <div className="px-3 pt-3 pb-2">
              <p className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                Currently at
              </p>
              <p className="mt-0.5 text-sm font-medium text-foreground">
                Jobase — telehealth dashboards & APIs
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Tech marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.65 }}
        className="relative mt-20 overflow-hidden"
      >
        <p className="mb-5 text-center text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground">
          Daily stack
        </p>
        <div className="relative [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="flex w-max animate-marquee gap-3 will-change-transform">
            {[...data.dailyStack, ...data.dailyStack].map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/50 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--lime)/0.8)]" />
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
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/60 text-muted-foreground backdrop-blur transition hover:-translate-y-0.5 hover:border-[hsl(var(--lime)/0.5)] hover:text-[hsl(var(--lime))]"
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
      className={`z-10 inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-card/90 px-3 py-1.5 text-xs font-medium backdrop-blur shadow-lg shadow-black/30 ${className ?? ""}`}
    >
      {icon}
      {label}
    </motion.div>
  );
}
