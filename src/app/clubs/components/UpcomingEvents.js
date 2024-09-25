"use client";
import React, { useRef } from "react";
import { useSession } from "next-auth/react";
import { Button } from "react-bootstrap";

const UpcomingEvents = ({ clubName, nextMeetings }) => {
  const { data: session } = useSession();
  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 400; // Adjust scroll amount as needed
    }
  };
  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 400; // Adjust scroll amount as needed
    }
  };

  const handleRSVP = async (eventId) => {
    if (session?.user?.email) {
      try {
        if (session?.user?.isRegistered) {
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
    <div className="upcomingEventsCover">
      <div className="upcomingEventsCards">
        <div className="cardsAnnoun" ref={containerRef}>
          <h1 className="heading">
            Upcoming Events <br /> in {clubName} Club{" "}
          </h1>
          <div className="scrollBtnDiv scrollBtnDivLeft" onClick={scrollLeft}>
            <div className="imgDiv">
              <img
                src="https://res.cloudinary.com/ddxv0iwcs/image/upload/v1726216763/left-arrow_exqxhq.png"
                alt=""
              />
            </div>
          </div>

          {nextMeetings &&
            nextMeetings
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
                      <p>{event.clubName} Club Event</p>
                      <h6>Time: {eventTime}</h6>
                      <h6>{event.description}</h6>
                    </div>
                  </div>
                );
              })}

          <div className="scrollBtnDiv scrollBtnDivRight" onClick={scrollRight}>
            <div className="imgDiv">
              <img
                src="https://res.cloudinary.com/ddxv0iwcs/image/upload/v1726216784/right-arrow_k1jiu2.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
