import { defineConfig } from 'tsup';
import { sentryEsbuildPlugin } from '@sentry/esbuild-plugin';

export default defineConfig({
  entry: ['./index.ts'],
  sourcemap: true,
  outDir: 'dist',
  esbuildPlugins: [
    sentryEsbuildPlugin({
      org: process.env.SENTRY_ORG,
      project: process.env.SENTRY_PROJECT,
      authToken: process.env.SENTRY_TOKEN,
      disable: true,
      debug: true,
    }),
  ],
});

