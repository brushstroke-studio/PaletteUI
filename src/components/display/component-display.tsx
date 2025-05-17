"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ComponentDisplayProps {
  title: string;
  description: string;
  className?: string;
  children?: React.ReactNode;
}

export function ComponentDisplay({
  title,
  description,
  className,
  children,
}: ComponentDisplayProps) {
  return (
    <div className={cn("space-y-6", className)}>
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          {title}
        </h1>
        <p className="text-lg text-muted-foreground">{description}</p>
      </div>
      <div className="space-y-8">{children}</div>
    </div>
  );
}
