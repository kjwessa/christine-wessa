import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";

// Read the directory of posts
const files = fs.readdirSync(path.join("posts"));

//* Get Individual Post by Slug
async function getPost({ slug }: { slug: string }) {
  // Establish the filename
  const filename = files.find((file) => file.includes(slug));
  // Throw error if the file does not exist
  if (!filename) {
    throw new Error(`File for slug ${slug} not found.`);
  }
  // Read the content for valid file types
  const markdownFile = fs.readFileSync(path.join("posts", filename), "utf-8");
  // Extract the frontMatter and content from the MDX file
  const { data: frontMatter, content } = matter(markdownFile);
  // Return the frontMatter, slug, and content
  return { frontMatter, slug, content };
}

//* Generate static paths for blog posts at build time
export async function generateStaticParams() {
  // Create the params, parsing out the date field from the MDX file
  const params = files.map((filename) => ({
    slug: filename.replace(/^\d{4}-\d{2}-\d{2}\./, "").replace(".mdx", ""),
  }));
  // Return the resulting params
  return params;
}

//* Build the individual blog page
export default async function Page({ params }: { params: { slug: string } }) {
  // Fetch the post based on the slug
  const props = await getPost(params);
  // Add components for MDX rendering (optional)
  // const components = {};
  //* Build the individual article
  return (
    <article className="mx-auto max-w-6xl p-4">
      <h1>{props.frontMatter.title}</h1>
      <p>{props.frontMatter.publishedAt}</p>
      <MDXRemote source={props.content} />
    </article>
  );
}
