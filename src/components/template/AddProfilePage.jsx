"use client";

import { useState } from "react";

import TextInput from "@/module/TextInput";

import { BiDetail } from "react-icons/bi";
import { ImHammer2 } from "react-icons/im";
import { IoHome } from "react-icons/io5";

import RadioList from "@/module/RadioList";
import TextList from "@/module/TextList";
import CustomDatePicker from "@/module/CustomDatePicker";

export default function AddProfilePage() {
  const [profileData, setProfileData] = useState({
    title: "",
    description: "",
    location: "",
    phone: "",
    price: "",
    realState: "",
    cunstructionDate: new Date(),
    category: "villa",
    rules: [],
    amenities: [],
  });

  const submitHandler = async () => {
    const res = await fetch("/api/profile", {
      method: "POST",
      body: JSON.stringify(profileData),
      header: { "Content-Type": "application/json" },
    });

    const data = await res.json();
    if (data.error) {
      console.log(data);
    } else {
      console.log(data);
    }
  };
  return (
    <div className="flex flex-col items-center my-14 md:my-0">
      <h2 className="font-semibold text-2xl flex items-center justify-start  w-full max-w-sm min-w-[200px] sm:min-w-[350px] ">
        <BiDetail className="ml-2" />
        ثبت آگهی
      </h2>
      <TextInput
        title="عنوان آگهی "
        name="title"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        textarea={true}
        title="توضیحات "
        name="description"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="آدرس "
        name="location"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="شماره تماس "
        name="phone"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="قیمت ( به تومان ) "
        name="price"
        profileData={profileData}
        setProfileData={setProfileData}
      />

      <TextInput
        title="بنگاه"
        name="realState"
        profileData={profileData}
        setProfileData={setProfileData}
      />

      <RadioList profileData={profileData} setProfileData={setProfileData} />

      <TextList
        setProfileData={setProfileData}
        profileData={profileData}
        typeTextList="amenities"
        title="امکانات رفاهی"
        icon={<IoHome className="text-purple-600 ml-1" />}
      />

      <TextList
        setProfileData={setProfileData}
        profileData={profileData}
        typeTextList="rules"
        title="قوانین"
        icon={<ImHammer2 className="text-red-600 ml-1" />}
      />

      <CustomDatePicker
        profileData={profileData}
        setProfileData={setProfileData}
      />

      <button
        onClick={submitHandler}
        className="max-w-sm min-w-[200px] bg-green-600 text-white sm:min-w-[375px] rounded-lg py-1 text-xl font-semibold my-5 border-double border-4 border-white hover:border-green-600"
      >
        ثبت آگهی
      </button>
    </div>
  );
}
