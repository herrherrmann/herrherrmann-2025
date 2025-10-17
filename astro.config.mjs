// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://herrherrmann.net",
  trailingSlash: "always",

  image: {
    responsiveStyles: true,
    layout: "constrained",
  },

  integrations: [sitemap()],
});
