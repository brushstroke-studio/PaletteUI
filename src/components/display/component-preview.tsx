import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { Code } from "astro:components";

interface ComponentPreviewProps {
  title?: string;
  description?: string;
  className?: string;
  id?: string;
  children: React.ReactNode;
  code?: string;
}

export function ComponentPreview({
  title,
  description,
  className,
  id,
  children,
  code,
}: ComponentPreviewProps) {
  const [activeTab, setActiveTab] = useState("preview");
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [highlighter, setHighlighter] = useState<any>(null);
  const [highlightedCode, setHighlightedCode] = useState<string>("");

  return (
    <div className={cn("my-4", className)} id={id}>
      {title && <h3 className="text-xl font-semibold">{title}</h3>}
      {description && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full flex justify-end"
      >
        <TabsList className="mt-4">
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code" disabled={!code}>
            Code
          </TabsTrigger>
        </TabsList>
        <TabsContent value="preview" className="w-full">
          <div className="rounded-lg border bg-background p-6">
            <div className="flex min-h-[150px] w-full items-center justify-center">
              {children}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
