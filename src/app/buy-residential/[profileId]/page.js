import Profile from "@/models/Profile";
import ProfileDetailsPage from "@/template/ProfileDetailsPage";
import connectDB from "@/utils/connectDB";

export default async function ProfileDetails({ params: { profileId } }) {
  try {
    await connectDB();
    const profile = await Profile.findById(profileId);

    return <ProfileDetailsPage />;
  } catch (error) {
    return (
      <p className="text-red-600 text-center font-semibold text-xl tracking-wider">
        در سرور مشکلی رخ داده است
      </p>
    );
  }
}
