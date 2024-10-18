import { icons } from "@/constants/icon";
import { sp } from "@/utils/replaceNmber";
import Link from "next/link";

export default function CardAdmin({ data }) {
  const { category, title, price, location, phone } = data;

  return (
    <section className="my-7 mx-4 text-center text-gray-700 tracking-wider w-[280px] shadow-inner shadow-stone-400 py-4 px-2 rounded-md">
      <div className="mb-2 flex items-center text-2xl font-medium ">
        <span className="text-3xl ml-2">{icons[category]}</span>
        <h1>{title}</h1>
      </div>
      <p className="font-medium text-xl">
        {sp(price + "")}
        <span className="mr-1">تومان</span>
      </p>
      <p className="font-normal my-2">شماره تماس : {phone} </p>
      <p className="font-medium my-2 leading-5 text-green-800">
        آدرس : {location}
      </p>
      <div className="flex flex-col mx-2 font-semibold tracking-wider text-white">
        <button className="bg-lime-600  rounded-lg py-2 mb-1 mt-3">
          تایید آگهی
        </button>
        <button className="bg-red-600  rounded-lg py-2 my-1">
          رد کردن اگهی
        </button>
        <Link href="/" className="bg-purple-700  rounded-lg py-2 my-1 ">
          دیدن جزییات
        </Link>
      </div>
    </section>
  );
}
