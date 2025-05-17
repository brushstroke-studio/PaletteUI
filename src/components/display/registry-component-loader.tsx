"use client";

import { ComponentDisplay } from "@/components/display/component-display";
import { ComponentPropsTable } from "@/components/display/component-props-table";
import { ComponentUsage } from "@/components/display/component-usage";
import { useComponent } from "@/hooks/use-component-registry";
import {
  hasComponentExamples,
  getComponentExamples,
} from "@/registry/examples";

interface ComponentData {
  id: string;
  name: string;
  description: string;
  category: string;
  variants: Array<{ name: string; description: string }>;
  examples?: Record<string, string>;
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

export function RegistryLoader({
  componentId,
  initialData,
}: RegistryLoaderProps) {
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

  // Dynamically get examples based on component ID
  const ExamplesComponent = hasComponentExamples(componentId)
    ? getComponentExamples(componentId)
    : undefined;

  return (
    <ComponentDisplay
      title={component.name}
      description={component.description}
    >
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Examples</h2>
        {ExamplesComponent ? (
          <ExamplesComponent />
        ) : (
          <div className="py-4 text-muted-foreground">
            No examples available for this component.
          </div>
        )}
      </div>

      <ComponentPropsTable props={component.props} />

      <ComponentUsage code={component.usage} />
    </ComponentDisplay>
  );
}
