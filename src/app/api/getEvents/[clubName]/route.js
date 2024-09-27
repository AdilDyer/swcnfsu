import dbConnect from "../../../../lib/db";
import Event from "../../../../lib/modals/event";
import Club from "../../../../lib/modals/club";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    await dbConnect();
    const { clubName } = params;

    // Fetch all events for the club
    let allClubEvents = await Event.find({ clubName: clubName });

    // Get the current date and time
    const currentDate = new Date();

    // Separate past and upcoming events
    const pastMeetings = allClubEvents.filter(
      (event) => event.date < currentDate
    );
    const nextMeetings = allClubEvents.filter(
      (event) => event.date >= currentDate
    );

    // Send response with both past and next meetings
    return NextResponse.json({
      pastMeetings: pastMeetings.map((event) => ({
        name: event.name,
        _id: event._id,
        date: event.date,
        description: event.description.Introduction,
        location: event.location,
        eventImageUrl: event.eventImageUrl,
        rsvps: event.rsvps,
        attendees: event.attendees,
        eventGalleryImages: event.eventGalleryImages,
      })),
      nextMeetings: nextMeetings.map((event) => ({
        _id: event._id,
        name: event.name,
        date: event.date,
        description: event.description.Introduction,
        location: event.location,
        clubName: event.clubName,
        eventImageUrl: event.eventImageUrl,
        rsvps: event.rsvps,
        attendees: event.attendees,
        eventGalleryImages: event.eventGalleryImages,
      })),
    });
  } catch (error) {
    return NextResponse.json({ error: error.message, status: 400 });
  }
}
