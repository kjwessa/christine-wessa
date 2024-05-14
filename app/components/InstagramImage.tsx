import Image from "next/image";
import socialIconsData from "../data/socialIconsData";
import Link from "next/link";

interface InstagramImageProps {
  src: string;
  alt: string;
  overlay?: boolean;
}

interface socialIconsDataProps {
  link: string;
}

export function InstagramImage({ src, alt, overlay }: InstagramImageProps) {
  // Get Instagram data object
  const instagramData = socialIconsData.find(
    (link) => link.name === "Instagram",
  );

  // Isolate Instagram link
  const instagramLink =
    instagramData?.url ?? "https://www.instagram.com/christinewessa/";

  // Isolate Instagram SVG
  const instagramIcon = instagramData?.svg;

  return (
    <Link
      href={instagramLink}
      className="font relative h-full w-full flex-grow overflow-hidden rounded-md font-bold text-white"
      style={{ paddingTop: "100%" }}
    >
      <Image src={src} alt={alt} className="object-cover" fill />
      {overlay && (
        <div className="absolute left-0 top-0 z-10 flex h-full w-full flex-col items-center justify-center ">
          <div className="flex flex-col items-center">
            <span>{instagramIcon}</span>
            <span>@ChristineWessa</span>
          </div>
        </div>
      )}
    </Link>
  );
}
