"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ComponentPreviewProps {
  title?: string;
  description?: string;
  className?: string;
  children: React.ReactNode;
}

export function ComponentPreview({
  title,
  description,
  className,
  children,
}: ComponentPreviewProps) {
  return (
    <div className={cn("space-y-3", className)}>
      {title && <h3 className="text-xl font-semibold">{title}</h3>}
      {description && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}
      <div className="rounded-lg border bg-background p-6">
        <div className="flex min-h-[200px] w-full items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
}
