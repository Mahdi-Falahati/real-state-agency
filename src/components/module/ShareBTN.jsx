"use client";

import { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { CiShare2 } from "react-icons/ci";

export default function ShareBTN() {
  const [location, setLocation] = useState("");

  useEffect(() => {
    setLocation(window.location.href);
  }, []);

  return (
    <CopyToClipboard text={location}>
      <span className="flex items-center justify-center w-full font-semibold tracking-wide text-indigo-800 hover:cursor-pointer">
        <CiShare2 className="ml-1" />
        اشتراک گذاری
      </span>
    </CopyToClipboard>
  );
}
