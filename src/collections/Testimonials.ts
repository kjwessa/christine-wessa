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
        placeholder: "e.g. Saint",
        description:
          "The role of the individual such as Director of Marriage and Family Life or Pastor",
      },
    },
    {
      name: "diocese",
      type: "text",
      label: "Diocese/Provincial",
      required: true,
      admin: {
        placeholder: "e.g., Diocese of Pensacola-Tallahassee",
        description:
          "Where is the testimonial author located? For diocesan priests it would be their Diocese and for religious it would be their Provincial.",
      },
    },
    {
      name: "testimonial",
      type: "richText",
      label: "Testimonial",
      required: true,
      admin: {
        description: "Add the testimonial content here.",
      },
    },
  ],
};
