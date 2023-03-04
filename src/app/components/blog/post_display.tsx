import { Post } from "@/app/interfaces/blog";
import Image from "next/image";
import markdownStyles from "./markdown-styles.module.css";
import classNames from "classnames";

export function PostDisplay({ post }: { post: Post }) {
  function renderTitle() {
    return (
      <h1 className="text-3xl font-landing font-semibold">{post.title}</h1>
    );
  }

  function renderImage() {
    if (!post.coverImage) return null;

    return (
      <div className="my-4">
        <Image
          src={post.coverImage}
          alt={post.title}
          width={720}
          height={500}
        />
      </div>
    );
  }

  function renderMeta() {
    return (
      <div className="flex flex-row justify-between items-center">
        <p className="text-base text-slate-500 mt-2">
          {post.author} - {post.date}
        </p>
      </div>
    );
  }

  function renderContent() {
    return (
      <div
        className={classNames(
          "font-landing tracking-wider antialiased text-gray-900",
          markdownStyles["markdown"]
        )}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    );
  }

  return (
    <div className="w-full md:w-3/5 mx-auto mt-20">
      {renderTitle()}
      {renderMeta()}
      {renderImage()}
      {renderContent()}
    </div>
  );
}
