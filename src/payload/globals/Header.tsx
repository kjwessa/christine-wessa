import type { GlobalConfig } from "payload";

export const Header: GlobalConfig = {
  slug: "header",

  //* Global Fields
  fields: [
    {
      name: "logo",
      type: "upload",
      relationTo: "media",
      label: "logo",
      required: true,
    },
  ],

  //* Admin Settings
  access: {
    read: () => true,
  },
};
