import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom', // For React components testing
    setupFiles: './test/setup.ts',
  },
});
