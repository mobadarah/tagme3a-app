import { z, defineCollection, type SchemaContext } from 'astro:content';
import { s } from "astro-toolkit/schema"

export function projectsSchema({ image }: SchemaContext) {
  return z
    .object({
      title: s.title,
      description: s.description,
      image: s.OGImage({ image }),
      keywords: s.keywords,
      draft: s.draft,
      authors: z.string().optional(),
      category: z.string(),
    })
    .strict()
}

const projects = defineCollection({
  type: 'content',
  schema: projectsSchema,
})

const collections = { projects }

export default collections