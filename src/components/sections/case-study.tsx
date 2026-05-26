import {
  BookOpenCheck,
  Boxes,
  Lightbulb,
  ShieldCheck,
  Target,
  Workflow,
  Wrench,
} from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { SectionShell } from "@/components/sections/section-shell";

const TECH = [
  "React",
  "Vite",
  "react-router-dom",
  "TanStack Query",
  "Redux Toolkit",
  "MUI",
  "Axios",
  "Sentry",
];

export function CaseStudySection() {
  return (
    <SectionShell
      id="case-study"
      eyebrow="Flagship case study"
      title="TellyHealth — Frontend at scale"
      description="Production-grade internal web app for healthcare operations: scheduling, patient/provider management, tasks/cases/calls, and permission-gated workflows."
      icon={<BookOpenCheck />}
    >
      {/* Hero stat row */}
      <Reveal>
        <div className="relative mb-6 overflow-hidden rounded-2xl border border-border/70 bg-card/50 p-6 backdrop-blur-xl">
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-accent opacity-15 blur-3xl" />
          <div className="grid gap-5 sm:grid-cols-3">
            <Stat label="Domain" value="Healthcare ops" />
            <Stat label="Role" value="Frontend engineer" />
            <Stat label="Stack" value="React · TanStack · Redux · MUI" />
          </div>
        </div>
      </Reveal>

      <div className="grid gap-5 lg:grid-cols-2">
        <CaseCard
          icon={Target}
          title="Problem"
          description="Teams needed one secure, reliable internal app to run day-to-day healthcare operations."
          delay={0}
        >
          <BulletList
            items={[
              "Scheduling + viewing appointments / calendars",
              "Managing patients, providers, referrers",
              "Handling tasks, cases, calls",
              "Enforcing role-based access across sensitive workflows",
            ]}
          />
        </CaseCard>

        <CaseCard
          icon={Wrench}
          title="My role"
          description="Frontend engineer owning UI architecture and production hardening."
          delay={0.04}
        >
          <BulletList
            items={[
              "Routing + protected navigation",
              "API integration layer",
              "State management and app-wide providers",
              "Error monitoring and production hardening",
            ]}
          />
        </CaseCard>

        <CaseCard
          icon={Lightbulb}
          title="Solution"
          description="React + Vite SPA with authenticated + permission-gated routes."
          delay={0.08}
        >
          <div className="flex flex-wrap gap-1.5">
            {TECH.map((t) => (
              <span
                key={t}
                className="inline-flex items-center rounded-md border border-border/70 bg-background/40 px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
          <BulletList
            items={[
              "Centralized API client with token handling",
              "Scalable feature/page organization",
              "Production monitoring (tracing + profiling)",
            ]}
          />
        </CaseCard>

        <CaseCard
          icon={Boxes}
          title="Architecture"
          description="Clear separation of routing/auth, API layer, server state, and persisted client state."
          delay={0.12}
        >
          <ul className="space-y-2 text-sm">
            <ArchRow label="App shell" value="src/App.jsx" />
            <ArchRow label="Routing + auth" value="AppRoutes.jsx · ProtectedRoute.jsx" />
            <ArchRow label="Server state" value="TanStack Query (caching + invalidation)" />
            <ArchRow label="Client state" value="Redux Toolkit + redux-persist" />
            <ArchRow label="API layer" value="axiosInstance · queries · mutations" />
          </ul>
        </CaseCard>

        <CaseCard
          icon={Workflow}
          title="Key features"
          description="Permission-based modules and secure workflows."
          delay={0.16}
        >
          <BulletList
            items={[
              "Auth + 2FA + password reset flows",
              "Role/permission-based access control across major areas",
              "Scheduling & appointments + calendar views",
              "Operational workflows: tasks, cases, calls",
            ]}
          />
        </CaseCard>

        <CaseCard
          icon={ShieldCheck}
          title="Challenges & solutions"
          description="Patterns to prevent auth drift and scale access control safely."
          delay={0.2}
        >
          <div className="space-y-3 text-sm">
            <Challenge
              title="Access control at scale"
              body="Standardized permission checks via a consistent ProtectedRoute pattern and permissions mapping."
            />
            <Challenge
              title="Session reliability"
              body="Centralized API interception to detect auth expiry, clear tokens, and redirect cleanly (avoids half-authenticated UI states)."
            />
            <Challenge
              title="Production observability"
              body="Added Sentry (tracing + replay + profiling) to capture runtime errors and performance bottlenecks."
            />
          </div>
        </CaseCard>
      </div>
    </SectionShell>
  );
}

function CaseCard({
  icon: Icon,
  title,
  description,
  delay,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  delay: number;
  children: React.ReactNode;
}) {
  return (
    <Reveal delay={delay} className="h-full">
      <div className="group relative h-full overflow-hidden rounded-2xl border border-border/70 bg-card/50 p-6 backdrop-blur-xl transition-colors hover:border-[hsl(var(--grad-2)/0.45)]">
        <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-accent opacity-[0.08] blur-2xl transition-opacity duration-500 group-hover:opacity-20" />

        <div className="flex items-start gap-3">
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ring-gradient bg-card text-foreground">
            <Icon className="h-4 w-4" />
          </span>
          <div className="min-w-0">
            <h3 className="text-base font-semibold tracking-tight">{title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{description}</p>
          </div>
        </div>

        <div className="mt-5 space-y-4">{children}</div>
      </div>
    </Reveal>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 text-sm">
      {items.map((i) => (
        <li key={i} className="flex gap-2.5 text-muted-foreground">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-accent" />
          <span>{i}</span>
        </li>
      ))}
    </ul>
  );
}

function ArchRow({ label, value }: { label: string; value: string }) {
  return (
    <li className="flex items-start justify-between gap-3 rounded-lg border border-border/60 bg-background/30 px-3 py-2">
      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      <span className="text-right font-mono text-xs text-foreground/90">
        {value}
      </span>
    </li>
  );
}

function Challenge({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-lg border border-border/60 bg-background/30 p-3">
      <p className="text-sm font-semibold">{title}</p>
      <p className="mt-1 text-sm text-muted-foreground">{body}</p>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
      <p className="mt-1 text-base font-semibold tracking-tight">{value}</p>
    </div>
  );
}
