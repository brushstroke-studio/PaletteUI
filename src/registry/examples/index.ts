"use client";

import { RaisedButtonExamples } from "./raised-button-examples";
import { MetalmorpismButtonExamples } from "./metalmorpism-button-examples";

// A registry of component examples indexed by component ID
const componentExamples: Record<string, React.ComponentType> = {
    "raised-button": RaisedButtonExamples,
    "metalmorpism-button": MetalmorpismButtonExamples,
    // Add more component examples here as they're created
    // "button": ButtonExamples,
    // "card": CardExamples,
};

/**
 * Gets the component examples for a given component ID
 * @param componentId The ID of the component to get examples for
 * @returns A React component that renders the examples, or undefined if none exists
 */
export function getComponentExamples(componentId: string): React.ComponentType | undefined {
    return componentExamples[componentId];
}

/**
 * Checks if component examples exist for a given component ID
 * @param componentId The ID of the component to check
 * @returns True if examples exist, false otherwise
 */
export function hasComponentExamples(componentId: string): boolean {
    return !!componentExamples[componentId];
}
