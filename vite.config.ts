import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // TODO: Proxy에 관한 설명
  server: {
    proxy: {
      '/api': 'http://localhost:8000'
    }
  }
})
