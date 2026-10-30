import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// BASE_PATH is the folder the site is served from: "/" on a custom domain or a user site,
// "/<repo>/" on a GitHub Pages project site. The deploy workflow sets it.
export default defineConfig({
  base: process.env.BASE_PATH || '/',
  // The React page is published as /4.html; the site's front page is the hand-built public/index.html
  build: { rollupOptions: { input: '4.html' } },
  plugins: [
    react(),
    tailwindcss(),
  ],
})
