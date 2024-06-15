import type { Metadata } from "next";
import { ContactHero } from "./ContactHero";
import { FooterInstagram } from "@/components/FooterInstagram";

export const metadata: Metadata = {
  title: "Contact Christine Wessa",
  description:
    "Book Christine Wessa for your next event. Send a message and she'll be in touch with you shortly.",
};

export default function Page() {
  return (
    <>
      <ContactHero />
      <FooterInstagram />
    </>
  );
}
