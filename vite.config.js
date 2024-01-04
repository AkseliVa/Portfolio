// vite.config.js
import { defineConfig } from 'vite';
import { terser } from 'terser';

export default defineConfig({
  build: {
    outDir: 'dist',
    minify: 'terser',
    rollupOptions: {
      plugins: [terser()],
    },
  },
});

