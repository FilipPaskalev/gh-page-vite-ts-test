import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

export default defineConfig({
  base: '/gh-page-vite-ts-test/',
  plugins: [react()],
  define: {
    'process.env': process.env,
  },
})
