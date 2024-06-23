import { TestimonialCard } from "./TestimonialCard";
import { testimonialsData } from "../data/testimonialsData";

type testimonialsDataProps = {
  id: number;
  name: string;
  avatar: string;
  diocese: string;
  role: string;
  testimonial: string;
};

export function TestimonialList() {
  const testimonials = testimonialsData;
  return (
    <div className="grid grid-cols-3 gap-4">
      {testimonials.map((testimonial: testimonialsDataProps) => (
        <TestimonialCard
          key={testimonial.id}
          name={testimonial.name}
          avatar={testimonial.avatar}
          role={testimonial.role}
          diocese={testimonial.diocese}
          testimonial={testimonial.testimonial}
        />
      ))}
    </div>
  );
}
