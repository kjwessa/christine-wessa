import Image from "next/image";

export function HomeHero() {
  return (
    <section className="relative flex min-h-[92dvh] flex-col items-center justify-center overflow-hidden">
      <Image
        src="/images/christine-walking.jpg"
        layout="fill"
        className="object-cover"
        alt="Christine Wessa walking across the street in Pensacola, FL"
      />
      <div className="absolute left-0 top-0 z-10 max-w-xl p-4">
        <p className="text-5xl text-neutral-50">
          Hi, I&apos;m Christine Wessa. I&apos;m a speaker & worship leader with
          a message of hope for mothers.
        </p>
      </div>
      <p className=" absolute bottom-0 whitespace-nowrap text-[12vw] text-neutral-50">
        Christine Wessa
      </p>
    </section>
  );
}
