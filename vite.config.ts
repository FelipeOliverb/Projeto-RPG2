import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // ESSENCIAL para GitHub Pages
  base: "/Projeto-RPG2/",
});
