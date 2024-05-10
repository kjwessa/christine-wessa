import { HomeHero } from "./components/Home/HomeHero";
import { HomeInstagram } from "./components/Home/HomeInstagram";
import { HomeMission } from "./components/Home/HomeMission";
import { HomeStory } from "./components/Home/HomeStory";

export default function Page() {
  return (
    <>
      <HomeHero />
      <HomeMission />
      <HomeStory />
      <HomeInstagram />
    </>
  );
}
