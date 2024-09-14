"use client";

import Link from "next/link";
import { useState } from "react";

import { FiAlignRight } from "react-icons/fi";

export default function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ul className="hidden sm:flex items-center justify-between min-w-[200px] text-white">
        <li className="hover:scale-110">
          <Link href="/">صفحه اصلی</Link>
        </li>
        <li className="hover:scale-110">
          <Link href="/buy-residential">آگهی ها</Link>
        </li>
      </ul>
      <button onClick={() => setOpen(!open)} className="flex sm:hidden">
        <FiAlignRight className="text-4xl text-white" />
      </button>
      {open && (
        <div className="absolute top-20 bg-blue-700 rounded-b-lg">
          <ul className="sm:hidden flex flex-col items-center justify-between min-w-[200px] text-white">
            <li className="hover:scale-110 my-4">
              <Link href="/">صفحه اصلی</Link>
            </li>
            <li className="hover:scale-110 my-4">
              <Link href="/buy-residential">آگهی ها</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
