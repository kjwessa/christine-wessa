import { HomeHero } from "./components/Home/HomeHero";
import { HomeMission } from "./components/Home/HomeMission";
import { HomeStory } from "./components/Home/HomeStory";

export default function Page() {
  return (
    <>
      <HomeHero />
      <HomeMission />
      <HomeStory />
    </>
  );
}
