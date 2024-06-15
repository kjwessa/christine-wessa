import Link from "next/link";

export function Navbar() {
  return (
    <header className="px-4 py-3">
      <div className="flex w-full flex-row justify-between">
        <Link href="/">
          <span className="font-bold">Christine Wessa</span>
        </Link>
        <div className="flex flex-row gap-3">
          <Link href="/#about">
            <span className="text-base font-normal sm:text-base">
              Meet Christine
            </span>
          </Link>
          <Link href="/#contact">
            <span className="text-base font-normal sm:text-base">Contact</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
