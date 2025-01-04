import dbConnect from "../../../lib/db";
import Event from "../../../lib/models/event";
import Club from "../../../lib/models/club";
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
      console.log(data);
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


// import { google } from "googleapis";
// import dbConnect from "../../../lib/db";
// import Event from "../../../lib/models/event";
// import Club from "../../../lib/models/club";
// import { NextResponse } from "next/server";

// // OAuth2 client setup
// const oauth2Client = new google.auth.OAuth2(
//   process.env.GOOGLE_CALENDAR_CLIENT_ID,
//   process.env.GOOGLE_CALENDAR_CLIENT_SECRET,
//   process.env.REDIRECT_URI
// );
// oauth2Client.setCredentials({
//   refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
// });

// export async function POST(req) {
//   try {
//     await dbConnect();
//     const data = await req.json();

//     if (data.eventImageUrl == "") {
//       let club = await Club.findOne({ name: data.clubName });
//       data.eventImageUrl = club.bgImageUrl;
//     }

//     // Convert IST to UTC
//     if (data.date) {
//       const istDate = new Date(data.date);
//       // Subtract 5 hours and 30 minutes to convert IST to UTC
//       const utcDate = new Date(istDate.getTime() - (5 * 60 + 30) * 60 * 1000);
//       data.date = utcDate.toISOString();
//       console.log(data);
//     }

//     const event = new Event(data);
//     await event.save();

//     // Add event to Google Calendar
//     const calendar = google.calendar({ version: "v3", auth: oauth2Client });
//     const calendarEvent = {
//       summary: data.eventName,
//       description: data.description,
//       start: {
//         dateTime: data.date, // Use the UTC date
//         timeZone: "UTC",
//       },
//       end: {
//         dateTime: new Date(
//           new Date(data.date).getTime() + 3600000
//         ).toISOString(), // 1-hour event
//         timeZone: "UTC",
//       },
//     };

//     const calendarResponse = await calendar.events.insert({
//       calendarId: "primary", // Can be customized
//       resource: calendarEvent,
//     });

//     return NextResponse.json({
//       message: "Event created successfully and added to Google Calendar",
//       event,
//       calendarEventId: calendarResponse.data.id,
//       status: 200,
//     });
//   } catch (error) {
//     console.error("Error:", error);
//     return NextResponse.json({ error: error.message, status: 400 });
//   }
// }
