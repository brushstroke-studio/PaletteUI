# Component Demos

This folder contains comprehensive demonstrations for all Palette UI components. Unlike the older "examples" approach, demos provide a more structured and thorough way to showcase component capabilities.

## Directory Structure

Each component has its own dedicated demo files:

- `[component-id]-usage.tsx` - Demonstrates common usage patterns and integration examples
- `[component-id]-variants.tsx` - Shows different visual and functional variants of the component
- `[component-id]-playground.tsx` - Interactive playground for experimenting with component props (when available)

## Demo Organization

Demos are organized by component ID and demo type. The `index.ts` file provides utility functions for accessing these demos:

```typescript
// Get a specific demo for a component
const UsageDemo = getComponentDemo("button", "usage");

// Get all available demo types for a component
const demoTypes = getAvailableDemoTypes("button"); // ["default", "usage", "variants"]
```

## Adding New Demos

To add demos for a new component:

1. Create demo files in this directory named according to the component ID
2. Register the demos in the `index.ts` file
3. Update the component's entry in `registry-data.json` to include the demo descriptions

## Demo Implementation Guidelines

- Each demo should be self-contained and focus on a specific aspect of the component
- Include a clear title, description, and code example for each demo
- Organize multiple related examples within a single demo file using the `ComponentPreview` component
- Showcase real-world usage scenarios where possible

For more information, see the main registry [README.md](../README.md).
