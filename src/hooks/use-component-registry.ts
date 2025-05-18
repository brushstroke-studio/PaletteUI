"use client";

import { useEffect, useState } from "react";

interface ComponentData {
    id: string;
    name: string;
    description: string;
    category: string;
    about?: string;
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

interface RegistryData {
    components: ComponentData[];
}

export function useComponentRegistry() {
    const [registry, setRegistry] = useState<RegistryData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function loadRegistry() {
            try {
                const response = await fetch('/src/registry/registry-data.json');
                if (!response.ok) {
                    throw new Error('Failed to load registry data');
                }

                const data = await response.json();
                setRegistry(data);
            } catch (err) {
                console.error("Error loading registry data:", err);
                setError(err instanceof Error ? err.message : 'Unknown error occurred');
            } finally {
                setLoading(false);
            }
        }

        loadRegistry();
    }, []);

    return { registry, loading, error };
}

export function useComponent(componentId: string, initialData?: ComponentData) {
    const { registry, loading, error } = initialData ?
        { registry: null, loading: false, error: null } :
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
        loading: initialData ? false : loading,
        error: initialData ? null : (component ? error : `Component ${componentId} not found`)
    };
}
