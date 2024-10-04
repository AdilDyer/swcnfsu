// import dbConnect from "../../../lib/db";
// import Club from "../../../lib/models/club";
// import { NextResponse } from "next/server";

// export async function GET(req) {
//   try {
//     await dbConnect();

//     const clubs = await Club.deleteMany({
//       name: {
//         $in: [
//           "Physics",
//           "Chemistry",
//           "Biology",
//           "Graphic Design",
//           "Web Design",
//           "App Development",
//           "Game Development",
//           "IOT",
//           "Robotics and Drone",
//           "AI / ML",
//           "Cloud Computing",
//           "Trading",
//           "Pharmacy",
//           "Nursing",
//           "Dentistry",
//           "Entrepreneurship",
//         ],
//       },
//     });
//     return NextResponse.json({
//       message: "clubs deleted successfully",
//       clubs,
//       status: 200,
//     });
//   } catch (error) {
//     return NextResponse.json({ error: error.message, status: 400 });
//   }
// }
