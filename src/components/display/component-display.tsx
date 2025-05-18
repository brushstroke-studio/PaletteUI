"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface ComponentDisplayProps {
  title: string;
  description: string;
  about?: string;
  className?: string;
  children?: React.ReactNode;
}

export function ComponentDisplay({
  title,
  description,
  className,
  about,
  children,
}: ComponentDisplayProps) {
  console.log(about);
  return (
    <div className={cn("space-y-6", className)}>
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          {title}
        </h1>
        <p className="text-lg text-muted-foreground">{description}</p>
      </div>
      {about && (
        <div className="bg-foreground/10 p-3 border-l-4 border-l-foreground text-sm text-muted-foreground">
          <Markdown
            remarkPlugins={[remarkGfm]}
            components={{
              a: ({ node, ...props }) => (
                <a
                  {...props}
                  className="text-blue-500 hover:text-blue-700"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              ),
            }}
          >
            {about}
          </Markdown>
        </div>
      )}
      <div className="space-y-8">{children}</div>
    </div>
  );
}
