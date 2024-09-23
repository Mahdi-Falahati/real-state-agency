import DashboardPage from "@/template/DashboardPage";
import connectDB from "@/utils/connectDB";

export default async function Dashboard() {
  await connectDB();

  return <DashboardPage />;
}
