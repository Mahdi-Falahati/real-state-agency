"use client";
import { GiConfirmed } from "react-icons/gi";

export default function ConfirmBTN({ id }) {
  const clickHandler = async () => {
    const req = await fetch(`/api/profile/published/${id}`, {
      method: "PATCH",
    });
    const res = await req.json();
  };

  return (
    <button
      onClick={clickHandler}
      className="text-green-700 flex items-center justify-center transition ease-in-out delay-150  hover:scale-110 py-2 mb-1 mt-3"
    >
      <GiConfirmed className="ml-3 animate-bounce text-xl" />
      تایید آگهی
    </button>
  );
}
