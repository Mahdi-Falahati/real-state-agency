import DashboardPage from "@/template/DashboardPage";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import connectDB from "@/utils/connectDB";

export default async function Dashboard() {
  await connectDB();
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect("/sign-in");
  }

  return <DashboardPage />;
}
