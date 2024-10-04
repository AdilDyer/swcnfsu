import dbConnect from "../../../lib/db";
import Club from "../../../lib/models/club";
import { NextResponse } from "next/server";
export async function GET(req, res) {
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
}
