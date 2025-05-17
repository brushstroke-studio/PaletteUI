import { useState } from "react";
import { SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

// Mock data for documentation pages - replace with actual pages in your project
const docs = [
  { title: "Getting Started", href: "/docs/getting-started" },
  { title: "Installation", href: "/docs/installation" },
  { title: "Components", href: "/docs/components" },
  { title: "Button", href: "/docs/components/button" },
  { title: "Card", href: "/docs/components/card" },
  { title: "Input", href: "/docs/components/input" },
];

export function SearchDocumentation() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant="outline"
        className="relative h-9 w-9 md:h-10 md:w-60 md:justify-start md:px-3 md:py-2 lg:w-64"
        onClick={() => setOpen(true)}
      >
        <SearchIcon className="h-4 w-4 md:mr-2" />
        <span className="hidden md:inline-flex">Search documentation...</span>
        <span className="sr-only">Search documentation</span>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search documentation..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Documentation">
            {docs.map((doc) => (
              <CommandItem
                key={doc.href}
                onSelect={() => {
                  window.location.href = doc.href;
                  setOpen(false);
                }}
              >
                <SearchIcon className="mr-2 h-4 w-4" />
                {doc.title}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
