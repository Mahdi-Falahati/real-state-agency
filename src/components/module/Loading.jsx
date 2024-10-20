import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Loading() {
  return (
    <p className="flex justify-center items-center text-green-700 tracking-wider font-semibold">
      در حال گرفتن آگهی ها کمی صبر کنید
      <AiOutlineLoading3Quarters className="mr-2 animate-spin text-xl" />
    </p>
  );
}
