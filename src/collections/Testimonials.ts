import { CollectionConfig } from "payload";

export const Testimonials: CollectionConfig = {
  slug: "testimonials",
  admin: {
    useAsTitle: "name",
  },
  fields: [{ name: "name", type: "text", label: "Name" }],
};
