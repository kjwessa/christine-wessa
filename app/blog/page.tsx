// import { BlogCard } from "../components/BlogCard";

// import { getPosts } from "../lib/mdxUtils";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christine Wessa - Blog",
  description: "See the latest posts from Christine Wessa.",
};

type Post = {
  slug: string;
  data: {
    title: string;
    publishedAt: string;
    description: string;
    author: string;
  };
};

type BlogProps = {
  posts: Post[];
};

// Set the location of the blog directory
const postsDirectory = path.join(process.cwd(), "posts");
// Find all the files in the blog directory
const files = fs.readdirSync(path.join(postsDirectory));

// console.log(files);

// For each blog found
const posts = files.map((filename) => {
  // Read the content of each post
  const postContent = fs.readFileSync(
    path.join(postsDirectory, filename),
    "utf-8",
  );
  // console.log(postContent);
  //Extract the metadata
  const { data: frontMatter } = matter(postContent);
  return {
    meta: frontMatter,
    slug: filename.replace(/^\d{4}-\d{2}-\d{2}\./, "").replace(".mdx", ""),
  };
});

// console.log(posts);

export default function Blog() {
  return (
    <section className="m-auto flex min-h-32 max-w-6xl flex-grow flex-col items-center justify-center px-4">
      <h2 className="mb-8 text-5xl">Blog</h2>
      <div className="grid grid-cols-3 gap-4">
        {posts.map((post) => (
          <div key={post.meta.title}>
            <div>{post.meta.title}</div>
            <p>{`/blog/` + post.slug}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// export default function Blog() {
//   const posts = getPosts();
//   console.log(posts);
//   return (
//     <section className="m-auto flex min-h-32 max-w-6xl flex-grow flex-col items-center justify-center px-4">
//       <h2 className="mb-8 text-5xl">Blog</h2>
//       <div className="grid grid-cols-3 gap-4">
//         {posts.map((post) => (
//           <BlogCard
//             key={post.data.title}
//             title={post.data.title}
//             publishedAt={post.data.publishedAt}
//             description={post.data.description}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }
