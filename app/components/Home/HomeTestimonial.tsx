import { TestimonialList } from "../TestimonialList";
export function HomeTestimonial() {
  return (
    <section className="border-b-1 border-slate-200 py-12">
      <div className="mx-auto flex max-w-3xl flex-col gap-4">
        <h2 className="text-balance text-center text-2xl">
          Kinds Words from Kind People
        </h2>
        <TestimonialList />
      </div>
    </section>
  );
}
