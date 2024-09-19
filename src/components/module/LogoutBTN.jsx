"use client";

import { signOut } from "next-auth/react";
import { FiLogOut } from "react-icons/fi";

export default function LogoutBTN() {
  return (
    <button
      onClick={signOut}
      className="rounded-lg py-1 flex items-center justify-center w-full shadow-inner shadow-gray-400 font-semibold text-xl my-4 hover:scale-90"
    >
      <FiLogOut className="ml-2" />
      خروج
    </button>
  );
}
