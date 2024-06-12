import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { error } from "console";

// Returns the content of the post with the matching slug
async function getPost({ slug }: { slug: string }) {
  const files = fs.readdirSync(path.join("posts"));
  const filename = files.find((file) => file.includes(slug));
  if (!filename) {
    throw new Error(`File for slug ${slug} not found.`);
  }

  const markdownFile = fs.readFileSync(path.join("posts", filename), "utf-8");

  const { data: frontMatter, content } = matter(markdownFile);
  return { frontMatter, slug, content };
}

// Generate static paths for blog posts at build time
export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("posts"));
  const params = files.map((filename) => ({
    slug: filename.replace(/^\d{4}-\d{2}-\d{2}\./, "").replace(".mdx", ""),
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
