import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: '.',
  base: '/mri_iw/',
	server: {
    host: '0.0.0.0',
    https: false,
  	fs: {
      // Allow serving files from one level up to the project root
    	allow: ['..']
    }
  },
})
