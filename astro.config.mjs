import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  site: "https://brushstroke-studio.pages.dev",
  base: "/",
  build: {
    outDir: "dist"
  },
  integrations: [react()]
});