import { MDXRemoteSerializeResult } from "next-mdx-remote";

export interface BlogMetadata {
  slug: string;
  title: string;
  publishedAt: string;
  description: string;
  image?: string;
  author?: string;
  category?: string;
}

export interface BlogPost extends BlogMetadata {
  mdxSource: MDXRemoteSerializeResult<Record<string, unknown>>;
}
