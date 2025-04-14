import { defineCollection, z } from 'astro:content'

import { glob, file } from 'astro/loaders'

const blog = defineCollection({
    loader: glob({
        pattern: '**/*.md',
        base: './src/data/blog',
    }),
    schema: z.object({
        title: z.string(),
        slug: z.string(),
        releaseDate: z.coerce.date(),
        heroImage: z
            .object({
                src: z.string(),
                alt: z.string(),
            })
            .optional(),
        tags: z.array(z.enum(['Space Probe', 'Mars Rover', 'Comet Lander'])),
    }),
})

export const collections = { blog }
