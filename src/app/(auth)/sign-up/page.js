import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import SignUpPage from "@/template/SignUpPage";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function SignUp() {
  const session = await getServerSession(authOptions);
  if (session) return redirect("/");

  return <SignUpPage />;
}
