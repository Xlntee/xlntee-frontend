/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { visualizer } from "rollup-plugin-visualizer";
import { splitVendorChunkPlugin } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), splitVendorChunkPlugin(), visualizer({ open: false })], // make visualizer true to see diagram of libs
  resolve: {
    alias: {
      pages: "/src/pages",
      components: "/src/components",
      src: "/src",
      styles: "/src/styles"
    }
  },
  server: {
    proxy: {
      "/api/v1": {
        // target: "http://54.93.209.213:8079/",
        target: "http://3.127.136.226:8079/",
        changeOrigin: true,
        secure: false
      }
    }
  },
  build: {
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      treeshake: true,
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) return id.toString().split("node_modules/")[1].split("/")[0].toString();
        }
      }
    }
  }
});
