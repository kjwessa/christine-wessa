import { CollectionConfig } from "payload";

export const Testimonials: CollectionConfig = {
  slug: "testimonials",
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      type: "text",
      label: "Name",
      required: true,
      admin: {
        placeholder: "e.g. St. Therese of Lisieux",
        description: "Add the name of the person who gave you the testimonial.",
      },
    },
    {
      name: "role",
      type: "text",
      label: "Role",
      required: true,
      admin: {
        placeholder: "Saint",
        description:
          "The role of the individual such as Director of Marriage and Family Life or Pastor",
      },
    },
  ],
};
