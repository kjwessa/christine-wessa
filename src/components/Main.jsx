import SocialIconsList from "./SocialIconsList";

export default function Main() {
  return (
    <section className="flex min-h-32 flex-grow flex-col items-center justify-center">
      <h2 className="text-5xl">Christine Wessa</h2>
      <SocialIconsList
        filter={["Instagram", "Facebook", "YouTube", "LinkedIn", "Email"]}
      />
      <p className="text-m max-w-80 text-balance  pt-2 text-center">
        To inquire about booking, send me a message at{" "}
        <a href="mailto:bookchristinewessa@gmail.com" className="font-bold">
          bookchristinewessa@gmail.com
        </a>
      </p>
    </section>
  );
}
