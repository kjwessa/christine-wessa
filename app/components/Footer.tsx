export function Footer() {
  const getCurrentYear = (): number => {
    const year = new Date().getFullYear();
    return year;
  };

  return (
    <footer className="flex flex-row flex-wrap justify-center gap-2 px-4 py-2 md:justify-between">
      <h2 className="text-sm">
        © Copyright {getCurrentYear()} Christine Wessa. All rights reserved.
      </h2>
      <p className="text-sm text-gray-800">
        Made by{" "}
        <a href="https://brewww.studio" className="font-bold">
          Brewww Studio
        </a>
      </p>
    </footer>
  );
}
