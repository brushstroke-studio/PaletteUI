"use client";

import { ComponentPreview } from "./component-preview";

interface ComponentUsageProps {
  code: string;
  className?: string;
  language?: string;
}

export function ComponentUsage({ code }: ComponentUsageProps) {
  return (
    <ComponentPreview title="Usage" code={code}>
      <div className="space-x-2" dangerouslySetInnerHTML={{ __html: code }} />
    </ComponentPreview>
  );
}
