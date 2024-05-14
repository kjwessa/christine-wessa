import { ContactForm } from "../ContactForm";

export function HomeContact() {
  return (
    <section className="border-b-1 border-slate-200 py-24">
      <div className="px-2">
        <h2 className="text-4xl">
          Fill out the form below and I will be in touch within 48 hrs.{" "}
        </h2>
        <ContactForm />
      </div>
    </section>
  );
}
