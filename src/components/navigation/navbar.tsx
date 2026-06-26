import * as React from "react";
import { Menu, Search } from "lucide-react";

import { portfolio } from "@/data/portfolio";
import { scrollToHash } from "@/lib/scroll";

import { ScrollProgress } from "@/components/navigation/scroll-progress";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/navigation/theme-toggle";

export function Navbar() {
  const [active, setActive] = React.useState<string>("#top");

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const ids = [
      "top",
      ...portfolio.nav
        .map((n) => n.href.replace(/^#/, ""))
        .filter((id) => id.length > 0),
    ];

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));

        const top = visible[0]?.target as HTMLElement | undefined;
        if (!top?.id) return;
        setActive(`#${top.id}`);
      },
      {
        root: null,
        threshold: [0.2, 0.35, 0.5, 0.65],
        rootMargin: "-20% 0px -65% 0px",
      }
    );

    for (const el of elements) observer.observe(el);

    const initial = window.location.hash;
    if (initial) setActive(initial);

    return () => observer.disconnect();
  }, []);

  const onNav = React.useCallback((href: string) => {
    scrollToHash(href);
    setActive(href);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-border/40 bg-background/70 backdrop-blur-xl supports-[backdrop-filter]:bg-background/50">
      <ScrollProgress />
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <button
          type="button"
          onClick={() => onNav("#top")}
          className="group inline-flex items-center gap-2.5 rounded-md px-1 py-1 text-sm font-semibold tracking-tight"
        >
          <span className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg bg-[hsl(var(--lime))] text-[11px] font-bold text-[hsl(228_35%_5%)] shadow-[0_0_16px_hsl(var(--lime)/0.4)]">
            NE
          </span>
          <span className="hidden sm:inline text-foreground/80 transition group-hover:text-foreground">
            Noureddine<span className="text-muted-foreground">.dev</span>
          </span>
          <span className="sr-only">Go to top</span>
        </button>

        <nav className="hidden items-center gap-0.5 md:flex" aria-label="Primary">
          {portfolio.nav.map((item) => {
            const isActive = item.href === active;
            return (
              <button
                key={item.href}
                type="button"
                onClick={() => onNav(item.href)}
                className={
                  "relative inline-flex h-9 cursor-pointer items-center rounded-md px-3.5 text-sm transition-colors " +
                  (isActive
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground")
                }
              >
                {item.label}
                {isActive ? (
                  <span className="absolute inset-x-3 -bottom-px h-px bg-[hsl(var(--lime))]" />
                ) : null}
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="outline"
            className="hidden h-9 gap-2 px-3 md:inline-flex border-border/60"
            onClick={() => window.dispatchEvent(new CustomEvent("portfolio:open-command"))}
          >
            <Search className="h-4 w-4" />
            <span>Quick nav</span>
            <span className="ml-2 rounded border border-border bg-card px-1.5 py-0.5 text-xs text-muted-foreground font-mono-custom">
              Ctrl K
            </span>
          </Button>

          <ThemeToggle />

          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button type="button" variant="outline" size="icon" aria-label="Open menu">
                  <Menu className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-56 !bg-[hsl(var(--popover))] opacity-100 backdrop-blur-none"
              >
                {portfolio.nav.map((item) => (
                  <DropdownMenuItem
                    key={item.href}
                    className={item.href === active ? "bg-accent" : undefined}
                    onSelect={() => onNav(item.href)}
                  >
                    {item.label}
                  </DropdownMenuItem>
                ))}
                <Separator className="my-1" />
                <DropdownMenuItem
                  onSelect={() =>
                    window.dispatchEvent(new CustomEvent("portfolio:open-command"))
                  }
                >
                  Quick nav
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}
