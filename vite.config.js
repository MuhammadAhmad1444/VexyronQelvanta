import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

// Source entry lives in /web; the production build is written to the repo
// root (index.html + assets/) so the folder can be deployed as-is.
export default defineConfig({
  plugins: [react()],
  root: 'web',
  base: './',
  publicDir: '../public',
  css: { postcss: { plugins: [tailwindcss(), autoprefixer()] } },
  build: { outDir: '..', emptyOutDir: false },
  server: { port: 5174 },
})
