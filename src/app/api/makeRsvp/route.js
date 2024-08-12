import dbConnect from "../../../lib/db";
import User from "../../../lib/modals/user";
import Event from "../../../lib/modals/event";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await dbConnect();
    const data = await req.json();
    const { eventId, email } = data;
    try {
      const event = await Event.findById(eventId);
      if (!event) {
        return NextResponse.json({
          message: "Event not found",
          status: 404,
        });
      }

      const user = await User.findOne({ email });
      if (!user) {
        return NextResponse.json({
          message: "User not found",
          status: 404,
        });
      }

      if (event.rsvps.includes(user._id)) {
        return NextResponse.json({
          message: "You have already RSVP'd to this event",
          status: 400,
        });
      }

      event.rsvps.push(user._id);
      await event.save();

      return NextResponse.json({
        message: "RSVP successful",
        status: 200,
      });
    } catch (error) {
      return NextResponse.json({
        message: "Internal server error",
        error,
        status: 500,
      });
    }
  } catch (error) {
    return NextResponse.json({ error: error.message, status: 400 });
  }
}
