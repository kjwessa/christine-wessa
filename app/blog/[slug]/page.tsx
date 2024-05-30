import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";

// Returns the content of the post with the matching slug
async function getPost({ slug }: { slug: string }) {
  const markdownFile = fs.readFileSync(
    path.join("posts", slug + ".mdx"),
    "utf-8",
  );

  const { data: frontMatter, content } = matter(markdownFile);
  return { frontMatter, slug, content };
}

// Generate static paths for blog posts at build time
export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("posts"));
  const params = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));

  return params;
}

export default async function Page({ params }: { params: { slug: string } }) {
  //params contains the post "slug"
  // fetch the post content based on teh slug
  const props = await getPost(params);
  // Customize componetns for MDX rendering
  const components = {};
  return (
    <article className="mx-auto max-w-6xl p-4">
      <h1>{props.frontMatter.title}</h1>
      <p>{props.frontMatter.publishedAt}</p>
      <MDXRemote source={props.content} />
    </article>
  );
}
