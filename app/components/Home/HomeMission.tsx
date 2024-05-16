import { Eyebrow } from "../Eyebrow";

export function HomeMission() {
  return (
    <section className="border-b-1 border-slate-200 py-24">
      <div className="mx-auto flex max-w-lg flex-col items-center justify-center gap-4">
        <Eyebrow>My Mission</Eyebrow>
        <p className="text-center text-4xl">
          I seek to share a message of hope that God is present with you, here
          and now.
        </p>
      </div>
    </section>
  );
}
