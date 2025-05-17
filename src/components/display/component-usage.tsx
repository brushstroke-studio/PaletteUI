"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ComponentUsageProps {
  code: string;
  className?: string;
}

export function ComponentUsage({ code, className }: ComponentUsageProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <h3 className="text-xl font-semibold">Usage</h3>
      <div className="rounded-md bg-slate-900 p-4 overflow-x-auto">
        <pre className="text-sm text-slate-50 font-mono">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
