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

    const {
      title,
      description,
      location,
      phone,
      price,
      realState,
      constructionDate,
      category,
      rules,
      amenities,
    } = await req.json();

    const user = await User.findOne({ email: session.user.email });
    if (!user) {
      return NextResponse.json(
        { error: "حساب کاربری شما یافت نشد" },
        { status: 404 }
      );
    }
    if (!isNumeric(price + "") || !isNumeric(phone + "")) {
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
      !constructionDate ||
      !category
    ) {
      return NextResponse.json(
        { error: "لطفا اطلاعات معتبر وارد کنید" },
        { status: 400 }
      );
    }

    if (user.role === "ADMIN") {
      const newProfile = await Profile.create({
        title,
        description,
        location,
        phone,
        price: +price,
        realState,
        constructionDate,
        category,
        rules,
        amenities,
        published: true,
        userId: new Types.ObjectId(user._id),
      });
    } else {
      const newProfile = await Profile.create({
        title,
        description,
        location,
        phone,
        price: +price,
        realState,
        constructionDate,
        category,
        rules,
        amenities,
        userId: new Types.ObjectId(user._id),
      });
    }

    return NextResponse.json(
      { message: "آکهی با موفقیت ثبت شد!" },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است" },
      { status: 500 }
    );
  }
}

export async function PATCH(req) {
  try {
    await connectDB();
    const session = await getServerSession(req);

    if (!session) {
      return NextResponse.json(
        { error: "لطفا اول وارد حساب کاربری خود شود" },
        { status: 401 }
      );
    }

    const {
      _id,
      title,
      description,
      location,
      phone,
      price,
      realState,
      constructionDate,
      category,
      rules,
      amenities,
      reject,
    } = await req.json();

    const user = await User.findOne({ email: session.user.email });
    if (!user) {
      return NextResponse.json(
        { error: "حساب کاربری شما یافت نشد" },
        { status: 404 }
      );
    }

    if (!isNumeric(price + "") || !isNumeric(phone + "")) {
      return NextResponse.json(
        { error: "لطفا اطلاعات معتبر وارد کنید" },
        { status: 400 }
      );
    }

    if (
      !_id ||
      !title ||
      !description ||
      !location ||
      !phone ||
      !realState ||
      !constructionDate ||
      !category
    ) {
      return NextResponse.json(
        { error: "لطفا اطلاعات معتبر وارد کنید" },
        { status: 400 }
      );
    }

    const profile = await Profile.findOne({ _id });

    if (!user._id.equals(profile.userId)) {
      return NextResponse.json(
        { error: "دسترسی شما به این آگهی محدود شده است" },
        { status: 403 }
      );
    }

    profile.title = title;
    profile.description = description;
    profile.location = location;
    profile.phone = phone;
    profile.realState = realState;
    profile.price = price;
    profile.constructionDate = constructionDate;
    profile.amenities = amenities;
    profile.rules = rules;
    profile.category = category;
    profile.reject = false;
    profile.message = "";
    profile.save();

    return NextResponse.json(
      {
        message: "آگهی با موفقیت ویرایش شد",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است" },
      { status: 500 }
    );
  }
}

export async function GET(req) {
  try {
    await connectDB();

    const session = await getServerSession(req);
    if (!session) {
      return NextResponse.json(
        { error: "لطفا اول وارد حساب کاربری خود شود" },
        { status: 401 }
      );
    }

    const checkUser = await User.findOne({ email: session.user.email });
    if (!checkUser) {
      return NextResponse.json(
        { error: "حساب کاربری شما یافت نشد" },
        { status: 404 }
      );
    }

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

    return NextResponse.json({ data: user.profiles }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است" },
      { status: 500 }
    );
  }
}
