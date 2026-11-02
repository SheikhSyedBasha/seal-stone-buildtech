import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // GitHub Pages serves this repo as a project page under /seal-stone-buildtech/
  // (repo is not <user>.github.io). A base of '/' makes the browser request
  // /assets/* from the domain root -> 404. Use the repo sub-path instead.
  base: '',
})
