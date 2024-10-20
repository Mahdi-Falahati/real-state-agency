"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { GiConfirmed } from "react-icons/gi";
import { TbProgress } from "react-icons/tb";
import { IoIosRemoveCircleOutline } from "react-icons/io";

import { GiAquarium } from "react-icons/gi";
import { BsArrowLeftShort } from "react-icons/bs";
import Loading from "@/module/Loading";
import RenderCardMyProfiles from "@/module/RenderCardMyProfiles";

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
          {profiles.data.reject.length !== 0 && (
            <RenderCardMyProfiles
              icon={<IoIosRemoveCircleOutline className="mr-1 animate-pulse" />}
              data={profiles.data.reject}
              title={"آگهی های رد شده "}
              color={"text-red-600"}
            />
          )}

          {profiles.data.notPublished.length !== 0 && (
            <RenderCardMyProfiles
              icon={<TbProgress className="mr-1 animate-spin" />}
              data={profiles.data.notPublished}
              title={"آگهی های در انتظار تایید"}
              color={"text-yellow-600"}
            />
          )}

          {profiles.data.published.length !== 0 && (
            <RenderCardMyProfiles
              icon={<GiConfirmed className="mr-1 animate-bounce" />}
              data={profiles.data.published}
              title={"آگهی های منتشر شده"}
              color={"text-green-600"}
            />
          )}
        </div>
      )}
    </>
  );
}
