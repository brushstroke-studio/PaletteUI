import { useEffect, useState } from "react";
import registry from "@/registry/registry-data.json";

interface ComponentData {
    id: string;
    name: string;
    description: string;
    category: string;
    about?: string;
    variants?: Array<{ name: string; description: string }>;
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

interface RegistryData {
    components: ComponentData[];
}

export function useComponentRegistry() {
    return { registry: registry as RegistryData }
};

export function useComponent(componentId: string, initialData?: ComponentData) {
    const { registry } = initialData ?
        { registry: null } :
        useComponentRegistry();

    const [component, setComponent] = useState<ComponentData | null>(initialData || null);

    useEffect(() => {
        // Skip data fetching if initialData is provided
        if (initialData) return;

        if (registry && registry.components) {
            const foundComponent = registry.components.find(c => c.id === componentId);
            setComponent(foundComponent || null);
        }
    }, [registry, componentId, initialData]);

    return {
        component,
    };
}
