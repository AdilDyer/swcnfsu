import dbConnect from "../../../lib/db";
import OTP from "../../../lib/modals/otp";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await dbConnect();
    let url = new URL(req.url);
    let searchParams = url.searchParams;
    let email = searchParams.get("email");
    let otp = searchParams.get("otp");

    const otpData = await OTP.findOne({ email, otp });
    if (!otpData) {
      return NextResponse.json({
        message: "Invalid OTP",
        status: 400,
      });
    }
    await OTP.deleteOne({ email, otp });

    return NextResponse.json({
      message: "OTP verified successfully",
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message, status: 400 });
  }
}
