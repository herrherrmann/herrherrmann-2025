import type { CollectionEntry } from "astro:content";

export function sortBlogPosts(posts: CollectionEntry<"blog">[]) {
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function getYear(date: Date) {
  return date.toISOString().slice(0, 4);
}

export function formatDate(date: Date) {
  return date.toISOString().slice(0, 10);
}

export function formatDatePretty(date: Date) {
  return date.toLocaleDateString("en-UK", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}
