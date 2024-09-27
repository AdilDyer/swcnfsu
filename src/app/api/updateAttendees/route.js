import dbConnect from "../../../lib/db";
import Event from "../../../lib/modals/event";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    // Parse the incoming request body
    const { studentId, eventId } = await req.json();

    // Connect to the database
    await dbConnect();

    // Find the event by eventId and update the attendees
    const event = await Event.findById(eventId);

    if (!event) {
      return NextResponse.json({ message: "Event not found" }, { status: 404 });
    }

    // Check if the studentId already exists in the attendees array
    if (!event.attendees.includes(studentId)) {
      event.attendees.push(studentId);
      await event.save();
      return NextResponse.json({ message: "Attendee added", status: 200 });
    } else {
      return NextResponse.json({
        message: "Attendee already added",
        status: 400,
      });
    }
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    // Parse the incoming request body
    const { studentId, eventId } = await req.json();

    // Connect to the database
    await dbConnect();

    // Find the event by eventId and update the attendees
    const event = await Event.findById(eventId);

    if (!event) {
      return NextResponse.json({ message: "Event not found" }, { status: 404 });
    }

    // Remove the studentId from the attendees array
    event.attendees = event.attendees.filter(
      (attendee) => attendee != studentId
    );
    await event.save();

    return NextResponse.json({ message: "Attendee removed", status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
