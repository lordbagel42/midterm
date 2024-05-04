import { createEsbuildPlugin } from 'vite-plugin-esbuild';
import { purgeCss } from 'vite-plugin-tailwind-purgecss';
import { defineConfig } from 'vite';
import { createSvite } from '@svitejs/core/vite';

export default defineConfig({
  plugins: [
    createSvite(),
    createEsbuildPlugin(),
    purgeCss({
      content: ['src/**/*.svelte']
    })
  ]
});
