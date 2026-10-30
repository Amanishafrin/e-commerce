import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// Only tooling config lives in a .js file; all app code is .jsx
export default defineConfig({ plugins: [react()] });
