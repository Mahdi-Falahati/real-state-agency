import Profile from "@/models/Profile";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function PATCH(req, context) {
  try {
    await connectDB();

    const session = await getServerSession(req);
    if (!session) {
      return NextResponse.json(
        {
          error: "لطفا وارد حساب کاربری خود شوید",
        },
        { status: 401 }
      );
    }

    const id = context.params.profileId;

    const user = await User.findOne({ email: session.user.email });
    if (!user) {
      return NextResponse.json(
        {
          error: "حساب کاربری یافت نشد",
        },
        { status: 404 }
      );
    }

    if (user.role !== "ADMIN") {
      return NextResponse.json(
        {
          error: "شما دسترسی لازم برای اینکار را ندارید",
        },
        { status: 200 }
      );
    }

    const profile = await Profile.findById(id);
    if (!profile) {
      return NextResponse.json(
        {
          error: "آگهی مورد نظر یافت نشد",
        },
        { status: 200 }
      );
    }

    profile.published = true;
    profile.save();

    return NextResponse.json(
      {
        message: "آگهی با موفقیت انتشار پیدا کرد",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است" },
      { status: 500 }
    );
  }
}
