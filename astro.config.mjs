import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: "https://brushstroke-studio.pages.dev",
  base: "/",
  build: {
    outDir: "dist",
  },
  markdown: {
    shikiConfig: {
      // Enable theme toggling between light and dark modes
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
    },
  },
  integrations: [react()],
});
