import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import SignInPage from "@/template/SignInPage";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function SignIn() {
  const session = await getServerSession(authOptions);
  if (session) return redirect("/");

  return <SignInPage />;
}
