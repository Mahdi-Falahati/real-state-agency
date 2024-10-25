"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { CircleLoader } from "react-spinners";

import { validateEmail } from "@/utils/auth";

import { FiHash } from "react-icons/fi";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    setInterval(() => {
      setLoading(false);
    }, 2000);

    if (!validateEmail(email)) return toast.error("لطفا ایمیل معتبر وارد کنید");
    if (!password) return toast.error("لطفا رمز عبور خود را وارد کنید");

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res.error) return toast.error(res.error);
    window.location.reload();
  };

  return (
    <section className="flex justify-center items-center flex-col my-14  px-2">
      <div>
        <h2 className="bg-blue-700 text-white font-semibold text-2xl py-3 text-center rounded-t-lg">
          فرم ورود
        </h2>
        <form className="flex flex-col sm:w-[400px] shadow-lg sm:p-4 p-1 rounded-lg">
          <label htmlFor="email" className={labelStyles}>
            <AiOutlineUser className="mx-2" />
            ایمیل
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputStyles}
            type="text"
            id="email"
            placeholder="test@gmail.com"
          />

          <label className={labelStyles} htmlFor="password">
            <AiFillEyeInvisible className="mx-2" />
            رمز عبور
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={inputStyles}
            type="password"
            id="password"
            placeholder="رمز عبور را وارد کنید..."
          />

          {loading ? (
            <CircleLoader
              color="orangered"
              cssOverride={{ margin: "25px auto" }}
              loading
            />
          ) : (
            <button
              onClick={submitHandler}
              className="font-semibold mx-auto w-[250px] text-white hover:scale-105 hover:bg-green-600 bg-green-700 rounded-lg py-3 mt-5"
            >
              ورود
            </button>
          )}
          <p className="py-2 rounded-b-lg text-center text-sm flex items-center justify-center">
            ساخت حساب کاربری
            <Link
              href="/sign-up"
              className="text-blue-600 mx-2 flex items-center justify-center font-semibold text-xl"
            >
              <FiHash className="ml-1" />
              ثبت نام
            </Link>
          </p>
        </form>
      </div>
      <ToastContainer position="top-center" limit={1} rtl={true} />
    </section>
  );
}

const inputStyles =
  "outline-none px-2 border-none shadow-lg rounded-lg mt-1 text-center ";
const labelStyles =
  "block font-semibold text-gray-500 mt-5 mx-1 flex items-center";
