import dbConnect from "../../../lib/db";
import RisingStar from "../../../lib/modals/risingstar";
import { NextResponse } from "next/server";

export async function DELETE(req) {
  try {
    await dbConnect();
    const url = new URL(req.url);
    const email = url.searchParams.get("email");
    const result = await RisingStar.deleteOne({ email });
    if (result.deletedCount === 0) {
      return NextResponse.json({ message: "User not found", status: 404 });
    }
    return NextResponse.json({
      message: "Rising Star removed successfully",
      status: 200,
    });
  } catch (error) {
    // Return error response in case of an exception
    return NextResponse.json({ error: error.message, status: 400 });
  }
}
