import dbConnect from "../../../lib/db";
import Event from "../../../lib/modals/event";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await dbConnect();

    // Find events and populate the rsvps field
    const result = await Event.find({}).populate("rsvps").exec();

    if (result) {
      return NextResponse.json({ result, status: 200 });
    } else {
      return NextResponse.json({ message: "Events not found", status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ error: error.message, status: 400 });
  }
}
