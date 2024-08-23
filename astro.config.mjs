import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  base: '/apps/abbott/yo-soy-mi-mejor-decision',
  outDir: 'apps/abbott/yo-soy-mi-mejor-decision',
  integrations: [tailwind()]
});