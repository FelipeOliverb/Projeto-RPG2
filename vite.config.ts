import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Projeto-RPG2/", // ESSENCIAL para GitHub Pages
});
