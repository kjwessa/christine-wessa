import { HomeContact } from "./components/Home/HomeContact";
import { HomeHero } from "./components/Home/HomeHero";
import { FooterInstagram } from "./components/FooterInstagram";
import { HomeMission } from "./components/Home/HomeMission";
import { HomeStory } from "./components/Home/HomeStory";
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
