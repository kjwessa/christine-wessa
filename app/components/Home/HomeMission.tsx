import { Eyebrow } from "../Eyebrow";
import { ImageStamp } from "../ImageStamp";

export function HomeMission() {
  return (
    <section className="border-b-1 border-slate-200 py-24">
      <div className="mx-auto grid grid-cols-2 grid-rows-2 gap-4 px-2 md:grid-cols-[1fr_auto_1fr] md:grid-rows-1">
        <div className="w-full">
          <div className="m-auto w-3/4">
            <ImageStamp src="/images/christine-walking.jpg" alt="" />
          </div>
        </div>
        <div className="flex max-w-3xl flex-col items-center justify-center gap-3 text-balance text-center">
          <Eyebrow>My Mission</Eyebrow>
          <p className="text-balance text-center text-4xl">
            I seek to share a message of hope that God is present with you, here
            and now.
          </p>
        </div>
        <div className="w-full">
          <div className="m-auto w-3/4">
            <ImageStamp
              src="/images/christineWessa_pensacola_walking-across-street.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
