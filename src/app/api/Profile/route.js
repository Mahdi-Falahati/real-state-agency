import connectDB from "@/utils/connectDB";
import Profile from "@/models/Profile";
import User from "@/models/User";
import { isNumeric } from "@/utils/auth";

import { Types } from "mongoose";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDB();

    const session = await getServerSession(req);
    if (!session) {
      return NextResponse.json(
        { error: "لطفا اول وارد حساب کاربری خود شود" },
        { status: 401 }
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

    const user = await User.findOne({ email: session.user.email });
    if (!user) {
      return NextResponse.json(
        { error: "حساب کاربری شما یافت نشد" },
        { status: 404 }
      );
    }

    if (!isNumeric(price) && !isNumeric(phone)) {
      return NextResponse.json(
        { error: "لطفا اطلاعات معتبر وارد کنید" },
        { status: 400 }
      );
    }

    if (
      !title ||
      !description ||
      !location ||
      !phone ||
      !realState ||
      !cunstructionDate ||
      !category
    ) {
      return NextResponse.json(
        { error: "لطفا اطلاعات معتبر وارد کنید" },
        { status: 400 }
      );
    }

    const newProfile = await Profile.create({
      title,
      description,
      location,
      phone,
      price: +price,
      realState,
      cunstructionDate,
      category,
      rules,
      amenities,
      userId: new Types.ObjectId(user._id),
    });

    return NextResponse.json(
      { message: "آکهی با موفقیت ثبت شد!" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است" },
      { status: 500 }
    );
  }
}
