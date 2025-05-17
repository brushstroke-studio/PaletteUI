"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ComponentPreviewProps {
  title?: string;
  description?: string;
  className?: string;
  id?: string;
  children: React.ReactNode;
}

export function ComponentPreview({
  title,
  description,
  className,
  id,
  children,
}: ComponentPreviewProps) {
  return (
    <div className={cn("my-4", className)} id={id}>
      {title && <h3 className="text-xl font-semibold">{title}</h3>}
      {description && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}
      <div className="rounded-lg border bg-background p-6 mt-3">
        <div className="flex min-h-[150px] w-full items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
}
