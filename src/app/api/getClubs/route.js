import dbConnect from "../../../lib/db";
import Club from "../../../lib/modals/club";
import { NextResponse } from "next/server";

async function handler(req, res) {
  if (req.method === "GET") {
    try {
      await dbConnect();

      let result = await Club.find({});

      if (result) {
        return NextResponse.json({ result, status: 200 });
      } else {
        return NextResponse.json({ message: "Club not found", status: 404 });
      }
    } catch (error) {
      return NextResponse.json({ error: error.message, status: 400 });
    }
  } else {
    return NextResponse.json({ message: "Method not allowed", status: 405 });
  }
}

export { handler as GET };
