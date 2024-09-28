import connectDB from "@/utils/connectDB";

export async function DELETE(req, context) {
  try {
    await connectDB();
  } catch (error) {
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است" },
      { status: 500 }
    );
  }
}
