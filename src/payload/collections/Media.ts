import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  admin: {
    useAsTitle: "fileName",
  },

  fields: [
    { name: "fileName", label: "File Name", type: "text" },
    {
      name: "alt",
      type: "text",
      required: true,
    },
  ],
  access: {
    read: () => true,
  },
  upload: true,
};
