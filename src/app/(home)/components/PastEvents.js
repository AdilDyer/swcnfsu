"use client";
import React, { useRef } from "react";
import Link from "next/link";
import FadeInSection from "../../components/FadeInSection";

const PastEvents = ({ allEvents }) => {
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
    <div className="pastevents">
      <FadeInSection>
        <h1 className="">
          {" "}
          <span className="headingFlowers" style={{ verticalAlign: "middle" }}>
            <img
              style={{
                width: "2.5rem",
              }}
              src="https://3axis.co/user-images/d1l8d67m.jpg"
              alt=""
            />
          </span>
          &nbsp; <span className="homePageHeading">Previous Events</span> &nbsp;
          <span className="headingFlowers" style={{ verticalAlign: "middle" }}>
            <img
              style={{
                transform: "scale(-1) rotate(-110deg)",
                width: "2.5rem",
              }}
              src="https://3axis.co/user-images/d1l8d67m.jpg"
              alt=""
            />
          </span>
        </h1>
      </FadeInSection>
      <br />
      <br />
      <br />
      <FadeInSection>
        <div className="announcements" id="pastEventAnnId">
          <div
            className="cardsAnnoun"
            style={{ backgroundColor: "pink" }}
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
                  return eventDate < new Date(); // Filter events that have already occurred
                })
                .sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort by date, latest first
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
                    <Link href="#" key={event.name}>
                      <div className="card">
                        <div className="imageDiv">
                          <img src={event.eventImageUrl} alt={event.name} />
                        </div>
                        <br />
                        <div className="textBody">
                          <h5>{event.name}</h5>
                          <p>
                            <i>{event.clubName} Club Event</i>
                          </p>
                          <p>Date: {eventDateTime}</p>
                          <h6>{event.description.Introduction} </h6>
                        </div>
                      </div>
                    </Link>
                  );
                })}
            <div
              className="scrollBtnDiv scrollBtnDivRight"
              onClick={scrollRight}
            >
              <div className="imgDiv">
                <img
                  src="https://res.cloudinary.com/ddxv0iwcs/image/upload/v1726216784/right-arrow_k1jiu2.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default PastEvents;
