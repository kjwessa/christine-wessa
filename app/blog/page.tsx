import { BlogCard } from "../components/BlogCard";
import Link from "next/link";
import { getPosts } from "../lib/mdxUtils";

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

export default function Blog() {
  const posts = getPosts();
  console.log(posts);
  return (
    <section className="m-auto flex min-h-32 max-w-6xl flex-grow flex-col items-center justify-center px-4">
      <h2 className="mb-8 text-5xl">Blog</h2>
      <div className="grid grid-cols-3 gap-4">
        {posts.map((post) => (
          <BlogCard
            key={post.data.title}
            title={post.data.title}
            publishedAt={post.data.publishedAt}
            description={post.data.description}
          />
        ))}
      </div>
    </section>
  );
}
