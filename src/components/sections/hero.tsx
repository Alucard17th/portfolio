import { ArrowRight, Download, Mail } from "lucide-react";
import { motion } from "framer-motion";

import type { HeroData } from "@/data/portfolio";
import { scrollToHash } from "@/lib/scroll";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/motion/reveal";

export function HeroSection({ data }: { data: HeroData }) {
  const cvHref = `${import.meta.env.BASE_URL}${data.ctas.downloadCv.href.replace(/^\//, "")}`;
  const avatarSrc = `${import.meta.env.BASE_URL}nordin.png`;

  return (
    <section id="top" className="relative pb-8 pt-10 sm:pt-12">
      <div className="grid items-center gap-8 md:grid-cols-[1.35fr_0.65fr]">
        <div>
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Available for interviews
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-[52px]">
              {data.headline}
            </h1>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-[17px]">
              {data.subheadline}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-4 text-sm text-muted-foreground">{data.locationLine}</p>
          </Reveal>

          <Reveal delay={0.26}>
            <div className="mt-6 flex flex-wrap gap-2.5">
              <Button
                type="button"
                onClick={() => scrollToHash(data.ctas.primary.href)}
                className="group"
              >
                {data.ctas.primary.label}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>

              <Button
                type="button"
                variant="outline"
                onClick={() => scrollToHash(data.ctas.secondary.href)}
              >
                <Mail className="h-4 w-4" />
                {data.ctas.secondary.label}
              </Button>

              <Button
                asChild
                type="button"
                variant="secondary"
                className="border border-border"
              >
                <a href={cvHref} download>
                  <Download className="h-4 w-4" />
                  {data.ctas.downloadCv.label}
                </a>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {data.stats.map((s) => (
                <Card
                  key={s.label}
                  className="bg-card/70 p-4 backdrop-blur"
                >
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                  <p className="mt-1 text-lg font-semibold tracking-tight">{s.value}</p>
                </Card>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.18}>
          <motion.div
            className="relative mx-auto w-full max-w-sm"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="absolute -inset-6 -z-10 rounded-[28px] bg-[radial-gradient(closest-side,hsl(var(--ring)/0.22),transparent)] blur-2xl" />
            <Card className="overflow-hidden border-border bg-card/75">
              <div className="aspect-[4/5] w-full bg-[linear-gradient(135deg,hsl(var(--border)),transparent_60%)]">
                <div className="flex h-full w-full items-center justify-center">
                  <div className="flex flex-col items-center">
                    <img
                      src={avatarSrc}
                      alt={data.headline}
                      loading="lazy"
                      className="h-36 w-36 rounded-2xl border border-border object-cover shadow-sm"
                    />
                  </div>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm font-semibold">Impact snapshot</p>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li>Shipped production features end-to-end</li>
                  <li>Optimized UX + performance for conversion</li>
                  <li>Clear communicator, strong ownership</li>
                </ul>
              </div>
            </Card>
          </motion.div>
        </Reveal>
      </div>

      <div className="mt-8 flex items-center gap-3 text-xs text-muted-foreground">
        <span className="h-px flex-1 bg-border" />
        <span>Scroll</span>
        <span className="h-px flex-1 bg-border" />
      </div>
    </section>
  );
}
