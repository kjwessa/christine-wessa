import type { CollectionConfig } from "payload";
import { authenticated } from "@/payload/access/authenticated";

export const Users: CollectionConfig = {
  slug: "users",

  //* Collection Fields
  fields: [{ name: "name", type: "text", label: "Full Name", required: true }],

  //* Admin Settings
  access: {
    admin: authenticated,
    create: authenticated,
    delete: authenticated,
    read: authenticated,
    update: authenticated,
  },
  admin: {
    useAsTitle: "name",
  },
  auth: true,
};
