import { allPosts } from "content-collections";
import { BlogCard } from "@/app/components/BlogCard";

export default function Blog() {
  return (
    <section>
      <div>
        <div className="mb-12 flex items-center justify-between text-[2.13rem] leading-9">
          <h3>Latest News and Views</h3>
        </div>
        <div>
          {allPosts.map((post) => (
            <BlogCard
              key={post.title}
              title={post.title}
              publishedAt={post.publishedAt}
              description={post.description}
              slug={post.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
