import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    {
      name: "resolve-figma-assets",
      resolveId(source) {
        if (source.startsWith("figma:asset/")) {
          const filename = source.replace("figma:asset/", "");
          return path.resolve(__dirname, "src/assets", filename);
        }
        return null;
      },
    },
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    target: "esnext",
    outDir: "dist",
    emptyOutDir: true,
  },

  server: {
    port: 3000,
    open: true,
  },
});
