"use client";

import Card from "@/module/Card";
import { useState } from "react";
import { LuClipboardEdit } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
import { toast, ToastContainer } from "react-toastify";
import { PulseLoader } from "react-spinners";
import { useRouter } from "next/navigation";
import WarningMessage from "./WarningMessage";

export default function DashboardCard({ data }) {
  const [loading, setLoading] = useState({ e: false, r: false });
  const router = useRouter();

  const deleteHandler = async () => {
    setLoading({ ...loading, r: true });
    const req = await fetch(`/api/profile/delete/${data._id}`, {
      method: "DELETE",
    });

    const res = await req.json();
    if (res.error) {
      toast.error(res.error);
    } else {
      toast.success(res.message);
      setInterval(() => {
        window.location.reload();
      }, 1000);
    }
    setLoading({ ...loading, r: false });
  };

  const editHandler = () => {
    setLoading({ ...loading, e: true });
    router.push(`/dashboard/my-profiles/${data._id}`);
    setLoading({ ...loading, e: false });
  };

  return (
    <div className="flex  flex-col items-center my-5 mx-1 shadow-inner rounded-md shadow-slate-400 pt-3">
      <div className="flex justify-around font-medium items-center w-full">
        {loading.r ? (
          <PulseLoader
            color="red"
            cssOverride={{
              textAlign: "center",
              width: "100px",
            }}
            loading
          />
        ) : (
          <button
            onClick={deleteHandler}
            className={`${btnStyles} border-red-700 hover:bg-red-700 `}
          >
            <RiDeleteBinLine className={`${btnIconStyles} bg-red-700`} />
            <span className="px-2">حذف</span>
          </button>
        )}
        {loading.e ? (
          <PulseLoader
            color="green"
            cssOverride={{
              textAlign: "center",
              width: "100px",
            }}
            loading
          />
        ) : (
          <button
            onClick={editHandler}
            className={`${btnStyles} border-green-500 hover:bg-green-500 `}
          >
            <LuClipboardEdit className={`${btnIconStyles} bg-green-500`} />
            <span className="px-2">ویرایش</span>
          </button>
        )}
      </div>
      <Card data={data} margin={"my-2"} />
      {data.message && <WarningMessage message={data.message} />}
      <ToastContainer position="top-center" limit={1} rtl={true} />
    </div>
  );
}

const btnStyles =
  "flex items-center border-2 border-solid hover:text-white rounded-md text-gray-700";
const btnIconStyles = "text-white text-2xl ml-1";
