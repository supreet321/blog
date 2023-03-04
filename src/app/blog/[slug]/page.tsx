import { getPostBySlug, getAllPosts } from "@/app/data_helpers/getPosts";
import { Post } from "@/app/interfaces/blog";
import { remark } from "remark";
// import html from "remark-html";
import ErrorPage from "next/error";
import { PostDisplay } from "@/app/components/blog/post_display";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeExternalLinks from "rehype-external-links";

type Params = {
  params: {
    slug: string;
  };
};

export default function PostRenderer({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);

  remark()
    .use(remarkRehype)
    .use(rehypeExternalLinks, { target: "_blank" })
    .use(rehypeStringify)
    .process(post.content || "")
    .then((result) => (post.content = result.toString()));

  return <PostDisplay post={post} />;
}

export async function generateStaticParams() {
  const posts = getAllPosts(["slug"]);

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
