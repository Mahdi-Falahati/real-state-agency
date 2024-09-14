import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Menu from "@/module/Menu";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { FiLogIn } from "react-icons/fi";
import { FiUser } from "react-icons/fi";

export default async function Header() {
  const session = await getServerSession(authOptions);

  return (
    <header className="flex p-4 mb-10 justify-between bg-blue-700 font-semibold rounded-b-md">
      <Menu />
      {session ? (
        <Link
          href="/dashboard"
          className="flex items-center hover:scale-105 justify-center bg-white text-blue-700 rounded-lg py-3 px-4"
        >
          <FiUser />
        </Link>
      ) : (
        <Link
          href="/sign-in"
          className="flex items-center hover:scale-105 justify-center bg-white text-blue-700 rounded-lg py-3 px-4"
        >
          <FiLogIn className="ml-2" />
          <span className="tracking-widest">ورود</span>
        </Link>
      )}
    </header>
  );
}
