import { Eyebrow } from "../Eyebrow";
import Image from "next/image";
import { SocialIconsList } from "../SocialIconsList";

export function HomeStory() {
  return (
    <section className="border-b-1" id="about">
      <div className="grid grid-cols-1 py-6 md:grid-cols-2 ">
        <div className="p-2">
          <div
            className="relative min-h-[66vw] overflow-hidden rounded-md
          md:min-h-[45vw]"
          >
            <Image
              src="/images/christineWessa_pensacola_walking-on-pier.jpg"
              className="object-cover"
              alt="Christine Wessa walking across the street in Pensacola, FL"
              fill
            />
          </div>
        </div>
        <div className="mx-auto flex flex-col items-start justify-around gap-12 p-4 text-start sm:max-w-lg sm:items-center sm:text-center md:items-start md:text-start">
          <div className="flex flex-col items-start gap-4 sm:items-center sm:gap-3 md:items-start">
            <Eyebrow>My Story</Eyebrow>
            <h2 className="text-4xl">
              A wife and mother, I&apos;ve traveled for 8+ years to speak and
              lead worship.
            </h2>
          </div>
          <div className="flex flex-col items-start gap-4 sm:items-center md:items-start">
            <p className="text-lg">
              I feel it my duty to authentically share my walk with God through
              every stage of life I&apos;m in to bring a hope to others that God
              is here.
            </p>
            <SocialIconsList />
          </div>
        </div>
      </div>
    </section>
  );
}
