import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export function Sidebar() {
  const pathname =
    typeof window === "undefined" ? "" : window.location.pathname;

  const [categories, setCategories] = useState<string[]>([]);
  const [componentsByCategory, setComponentsByCategory] = useState<
    Record<string, any[]>
  >({});

  // Base items for the sidebar
  const baseItems = [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
        },
        {
          title: "Components",
          href: "/docs/components",
        },
      ],
    },
    {
      title: "Components",
      items: [
        {
          title: "Raised Button",
          href: "/docs/components/raised-button",
        },
      ],
    },
  ];

  // Generate items for each category
  const categoryItems = categories.map((category) => ({
    title: category.charAt(0).toUpperCase() + category.slice(1),
    items:
      componentsByCategory[category]?.map((component) => ({
        title: component.title,
        href: `/docs/components/${component.id}`,
      })) || [],
  }));

  const items = [...baseItems, ...categoryItems];

  return (
    <div className="w-full border-border/50 border-r-2 pt-4 px-2">
      <div>
        <div className="space-y-1">
          {items.map((item) => (
            <div key={item.title} className="py-2">
              <h3 className="mb-1 text-foreground/40 px-3 text-xs">
                {item.title}
              </h3>
              <div>
                {item.items?.map((subItem) => (
                  <a
                    key={subItem.href}
                    href={subItem.href}
                    className={cn(
                      "block w-full rounded-md px-3 py-1 text-sm transition-colors",
                      pathname === subItem.href
                        ? "bg-primary/10 text-primary"
                        : "hover:bg-muted hover:text-foreground"
                    )}
                  >
                    {subItem.title}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
