"use client";

import React, { useEffect, useState } from "react";
import { RaisedButton } from "@/registry/components/raised-button";
import { ComponentDisplay } from "./react-component-display";
import { ComponentPreview } from "./react-component-preview";
import { ComponentUsage } from "./react-component-usage";
import { ComponentPropsTable } from "./react-component-props";

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
}

export function RegistryLoader({ componentId }: RegistryLoaderProps) {
  const [componentData, setComponentData] = useState<ComponentData | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadComponentData() {
      try {
        const response = await fetch("/src/registry/registry-data.json");
        if (!response.ok) {
          throw new Error("Failed to load registry data");
        }

        const data = await response.json();
        const component = data.components.find(
          (c: ComponentData) => c.id === componentId
        );

        if (!component) {
          throw new Error(`Component ${componentId} not found in registry`);
        }

        setComponentData(component);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error occurred");
      } finally {
        setLoading(false);
      }
    }

    loadComponentData();
  }, [componentId]);

  if (loading) {
    return <div className="py-6">Loading component data...</div>;
  }

  if (error || !componentData) {
    return (
      <div className="py-6 text-red-500">
        Error: {error || "Component not found"}
      </div>
    );
  }

  // Render raised button examples
  const renderRaisedButtonExamples = () => {
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
            <div className="flex items-center gap-4">
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
        </>
      );
    }
    return null;
  };

  return (
    <ComponentDisplay
      title={componentData.name}
      description={componentData.description}
    >
      {renderRaisedButtonExamples()}

      <ComponentPropsTable props={componentData.props} />

      <ComponentUsage code={componentData.usage} />
    </ComponentDisplay>
  );
}
