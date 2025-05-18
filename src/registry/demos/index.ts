"use client";

import { RaisedButtonUsageDemos } from "./raised-button-usage";

// Import the examples to maintain backwards compatibility
import { RaisedButtonExamples } from "../examples/raised-button-examples";
import { MetalmorpismButtonExamples } from "../examples/metalmorpism-button-examples";

// A registry of component demos indexed by component ID and demo type
const componentDemos: Record<string, Record<string, React.ComponentType>> = {
    "raised-button": {
        "default": RaisedButtonExamples,
        "usage": RaisedButtonUsageDemos
    },
    "metalmorpism-button": {
        "default": MetalmorpismButtonExamples,
    },
    // Add more component demos here as they're created
};

/**
 * Gets a specific demo for a given component
 * @param componentId The ID of the component
 * @param demoType The type of demo to get (default, usage, etc.)
 * @returns A React component that renders the demo, or undefined if none exists
 */
export function getComponentDemo(componentId: string, demoType: string = "default"): React.ComponentType | undefined {
    const componentDemoTypes = componentDemos[componentId];

    if (!componentDemoTypes) {
        return undefined;
    }

    return componentDemoTypes[demoType] || componentDemoTypes["default"];
}

/**
 * Gets all available demo types for a given component
 * @param componentId The ID of the component
 * @returns An array of available demo types
 */
export function getAvailableDemoTypes(componentId: string): string[] {
    const componentDemoTypes = componentDemos[componentId];

    if (!componentDemoTypes) {
        return [];
    }

    return Object.keys(componentDemoTypes);
}
