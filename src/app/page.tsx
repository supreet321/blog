import { Inter } from "next/font/google";
import { Post } from "@/app/interfaces/blog";
import { PostPreview } from "./components/blog/post_preview";
import { getAllPosts } from "./data_helpers/getPosts";
import classNames from "classnames";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]) as unknown as Post[];

  return (
    <main className="lg:px-32 lg:mx-auto">
      <div className="flex flex-col gap-4 mt-10">
        <h1 className="text-4xl md:text-6xl font-bold w-full text-center">
          Supreet Singh
        </h1>
        <h2 className="text-lg w-full text-center text-slate-600">
          Software Engineer | Toronto, Canada
        </h2>
        <div>
          {allPosts.map((post, index) => (
            <>
              <PostPreview key={post.slug} post={post} />
              <div
                className={classNames(
                  "border border-b-0 my-2 border-gray-300",
                  index === allPosts.length - 1 && "hidden"
                )}
              ></div>
            </>
          ))}
        </div>
      </div>
    </main>
  );
}
