import dbConnect from "../../../../lib/db";
import User from "../../../../lib/modals/user";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await dbConnect();

    let result = await User.find({});

    if (result) {
      return NextResponse.json({ result, status: 200 });
    } else {
      return NextResponse.json({ message: "User not found", status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ error: error.message, status: 400 });
  }
}
