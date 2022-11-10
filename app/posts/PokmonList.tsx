import Link from "next/link";
import { PostProps } from "../../typing";

async function getData() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data: PostProps[] = await res.json();

  return data;
}

const PokmonList = async () => {
  const data = await getData();

  return (
    <>
      {data.map((e: any) => (
        <div className="cursor-pointer" key={e.id}>
          <Link href={`/posts/${e.id}`}>Posts: {e.id}</Link>
        </div>
      ))}
    </>
  );
};

export default PokmonList;
