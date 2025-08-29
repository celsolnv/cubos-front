import path from "path";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  logLevel: "info",
  publicDir: "static",
  server: {
    host: "::",
    port: 3000,
    open: false,
  },
  plugins: [react(), tailwindcss(), svgr()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
