import dbConnect from "../../../lib/db";
import Club from "../../../lib/models/club";
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function POST(req) {
  try {
    const token = await getToken({
      req,
      secret: process.env.NEXTAUTH_SECRET,
    });

    const { data, dataType, clubName, imageUrl } = await req.json();

    if (token?.picture !== imageUrl) {
      return NextResponse.json({ message: "Unauthorized", status: 401 });
    }

    await dbConnect();
    // Find and update the club
    let club = await Club.findOneAndUpdate(
      { name: clubName },
      { [dataType]: data },
      { new: true, runValidators: true } // Ensure the updated document is returned and validation runs
    );

    if (!club) {
      return NextResponse.json({ message: "Club not found", status: 404 });
    }

    // No need to call .save() since findOneAndUpdate already saves changes

    return NextResponse.json(
      {
        message: "Club Details Updated Successfully",
        club, // Return the updated club
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message, status: 400 });
  }
}
