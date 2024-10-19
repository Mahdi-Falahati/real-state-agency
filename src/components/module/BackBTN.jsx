"use client";

import { useRouter } from "next/navigation";
import { TbArrowBack } from "react-icons/tb";

export default function BackBTN() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="flex items-center justify-center w-fit h-[40px]  px-4 hover:bg-orange-500 bg-orange-600 hover:scale-95 text-white rounded-lg font-medium mb-10"
    >
      <TbArrowBack className="ml-1 font-bold text-xl" />
      بازگشت
    </button>
  );
}
