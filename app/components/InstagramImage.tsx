import Image from "next/image";

interface InstagramImageProps {
  src: string;
  alt: string;
}

export function InstagramImage({ src, alt }: InstagramImageProps) {
  return (
    <div
      className="relative h-full w-full flex-grow overflow-hidden rounded-md"
      style={{ paddingTop: "100%" }}
    >
      <Image src={src} alt={alt} className="object-cover" fill />
    </div>
  );
}
