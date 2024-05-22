import { ContactForm } from "../ContactForm";
import Image from "next/image";
import contactImg from "/public/images/christineWessa_pensacola_walking-across-street.jpg";
import { Eyebrow } from "../Eyebrow";
import { ImageStamp } from "../ImageStamp";

export function ContactHero() {
  return (
    <section className="flex flex-auto p-4 md:min-h-[60svh]">
      <div className="mx-auto grid w-full grid-cols-1 gap-8 md:grid-cols-2">
        <div
          className="relative min-h-[66vw] overflow-hidden rounded-md
          md:min-h-[45vw]"
        >
          <Image
            src={contactImg}
            className="object-cover"
            alt="Christine Wessa walking across the street in Pensacola, FL"
            fill
          />
        </div>
        <div className="flex flex-col justify-between p-8">
          <div className="flex flex-row items-start justify-between pb-12 pt-4">
            <Eyebrow>Contact</Eyebrow>
            <div className="h-24 w-24">
              <ImageStamp
                src="/images/christineWessa_pensacola_walking-on-pier.jpg"
                alt="Christine Wessa walking across the street in Pensacola, FL"
              />
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
