import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  publicDir: 'public',
  site: 'https://www.multiexam.vercel.app',
  cacheDir: './node_modules/.astro',
  compressHTML: true,
  output: 'server',
  build: {
    server: './server'
  },
  adapter: vercel()
});