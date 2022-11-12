import Link from "next/link";
import { PostProps } from "../../typing";

async function getData() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data: PostProps[] = await res.json();

  return data;
}

const PostList = async () => {
  const data = await getData();
  return (
    <>
      <div className="flex justify-center items-center flex-wrap mt-10 px-10 gap-2">
        {data.map((e: any) => (
          <Link
            className="cursor-pointer w-1/4 h-20 text-center border-2 shadow-sm shadow-emerald-400 flex items-center justify-center font-bold"
            key={e.id}
            href={`/posts/${e.id}`}
          >
            <p>Post : #{e.id}</p>
          </Link>
        ))}
      </div>
    </>
  );
};

export default PostList;
