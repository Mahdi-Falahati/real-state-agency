import DashboardSideBar from "@/layout/DashboardSideBar";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import User from "@/models/User";
import { GiAquarium } from "react-icons/gi";
import LogoutBTN from "@/module/LogoutBTN";

export const metadata = {
  title: "پنل ادمین | سایت املاک فلاحتی",
};

export default async function layout({ children }) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect("/sign-in");
  }

  const user = await User.findOne({ email: session.user.email });
  if (!user) {
    return (
      <>
        <p className="flex items-center justify-center text-xl text-orange-700 font-semibold">
          مشکلی پیش امده است
          <GiAquarium className="mx-2 text-2xl" />
          لطفا از حساب خود خارج شوید و دوباره تلاش کنید
        </p>
        <div className="flex justify-center">
          <span className="w-[200px]">
            <LogoutBTN />
          </span>
        </div>
      </>
    );
  }

  return (
    <DashboardSideBar email={user.email} role={user.role}>
      {children}
    </DashboardSideBar>
  );
}
