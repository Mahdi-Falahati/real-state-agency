import { useState } from "react";
import { GrStatusWarning } from "react-icons/gr";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { VscDebugBreakpointUnsupported } from "react-icons/vsc";

export default function WarningMessage({ message }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="px-2 my-4">
      <button
        onClick={() => setOpen(!open)}
        className="border-gray-500 py-1 flex justify-around items-center text-gray-700 font-semibold mb-2 w-[260px]"
      >
        <span className="flex justify-between items-center">
          <GrStatusWarning className="ml-1 text-2xl text-orange-600 animate-bounce" />
          دلایل رد شدن آگهی شما...
        </span>
        {open && <IoIosArrowDropupCircle className="text-2xl" />}
        {!open && <IoIosArrowDropdownCircle className="text-2xl" />}
      </button>
      {open && (
        <div className="leading-6 flex pt-2 border-t border-dotted border-yellow-500 font-medium tracking-wider text-justify w-[260px]">
          <VscDebugBreakpointUnsupported className="text-4xl w-[70px] text-orange-400 ml-1" />
          <p className="mt-2">{message}</p>
        </div>
      )}
    </div>
  );
}
