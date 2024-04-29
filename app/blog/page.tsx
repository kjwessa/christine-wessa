import BlogCard from "../components/BlogCard";

export default function Blog() {
  return (
    <section className="m-auto flex min-h-32 max-w-6xl flex-grow flex-col items-center justify-center px-4">
      <h2 className="mb-8 text-5xl">Blog</h2>
      <div className="grid grid-cols-3 gap-4">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </section>
  );
}
