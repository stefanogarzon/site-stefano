import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: { globalSetup: ['tests/global-setup.ts'], hookTimeout: 300_000 },
});
