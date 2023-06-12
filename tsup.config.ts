// import esbuildPluginPino from "esbuild-plugin-pino";
import { copy } from 'esbuild-plugin-copy';
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
      disable: false,
      debug: true,
    }),
  ],
});

