// @ts-check
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://herrherrmann.net",
  trailingSlash: "always",

  image: {
    responsiveStyles: true,
    layout: "constrained",
  },

  integrations: [mdx(), sitemap()],
});
