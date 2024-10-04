import dbConnect from "../../../../lib/db";
import User from "../../../../lib/models/user";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    // Connect to the database
    await dbConnect();

    // Aggregation query to count the number of users for each gender
    const genderCount = await User.aggregate([
      {
        $match: {
          gender: { $in: ["Male", "Female", "Other"] },
        },
      },
      {
        $group: {
          _id: "$gender", // Group by the gender field
          count: { $sum: 1 }, // Count occurrences for each gender
        },
      },
    ]);

    // Return the result as JSON
    return NextResponse.json({ genderCount, status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message, status: 400 });
  }
}
