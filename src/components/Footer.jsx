export default function Footer() {
  const getCurrentYear = () => {
    const year = new Date().getFullYear();
    return year;
  };

  return (
    <footer>
      <p>
        © Copyright {getCurrentYear()} Christine Wessa. All rights reserved.
      </p>
    </footer>
  );
}
