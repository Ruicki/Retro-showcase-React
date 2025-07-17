import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/retro-showcase-react/', // 👈 nombre exacto del repo en GitHub
})
