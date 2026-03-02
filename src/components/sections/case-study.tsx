import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Reveal } from "@/components/motion/reveal";
import { SectionShell } from "@/components/sections/section-shell";

export function CaseStudySection() {
  return (
    <SectionShell
      id="case-study"
      eyebrow="Flagship case study"
      title="TellyHealth Frontend"
      description="Production-grade internal web app for healthcare operations: scheduling, patient/provider management, tasks/cases/calls, and permission-gated workflows."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <Reveal className="h-full">
          <Card className="h-full bg-card/70 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-base">Problem</CardTitle>
              <CardDescription>
                Teams needed one secure, reliable internal app to run day-to-day
                healthcare operations.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <ul className="space-y-1.5">
                <li>Scheduling + viewing appointments / calendars</li>
                <li>Managing patients, providers, referrers</li>
                <li>Handling tasks, cases, calls</li>
                <li>
                  Enforcing role-based access across sensitive workflows
                </li>
              </ul>
            </CardContent>
          </Card>
        </Reveal>

        <Reveal className="h-full" delay={0.04}>
          <Card className="h-full bg-card/70 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-base">My role</CardTitle>
              <CardDescription>
                Frontend engineer owning UI architecture and production hardening.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <ul className="space-y-1.5">
                <li>Routing + protected navigation</li>
                <li>API integration layer</li>
                <li>State management and app-wide providers</li>
                <li>Error monitoring and production hardening</li>
              </ul>
            </CardContent>
          </Card>
        </Reveal>

        <Reveal className="h-full" delay={0.08}>
          <Card className="h-full bg-card/70 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-base">Solution</CardTitle>
              <CardDescription>
                React + Vite SPA with authenticated + permission-gated routes.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex flex-wrap gap-1.5">
                <Badge variant="outline">React</Badge>
                <Badge variant="outline">Vite</Badge>
                <Badge variant="outline">react-router-dom</Badge>
                <Badge variant="outline">TanStack Query</Badge>
                <Badge variant="outline">Redux Toolkit</Badge>
                <Badge variant="outline">MUI</Badge>
                <Badge variant="outline">Axios</Badge>
                <Badge variant="outline">Sentry</Badge>
              </div>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li>Centralized API client with token handling</li>
                <li>Scalable feature/page organization</li>
                <li>Production monitoring (tracing + profiling)</li>
              </ul>
            </CardContent>
          </Card>
        </Reveal>

        <Reveal className="h-full" delay={0.12}>
          <Card className="h-full bg-card/70 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-base">Architecture (practical)</CardTitle>
              <CardDescription>
                Clear separation of routing/auth, API layer, server state, and
                persisted client state.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <ul className="space-y-1.5">
                <li>
                  <span className="font-medium text-foreground">App shell/providers:</span>{" "}
                  <span className="font-mono">src/App.jsx</span>
                </li>
                <li>
                  <span className="font-medium text-foreground">Routing + auth:</span>{" "}
                  <span className="font-mono">
                    src/routes/AppRoutes.jsx, ProtectedRoute.jsx
                  </span>
                </li>
                <li>
                  <span className="font-medium text-foreground">Server state:</span>{" "}
                  TanStack Query (caching + invalidation)
                </li>
                <li>
                  <span className="font-medium text-foreground">Client/auth state:</span>{" "}
                  Redux Toolkit + redux-persist
                </li>
                <li>
                  <span className="font-medium text-foreground">API layer:</span>{" "}
                  <span className="font-mono">
                    src/api/axiosInstance.js, queries.js, mutations.js
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </Reveal>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <Reveal className="h-full" delay={0.16}>
          <Card className="h-full bg-card/70 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-base">Key features</CardTitle>
              <CardDescription>
                Permission-based modules and secure workflows.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <ul className="space-y-1.5">
                <li>Auth + 2FA + password reset flows</li>
                <li>Role/permission-based access control across major areas</li>
                <li>Scheduling & appointments + calendar views</li>
                <li>Operational workflows: tasks, cases, calls</li>
              </ul>
            </CardContent>
          </Card>
        </Reveal>

        <Reveal className="h-full" delay={0.2}>
          <Card className="h-full bg-card/70 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-base">Challenges & solutions</CardTitle>
              <CardDescription>
                Patterns to prevent auth drift and scale access control safely.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <div className="space-y-1">
                <p className="font-medium text-foreground">Access control at scale</p>
                <p>
                  Standardized permissions checks using a consistent ProtectedRoute
                  pattern and permissions mapping.
                </p>
              </div>
              <div className="space-y-1">
                <p className="font-medium text-foreground">Session reliability</p>
                <p>
                  Centralized API interception to detect auth expiry, clear tokens,
                  and redirect cleanly (avoids half-authenticated UI states).
                </p>
              </div>
              <div className="space-y-1">
                <p className="font-medium text-foreground">Production observability</p>
                <p>
                  Added Sentry (tracing + replay + profiling wrapper) to capture
                  runtime errors and performance bottlenecks.
                </p>
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </SectionShell>
  );
}
