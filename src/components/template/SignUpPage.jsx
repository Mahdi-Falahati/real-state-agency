"use client";

import Link from "next/link";
import { useState } from "react";

import { FiHash } from "react-icons/fi";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  return (
    <section className="flex justify-center items-center flex-col my-14">
      <div>
        <h2 className="bg-blue-700 text-white font-semibold text-2xl py-3 text-center rounded-t-lg">
          فرم ثبت نام
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

          <label className={labelStyles} htmlFor="repeatPassword">
            <AiFillEyeInvisible className="mx-2" />
            تکرار رمز عبور
          </label>
          <input
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
            className={inputStyles}
            type="password"
            id="repeatPassword"
            placeholder="تکرار رمز عبور..."
          />

          <button className="font-semibold mx-auto w-[250px] text-white hover:scale-105 hover:bg-green-600 bg-green-700 rounded-lg py-3 mt-5">
            ثبت نام
          </button>
          <p className="py-2 rounded-b-lg text-center text-sm flex items-center justify-center">
            حساب کاربری دارید ؟
            <Link
              href="/sign-in"
              className="text-blue-600 mx-2 flex items-center justify-center font-semibold text-xl"
            >
              <FiHash className="ml-1" />
              ورود
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}

const inputStyles =
  "outline-none border-none shadow-lg rounded-lg mt-1 text-center ";
const labelStyles =
  "block font-semibold text-gray-500 mt-5 mx-1 flex items-center";
