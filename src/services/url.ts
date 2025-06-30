import type { CollectionEntry } from 'astro:content'

export function getBlogPath(post: CollectionEntry<'blog'>) {
    return post.id.replace(/\d{4}-\d{2}-\d{2}-/, '')
}
