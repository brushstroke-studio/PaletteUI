"use client";

import React from "react";
import { RaisedButton } from "@/registry/components/raised-button";
import { ComponentDisplay } from "@/components/ui/component-display";
import { ComponentPreview } from "@/components/ui/component-preview";
import { ComponentUsage } from "@/components/ui/component-usage";
import { ComponentPropsTable } from "@/components/ui/component-props-table";
import { useComponent } from "@/hooks/use-component-registry";

interface ComponentData {
  id: string;
  name: string;
  description: string;
  category: string;
  variants: Array<{ name: string; description: string }>;
  props: Array<{
    name: string;
    type: string;
    description: string;
    options?: string[];
    default?: string | boolean | number;
  }>;
  usage: string;
  filepath: string;
}

interface RegistryLoaderProps {
  componentId: string;
  initialData?: ComponentData;
}

export function RegistryLoader({ componentId, initialData }: RegistryLoaderProps) {
  // If initialData is provided, use it directly instead of fetching
  const { component, loading, error } = useComponent(componentId, initialData);

  if (loading) {
    return <div className="py-6">Loading component data...</div>;
  }

  if (error || !component) {
    return (
      <div className="py-6 text-red-500">
        Error: {error || "Component not found"}
      </div>
    );
  }

  // Render component examples based on the component ID
  const renderComponentExamples = () => {
    if (componentId === "raised-button") {
      return (
        <>
          <ComponentPreview
            title="Default Raised Button"
            description="The standard raised button with medium elevation"
          >
            <RaisedButton variant="raised" elevation="medium">
              Default Raised
            </RaisedButton>
          </ComponentPreview>

          <ComponentPreview
            title="Low Elevation"
            description="Raised button with low elevation"
          >
            <RaisedButton variant="raised" elevation="low">
              Low Elevation
            </RaisedButton>
          </ComponentPreview>

          <ComponentPreview
            title="High Elevation"
            description="Raised button with high elevation"
          >
            <RaisedButton variant="raised" elevation="high">
              High Elevation
            </RaisedButton>
          </ComponentPreview>

          <ComponentPreview
            title="Size Variants"
            description="Different button sizes"
          >
            <div className="flex items-center gap-4 flex-wrap">
              <RaisedButton variant="raised" size="sm">
                Small
              </RaisedButton>
              <RaisedButton variant="raised" size="default">
                Default
              </RaisedButton>
              <RaisedButton variant="raised" size="lg">
                Large
              </RaisedButton>
            </div>
          </ComponentPreview>

          <ComponentPreview
            title="Variant Examples"
            description="Different button variants"
          >
            <div className="flex items-center gap-4 flex-wrap">
              <RaisedButton variant="default">Default</RaisedButton>
              <RaisedButton variant="outline">Outline</RaisedButton>
              <RaisedButton variant="secondary">Secondary</RaisedButton>
              <RaisedButton variant="destructive">Destructive</RaisedButton>
              <RaisedButton variant="ghost">Ghost</RaisedButton>
              <RaisedButton variant="link">Link</RaisedButton>
              <RaisedButton variant="flat">Flat</RaisedButton>
            </div>
          </ComponentPreview>
        </>
      );
    }

    // For other component types, return null or a placeholder
    return (
      <div className="py-4 text-muted-foreground">
        No preview available for this component.
      </div>
    );
  };

  return (
    <ComponentDisplay
      title={component.name}
      description={component.description}
    >
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Examples</h2>
        {renderComponentExamples()}
      </div>

      <ComponentPropsTable props={component.props} />

      <ComponentUsage code={component.usage} />
    </ComponentDisplay>
  );
}
