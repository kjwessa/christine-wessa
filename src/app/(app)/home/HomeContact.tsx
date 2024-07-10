import { ContactForm } from "@/components/ContactForm";
import { Eyebrow } from "@/components/Eyebrow";

export function HomeContact() {
  return (
    <section className="border-b-1 border-gray-200 py-12 sm:py-24" id="contact">
      <div className="mx-auto flex max-w-2xl flex-col gap-8 px-6 sm:px-8">
        <div className="flex flex-col items-start gap-4 text-pretty sm:items-center sm:gap-3 sm:text-balance sm:text-center">
          <Eyebrow>Contact Christine</Eyebrow>
          <div>
            <h2 className=" text-4xl">
              Fill out the form below and I will be in touch within 48 hrs.{" "}
            </h2>
            <p className="text-sm text-gray-500">
              Please complete all required fields, indicated with{" "}
              <span className="text-red-500">*</span>
            </p>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
