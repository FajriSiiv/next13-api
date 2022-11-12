import Link from "next/link";

const Home = () => {
  return (
    <div className={`h-[100vh] font-bold`}>
      <div className="flex justify-center flex-col items-center h-full gap-3 ">
        <h2 className="text-3xl">Web APi</h2>
        <div className="text-white flex gap-x-3">
          <Link href="/posts" className="py-2 px-10 bg-emerald-500 rounded-lg ">
            Post
          </Link>
          <Link href="/ecom" className="py-2 px-10 bg-emerald-500 rounded-lg ">
            E-Commerce
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
