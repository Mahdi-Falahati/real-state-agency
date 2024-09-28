import Profile from "@/models/Profile";
import AddProfilePage from "@/template/AddProfilePage";
import connectDB from "@/utils/connectDB";

export default async function EditPage({ params: { profileId } }) {
  await connectDB();

  try {
    const profile = await Profile.findOne({ _id: profileId });
    return <AddProfilePage data={JSON.parse(JSON.stringify(profile))} />;
  } catch (error) {
    return (
      <p className="text-red-600 text-center font-semibold tracking-widest">
        این آگهی وجود ندارد...
      </p>
    );
  }
}
