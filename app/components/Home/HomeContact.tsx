import { ContactForm } from "../ContactForm";

export function HomeContact() {
  return (
    <section className="border-b-1 border-slate-200 py-24">
      <div className="mx-auto flex max-w-2xl flex-col gap-8 px-4">
        <div className="flex flex-col items-center gap-2 text-center">
          <h2 className="text-balance text-4xl">
            Fill out the form below and I will be in touch within 48 hrs.{" "}
          </h2>
          <p className="text-sm text-gray-500">
            Please complete all required fields, indicated with{" "}
            <span className="text-red-500">*</span>
          </p>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
