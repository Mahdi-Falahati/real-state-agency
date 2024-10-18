"use client";

import Link from "next/link";
import DashboardCard from "@/module/DashboardCard";
import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import { GiAquarium } from "react-icons/gi";
import { BsArrowLeftShort } from "react-icons/bs";

export default function MyProfilesPage() {
  const [profiles, setProfiles] = useState({ data: [], loading: false });

  useEffect(() => {
    fetch("/api/profile")
      .then((res) => res.json())
      .then((data) => setProfiles({ data: data.data, loading: true }));
  }, []);

  return (
    <>
      {profiles.loading && profiles.data.length === 0 ? (
        <section className="flex items-center justify-center flex-col my-14">
          <p className="flex items-center text-xl text-orange-700 font-semibold">
            هیچ آگهی ثبت نشده است
            <GiAquarium className="mr-2 text-2xl" />
          </p>
          <div className="flex items-center mt-1">
            <p className="text-gray-600 ">میخوای یک آگهی ثبت کنی</p>
            <Link
              href="/dashboard/add-profile"
              className="flex items-center mt-1 font-semibold underline text-gray-600"
            >
              <BsArrowLeftShort className="mx-1" />
              ثبت آگهی
            </Link>
          </div>
        </section>
      ) : null}
      {!profiles.loading ? (
        <p className="flex justify-center items-center text-green-700 tracking-wider font-semibold">
          در حال گرفتن آگهی ها کمی صبر کنید
          <AiOutlineLoading3Quarters className="mr-1 animate-spin text-xl" />
        </p>
      ) : (
        <div className="flex justify-around items-center flex-wrap">
          {profiles.data?.map((profile) => (
            <DashboardCard
              key={profile._id}
              data={JSON.parse(JSON.stringify(profile))}
            />
          ))}
        </div>
      )}
    </>
  );
}
