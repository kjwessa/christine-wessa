//* Generate static paths for blog posts at build time

//* Build the individual blog page
export default async function Page({ params }: { params: { slug: string } }) {
  return (
    <article className="mx-auto max-w-6xl p-4">
      <h1>{}</h1>
      <p>{}</p>
    </article>
  );
}
