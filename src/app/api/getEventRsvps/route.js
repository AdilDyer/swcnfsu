import dbConnect from "../../../lib/db";
import Event from "../../../lib/modals/event";

import { NextResponse } from "next/server";
import { json2csv } from "json-2-csv";

export async function GET(request) {
  try {
    // Connect to the database
    await dbConnect();

    // Parse the URL to get the query parameters
    const url = new URL(request.url);
    const eventId = url.searchParams.get("eventId");

    if (!eventId) {
      return NextResponse.json({
        message: "Event ID is required",
        status: 400,
      });
    }

    // Fetch the event and populate the rsvps field
    const event = await Event.findById(eventId).populate("rsvps");

    if (!event) {
      return NextResponse.json({ message: "Event not found", status: 404 });
    }

    // Extract and format the event and rsvps data
    const sanitizedRsvps = event.rsvps.map((rsvp) => ({
      name: rsvp.name,
      email: rsvp.email,
      phoneNumber: rsvp.phoneNumber,
      course: rsvp.course,
      enrollNo: rsvp.enrollNo,
      birthdate: rsvp.birthdate.toISOString().slice(0, 10), // Format birthdate as YYYY-MM-DD
    }));

    // Convert to CSV
    const csv = json2csv(sanitizedRsvps, {
      headers: [
        "name",
        "email",
        "phoneNumber",
        "course",
        "enrollNo",
        "birthdate",
      ],
    });

    // Create a response with CSV content
    const response = new NextResponse(csv, {
      headers: {
        "Content-Type": "text/csv",
        "Content-Disposition": `attachment; filename=${event.name}_RSVPs.csv`,
      },
    });

    return response;
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message, status: 500 });
  }
}
