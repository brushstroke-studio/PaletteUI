/**
 * This file defines types and interfaces for the component demo system.
 * It provides type safety for demos and helps document the expected structure.
 */

import { ReactNode } from "react";

/**
 * Represents a single demo within a component demo collection
 */
export interface Demo {
    /**
     * Unique identifier for this demo
     */
    id: string;

    /**
     * Human-readable title for this demo
     */
    title: string;

    /**
     * Detailed description of what this demo showcases
     */
    description: string;

    /**
     * The rendered demo component
     */
    component: ReactNode;

    /**
     * The code example that creates this demo, displayed for users to copy
     */
    code: string;

    /**
     * Optional tags to categorize and filter demos
     */
    tags?: string[];
}

/**
 * Represents a collection of demos for a component
 */
export interface DemoCollection {
    /**
     * Component ID this demo collection belongs to
     */
    componentId: string;

    /**
     * Demo type (e.g., "usage", "variants", "playground")
     */
    type: string;

    /**
     * Individual demos in this collection
     */
    demos: Demo[];
}

/**
 * Demo type identifiers used throughout the system
 */
export enum DemoType {
    Default = "default",
    Usage = "usage",
    Variants = "variants",
    Playground = "playground",
    Accessibility = "accessibility",
}
