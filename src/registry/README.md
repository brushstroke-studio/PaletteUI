# Palette UI Component Registry

This directory contains the component registry for Palette UI - a beautifully designed component library for Astro and React applications.

## Directory Structure

- `/components/` - Contains all UI component implementations
- `/demos/` - Contains comprehensive demonstrations of components with usage examples, variants, and code snippets
- `/utils/` - Helper utilities for components, like color manipulation functions

## Component Documentation Format

Each component in the `registry-data.json` file follows this structure:

```json
{
  "id": "component-id",
  "name": "Component Name",
  "description": "A concise description of the component",
  "category": "Component Category",
  "demos": {
    "basic": "Basic component usage demo",
    "variants": "Different component variants",
    "usage": "Common usage patterns and examples"
    // More specific demos...
  },
  "props": [
    {
      "name": "propName",
      "type": "PropType",
      "description": "Description of the prop",
      "options": ["option1", "option2"] // Optional, for enum-type props
    }
    // Additional props...
  ],
  "filepath": "/registry/components/component-file.tsx"
}
```

## Creating New Components

When creating a new component:

1. Add the component implementation to `/components/`
2. Create demo examples in `/demos/`
3. Register the component in `registry-data.json`
4. Ensure props are properly documented

## Best Practices

- Keep component implementations clean and focused
- Ensure all demos are comprehensive and show key features
- Include accessibility considerations in your component implementations
- Document all props clearly, including their types and possible values

For more information, see the [Palette UI documentation](https://palette-ui.com/docs).
