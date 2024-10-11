import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { PiHouseLine } from "react-icons/pi";
import { IoStorefrontOutline } from "react-icons/io5";
import { RiHomeOfficeLine } from "react-icons/ri";
import { TbCurrentLocation } from "react-icons/tb";
import { GiPriceTag } from "react-icons/gi";
// import { PiEyesFill } from "react-icons/pi";
import { TiArrowBackOutline } from "react-icons/ti";

import { sp } from "@/utils/replaceNmber";
import Link from "next/link";

export default function Card({ data, margin = "" }) {
  const { category, title, price, location, _id } = data;
  const profileId = _id.toString();

  return (
    <section
      className={`mx-2 px-2 rounded-lg shadow-md shadow-slate-400 w-[240px] sm:w-[300px] ${margin} flex justify-center items-center flex-col`}
    >
      {icons[category]}
      <h2 className=" my-2 text-xl font-semibold text-gray-700">{title}</h2>
      <div className="px-2 border-t border-slate-400 border-dashed flex flex-col justify-start items-start w-[240px] sm:w-[300px]">
        <p className="mt-2 text-xl font-semibold text-gray-700 flex items-center flex-wrap">
          <span className="flex items-center ml-2">
            <GiPriceTag className="ml-1 text-green-700" />
            قیمت :
          </span>
          {sp(price)} <span className="text-sm mr-1">تومان</span>
        </p>
        <p className="flex items-start leading-6 w-full justify-start my-2 text-gray-500 font-semibold">
          <TbCurrentLocation className="ml-1 text-red-500 text-xl" />
          {location}
        </p>
      </div>
      <Link
        href={`/buy-residential/${profileId}`}
        className="my-3 flex items-center hover:scale-105 "
      >
        <TiArrowBackOutline className="ml-1 text-xl" />
        مشاهده آگهی
      </Link>
    </section>
  );
}

const iconStyles =
  "text-4xl m-3 text-white bg-purple-900  w-14 h-14 p-2 rounded-lg";

const icons = {
  villa: <PiHouseLine className={iconStyles} />,
  apartment: <HiOutlineBuildingOffice2 className={iconStyles} />,
  store: <IoStorefrontOutline className={iconStyles} />,
  office: <RiHomeOfficeLine className={iconStyles} />,
};
