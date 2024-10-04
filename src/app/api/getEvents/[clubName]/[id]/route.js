import dbConnect from "../../../../../lib/db";
import Event from "../../../../../lib/models/event";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
export async function GET(req, { params }) {
  try {
    await dbConnect();
    const { id } = params;

    let givenEvent = await Event.findOne({ _id: id });

    // Send response with the event
    return NextResponse.json({
      givenEvent,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message, status: 400 });
  }
}
