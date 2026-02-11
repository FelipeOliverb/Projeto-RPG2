import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Projeto-RPG2/',  // <= o nome do seu repositório
  plugins: [react()]
})
