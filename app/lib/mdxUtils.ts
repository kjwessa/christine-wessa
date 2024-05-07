import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

// Define the directory where MDX posts are stored
const postsDirectory = path.join(process.cwd(), "posts");

//* Function to get all posts with their metadata and content
export const getPosts = () => {
  // Read all file names in the posts directory
  const files = fs.readdirSync(postsDirectory);
  return files.map((file) => {
    // Construct the full path of each file
    const fullPath = path.join(postsDirectory, file);
    // Read the contents of the file
    const fileContents = fs.readFileSync(fullPath, "utf8");
    // Use gray-matter to parse the post metadata section
    const { data, content } = matter(fileContents);
    return {
      data, // Contains the post metadata
      content, // Contains the post content
      slug: file.replace(/\.mdx$/, ""), // Extract the slug from the file name
    };
  });
};

//* Function to get a single post by slug
export const getSinglePost = async (slug: string) => {
  // Construct the full path to the file using the slug
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  // Read the contents of the file
  const fileContents = fs.readFileSync(fullPath, "utf-8");
  // Parse the file contents to separate metadata and content
  const { data, content } = matter(fileContents);
  // Serialize the MDX content to be rendered on the client side
  const mdxSource = await serialize(content);
  return {
    mdxSource, // Serialized MDX content
    ...data, // Spread the metadata
  };
};
