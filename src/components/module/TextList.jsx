"use client";

import { BsFillTrash3Fill } from "react-icons/bs";
import { BiAddToQueue } from "react-icons/bi";

export default function TextList({
  setProfileData,
  profileData,
  typeTextList,
  title,
  icon,
}) {
  return (
    <section className="my-5 font-semibold text-gray-800">
      <h2 className="flex text-xl">
        {icon}
        {title} :
      </h2>
      {profileData[typeTextList]?.map((item, index) => (
        <div className="flex items-center" key={index}>
          <section class=" w-[180px] sm:w-[300px] my-3 border-double border-4 border-stone-500 rounded-md py-1 px-2">
            <input type="text" className="w-full outline-none border-none" />
          </section>
          <button className="mr-2 text-xl flex justify-center items-center text-white bg-red-700 h-10 w-10 rounded-lg">
            <BsFillTrash3Fill />
          </button>
        </div>
      ))}
      <button className="w-[180px] sm:w-[300px] rounded-lg flex justify-center items-center bg-indigo-700 hover:bg-indigo-600 text-white h-8">
        افزودن
        <BiAddToQueue className="mr-2 text-xl   " />
      </button>
    </section>
  );
}
