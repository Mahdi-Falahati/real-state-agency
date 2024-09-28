import connectDB from "@/utils/connectDB";

export default async function EditPage({ params: { profileId } }) {
  await connectDB();

  return <div>{profileId}</div>;
}
