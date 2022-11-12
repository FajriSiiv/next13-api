"use client";

import { useRouter } from "next/navigation";

const Backbutton = () => {
  const router = useRouter();

  return (
    <div
      className="bg-purple-600 py-2 px-5 rounded-lg w-32 text-center cursor-pointer"
      onClick={() => router.back()}
    >
      Back
    </div>
  );
};

export default Backbutton;
