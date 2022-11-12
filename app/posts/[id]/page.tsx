import { useRouter } from "next/router";
import React from "react";
import Backbutton from "../../../components/Backbutton";

interface PageProps {
  params: {
    id: string;
  };
}

const fetchPost = async (id: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 10 },
  });
  const post = await res.json();

  return post;
};

const PostDetail = async ({ params: { id } }: PageProps) => {
  const data = await fetchPost(id);

  return (
    <div className="py-20 h-[100vh] px-32 flex gap-4 flex-col font-bold bg-rose-500 justify-center text-white text-2xl tracking-wide">
      <Backbutton />
      <p>User : {data.userId}</p>
      <p>Id : {data.id}</p>
      <p>Title : {data.title}</p>
      <p>Body : {data.body}</p>
    </div>
  );
};

export default PostDetail;
