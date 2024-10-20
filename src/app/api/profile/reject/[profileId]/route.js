import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";

export async function PATCH(req, context) {
  try {
    await connectDB();
  } catch (error) {
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است" },
      { status: 500 }
    );
  }
}
