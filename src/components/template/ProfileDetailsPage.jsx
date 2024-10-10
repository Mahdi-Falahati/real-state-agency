import ItemList from "@/module/ItemList";
import { VscLocation } from "react-icons/vsc";
import { BsBodyText } from "react-icons/bs";
import { PiBalloonLight } from "react-icons/pi";
import { GiCctvCamera } from "react-icons/gi";

export default function ProfileDetailsPage({ data }) {
  const { title, location, description, amenities, rules } = data;
  return (
    <section className="flex px-2 mb-10">
      <div className="flex flex-col basis-3/4">
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
      <div></div>
    </section>
  );
}
