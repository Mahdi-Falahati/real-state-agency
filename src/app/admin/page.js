import DashboardSideBar from "@/layout/DashboardSideBar";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import User from "@/models/User";
import AdminPage from "@/template/AdminPage";
import Profile from "@/models/Profile";

export default async function Admin({ children }) {
  const session = await getServerSession(authOptions);
  if (!session) return redirect("/sign-in");
  const user = await User.findOne({ email: session.user.email });
  if (user.role != "ADMIN") return redirect("/dashboard");

  const profiles = await Profile.find({ published: false });

  return (
    <DashboardSideBar email={user.email} role={user.role}>
      <AdminPage profiles={profiles} />
    </DashboardSideBar>
  );
}
