import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    force: true,
  },
  server: {
    fs: {
      strict: true,
      allow: ["."],
      deny: ["**/backend/**"],
    },
  },
  root: ".",
  base: "./",
  build: {
    outDir: "dist",
  },
});
