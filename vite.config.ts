import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
  ],
  // base é usado apenas para build, não atrapalha o dev server
  base: process.env.NODE_ENV === "production" ? "/Projeto-RPG2/" : "/",
});
