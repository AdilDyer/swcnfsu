import dbConnect from "../../../lib/db"; // Assuming you have a DB connection utility
import Event from "../../../lib/modals/event"; // Mongoose model for Event
import { NextResponse } from "next/server";

export async function POST(req, res) {
  await dbConnect(); // Ensure DB connection is established
  try {
    const {
      eventId,
      Introduction,
      Agendas,
      DetailedPoints,
      InsightsShared,
      GroupFindings,
      KeyTakeaways,
      FinalThoughts,
      posterLink,
      otherEventImages,
    } = await req.json();

    // Validate required fields (you can add more validation as needed)

    if (!eventId) {
      return NextResponse.json({
        message: "Event ID is required",
        status: 400,
      });
    }

    // Find the event by its ID and update the details
    const updatedEvent = await Event.findByIdAndUpdate(
      eventId,
      {
        description: {
          Introduction,
          Agendas,
          DetailedPoints,
          InsightsShared,
          GroupFindings,
          KeyTakeaways,
          FinalThoughts,
        },
        eventImageUrl: posterLink,
        eventGalleryImages: otherEventImages,
      },
      { new: true } // Return the updated event
    );
    if (!updatedEvent) {
      return NextResponse.json({
        message: "Event not found",
        status: 404,
      });
    }

    // Return the updated event as response
    return NextResponse.json({
      message: "Event updated successfully",
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Failed to update event details",
      status: 500,
    });
  }
}
