"use client";
import React from "react";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import FadeInSection from "../../components/FadeInSection";
import { useSession } from "next-auth/react";
const Announcements = ({ allEvents }) => {
  const { data: session } = useSession();
  const handleRSVP = async (eventId) => {
    if (session?.user?.email) {
      try {
        const response = await fetch(
          `http://localhost:3000/api/getUser?email=${session.user.email}`
        );
        const data = await response.json();
        if (data.status === 200) {
          // RSVP the user
          try {
            const rsvpResponse = await fetch("/api/makeRsvp", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                eventId,
                email: session.user.email,
              }),
            });

            const rsvpData = await rsvpResponse.json();
            if (rsvpData.status === 200) {
              alert("RSVP Successfull !");
            } else {
              alert(rsvpData.message);
            }
          } catch (error) {
            console.error("Error processing RSVP:", error);
            alert("There was an error processing your RSVP.");
          }
        } else {
          alert("Please register to RSVP for events.");
        }
      } catch (error) {
        console.error("Error fetching user registration status:", error);
      }
    } else {
      alert("Please sign in to RSVP for events.");
    }
  };

  return (
    <div className="announcements ">
      <FadeInSection>
        <h6>
          Join us for our upcoming events and be a part of something special.
          Check out our calendar and register today!
        </h6>
        <Link href={"/voting"}>
          <Button style={{ marginTop: "2rem" }} variant="primary">
            Voting and Suggestion Box
          </Button>{" "}
        </Link>
      </FadeInSection>
      <FadeInSection>
        <div className="cardsAnnoun">
          {allEvents
            .filter((event) => {
              const eventDate = new Date(event.date);
              return eventDate > new Date(); // Filter events that will occur in the future
            })
            .sort((a, b) => new Date(a.date) - new Date(b.date)) // Sort by date, earliest first
            .map((event) => {
              const eventDate = new Date(event.date); // Convert date to Date object
              const eventTime = eventDate.toLocaleTimeString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
              }); // Extract the time

              return (
                <div className="card" key={event._id}>
                  <div className="imageDiv">
                    <img src={event.eventImageUrl} alt={event.name} />
                  </div>
                  <br />
                  <Button
                    variant="primary"
                    onClick={() => handleRSVP(event._id)}
                  >
                    RSVP
                  </Button>
                  <br />
                  <div className="textBody">
                    <h5>{event.name}</h5>
                    <p>
                      Date:{" "}
                      {eventDate.toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                    <h6>Time: {eventTime}</h6>
                    <h6>{event.description}</h6>
                  </div>
                </div>
              );
            })}
        </div>
      </FadeInSection>
    </div>
  );
};

export default Announcements;
