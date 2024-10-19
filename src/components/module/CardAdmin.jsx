import { icons } from "@/constants/icon";
import { sp } from "@/utils/replaceNmber";
import Link from "next/link";
import { TiArrowBackOutline } from "react-icons/ti";
import ConfirmBTN from "./ConfirmBTN";
import RejectBtn from "./RejectBTN";

export default function CardAdmin({ data }) {
  const { category, title, price, location, phone, _id } = data;

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
      <div className="flex flex-col font-semibold tracking-wide">
        <ConfirmBTN id={JSON.parse(JSON.stringify(_id))} />

        <span className="h-[1px] w-full bg-gray-400"></span>
        <RejectBtn />
        <span className="h-[1px] w-full bg-gray-400"></span>
        <Link
          href={`/admin/${_id}`}
          className="py-2 my-1 flex items-center hover:scale-110 justify-center"
        >
          <TiArrowBackOutline className="ml-1 animate-pulse text-purple-900 text-xl" />
          دیدن جزییات
        </Link>
      </div>
    </section>
  );
}
