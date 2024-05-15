import Image from "next/image";

export function HomeHero() {
  return (
    <section className="px-2">
      <div className="relative flex min-h-[92dvh] flex-col items-center justify-center overflow-hidden rounded-md px-2 sm:min-h-[95dvh] ">
        <Image
          src="/images/christineWessa_pensacola_walking-across-street.jpg"
          className="object-cover"
          alt="Christine Wessa walking across the street in Pensacola, FL"
          fill
          priority
        />
        <div className="absolute left-0 top-0 z-10 max-w-xl p-4">
          <h1 className="max-w-md text-balance text-2xl text-gray-50 sm:text-3xl md:text-4xl lg:text-5xl">
            Hi, I&apos;m Christine Wessa. I&apos;m a speaker & worship leader
            with a message of hope for mothers.
          </h1>
        </div>
        <div className="absolute bottom-0 ">
          <p className="whitespace-nowrap text-[13.5vw] leading-none text-gray-50 sm:text-[14vw]">
            Christine Wessa
          </p>
        </div>
      </div>
    </section>
  );
}
