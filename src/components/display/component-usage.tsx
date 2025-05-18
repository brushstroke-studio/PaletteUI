"use client";

import { RaisedButton } from "@/registry/components/raised-button";
import { ComponentPreview } from "./component-preview";

interface ComponentUsageProps {
  code: string;
  className?: string;
  language?: string;
}

export function ComponentUsage({ code }: ComponentUsageProps) {
  return (
    <ComponentPreview title="Usage" code={code}>
      <div className="space-x-2">
        <RaisedButton>Default Button</RaisedButton>
        <RaisedButton color="#3b82f6">Blue Button</RaisedButton>
      </div>
    </ComponentPreview>
  );
}
