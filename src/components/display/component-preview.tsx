import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

// Styles for Shiki code blocks
const shikiStyles = `
  .shiki-code-container {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  }
  
  .shiki-code-container pre {
    margin: 0;
    padding: 0;
  }
  
  .shiki-code-container code {
    counter-reset: line;
    display: grid;
  }
  
  .shiki-code-container code .line {
    padding-left: 1rem;
    padding-right: 1rem;
    min-height: 1.5rem;
    line-height: 1.5rem;
  }
  
  .shiki-code-container code .line:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
  
  .dark .shiki-code-container code .line:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }
`;

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

  // Initialize Shiki highlighter
  useEffect(() => {
    const loadHighlighter = async () => {
      const highlighter = await getHighlighter({
        themes: ["github-dark", "github-light"],
        langs: ["tsx", "jsx", "javascript", "typescript"],
      });
      setHighlighter(highlighter);
    };

    loadHighlighter();
  }, []);

  // Update highlighted code when theme or code changes
  useEffect(() => {
    if (highlighter && code && mounted) {
      const themeName = theme === "dark" ? "github-dark" : "github-light";
      const html = highlighter.codeToHtml(code, {
        lang: "tsx",
        theme: themeName,
      });
      setHighlightedCode(html);
    }
  }, [highlighter, code, theme, mounted]);

  // Avoid hydration mismatch by only rendering theme-dependent elements after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={cn("my-4", className)} id={id}>
      {/* Inject Shiki styles */}
      <style dangerouslySetInnerHTML={{ __html: shikiStyles }} />

      {title && <h3 className="text-xl font-semibold">{title}</h3>}
      {description && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}
      <div className="rounded-lg border bg-background p-6 mt-3">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code" disabled={!code}>
              Code
            </TabsTrigger>
          </TabsList>
          <TabsContent value="preview" className="w-full">
            <div className="flex min-h-[150px] w-full items-center justify-center">
              {children}
            </div>
          </TabsContent>
          <TabsContent value="code" className="w-full">
            {code && mounted && highlightedCode ? (
              <div
                className="rounded-lg overflow-hidden font-mono text-sm shiki-code-container"
                dangerouslySetInnerHTML={{ __html: highlightedCode }}
                style={{
                  padding: "1rem",
                  borderRadius: "0.5rem",
                  lineHeight: "1.5",
                  maxHeight: "400px",
                  overflow: "auto",
                }}
              />
            ) : (
              <div className="flex min-h-[150px] w-full items-center justify-center text-muted-foreground">
                {!code
                  ? "No code sample available"
                  : "Loading syntax highlighter..."}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
