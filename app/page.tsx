import SocialIconsList from "./components/SocialIconsList";

export default function Page() {
  return (
    <section className="flex flex-auto flex-col items-center justify-center">
      <h2 className="text-5xl">Christine Wessa</h2>
      <SocialIconsList filter={["Instagram", "Facebook", "YouTube", "Email"]} />
      <p className="max-w-80 text-balance pt-2  text-center text-sm">
        To inquire about booking, send me a message at{" "}
        <a href="mailto:bookchristinewessa@gmail.com" className="font-bold">
          bookchristinewessa@gmail.com
        </a>
      </p>
    </section>
  );
}
