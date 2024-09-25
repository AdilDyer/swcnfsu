import { NextResponse } from "next/server";

let clients = [];

// Function to add client to the list of SSE clients
const addClient = (res) => {
  const clientId = Date.now();
  const newClient = { id: clientId, res };

  clients.push(newClient);
  return clientId;
};

// Function to remove client on disconnect
const removeClient = (clientId) => {
  clients = clients.filter((client) => client.id != clientId);
};

export async function GET(req) {
  // Extracting the search params (for club, if required)
  const { searchParams } = new URL(req.url);
  const club = searchParams.get("club");

  const { readable, writable } = new TransformStream();
  const writer = writable.getWriter();

  // SSE Headers
  writer.write(
    new TextEncoder().encode(
      "Content-Type: text/event-stream\nCache-Control: no-cache\nConnection: keep-alive\n\n"
    )
  );

  // Add client to the SSE stream
  const clientId = addClient(writer);

  // Keep connection open for SSE (do not close stream unless the client disconnects)
  req.signal.addEventListener("abort", () => {
    removeClient(clientId);
    writer.close();
  });

  return new NextResponse(readable, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}

export async function POST(req) {
  try {
    const { user, course, message, club, image } = await req.json();

    const formattedMessage = JSON.stringify({ user, course, message, image });
    clients.forEach((client) => {
      client.res.write(
        new TextEncoder().encode(`data: ${formattedMessage}\n\n`)
      );
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error in POST request:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
