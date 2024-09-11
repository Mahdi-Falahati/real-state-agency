import Link from "next/link";
import { FiLogIn } from "react-icons/fi";

export default function Header() {
  return (
    <header className="flex p-4 mb-10 justify-between bg-blue-700 font-semibold rounded-b-md">
      <ul className="flex items-center justify-between min-w-[200px] text-white">
        <li className="hover:scale-110">
          <Link href="/">صفحه اصلی</Link>
        </li>
        <li className="hover:scale-110">
          <Link href="/buy-residential">آگهی ها</Link>
        </li>
      </ul>
      <Link
        href="/sign-in"
        className="flex items-center hover:scale-105 justify-center bg-white text-blue-700 rounded-lg py-3 px-4"
      >
        <FiLogIn className="ml-2" />
        <span className="tracking-widest">ورود</span>
      </Link>
    </header>
  );
}
