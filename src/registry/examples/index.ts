"use client";

import { getComponentDemo } from "../demos";

/**
 * @deprecated Use getComponentDemo from @/registry/demos instead
 * Gets the component examples for a given component ID
 * @param componentId The ID of the component to get examples for
 * @returns A React component that renders the examples, or undefined if none exists
 */
export function getComponentExamples(componentId: string): React.ComponentType | undefined {
    return getComponentDemo(componentId, 'default');
}

/**
 * @deprecated Use getAvailableDemoTypes from @/registry/demos instead
 * Checks if component examples exist for a given component ID
 * @param componentId The ID of the component to check
 * @returns True if examples exist, false otherwise
 */
export function hasComponentExamples(componentId: string): boolean {
    const Demo = getComponentDemo(componentId, 'default');
    return !!Demo;
}
