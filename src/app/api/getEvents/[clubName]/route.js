import dbConnect from "../../../../lib/db";
import Event from "../../../../lib/modals/event";
import Club from "../../../../lib/modals/club";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  if (req.method === "GET") {
    try {
      await dbConnect();
      const { clubName } = params;
      let pastMeetings = await Event.find({ clubName: clubName });

      let club = await Club.findOne({ name: clubName });
      let nextMeeting = club.nextMeetingOn;
      let nextMeetingLocation = club.nextMeetingLocation;
      let thisMonthMotto = club.thisMonthMotto;

      if (pastMeetings) {
        return NextResponse.json({
          pastMeetings,
          thisMonthMotto,
          nextMeeting,
          nextMeetingLocation,
          status: 200,
        });
      } else {
        return NextResponse.json({ message: "Event not found", status: 404 });
      }
    } catch (error) {
      return NextResponse.json({ error: error.message, status: 400 });
    }
  } else {
    return NextResponse.json({ message: "Method not allowed", status: 405 });
  }
}
