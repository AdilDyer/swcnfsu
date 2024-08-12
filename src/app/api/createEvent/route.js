import dbConnect from "../../../lib/db";
import Event from "../../../lib/modals/event";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await dbConnect();
    const data = await req.json();
    const event = new Event(data);
    await event.save();

    return NextResponse.json({
      message: "Event created successfully",
      event,
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message, status: 400 });
  }
}
