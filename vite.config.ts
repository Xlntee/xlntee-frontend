/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      pages: "/src/pages",
      components: "/src/components",
      src: "/src",
    },
  },
  server: {
    proxy: {
      "/api/v1": {
        target: "http://18.192.182.114:8079",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
