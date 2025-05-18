import { cn } from "@/lib/utils";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { useEffect, useState } from "react";
import { useComponentRegistry } from "@/hooks/use-component-registry";
import { ArrowUpRight } from "lucide-react";
import { RaisedButton } from "@/registry/components/raised-button";

export default function SidebarComponent() {
  const pathname =
    typeof window === "undefined" ? "" : window.location.pathname;

  const { registry, loading, error } = useComponentRegistry();
  const [categories, setCategories] = useState<string[]>([]);
  const [componentsByCategory, setComponentsByCategory] = useState<
    Record<string, any[]>
  >({});

  // Process registry data when it loads
  useEffect(() => {
    if (registry && registry.components) {
      // Extract unique categories
      const uniqueCategories = [
        ...new Set(registry.components.map((comp) => comp.category)),
      ];
      setCategories(uniqueCategories);

      // Group components by category
      const groupedComponents = uniqueCategories.reduce((acc, category) => {
        acc[category] = registry.components
          .filter((comp) => comp.category === category)
          .map((comp) => ({
            id: comp.id,
            title: comp.name,
          }));
        return acc;
      }, {} as Record<string, any[]>);

      setComponentsByCategory(groupedComponents);
    }
  }, [registry]);

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
  ];

  // Generate items for each category
  const categoryItems = categories.map((category) => ({
    title: category,
    items:
      componentsByCategory[category]?.map((component) => ({
        title: component.title,
        href: `/docs/components/${component.id}`,
      })) || [],
  }));

  const items = [...baseItems, ...categoryItems];

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent className="p-3 pt-20">
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
        </SidebarContent>

        <SidebarFooter className="p-3 pb-5 flex items-center">
          <RaisedButton size={"sm"} color="#3b82f6">
            Brushstroke Studio
          </RaisedButton>
          <a
            href="https://github.com/brushstroke-studio/PaletteUI"
            className="flex items-center gap-2 text-sm hover:text-underline!"
            target="_blank"
          >
            <span>View on Github</span>
            <ArrowUpRight width={15} />
          </a>
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  );
}
