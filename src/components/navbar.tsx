import React from "react";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { SearchDocumentation } from "@/components/search-documentation";

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 w-screen border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex items-center justify-center">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 md:gap-6">
          <a href="/" className="flex items-center gap-2">
            <span className="hidden font-bold md:inline-block text-xl">
              Palette UI
            </span>
          </a>
          <nav className="hidden md:flex gap-6">
            <a
              href="/docs"
              className="text-foreground/60 transition-colors hover:text-foreground text-sm font-medium"
            >
              Documentation
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <SearchDocumentation />
          <a
            href="https://github.com/Brushstroke-Studio/palette-ui"
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Button>
          </a>
          <ModeToggle />
          <Button size="sm" className="hidden md:inline-flex">
            Install
          </Button>
        </div>
      </div>
    </header>
  );
}
