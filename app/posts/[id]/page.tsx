import React from "react";
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
  console.log(data);

  return (
    <div>
      <p>user id : {data.userId}</p>
      <p>id:{data.id}</p>
      <p>title: {data.title}</p>
      <p>body : {data.body}</p>
    </div>
  );
};

export default PostDetail;
