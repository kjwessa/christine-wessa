interface TestimonialCardProps {
  name: string;
  avatar: string;
  role: string;
  diocese?: string;
  testimonial: string;
}

import Image from "next/image";

export function TestimonialCard({
  name,
  avatar,
  role,
  diocese,
  testimonial,
}: TestimonialCardProps) {
  return (
    <div className="flex flex-col items-start">
      <div className="overflow-clip rounded-md">
        <img
          src={avatar}
          alt={`Avatar image of ${name + role}`}
          width={150}
          height={150}
        />
      </div>

      <h3 className="text-xl">{name}</h3>
      <p className="text-sm">{role}</p>
      <p className="text-xs">{diocese}</p>
      <p className="mt-4 text-pretty">{`"${testimonial}"`}</p>
    </div>
  );
}
