import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/store-api': {
        target: 'https://store.steampowered.com',
        base : '/Progra-Web/' , 
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/store-api/, ''),
      },
    },
  },
});
