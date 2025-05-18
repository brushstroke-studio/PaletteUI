"use client";

import React from "react";
import { ComponentPreview } from "@/components/display/component-preview";
import { RaisedButton } from "@/registry/components/raised-button";

// Usage examples for RaisedButton
export function RaisedButtonUsageDemos() {
  return (
    <>
      <ComponentPreview
        title="Basic Usage"
        id="basic-usage"
        description="Simple usage examples for the Raised Button component"
        code={`<div className="space-x-2">
  <RaisedButton>Default Button</RaisedButton>
  <RaisedButton color="#3b82f6">Blue Button</RaisedButton>
</div>`}
      >
        <div className="space-x-2">
          <RaisedButton>Default Button</RaisedButton>
          <RaisedButton color="#3b82f6">Blue Button</RaisedButton>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="With Link"
        id="with-link"
        description="Using Raised Button within a link component"
        code={`<a href="/docs">
  <RaisedButton color="#2196f3">Documentation</RaisedButton>
</a>`}
      >
        <a href="/docs">
          <RaisedButton color="#2196f3">Documentation</RaisedButton>
        </a>
      </ComponentPreview>

      <ComponentPreview
        title="In a Form"
        id="in-form"
        description="Using Raised Button as a submit button in a form"
        code={`
           <form onSubmit={(e) => e.preventDefault()}>
          <div className="flex gap-2 mt-2">
            <RaisedButton type="button" color="grey">
              Cancel
            </RaisedButton>
            <RaisedButton type="submit" color="green">
              Submit
            </RaisedButton>
          </div>
        </form>`}
      >
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="flex gap-2 mt-2">
            <RaisedButton type="button" color="grey">
              Cancel
            </RaisedButton>
            <RaisedButton type="submit" color="#00A36C">
              Submit
            </RaisedButton>
          </div>
        </form>
      </ComponentPreview>
    </>
  );
}
