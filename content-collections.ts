import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";

const posts = defineCollection({
  name: "posts",
  directory: "/posts",
  include: "**/*.mdx",
  schema: (z) => ({
    title: z.string(),
    publishedAt: z.string(),
    image: z.string(),
    description: z.string(),
    author: z.string(),
  }),
});
