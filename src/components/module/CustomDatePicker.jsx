import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { BsCalendar4Week } from "react-icons/bs";

export default function CustomDatePicker({ profileData, setProfileData }) {
  const changeHandler = (e) => {
    const date = new Date(e);
    setProfileData({ ...profileData, constructionDate: date });
  };

  return (
    <div className="max-w-sm min-w-[200px] sm:min-w-[375px] font-semibold my-2">
      <h3 className="flex text-xl">
        <BsCalendar4Week className="text-gray-600 ml-1" />
        تاریخ و ساعت :
      </h3>

      <section
        style={{ direction: "rtl" }}
        className="w-[150px] my-3 border-double border-4 border-stone-500 rounded-md py-1 px-2"
      >
        <DatePicker
          inputClass="border-none outline-none text-center w-full"
          value={profileData.constructionDate}
          calendar={persian}
          locale={persian_fa}
          onChange={changeHandler}
          calendarPosition="bottom-right"
        />
      </section>
    </div>
  );
}
