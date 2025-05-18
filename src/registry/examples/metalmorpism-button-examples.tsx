"use client";

import React from "react";
import { ComponentPreview } from "@/components/display/component-preview";
import { Button } from "../components/metalmorpism-button";

export function MetalmorpismButtonExamples() {
  return (
    <>
      <ComponentPreview
        title="Default"
        id="default"
        description="Basic metalmorphism button with default styling"
        code={`<Button>Get early access</Button>`}
      >
        <div className="flex justify-center">
          <Button>Get early access</Button>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Size Variants"
        id="sizes"
        description="Different button sizes for various use cases"
        code={`<div className="flex items-center gap-4 flex-wrap">
  <Button size="sm">Small</Button>
  <Button size="default">Default</Button>
  <Button size="lg">Large</Button>
  <Button size="icon">
    <span className="text-lg">+</span>
  </Button>
</div>`}
      >
        <div className="flex items-center gap-4 flex-wrap">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon">
            <span className="text-lg">+</span>
          </Button>
        </div>
      </ComponentPreview>
    </>
  );
}
