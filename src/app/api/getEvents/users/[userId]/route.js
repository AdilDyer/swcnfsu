import dbConnect from "../../../../../lib/db";
import Event from "../../../../../lib/modals/event";
import { NextResponse } from "next/server";


export async function GET(req, { params }) {
  try {
    await dbConnect();
    //get all those events which have the params.userId in their attendees array
    const { userId } = params;
    const currentDate = new Date();

    // Query for events where the userId is in the attendees array
    let attendedEvents = await Event.find({ attendees: userId });
    let rsvpEvents = await Event.find({
      rsvps: userId,
      date: { $gte: currentDate }, // Filter for future events
    });
   

    return NextResponse.json({ attendedEvents, rsvpEvents, status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message, status: 400 });
  }
}
