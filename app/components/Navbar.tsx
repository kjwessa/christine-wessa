import Link from "next/link";

export function Navbar() {
  return (
    <header className="flex px-2 py-3">
      <div>
        <Link href="/">
          <span className="font-display text-1xl font-normal">
            Christine Wessa
          </span>
        </Link>
      </div>
    </header>
  );
}
