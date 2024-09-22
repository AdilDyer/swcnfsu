import dbConnect from "../../../lib/db";
import RisingStar from "../../../lib/modals/risingstar";
import User from "../../../lib/modals/user";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await dbConnect();
    const { email, reasonForListing } = await req.json();
    const risingUser = await User.findOne({ email });
    if (!risingUser) {
      return NextResponse.json({ error: "User not found", status: 404 });
    }

    // Prepare the risingStar data
    const risingStarData = {
      name: risingUser.name,
      email: risingUser.email,
      profileImageUrl: risingUser.profileImageUrl,
      phoneNumber: risingUser.phoneNumber,
      course: risingUser.course,
      enrollNo: risingUser.enrollNo,
      birthdate: risingUser.birthdate,
      bloodGroup: risingUser.bloodGroup,
      dateOfDeclaration: new Date(), // Automatically set to the current date
      reasonForListing, // From the request body
    };

    // Create a new risingStar entry
    const risingStar = new RisingStar(risingStarData);

    // Save the new risingStar entry to the database
    await risingStar.save();

    // Return success response
    return NextResponse.json({
      message: "Rising Star created successfully",
      risingStar,
      status: 200,
    });
  } catch (error) {
    // Return error response in case of an exception
    return NextResponse.json({ error: error.message, status: 400 });
  }
}
