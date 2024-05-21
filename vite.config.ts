import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/gh-page-vite-ts-test/",
  plugins: [react()],
});
