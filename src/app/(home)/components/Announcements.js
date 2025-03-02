"use client";
import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import FadeInSection from "../../components/FadeInSection";
import { useSession } from "next-auth/react";

const Announcements = ({ allEvents }) => {
  const { data: session } = useSession();
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

  //left right scroll btns
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
  return (
    <div className="announcements ">
      <FadeInSection>
        <br />
        <h6 >
          Join us for our upcoming events and be a part of something special.
          Check out our calendar and register today!
        </h6>
        <Link href={"/voting"}>
          <Button style={{ marginTop: "2rem" }} variant="primary">
            Voting and Suggestion Box
          </Button>{" "}
        </Link>
      </FadeInSection>
      <br />
      <FadeInSection>
        <div
          className="cardsAnnoun"
          style={{
            backgroundColor: "#1b263b",
          }}
          ref={containerRef}
        >
          <div className="scrollBtnDiv scrollBtnDivLeft" onClick={scrollLeft}>
            <div className="imgDiv">
              <img
                src="https://res.cloudinary.com/ddxv0iwcs/image/upload/v1726216763/left-arrow_exqxhq.png"
                alt=""
              />
            </div>
          </div>

          {allEvents?.length > 0 &&
            allEvents
              .filter((event) => {
                const eventDate = new Date(event.date);
                return eventDate > new Date(); // Filter events that will occur in the future
              })
              .sort((a, b) => new Date(a.date) - new Date(b.date)) // Sort by date, earliest first
              .map((event) => {
                const istDate = new Date(event.date);

                const eventDateTime = istDate.toLocaleString("en-GB", {
                  weekday: "short",
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                  timeZone: "Asia/Kolkata",
                });

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

                      <p>{event.clubName} Club Event</p>
                      <h6>Date: {eventDateTime}</h6>
                      <h6>{event.description.Introduction}</h6>
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
      </FadeInSection>
    </div>
  );
};

export default Announcements;
