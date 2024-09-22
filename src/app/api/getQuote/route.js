import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Fetch the quote from the external API, with no caching
    const response = await fetch(
      "https://api.api-ninjas.com/v1/quotes?category=happiness",
      {
        headers: {
          "X-Api-Key": process.env.API_NINJA_KEY,
        },
        cache: "no-store",
      }
    );

    // Parse the JSON response
    const result = await response.json();

    // Check if result exists
    if (result) {
      return NextResponse.json({ result, status: 200 });
    } else {
      return NextResponse.json({ message: "Quote not found", status: 404 });
    }
  } catch (error) {
    // Return error message with a 400 status code
    return NextResponse.json({ error: error.message, status: 400 });
  }
}
