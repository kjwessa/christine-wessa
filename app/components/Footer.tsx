function Footer() {
  const getCurrentYear = (): number => {
    const year = new Date().getFullYear();
    return year;
  };

  return (
    <footer className="flex flex-col items-center gap-1 p-2">
      <h2 className="text-lg">Christine Wessa</h2>
      <p className="text-sm text-slate-600">
        © Copyright {getCurrentYear()} Christine Wessa. All rights reserved.
        Site by{" "}
        <a href="https://brewww.studio" className="font-bold">
          Brewww Studio
        </a>
      </p>
    </footer>
  );
}

export default Footer;
