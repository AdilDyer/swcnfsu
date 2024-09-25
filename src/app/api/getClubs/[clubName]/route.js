import dbConnect from "../../../../lib/db";
import Club from "../../../../lib/modals/club";
import { NextResponse } from "next/server";

export async function GET(req,{ params }) {
  try {
    await dbConnect();

    const result = await Club.findOne({ name: params.clubName });

    if (result) {
      return NextResponse.json({ result, status: 200 });
    } else {
      return NextResponse.json({ message: "Club not found", status: 404 });
    }
  } catch (error) {
    console.error("Error fetching club:", error); // Log the error for debugging
    return NextResponse.json({ error: error.message, status: 400 });
  }
}
