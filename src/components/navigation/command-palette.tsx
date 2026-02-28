import * as React from "react";
import { Command } from "cmdk";
import { Search } from "lucide-react";

import { portfolio } from "@/data/portfolio";
import { scrollToHash } from "@/lib/scroll";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

function useHotkeys(handler: () => void) {
  React.useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const isMac = navigator.platform.toLowerCase().includes("mac");
      const isK = e.key.toLowerCase() === "k";
      const mod = isMac ? e.metaKey : e.ctrlKey;
      if (mod && isK) {
        e.preventDefault();
        handler();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [handler]);
}

export function CommandPalette() {
  const [open, setOpen] = React.useState(false);

  useHotkeys(() => setOpen((v) => !v));

  React.useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener("portfolio:open-command" as never, onOpen as never);
    return () =>
      window.removeEventListener(
        "portfolio:open-command" as never,
        onOpen as never
      );
  }, []);

  const run = React.useCallback((href: string) => {
    setOpen(false);
    scrollToHash(href);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-xl p-0">
        <DialogHeader className="px-6 pt-6">
          <DialogTitle>Quick navigation</DialogTitle>
          <DialogDescription>
            Jump to a section. Tip: press Ctrl K anytime.
          </DialogDescription>
        </DialogHeader>

        <div className="px-6 pb-6">
          <Command
            className="overflow-hidden rounded-lg border border-border bg-background"
            loop
          >
            <div className="flex items-center gap-2 border-b border-border px-3">
              <Search className="h-4 w-4 text-muted-foreground" />
              <Command.Input
                className="h-11 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                placeholder="Search sections..."
              />
            </div>

            <Command.List className="max-h-[320px] overflow-auto p-2">
              <Command.Empty className="px-2 py-6 text-sm text-muted-foreground">
                No results.
              </Command.Empty>

              <Command.Group heading="Sections" className="px-1">
                {portfolio.nav.map((item) => (
                  <Command.Item
                    key={item.href}
                    value={`${item.label} ${item.href}`}
                    onSelect={() => run(item.href)}
                    className="flex cursor-pointer select-none items-center rounded-md px-2 py-2 text-sm outline-none aria-selected:bg-accent"
                  >
                    {item.label}
                  </Command.Item>
                ))}
              </Command.Group>
            </Command.List>
          </Command>
        </div>
      </DialogContent>
    </Dialog>
  );
}
