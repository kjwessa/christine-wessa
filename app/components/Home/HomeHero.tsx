import Image from "next/image";

export function HomeHero() {
  return (
    <section className="px-2">
      <div className="relative flex min-h-[92dvh] flex-col items-center justify-center overflow-hidden rounded-md px-2">
        <Image
          src="/images/christine-walking.jpg"
          layout="fill"
          className="object-cover"
          alt="Christine Wessa walking across the street in Pensacola, FL"
        />
        <div className="absolute left-0 top-0 z-10 max-w-xl p-4">
          <p className="text-5xl text-neutral-50">
            Hi, I&apos;m Christine Wessa. I&apos;m a speaker & worship leader
            with a message of hope for mothers.
          </p>
        </div>
        <div className="absolute bottom-0 ">
          <p className="whitespace-nowrap text-[14vw] leading-none text-neutral-50">
            Christine Wessa
          </p>
        </div>
      </div>
    </section>
  );
}
