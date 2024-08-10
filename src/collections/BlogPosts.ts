import type { CollectionConfig } from "payload";

export const BlogPosts: CollectionConfig = {
  slug: "posts",
  admin: {
    useAsTitle: "posts",
  },
  fields: [
    {
      name: "posts",
      type: "text",
      label: "Name",
      required: true,
      admin: {
        description:
          "The name of the post used around the site and seen in search engines. ",
      },
    },
    {
      name: "slug",
      type: "text",
      label: "Slug",
      required: true,
      admin: {
        position: "sidebar",
        description:
          "The url that appears in search engines. If you ever change this, contact Kevin first. ",
      },
    },
    { name: "content", type: "richText", label: "Content", required: true },
  ],
};
