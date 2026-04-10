import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  site: 'https://nipek.se',
  vite: {
    plugins: [tailwindcss()],
  },
})
