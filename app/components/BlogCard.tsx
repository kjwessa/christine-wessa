import Link from "next/link";
import Image from "next/image";
import { BlogMetadata } from "../types/blogTypes";

function BlogCard() {
  return (
    <div>
      <Image
        src="/images/blog/coffee-morning.jpg"
        alt="Alt Text"
        width={500}
        height={300}
      />
      <div className="flex-1">
        <h3 className="my-2 text-xl font-bold">
          The Lord doesn&apos;t need you. He wants you.
        </h3>
        <p className="mb-4 text-base text-gray-700">
          Mass was insanely early, like 5:45 am, and I just thought someone
          should&apos;ve canonized me right then and there for spending my free
          day getting up before the sun to go to mass!
        </p>
        <p className="text-sm text-gray-500">
          {new Date("2016-07-05").toLocaleDateString()}
        </p>
      </div>
      <Link
        href={"posts/post-slug"}
        className="text-indigo-600 hover:text-indigo-900"
      >
        Read More
      </Link>
    </div>
  );
}

export default BlogCard;
