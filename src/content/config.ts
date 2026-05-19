import { defineCollection, z } from "astro:content";

const articles = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(["guias", "trucos", "rankings", "configuracion", "noticias-utiles"]),
    game: z.string(),
    platforms: z.array(z.string()),
    date: z.coerce.date(),
    updated: z.coerce.date(),
    author: z.string(),
    cover: z.string(),
    tags: z.array(z.string()),
    readingTime: z.string()
  })
});

export const collections = { articles };
