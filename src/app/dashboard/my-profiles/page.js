import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Profile from "@/models/Profile";
import User from "@/models/User";
import MyProfilesPage from "@/template/MyProfilesPage";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";

export default async function MyProfiles() {
  await connectDB();
  const session = await getServerSession(authOptions);

  const [user] = await User.aggregate([
    { $match: { email: session.user.email } },
    {
      $lookup: {
        from: "profiles",
        foreignField: "userId",
        localField: "_id",
        as: "profiles",
      },
    },
  ]);

  return <MyProfilesPage profiles={user.profiles}/>;
}
