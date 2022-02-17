import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";
import React from "react";
import Service from "../../src/utils/Service";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function PostPage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <ul>
      {posts.map((v) => (
        <li key={v.id}>
          <Link href={`/post/${v.id}`}>{v.title}</Link>
          <br />
        </li>
      ))}
    </ul>
  );
}

export const getStaticProps: GetStaticProps<{ posts: Post[] }> = async (
  ctx
) => {
  const { data } = await Service.getInstance().get<Post[]>("/posts?userId=1");
  return { props: { posts: data }, revalidate: 20 };
};

export default PostPage;
