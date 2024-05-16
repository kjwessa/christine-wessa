import { ContactForm } from "../ContactForm";

export function HomeContact() {
  return (
    <section className="border-b-1 border-slate-200 py-24">
      <div className="mx-auto grid grid-cols-2 grid-rows-2 gap-4 px-2 md:grid-cols-[1fr_auto_1fr] md:grid-rows-1">
        <ContactForm />
      </div>
    </section>
  );
}
