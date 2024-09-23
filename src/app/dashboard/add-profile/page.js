import AddProfilePage from "@/template/AddProfilePage";
import connectDB from "@/utils/connectDB";

export default async function AddProfiles() {
  await connectDB();

  return <AddProfilePage />;
}
