import { ContactHero } from "../components/Contact/ContactHero";
import { FooterInstagram } from "../components/FooterInstagram";
import type { Metadata } from "next";

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
