import tailwindcss from "@tailwindcss/vite";

export default {
  vite: {
    plugins: [tailwindcss()],
  },
  site: "https://brushstroke-studio.pages.dev",
  base: "/",
  build: {
    outDir: "dist",
  },
  integrations: [],
};
