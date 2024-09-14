/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', //sets the base to root
  plugins: [react()],
  server: {
    port: 3000,
  },
  test: {
    globals: true,
    includeSource: ['src/**/*.{js,ts}'],
    environment: 'jsdom',
    setupFiles: './src/tests/setupTests.ts',
    css: false,
    coverage: {
      reporter: ['text', 'json', 'html'],
      include: ['src/**'],
      exclude: ['src/test/**'],
    },
  },
});
