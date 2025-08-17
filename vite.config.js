import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // allows import like "@/components/..."
    },
  },
  build: {
    outDir: 'dist', // Vercel expects 'dist' for output
    sourcemap: true, // helpful for debugging build errors
  },
  server: {
    port: 3000,
    open: true,
  },
})
