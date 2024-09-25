"use client";

import { p2e } from "@/utils/replaceNmber";

export default function TextInput({
  title,
  name,
  profileData,
  setProfileData,
  textarea = false,
}) {
  const ChangeValueHandler = (e) => {
    const { value, name } = e.target;
    setProfileData({ ...profileData, [name]: p2e(value) });
  };
  return textarea ? (
    <div class="w-full sm:w-96">
      <div class="relative w-full min-w-[200px]">
        <textarea
          name={name}
          value={profileData[name].value}
          onChange={ChangeValueHandler}
          class="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-semibold text-sm  text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
          placeholder=" "
        ></textarea>
        <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-semibold leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
          {title}
        </label>
      </div>
    </div>
  ) : (
    <div class="w-full max-w-sm min-w-[200px] sm:min-w-[350px]">
      <div class="relative">
        <input
          type="text"
          name={name}
          value={profileData[name].value}
          onChange={ChangeValueHandler}
          class="peer w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
        />
        <label class="absolute font-semibold cursor-text bg-white px-1 right-2.5 top-2.5 text-slate-400 text-sm transition-all transform origin-right peer-focus:-top-2 peer-focus:right-2.5 peer-focus:text-xs peer-focus:text-slate-400 peer-focus:scale-90">
          {title}
        </label>
      </div>
    </div>
  );
}
