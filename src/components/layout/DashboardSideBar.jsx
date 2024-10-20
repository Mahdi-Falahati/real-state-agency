import LogoutBTN from "@/module/LogoutBTN";
import Link from "next/link";

import { HiOutlineUserCircle } from "react-icons/hi2";
import { HiHashtag } from "react-icons/hi2";

export default async function DashboardLayout({ children, role, email }) {
  return (
    <div className="flex overflow-hidden flex-col items-center md:items-start md:flex-row justify-around">
      <section className="flex flex-col justify-center items-center w-[220px] sm:w-[270px] md:w-[320px] shadow-inner shadow-gray-400 p-3 mb-10 rounded-md">
        <HiOutlineUserCircle className="text-8xl text-gray-500" />
        {role === "ADMIN" && (
          <p className="font-semibold tracking-wider mb-2">ادمین</p>
        )}
        <h2 className="font-semibold tracking-wide text-gray-600 shadow-inner p-2 shadow-gray-300 rounded-md">
          {email}
        </h2>
        <div className="w-full text-gray-700 font-semibold flex flex-col justify-between items-start px-3 my-4">
          <Link
            href="/dashboard"
            data-aos="zoom-out-left"
            className={linkStyles}
          >
            <HiHashtag className="mr-2 text-2xl" />
            حساب کاربری
          </Link>
          <Link
            data-aos="zoom-out-right"
            href="/dashboard/my-profiles"
            className={linkStyles}
          >
            <HiHashtag className="mr-2 text-2xl" />
            آگهی های من
          </Link>
          <Link
            data-aos="zoom-out-left"
            href="/dashboard/add-profile"
            className={linkStyles}
          >
            <HiHashtag className="mr-2 text-2xl" />
            ثبت آگهی
          </Link>
          {role === "ADMIN" && (
            <Link
              data-aos="zoom-out-right"
              href="/admin"
              className={linkStyles}
            >
              <HiHashtag className="mr-2 text-2xl" />
              در انتظار تایید
            </Link>
          )}
          <LogoutBTN />
        </div>
      </section>
      <div className="p-2 m-3 w-full" data-aos="zoom-in-up">
        {children}
      </div>
    </div>
  );
}

const linkStyles = "my-1 flex items-center hover:text-gray-900 hover:scale-105";
