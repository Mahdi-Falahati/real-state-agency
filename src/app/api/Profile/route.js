import connectDB from "@/utils/connectDB";

import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDB();

    const session = await getServerSession(req);
    if (!session) {
      return NextResponse.json(
        { error: "لطفا اول وارد حساب کاربری خود شود" },
        { status: "401" }
      );
    }

    const body = await req.json();
    const {
      title,
      description,
      location,
      phone,
      price,
      realState,
      cunstructionDate,
      category,
      rules,
      amenities,
    } = body;
  } catch (error) {
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است" },
      { status: 500 }
    );
  }
}
