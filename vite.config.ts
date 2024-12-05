/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

export default defineConfig({
  base: '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, '.src/components'),
      '@utils': path.resolve(__dirname, '.src/utils'),
    }
  },
  server: {
    port: parseInt(import.meta.env.VITE_PORT || '5173'),
  },
  css: {
    modules: {
      generateScopedName: '[name]__[local]___[hash:base64:5]',
    },
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
