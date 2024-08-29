import type { GlobalConfig } from "payload";

export const Footer: GlobalConfig = {
  slug: "footer",

  //* Global Fields
  fields: [
    {
      name: "logo",
      type: "upload",
      relationTo: "media",
      label: "logo",
      required: false,
    },
  ],

  //* Admin Settings
  access: {
    read: () => true,
  },
};
