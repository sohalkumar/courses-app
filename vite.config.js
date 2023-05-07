import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  rollupOptions: {},
  server: {
    watch: {
      usePolling: true,
    },
  },
});
