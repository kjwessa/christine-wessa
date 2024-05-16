import Link from "next/link";
import socialIconsData from "../data/socialIconsData";

export function Footer() {
  const getCurrentYear = (): number => {
    const year = new Date().getFullYear();
    return year;
  };

  const socials = socialIconsData;
  const footerSocials = ["Instagram", "Facebook", "LinkedIn"];
  const filteredSocials = socials.filter((social) =>
    footerSocials.includes(social.name),
  );

  return (
    <footer className="p-1">
      <div className="rounded-md bg-gray-900 text-gray-100">
        <div className="mx-auto flex max-w-5xl flex-col justify-between gap-24 px-4">
          <div className="flex flex-col justify-between gap-8 py-4 sm:flex-row">
            <div className="max-w-lg">
              <h2 className="text-pretty text-4xl">
                Let&apos;s connect and discuss your event.
              </h2>
            </div>
            <div className="flex flex-row gap-12">
              <div>
                <span className="text-sm">Navigation</span>
                <ul className="flex flex-col gap-2">
                  <li>
                    <Link href="/" className="font-medium hover:text-gray-300">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#about"
                      className="font-medium hover:text-gray-300"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#contact"
                      className="font-medium hover:text-gray-300"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <span className="text-sm">Social</span>
                <ul className="flex flex-col gap-2">
                  {filteredSocials.map((social) => (
                    <li key={social.name}>
                      <Link
                        href={social.url}
                        className="font-medium hover:text-gray-300"
                      >
                        {social.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-row flex-wrap justify-between gap-2 py-4">
            <h2 className="text-sm">
              © Copyright {getCurrentYear()} Christine Wessa. All rights
              reserved.
            </h2>
            <p className="text-sm">
              Made by{" "}
              <a href="https://brewww.studio" className="font-bold">
                Brewww Studio
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
