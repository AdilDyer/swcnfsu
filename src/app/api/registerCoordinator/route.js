import { NextRequest, NextResponse } from "next/server";
import dbConnect from "../../../lib/db";
import ClubCoordinator from "../../../lib/models/clubcoordinator";
import User from "../../../lib/models/user";
import mongoose from "mongoose";
export async function POST(req) {
  await dbConnect();

  const { email, clubId } = await req.json(); // Parse the request body

  try {
    // Check if the user exists with the provided email
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { success: false, message: "User not found with this email." },
        { status: 404 }
      );
    }
    // Check if the coordinator already exists for this club
    const existingCoordinator = await ClubCoordinator.findOne({
      userId: user._id,
      clubId: new mongoose.Types.ObjectId(clubId),
    });

    if (existingCoordinator) {
      return NextResponse.json(
        {
          success: false,
          message: "This user is already a coordinator for this club.",
        },
        { status: 400 }
      );
    }

    // Create new club coordinator
    const newCoordinator = new ClubCoordinator({
      userId: user._id,
      clubId: new mongoose.Types.ObjectId(clubId),
    });

    await newCoordinator.save();

    return NextResponse.json(
      { success: true, message: "Coordinator registered successfully!" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error registering coordinator:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error." },
      { status: 500 }
    );
  }
}
