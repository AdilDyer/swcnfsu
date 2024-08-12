import React from "react";
import Link from "next/link";
import FadeInSection from "../../components/FadeInSection";

const PastEvents = ({ allEvents }) => {
  return (
    <div className="pastevents">
      <FadeInSection>
        <h1 className="">Previous Events</h1>
      </FadeInSection>
      <br />
      <FadeInSection>
        <div className="announcements">
          <div className="cardsAnnoun">
            {allEvents
              .filter((event) => {
                const eventDate = new Date(event.date);
                return eventDate < new Date(); // Filter events that have already occurred
              })
              .sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort by date, latest first
              .map((event) => {
                const eventDate = new Date(event.date); // Convert date to Date object

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
                          Date:{" "}
                          {eventDate.toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "long",
                            year: "numeric",
                          })}
                        </p>
                        <h6>{event.description}</h6>
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default PastEvents;
