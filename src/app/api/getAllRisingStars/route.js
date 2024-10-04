import dbConnect from "../../../lib/db";
import RisingStar from "../../../lib/models/risingstar";
import { NextResponse } from "next/server";

async function handler(req, res) {
  if (req.method === "GET") {
    try {
      await dbConnect();

      let result = await RisingStar.find({});

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
