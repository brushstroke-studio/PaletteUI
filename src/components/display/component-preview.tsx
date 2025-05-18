import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { CodePreview } from "./code-preview";

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

  return (
    <div className={cn("my-4 component-preview", className)} id={id}>
      {title && <h3 className="text-xl font-semibold">{title}</h3>}
      {description && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="mt-2 border-b border-none justify-start bg-transparent p-0">
          <TabsTrigger
            value="preview"
            className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-b-black shadow-none! data-[state=active]:bg-transparent"
          >
            Preview
          </TabsTrigger>
          <TabsTrigger
            value="code"
            disabled={!code}
            className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-b-black shadow-none! data-[state=active]:bg-transparent"
          >
            Code
          </TabsTrigger>
        </TabsList>
        <TabsContent value="preview" className="w-full mb-6">
          <div className="rounded-lg border bg-background p-6">
            <div className="flex min-h-[150px] w-full items-center justify-center">
              {children}
            </div>
          </div>
        </TabsContent>
        <TabsContent value="code" className="w-full mb-6">
          {code && <CodePreview code={code} />}
        </TabsContent>
      </Tabs>
    </div>
  );
}
