import { cn } from "@/lib/utils";
import { Check, Copy } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { codeToHtml } from "shiki";

interface CodePreviewProps {
  code: string;
  className?: string;
  language?: string;
}

export function CodePreview({
  code,
  className,
  language = "tsx",
}: CodePreviewProps) {
  const [highlightedCode, setHighlightedCode] = useState<string>("");
  const [mounted, setMounted] = useState(false);
  const [copied, setCopied] = useState(false);
  const { theme } = useTheme();

  const renderCode = async () => {
    if (!code) return;

    try {
      const html = await codeToHtml(code, {
        lang: language,
        theme: theme === "dark" ? "vitesse-dark" : "github-light",
      });
      setHighlightedCode(html);
    } catch (error) {
      console.error("Error highlighting code:", error);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (code) {
      renderCode();
    }
  }, [code, theme, language]);

  if (!mounted || !code) {
    return null;
  }

  return (
    <div
      className={cn("relative rounded-lg border overflow-hidden", className)}
    >
      <div className="flex items-center justify-between bg-muted/80 px-4 border-b">
        <div className="text-xs text-muted-foreground">
          {language.toUpperCase()}
        </div>
        <button
          onClick={copyToClipboard}
          className="h-8 w-8 rounded-md inline-flex items-center justify-center text-muted-foreground hover:bg-muted transition-colors cursor-pointer"
          aria-label="Copy code"
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </button>
      </div>
      <div className="p-4">
        <div
          className="text-sm code"
          dangerouslySetInnerHTML={{ __html: highlightedCode }}
        />
      </div>
    </div>
  );
}
