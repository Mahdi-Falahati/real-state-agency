"use client";

import Link from "next/link";
import DashboardCard from "@/module/DashboardCard";
import { useEffect, useState } from "react";

import { GiAquarium } from "react-icons/gi";
import { BsArrowLeftShort } from "react-icons/bs";

export default function MyProfilesPage() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetch("/api/profile")
      .then((res) => res.json())
      .then((data) => setProfiles(data.data));
  }, []);

  return (
    <div className="flex justify-around items-center flex-wrap">
      {profiles.length ? null : (
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
      )}
      {profiles?.map((profile) => (
        <DashboardCard
          key={profile._id}
          data={JSON.parse(JSON.stringify(profile))}
        />
      ))}
    </div>
  );
}
