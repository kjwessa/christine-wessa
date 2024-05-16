import Link from "next/link";

export function Navbar() {
  return (
    <header className="px-4 py-3">
      <div className="flex w-full flex-row justify-between">
        <Link href="/">
          <span className="font-display text-1xl font-bold">
            Christine Wessa
          </span>
        </Link>
        <div className="flex flex-row gap-3">
          <Link href="/#about">
            <span className="font-display text-1xl font-normal">
              Meet Christine
            </span>
          </Link>
          <Link href="/#contact">
            <span className="font-display text-1xl font-normal">Contact</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
