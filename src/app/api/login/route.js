import { NextResponse } from "next/server";
import connect from "../../../../lib/db";
export const GET = async () => {
  try {
    await connect();
    return new NextResponse("User Logged In Successfully");
  } catch (err) {
    return new NextResponse("Failed to Login User", { status: 500 });
  }
};
