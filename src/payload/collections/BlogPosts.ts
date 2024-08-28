import type { CollectionConfig } from "payload";
import { authenticated } from "../access/authenticated";
import { authenticatedOrPublished } from "../access/authenticatedOrPublished";
import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from "@payloadcms/plugin-seo/fields";

export const BlogPosts: CollectionConfig = {
  slug: "posts",

  //* Collection Fields
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          fields: [
            {
              name: "name",
              type: "text",
              label: "Post Title",
              required: true,
              admin: {
                description:
                  "The title of the post used around the site and seen in search engines. ",
              },
            },

            {
              name: "mainImage",
              type: "upload",
              label: "Main Image",
              relationTo: "media",
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
      name: "publishedDate",
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

  //* Admin Settings
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  admin: {
    defaultColumns: ["name", "publishedDate", "updatedAt"],
    description: "Writing brings clarity.",
    group: "Blog Posts",
    listSearchableFields: ["name"],
    pagination: {
      defaultLimit: 25,
      limits: [10, 25, 50, 100],
    },
    useAsTitle: "name",
  },
  defaultSort: "-publishedDate",
  labels: {
    singular: "Post",
    plural: "Posts",
  },
  versions: {
    drafts: true,
    maxPerDoc: 25,
  },
};
