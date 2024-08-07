import { Eyebrow } from "@/components/Eyebrow";

export function HomeMission() {
  return (
    <section className="border-gray-200-200 border-b-1">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-2 px-2 py-16 md:grid-cols-[1fr_auto_1fr] md:py-20 lg:py-24">
        <div className="col-start-1 hidden w-full md:block">
          <div className="m-auto max-w-[11rem] md:w-3/4"></div>
        </div>
        <div className="px-2text-center mx-auto flex max-w-lg flex-col items-center justify-center gap-4 text-balance sm:gap-3 md:col-start-2 md:max-w-lg">
          <Eyebrow>My Mission</Eyebrow>
          <p className="text-balance text-center text-3xl md:text-4xl lg:text-5xl">
            I seek to share a message of hope that God is present with you, here
            and now.
          </p>
        </div>
        <div className="hidden w-full md:block">
          <div className="mx-auto max-w-[11rem] md:w-3/4"></div>
        </div>
      </div>
    </section>
  );
}
