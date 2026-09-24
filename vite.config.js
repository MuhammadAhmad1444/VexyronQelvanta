import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

// Standard Vite layout: `npm run build` writes the deployable site to dist/.
export default defineConfig({
  plugins: [react()],
  base: '/',
  css: { postcss: { plugins: [tailwindcss(), autoprefixer()] } },
  server: { port: 5174 },
})
