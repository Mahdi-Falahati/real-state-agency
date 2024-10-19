"use client";
import { useState } from "react";
import { GiConfirmed } from "react-icons/gi";
import { BarLoader } from "react-spinners";

export default function ConfirmBTN({ id }) {
  const [loading, setLoading] = useState(false);

  const clickHandler = async () => {
    setLoading(true);
    const req = await fetch(`/api/profile/published/${id}`, {
      method: "PATCH",
    });
    const res = await req.json();
    setLoading(false);
  };

  if (loading) {
    return (
      <BarLoader color="green" cssOverride={{ margin: "25px auto" }} loading />
    );
  } else {
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
}
