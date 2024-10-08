import Image from "next/image";
import Link from "next/link";
import { BiLink } from "react-icons/bi";

export default function CategoryCard({ title, name }) {
  return (
    <Link
      href={{ pathname: "/buy-residential", query: { category: name } }}
      className="shadow-lg pb-3 rounded-md hover:scale-105 m-5"
    >
      <Image
        src={`/images/${name}.png`}
        alt={title}
        width={240}
        height={144}
        className="rounded-t-lg"
      />
      <p className="text-xl flex justify-center items-center mt-2 font-semibold tracking-wider text-indigo-900">
        <BiLink className="ml-2" />
        {title}
      </p>
    </Link>
  );
}
