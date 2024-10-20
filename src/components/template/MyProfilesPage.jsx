"use client";

import Link from "next/link";
import DashboardCard from "@/module/DashboardCard";
import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { GiConfirmed } from "react-icons/gi";
import { TbProgress } from "react-icons/tb";
import { IoIosRemoveCircleOutline } from "react-icons/io";

import { GiAquarium } from "react-icons/gi";
import { BsArrowLeftShort } from "react-icons/bs";
import Loading from "@/module/Loading";

export default function MyProfilesPage() {
  const [profiles, setProfiles] = useState({
    data: { published: [], reject: [], notPublished: [] },
    loading: false,
  });

  useEffect(() => {
    fetch("/api/profile")
      .then((res) => res.json())
      .then((data) => {
        const info = { published: [], reject: [], notPublished: [] };
        data.data.forEach((profile) => {
          if (profile.published) {
            info.published.push(profile);
          }
          if (!profile.published && !profile.reject) {
            info.notPublished.push(profile);
          }
          if (profile.reject) {
            info.reject.push(profile);
          }
        });
        setProfiles({
          data: info,
          loading: true,
        });
      });
  }, []);

  return (
    <>
      {profiles.loading &&
      profiles.data.published.length === 0 &&
      profiles.data.reject.length === 0 &&
      profiles.data.notPublished.length === 0 ? (
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
        <Loading />
      ) : (
        <div>
          {profiles.data.reject.length !== 0 ? (
            <div className="mb-10">
              <h1 className="flex justify-start items-center font-semibold text-xl text-red-600 mt-10">
                <IoIosRemoveCircleOutline className="ml-1 " />
                آگهی های رد شده
              </h1>
              <div className="flex justify-around items-center flex-wrap">
                {profiles.data?.reject?.map((profile) => (
                  <DashboardCard
                    key={profile._id}
                    data={JSON.parse(JSON.stringify(profile))}
                  />
                ))}
              </div>
            </div>
          ) : null}

          {profiles.data.notPublished.length !== 0 ? (
            <div className="mb-20">
              <h1 className="flex justify-start items-center font-semibold text-xl text-yellow-600 mt-10">
                <TbProgress className="ml-1 " />
                آگهی های در انتظار تایید
              </h1>
              <div className="flex justify-around items-center flex-wrap">
                {profiles.data?.notPublished?.map((profile) => (
                  <DashboardCard
                    key={profile._id}
                    data={JSON.parse(JSON.stringify(profile))}
                  />
                ))}
              </div>
            </div>
          ) : null}

          {profiles.data.published.length !== 0 ? (
            <div className="mb-10">
              <h1 className="flex justify-start items-center font-semibold text-xl text-green-600 mt-10">
                <GiConfirmed className="ml-1 " />
                آگهی های منتشر شده
              </h1>
              <div className="flex justify-around items-center flex-wrap">
                {profiles.data?.published?.map((profile) => (
                  <DashboardCard
                    key={profile._id}
                    data={JSON.parse(JSON.stringify(profile))}
                  />
                ))}
              </div>
            </div>
          ) : null}
        </div>
      )}
    </>
  );
}
