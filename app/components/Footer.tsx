export function Footer() {
  const getCurrentYear = (): number => {
    const year = new Date().getFullYear();
    return year;
  };

  return (
    <footer className="flex flex-row flex-wrap justify-between gap-2 px-4 py-2">
      <h2 className="text-sm">
        © Copyright {getCurrentYear()} Christine Wessa. All rights reserved.
      </h2>
      <p className="text-sm text-slate-600">
        Made by{" "}
        <a href="https://brewww.studio" className="font-bold">
          Brewww Studio
        </a>
      </p>
    </footer>
  );
}
