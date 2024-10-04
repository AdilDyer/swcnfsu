import { NextResponse } from "next/server";
import dbConnect from "../../../lib/db";
import ClubCoordinator from "../../../lib/models/clubcoordinator";

export async function DELETE(req) {
  await dbConnect(); // Connect to the database

  const { coordinatorId } = await req.json(); // Parse the request body

  try {
    // Check if the coordinator exists
    const coordinator = await ClubCoordinator.findOne({
      _id: coordinatorId,
    });

    if (!coordinator) {
      return NextResponse.json(
        { success: false, message: "Coordinator not found." },
        { status: 404 }
      );
    }

    // Remove the coordinator
    await ClubCoordinator.deleteOne({ _id: coordinatorId });

    return NextResponse.json(
      { success: true, message: "Coordinator removed successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error removing coordinator:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error." },
      { status: 500 }
    );
  }
}
