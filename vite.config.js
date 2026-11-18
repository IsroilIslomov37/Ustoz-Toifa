import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Relative base so the build also works from GitHub Pages or a plain folder.
export default defineConfig({ plugins: [react()], base: "./" });
