import { ModeToggle } from "@/components/mode-toggle";
import { SearchDocumentation } from "@/components/search-documentation";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { ThemeProvider } from "./theme-provider";
import { RaisedButton } from "@/registry/components/raised-button";

export default function Navbar() {
  return (
    <ThemeProvider defaultTheme="system">
      <header className="sticky top-0 z-50 w-screen border-b-1 border-border/50 bg-sidebar flex items-center justify-center">
        <div className="w-screen flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-2 md:gap-6">
            <div className="flex items-start flex-col -space-y-1">
              <a href="/">
                <div className="hidden font-bold md:inline-block text-xl">
                  Palette UI
                </div>
              </a>

              <a href="https://brushstroke-studio.pages.dev/" className="group">
                <div className="text-[10px] text-muted-foreground space-x-1">
                  <span>by</span>
                  <span className=" group-hover:text-blue-500! group-hover:underline ">
                    brushstroke.studio
                  </span>
                </div>
              </a>
            </div>
            {/* <nav className="hidden md:flex gap-6">
              <a
                href="/docs"
                className="text-foreground/60 transition-colors hover:text-foreground text-sm font-medium"
              >
                Documentation
              </a>
            </nav> */}
          </div>

          <div className="flex items-center gap-2">
            <SearchDocumentation />
            <a
              href="https://github.com/Brushstroke-Studio/PaletteUI"
              target="_blank"
              rel="noreferrer"
            >
              <RaisedButton size="icon">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </RaisedButton>
            </a>
            <ModeToggle />
            <a href="/docs" className="hidden md:inline-flex">
              <RaisedButton color="#2196f3">Get Started</RaisedButton>
            </a>
          </div>
        </div>
      </header>
    </ThemeProvider>
  );
}
