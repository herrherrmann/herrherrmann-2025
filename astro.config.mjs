// @ts-check
import { unified } from "@astrojs/markdown-remark";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import remarkModifiedTime from "./remark-plugins/remark-modified-time.mjs";

// https://astro.build/config
export default defineConfig({
  site: "https://herrherrmann.net",
  trailingSlash: "always",

  markdown: {
    processor: unified({
      remarkPlugins: [remarkModifiedTime],
    }),
  },

  image: {
    responsiveStyles: true,
    layout: "constrained",
  },

  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.includes("/404"),
    }),
  ],
});
