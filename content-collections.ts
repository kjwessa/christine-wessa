import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";

const posts = defineCollection({
  name: "posts",
  directory: "src/app/posts",
  include: "**/*.mdx",
  schema: (z) => ({
    title: z.string(),
    slug: z.string(),
    publishedAt: z.string(),
    image: z.string().optional(),
    description: z.string(),
    author: z.string(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document);
    return {
      ...document,
      mdx,
    };
  },
});

export default defineConfig({
  collections: [posts],
});
