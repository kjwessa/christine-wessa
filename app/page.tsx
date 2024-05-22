import { HomeContact } from "./components/Home/HomeContact";
import { HomeHero } from "./components/Home/HomeHero";
import { FooterInstagram } from "./components/FooterInstagram";
import { HomeMission } from "./components/Home/HomeMission";
import { HomeStory } from "./components/Home/HomeStory";
import { HomeTestimonial } from "./components/Home/HomeTestimonial";

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
