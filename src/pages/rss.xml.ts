import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getCollection } from "astro:content";
import { sortBlogPosts } from "../services/date";
import { getBlogPath } from "../services/url";

export async function GET(context: APIContext) {
  const posts = sortBlogPosts(await getCollection("blog"));
  return rss({
    title: "Herr Herrmann",
    description:
      "Sebastian Herrmann’s personal blog and website about software, photography, and music projects.",
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      // description: post.data.description,
      link: `/blog/${getBlogPath(post)}/`,
      author: "Sebastian Herrmann",
      customData: `<language>${post.data.language}</language>`,
    })),
  });
}
