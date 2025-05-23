"use client";

import { ComponentDisplay } from "@/components/display/component-display";
import { ComponentPropsTable } from "@/components/display/component-props-table";
import { useComponent } from "@/hooks/use-component-registry";
import { getComponentDemo, getAvailableDemoTypes } from "@/registry/demos";

interface ComponentData {
  id: string;
  name: string;
  description: string;
  category: string;
  variants: Array<{ name: string; description: string }>;
  demos?: Record<string, string>;
  props: Array<{
    name: string;
    type: string;
    description: string;
    options?: string[];
    default?: string | boolean | number;
  }>;
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
  const { component } = useComponent(componentId, initialData);

  // Dynamically get demos based on component ID
  const demoTypes = getAvailableDemoTypes(componentId);
  const hasUsageDemos = demoTypes.includes("usage");
  const DefaultDemoComponent = getComponentDemo(componentId, "default");
  const UsageDemoComponent = hasUsageDemos
    ? getComponentDemo(componentId, "usage")
    : undefined;

  if (!component) {
    return <div>Loading...</div>;
  }

  return (
    <ComponentDisplay
      title={component.name}
      description={component.description}
      about={component.about}
    >
      {UsageDemoComponent && (
        <div className="mb-8">
          <UsageDemoComponent />
        </div>
      )}

      {DefaultDemoComponent && (
        <div className="mb-8">
          <DefaultDemoComponent />
        </div>
      )}

      <ComponentPropsTable props={component.props} />
    </ComponentDisplay>
  );
}
