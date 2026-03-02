import * as React from "react";
import { Menu, Search } from "lucide-react";

import { portfolio } from "@/data/portfolio";
import { scrollToHash } from "@/lib/scroll";

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
  const onNav = React.useCallback((href: string) => {
    scrollToHash(href);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/55">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <button
          type="button"
          onClick={() => onNav("#top")}
          className="group inline-flex items-center gap-2 rounded-md px-2 py-1 text-sm font-semibold tracking-tight hover:bg-accent"
        >
          <span className="relative flex h-7 w-7 items-center justify-center rounded-md border border-border bg-card text-xs font-bold">
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              NE
            </span>
          </span>
          <span className="hidden sm:inline">Noureddine Eddallal</span>
          <span className="sr-only">Go to top</span>
        </button>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {portfolio.nav.map((item) => (
            <Button
              key={item.href}
              type="button"
              variant="ghost"
              className="text-sm"
              onClick={() => onNav(item.href)}
            >
              {item.label}
            </Button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="outline"
            className="hidden h-9 gap-2 px-3 md:inline-flex"
            onClick={() => window.dispatchEvent(new CustomEvent("portfolio:open-command"))}
          >
            <Search className="h-4 w-4" />
            <span>Quick nav</span>
            <span className="ml-2 rounded border border-border bg-card px-1.5 py-0.5 text-xs text-muted-foreground">
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
