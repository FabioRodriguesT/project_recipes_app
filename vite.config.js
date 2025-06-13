/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  build: {
    // Forçar todas as imagens a serem convertidas para base64
    assetsInlineLimit: 0,
    // Impede que imagens sejam convertidas para base64
    // assetsInlineLimit: Infinity, // ou um valor muito alto como 1000000000
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./setupTests.ts",
    css: true,
    reporters: ["verbose"],
    coverage: {
      reporter: ["text", "json", "html"],
      include: ["src/**/*"],
      exclude: ["src/main.tsx", "src/fakes", "src/routes", "src/tests"],
      provider: "v8",
    },
  },
});
