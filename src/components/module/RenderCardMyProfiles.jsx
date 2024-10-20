import DashboardCard from "./DashboardCard";
import { IoArrowUndoOutline } from "react-icons/io5";

export default function RenderCardMyProfiles({ color, data, title, icon }) {
  return (
    <div className="mb-10">
      <h1
        className={`shadow-sm py-2 px-5 w-fit rounded-lg shadow-slate-400 flex justify-start items-center font-semibold ${color} text-xl mt-10`}
      >
        <IoArrowUndoOutline className="ml-2" />
        {title}
        {icon}
      </h1>
      <div className="flex justify-around items-center flex-wrap">
        {data?.map((profile) => (
          <DashboardCard
            key={profile._id}
            data={JSON.parse(JSON.stringify(profile))}
          />
        ))}
      </div>
    </div>
  );
}
