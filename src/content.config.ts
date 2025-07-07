import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/data/blog",
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      coverImage: image().optional(),
      coverImageAlt: z.string().optional(),
      language: z.enum(["de", "en"]),
      tags: z.array(
        z.enum([
          "ableton",
          "accessibility",
          "android",
          "angularjs",
          "apps",
          "atom",
          "berlin",
          "book",
          "de",
          "design",
          "event",
          "everyday",
          "extension",
          "frankfurt",
          "free",
          "games",
          "hardware",
          "herrherrmann",
          "javascript",
          "music",
          "open-source",
          "react",
          "recommendations",
          "review",
          "school",
          "software",
          "software-development",
          "theater",
          "translation",
          "web",
          "wordpress",
        ]),
      ),
    }),
});

const projects = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/data/projects",
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      category: z.enum(["software", "music"]),
      status: z.enum(["active", "inactive"]),
      date: z.coerce.date(),
      image: image().optional(),
      imageAlt: z.string().optional(),
    }),
});

export const collections = {
  blog,
  projects,
};
