import Link from "next/link";
import { FcFilledFilter } from "react-icons/fc";
import { FiLink } from "react-icons/fi";

export default function SideBar() {
  const quries = [
    { villa: "ویلا" },
    { appartment: "آپارتمان" },
    { office: "دفتر" },
    { store: "مغازه" },
  ];

  return (
    <section className="shadow-inner shadow-gray-400 p-5 px-10 rounded-md">
      <h2 className="text-nowrap flex items-center font-semibold text-2xl tracking-wider">
        <FcFilledFilter className="text-2xl ml-2" />
        دسته بندی
      </h2>

      <div className="w-full h-[130px] text-gray-700 font-semibold items-center px-3 my-4">
        <Link
          href="/buy-residential"
          className="flex items-center w-full hover:scale-105 text-xl my-1"
        >
          <FiLink className="ml-2 text-green-700" />
          همه
        </Link>
        {quries.map((query, i) => (
          <Link
            className="flex items-center w-full hover:scale-105 text-xl my-1"
            key={i}
            href={{
              pathname: "/buy-residential",
              query: { category: Object.keys(query) },
            }}
          >
            <FiLink className="ml-2 text-green-700" />
            {Object.values(query)}
          </Link>
        ))}
      </div>
    </section>
  );
}
