import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";
import React from "react";
import Service from "../../../src/utils/Service";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function PostPage({ post }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <section>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </section>
  );
}

export const getStaticProps: GetStaticProps<{ post: Post }> = async (ctx) => {
  const { id } = ctx.params!;
  const { data } = await Service.getInstance().get<Post>(`/posts/${id}`);
  console.log(data);

  return { props: { post: data } };
};

export async function getStaticPaths() {
  const { data } = await Service.getInstance().get<Post[]>("/posts?userId=1");
  const paths = data.map(({ id }) => {
    return {
      params: {
        id: id.toString(),
      },
    };
  });

  console.log(paths);

  return {
    paths,
    fallback: true,
  };
}

export default PostPage;
