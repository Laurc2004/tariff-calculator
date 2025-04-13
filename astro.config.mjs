// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  // 为GitHub Pages设置base URL
  site:'https://laurc2004.github.io',
  base: '/tariff-calculator',
  // 优化性能
  build: {
    inlineStylesheets: 'auto'
  }
});
