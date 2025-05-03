import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        content: defineCollection({
            type: 'page',
            source: '**/*.md'
        }),
        news: defineCollection({
            type: 'page',
            source: 'news/*.md',
            schema: z.object({
                newsId: z.string(),
                draft: z.boolean(),
                date: z.date(),
            })
        }),
        archive: defineCollection({
            type: 'page',
            source: 'archive/*.md',
            schema: z.object({
                archiveId: z.string(),
                draft: z.boolean(),
                date: z.date(),
                videoId: z.string(),
                tags: z.string().array(),
            })
        })
    }
})