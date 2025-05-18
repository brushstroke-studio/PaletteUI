"use client";

import { RaisedButton } from "@/registry/components/raised-button";
import { Button as MetalmorpismButton } from "@/registry/components/metalmorpism-button";
import { ComponentPreview } from "./component-preview";
import React from "react";

interface ComponentUsageProps {
  code: string;
  className?: string;
  language?: string;
  componentId?: string;
}

export function ComponentUsage({ code, className, componentId }: ComponentUsageProps) {
  // Dynamic component rendering based on component ID
  const renderUsageExample = () => {
    if (componentId === "metalmorpism-button" || 
        code.includes("metalmorpism-button") || 
        code.includes("Metalmorphism")) {
      return renderMetalmorphismUsage();
    }
    
    if (componentId === "raised-button" ||
        code.includes("raised-button") ||
        code.includes("RaisedButton")) {
      return renderRaisedButtonUsage();
    }

    // Default component detection based on code if no ID match
    if (code.includes("Button") && !componentId) {
      // Try to detect which button type from the code
      if (code.includes("metalmorphism") || code.includes("Metalmorphism")) {
        return renderMetalmorphismUsage();
      } else {
        return renderRaisedButtonUsage();
      }
    }

    // Fallback to raised button if no match
    return renderRaisedButtonUsage();
  };

  // Metalmorphism button usage examples
  const renderMetalmorphismUsage = () => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-4">
          <MetalmorpismButton>Get early access</MetalmorpismButton>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <MetalmorpismButton size="sm">Small</MetalmorpismButton>
          <MetalmorpismButton>Default</MetalmorpismButton>
          <MetalmorpismButton size="lg">Large</MetalmorpismButton>
          <MetalmorpismButton size="icon">+</MetalmorpismButton>
        </div>
      </div>
    );
  };

  // Raised button usage examples
  const renderRaisedButtonUsage = () => {
    return (
      <div className="space-x-2">
        <RaisedButton>Default Button</RaisedButton>
        <RaisedButton color="#3b82f6">Blue Button</RaisedButton>
      </div>
    );
  };

  return (
    <ComponentPreview title="Usage" code={code} className={className}>
      {renderUsageExample()}
    </ComponentPreview>
  );
}
