"use client";

import { useState } from "react";
import { ComponentPreview } from "@/components/display/component-preview";
import { RaisedButton } from "@/registry/components/raised-button";

// Component examples for RaisedButton
export function RaisedButtonExamples() {
  return (
    <>
      {/* <ComponentPreview
        title="Default"
        id="default"
        code={`<RaisedButton>Default Raised</RaisedButton>`}
      >
        <RaisedButton>Default</RaisedButton>
      </ComponentPreview> */}

      <ComponentPreview
        title="Color Variants"
        id="colors"
        description="Buttons with different colors"
        code={`<div className="flex items-center gap-4 flex-wrap">
  <RaisedButton color="#ff3e3e">Red</RaisedButton>
  <RaisedButton color="#4caf50">Green</RaisedButton>
  <RaisedButton color="#2196f3">Blue</RaisedButton>
  <RaisedButton color="#ff9800">Orange</RaisedButton>
  <RaisedButton color="#9c27b0">Purple</RaisedButton>
</div>`}
      >
        <div className="flex items-center gap-4 flex-wrap">
          <RaisedButton color="#ff3e3e">Red</RaisedButton>
          <RaisedButton color="#4caf50">Green</RaisedButton>
          <RaisedButton color="#2196f3">Blue</RaisedButton>
          <RaisedButton color="#ff9800">Orange</RaisedButton>
          <RaisedButton color="#9c27b0">Purple</RaisedButton>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Size Variants"
        id="sizes"
        description="Different button sizes"
        code={`<div className="flex items-center gap-4 flex-wrap">
  <RaisedButton size="sm">Small</RaisedButton>
  <RaisedButton size="default">Default</RaisedButton>
  <RaisedButton size="lg">Large</RaisedButton>
</div>`}
      >
        <div className="flex items-center gap-4 flex-wrap">
          <RaisedButton size="sm">Small</RaisedButton>
          <RaisedButton size="default">Default</RaisedButton>
          <RaisedButton size="lg">Large</RaisedButton>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Color Palette Selection"
        id="colorPicker"
        description="Select from predefined colors or choose a custom color"
        code={`// This is an advanced example with state
const AdvancedColorExample = () => {
  const [selectedColor, setSelectedColor] = useState("#3f51b5");
  
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        {["#3f51b5", "#e91e63", "#009688", "#ff5722", "#ffc107"].map((color) => (
          <button
            key={color}
            className="w-8 h-8 rounded-full border"
            style={{ backgroundColor: color }}
            onClick={() => setSelectedColor(color)}
          />
        ))}
        <input
          type="color"
          value={selectedColor}
          onChange={(e) => setSelectedColor(e.target.value)}
          className="w-8 h-8"
        />
      </div>
      <RaisedButton color={selectedColor}>
        {selectedColor}
      </RaisedButton>
    </div>
  );
};`}
      >
        <AdvancedColorExample />
      </ComponentPreview>
    </>
  );
}

// Advanced color picker component with presets
function AdvancedColorExample() {
  const [color, setColor] = useState<string>("#6366f1");

  // Predefined color palette
  const colorPalette = [
    { name: "Red", value: "#ef4444" },
    { name: "Orange", value: "#f97316" },
    { name: "Amber", value: "#f59e0b" },
    { name: "Yellow", value: "#eab308" },
    { name: "Lime", value: "#84cc16" },
    { name: "Green", value: "#22c55e" },
    { name: "Emerald", value: "#10b981" },
    { name: "Teal", value: "#14b8a6" },
    { name: "Cyan", value: "#06b6d4" },
    { name: "Sky", value: "#00bbff" },
    { name: "Blue", value: "#3b82f6" },
    { name: "Indigo", value: "#6366f1" },
    { name: "Violet", value: "#8b5cf6" },
    { name: "Purple", value: "#a855f7" },
    { name: "Fuchsia", value: "#d946ef" },
    { name: "Pink", value: "#ec4899" },
    { name: "Rose", value: "#f43f5e" },
  ];

  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="flex flex-wrap gap-2 mb-2">
        {colorPalette.map((paletteColor) => (
          <button
            key={paletteColor.value}
            onClick={() => setColor(paletteColor.value)}
            className={`w-8 h-8 rounded-md transition-all ${
              color === paletteColor.value
                ? "ring-2 ring-offset-2 ring-primary"
                : ""
            }`}
            style={{ backgroundColor: paletteColor.value }}
            title={paletteColor.name}
            aria-label={`Select ${paletteColor.name} color`}
          />
        ))}
      </div>

      <div className="flex items-center gap-3">
        <label htmlFor="customColorPicker" className="text-sm font-medium">
          Custom:
        </label>
        <input
          id="customColorPicker"
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="w-10 h-10 rounded-md cursor-pointer"
        />
        <div className="text-sm font-mono">{color}</div>
      </div>

      <div className="mt-2 flex gap-3">
        <RaisedButton color={color}>Custom Color Button</RaisedButton>
      </div>
    </div>
  );
}
