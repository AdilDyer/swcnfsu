import dbConnect from "../../../lib/db";
import User from "../../../lib/models/user";
import { NextResponse } from "next/server";

async function handler(req, res) {
  if (req.method === "GET") {
    try {
      await dbConnect();
      const { searchParams } = new URL(req.url); // Extract query parameters from the URL
      const email = searchParams.get("email");
      //   console.log(searchParams);
      if (!email) {
        return NextResponse.json({
          message: "Email query parameter is required",
          status: 400,
        });
      }
      let result = await User.findOne({ email: email });

      if (result) {
        return NextResponse.json({ result, status: 200 });
      } else {
        return NextResponse.json({ message: "User not found", status: 404 });
      }
    } catch (error) {
      return NextResponse.json({ error: error.message, status: 400 });
    }
  } else {
    return NextResponse.json({ message: "Method not allowed", status: 405 });
  }
}

export { handler as GET };
