import Profile from "@/models/Profile";
import BuyResidentialPage from "@/template/BuyResidentialPage";
import connectDB from "@/utils/connectDB";

export default async function BuyResidential() {
  try {
    await connectDB();

    const data = await Profile.find().select("-userId");

    if (data.length === 0) {
      return (
        <p className="text-red-600 text-center font-semibold text-xl tracking-wider">
          هیچ آگهی هنوز ثبت نشده است...
        </p>
      );
    }
    return <BuyResidentialPage data={data.data} />;
  } catch (error) {
    return (
      <p className="text-red-600 text-center font-semibold text-xl tracking-wider">
        در سرور مشکلی رخ داده است
      </p>
    );
  }
}
