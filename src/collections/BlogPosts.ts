import type { CollectionConfig } from "payload";
import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from "@payloadcms/plugin-seo/fields";

export const BlogPosts: CollectionConfig = {
  slug: "posts",
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          fields: [
            {
              name: "name",
              type: "text",
              label: "Name",
              required: true,
              admin: {
                description:
                  "The name of the post used around the site and seen in search engines. ",
              },
            },

            {
              name: "mainImage",
              type: "upload",
              label: "Main Image",
              relationTo: "media",
              admin: {
                description:
                  "This is the image that appears on the individual post as well as the PostCard displayed around the website.",
              },
            },
            {
              name: "content",
              type: "richText",
              label: "Main Content",
              required: true,
            },
          ],
          label: "Content",
        },
        {
          name: "meta",
          label: "SEO",
          fields: [
            OverviewField({
              titlePath: "meta.title",
              descriptionPath: "meta.description",
              imagePath: "meta.image",
            }),
            MetaImageField({
              relationTo: "media",
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaDescriptionField({}),
            PreviewField({
              // if the `generateUrl` function is configured
              hasGenerateFn: true,
              // field paths to match the target field for data
              titlePath: "meta.title",
              descriptionPath: "meta.description",
            }),
          ],
        },
      ],
    },
    {
      name: "postedOn",
      type: "date",
      label: "Published Date",
      required: true,
      admin: {
        position: "sidebar",
        date: {
          pickerAppearance: "dayAndTime",
        },
        description:
          "This is the date that the article was published on. Set to a future date when scheduling a post. ",
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
          "The url that appears in search engines. If you ever change this, contact Kevin first.",
      },
    },
  ],
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "postedOn", "updatedAt"],
  },
  versions: {
    drafts: true,
    maxPerDoc: 25,
  },
  labels: {
    singular: "Post",
    plural: "Posts",
  },
};
