import { HomeHero } from "./home/HomeHero";
import { HomeMission } from "./home/HomeMission";
import { HomeStory } from "./home/HomeStory";
import { HomeContact } from "./home/HomeContact";
import { FooterInstagram } from "@/components/FooterInstagram";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christine Wessa - Home",
  description:
    "Welcome to the official website of Christine Wessa, Worship Leader and Speaker.",
};

export default function Page() {
  return (
    <>
      <HomeHero />
      <HomeMission />
      <HomeStory />
      <HomeContact />
      <FooterInstagram />
    </>
  );
}
