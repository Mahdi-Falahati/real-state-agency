import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import LogoutBTN from "@/module/LogoutBTN";
import { getServerSession } from "next-auth";
import Link from "next/link";

import { HiOutlineUserCircle } from "react-icons/hi2";
import { HiHashtag } from "react-icons/hi2";

export default async function DashboardLayout({ children }) {
  const session = await getServerSession(authOptions);
  const email = session?.user?.email;

  return (
    <div>
      <section className="flex flex-col justify-center items-center w-[250px] shadow-inner shadow-gray-400 p-3 rounded-md">
        <HiOutlineUserCircle className="text-8xl text-gray-500" />
        <h2 className="font-semibold tracking-wide text-gray-600 shadow-inner p-2 shadow-gray-300 rounded-md">
          {email}
        </h2>
        <div className="w-full h-[120px] text-gray-700 font-semibold flex flex-col justify-between items-start px-3 my-4">
          <Link href="/dashboard" className={linkStyles}>
            <HiHashtag className="mr-2 text-2xl" />
            حساب کاربری
          </Link>
          <Link href="/dashboard/my-profiles" className={linkStyles}>
            <HiHashtag className="mr-2 text-2xl" />
            آگهی های من
          </Link>
          <Link href="/dashboard/add-profile" className={linkStyles}>
            <HiHashtag className="mr-2 text-2xl" />
            ثبت آگهی
          </Link>
          <LogoutBTN />
        </div>
      </section>
      {children}
    </div>
  );
}

const linkStyles = "flex items-center hover:text-gray-900 hover:scale-105";
