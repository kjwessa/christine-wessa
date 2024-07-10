import { allPosts } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";
import { notFound } from "next/navigation";
//* Build the individual blog page

export async function generateStaticParams() {
  return allPosts.map((post) => {
    slug: post.slug;
  });
}

export default async function Page({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post.slug === params.slug);
  if (!post) {
    notFound();
  }
  return (
    <article>
      <h1 className="mb-12 text-balance text-5xl font-medium">{post.title}</h1>

      <div className="prose prose-lg mx-auto pb-24 pt-12">
        <MDXContent code={post.mdx} />
      </div>
    </article>
  );
}
