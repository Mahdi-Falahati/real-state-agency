import connectDB from "@/utils/connectDB";

export async function DELETE(req, context) {
  try {
    await connectDB();

    const id = context.params.profileId;
  } catch (error) {
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است" },
      { status: 500 }
    );
  }
}
