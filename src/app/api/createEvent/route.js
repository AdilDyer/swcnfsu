import dbConnect from "../../../lib/db";
import Event from "../../../lib/modals/event";
import Club from "../../../lib/modals/club";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await dbConnect();
    const data = await req.json();
    if (data.eventImageUrl == "") {
      let club = await Club.findOne({ name: data.clubName });
      data.eventImageUrl = club.bgImageUrl;
    }

    // Convert IST to UTC
    if (data.date) {
      const istDate = new Date(data.date);
      // Subtract 5 hours and 30 minutes to convert IST to UTC
      const utcDate = new Date(istDate.getTime() - (5 * 60 + 30) * 60 * 1000);
      data.date = utcDate.toISOString();
      console.log(data.date);
    }

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
