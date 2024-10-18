import DashboardSideBar from "@/layout/DashboardSideBar";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import User from "@/models/User";

export default async function Admin({ children }) {
  const session = await getServerSession(authOptions);
  if (!session) return redirect("/sign-in");
  const user = await User.findOne({ email: session.user.email });
  if (user.role != "ADMIN") return redirect("/dashboard");

  return (
    <DashboardSideBar email={user.email} role={user.role}>
      {children}
    </DashboardSideBar>
  );
}
