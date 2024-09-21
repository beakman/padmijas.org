import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import node from "@astrojs/node";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon(), mdx()],
  output: "hybrid",
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"]
  },
  adapter: node({
    mode: "standalone"
  })
});