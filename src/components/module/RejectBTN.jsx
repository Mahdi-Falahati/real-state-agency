"use client";
import { useState } from "react";
import { FcCancel } from "react-icons/fc";
import { SlClose } from "react-icons/sl";
import { LuPencilLine } from "react-icons/lu";
import { BarLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";

export default function RejectBtn({ id }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState("");

  const toggleHandler = () => {
    setOpen(!open);
  };

  const rejectProfileHandler = async () => {
    setLoading(true);
    const req = await fetch(`/api/profile/reject/${id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
      "Content-Type": "application/json",
    });
    const res = await req.json();
    console.log(res);
    setLoading(false);

    setOpen(!open);
    if (res.error) {
      toast.error(res.error);
    } else {
      toast.success(res.message);
      setData("");
      setInterval(() => {
        window.location.reload();
      }, 1000);
    }
  };

  if (loading) {
    return (
      <BarLoader color="red" cssOverride={{ margin: "25px auto" }} loading />
    );
  } else {
    return (
      <>
        <button
          onClick={toggleHandler}
          className="text-red-600 flex items-center justify-center transition ease-in-out delay-150   hover:scale-110 py-2 my-1"
        >
          <FcCancel className="ml-1 animate-pulse text-xl" />
          رد کردن اگهی
        </button>
        {open && (
          <div className="z-10 fixed bottom-0 top-0 left-0 right-0 bg-white flex justify-center items-center">
            <div className="bg-purple-700 min-h-[100px] mx-1 text-white rounded-lg">
              <button
                onClick={toggleHandler}
                className="flex m-2 text-red-600 bg-white p-1 text-3xl rounded-full"
              >
                <SlClose />
              </button>
              <div className="px-3 md:px-10">
                <section className="py-3 px-2 flex flex-col items-center">
                  <h4 className="font-medium flex justify-center items-center mb-4">
                    پیغامی برای دلیل رد شدن آگهی بنویس
                    <LuPencilLine className="mr-1  text-xl" />
                  </h4>
                  <textarea
                    placeholder={`دلایل رد کردن را بنویسید...`}
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                    className="text-black rounded-md peer h-full min-h-[220px] w-full resize-none p-2 focus:outline-none"
                  ></textarea>

                  <button
                    onClick={rejectProfileHandler}
                    className="flex justify-center items-center my-3 border hover:bg-white hover:text-black hover:scale-105  border-solid border-white w-[150px] h-[35px] rounded-lg"
                  >
                    رد کردن آگهی
                    <FcCancel className="ml-1 text-2xl" />
                  </button>
                </section>
              </div>
            </div>
            <ToastContainer position="top-center" limit={1} rtl={true} />
          </div>
        )}
      </>
    );
  }
}
