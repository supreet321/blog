import Image from "next/image";
import Link from "next/link";
import { Post } from "@/app/interfaces/blog";

export const PostPreview = ({ post }: { post: Post }) => {
  const excerpt =
    post.excerpt.split(" ").length > 35
      ? `${post.excerpt.split(" ").slice(0, 35).join(" ")}...`
      : post.excerpt;

  return (
    <div className="flex flex-col justify-between h-full">
      <div className="p-4">
        <Link as={`/blog/${post.slug}`} href="/blog/[slug]">
          <h3 className="text-2xl font-landing font-bold">{post.title}</h3>
        </Link>

        <div className="flex flex-none items-center mt-1">
          <p className="text-xs text-slate-500">{`By ${post.author} on ${post.date}`}</p>
        </div>

        <p className="text-gray-600 font-sans text-sm leading-5 overflow-hidden flex grow mt-3">
          {excerpt}
        </p>
      </div>
    </div>
  );
};
