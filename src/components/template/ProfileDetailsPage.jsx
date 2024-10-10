import ItemList from "@/module/ItemList";
import { categories } from "@/constants/string";
import { icons } from "@/constants/icon";
import { sp } from "@/utils/replaceNmber";

import { VscLocation } from "react-icons/vsc";
import { BsBodyText } from "react-icons/bs";
import { PiBalloonLight } from "react-icons/pi";
import { GiCctvCamera } from "react-icons/gi";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { TiPhoneOutline } from "react-icons/ti";
import { MdOutlineDateRange } from "react-icons/md";
import ShareBTN from "@/module/ShareBTN";

export default function ProfileDetailsPage({ data }) {
  const {
    title,
    location,
    description,
    amenities,
    rules,
    realState,
    phone,
    category,
    price,
    constructionDate,
  } = data;
  return (
    <section className="flex justify-around flex-wrap px-2 mb-10">
      <div className="flex flex-col basis-full md:basis-2/3">
        <h1 className="text-indigo-800 text-4xl font-semibold tracking-wider my-2">
          {title}
        </h1>
        <div className="flex items-center font-semibold text-gray-600 mb-7">
          <VscLocation className="ml-1 text-xl" />
          {location}
        </div>
        <h3 className="text-indigo-800 flex items-center text-2xl font-semibold border-b border-solid border-gray-500">
          <BsBodyText className="ml-1" />
          توضیحات
        </h3>
        <p className="mt-2 text-justify px-3 text-xl font-medium text-gray-700">
          {description}
        </p>
        <h3 className="text-indigo-800 flex items-center mt-10 text-2xl font-semibold border-b border-solid border-gray-500">
          <PiBalloonLight className="ml-1" />
          امکانات
        </h3>
        <ul className="m-2 list-disc">
          <ItemList data={amenities} />
        </ul>
        <h3 className="text-indigo-800 flex items-center mt-7 text-2xl font-semibold border-b border-solid border-gray-500">
          <GiCctvCamera className="ml-1" />
          قوانین
        </h3>
        <ul className="m-2 list-decimal">
          <ItemList data={rules} />
        </ul>
      </div>
      <div className="flex flex-col basis-full md:basis-1/4 mt-10 md:mt-0">
        <section className="shadow-inner shadow-stone-500 rounded-lg flex flex-col items-center py-5 px-1">
          <MdOutlineRealEstateAgent className="text-6xl text-indigo-800 my-2" />
          <h3 className="text-2xl font-semibold text-indigo-800 tracking-wider">
            {realState}
          </h3>
          <span className="flex items-center font-semibold tracking-widest mt-2 text-gray-700">
            <TiPhoneOutline className="ml-1 text-xl" />
            {phone}
          </span>
        </section>
        <div className="shadow-inner shadow-stone-500 rounded-lg flex items-center py-5 px-1 mt-10">
          <ShareBTN />
        </div>
        <div className="shadow-inner shadow-stone-500 rounded-lg flex flex-col items-center py-5 px-1 mt-10">
          <p className="text-indigo-800 flex items-center font-semibold text-xl tracking-wider">
            <span className="ml-2">{icons[category]}</span>
            {categories[category]}
          </p>
          <p className="font-medium text-xl tracking-wide my-3">
            {sp(price)} تومان
          </p>
          <p className="font-medium tracking-wide flex items-center text-indigo-800">
            <MdOutlineDateRange className="ml-1 text-xl" />
            {new Date(constructionDate).toLocaleDateString("fa-IR")}
          </p>
        </div>
      </div>
    </section>
  );
}
