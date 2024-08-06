import dbConnect from "../../../lib/db";
import User from "../../../lib/modals/user";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await dbConnect();
    const data = await req.json();
    const user = new User(data);
    await user.save();

    return NextResponse.json(
      {
        message: "User created successfully",
        user,
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message, status: 400 });
  }
}
