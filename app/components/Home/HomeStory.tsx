import { Eyebrow } from "../Eyebrow";
import Image from "next/image";
import { SocialIconsList } from "../SocialIconsList";

export function HomeStory() {
  return (
    <section className="border-b-1 py-12">
      <div className="grid grid-cols-2">
        <div className="p-2">
          <div className="relative min-h-[55dvh] overflow-hidden rounded-md">
            <Image
              src="/images/christine-walking.jpg"
              className="object-cover"
              alt="Christine Wessa walking across the street in Pensacola, FL"
              fill
            />
          </div>
        </div>
        <div className="mx-auto flex max-w-lg flex-col items-start justify-around py-8">
          <div className="flex flex-col items-start gap-2">
            <Eyebrow>My Story</Eyebrow>
            <h2 className="text-4xl">
              A wife and mother, I&apos;ve traveled for 8+ years to speak and
              lead worship.
            </h2>
          </div>
          <div className="flex flex-col gap-2">
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
