"use client";
import { useSession } from "next-auth/react";
import React from "react";
import { Button } from "react-bootstrap";

const FirstCover = ({
  clubName,
  coverUrl,
  thisMonthTarget,
  nextMeetings,
  motto,
}) => {
  const { data: session } = useSession();
  nextMeetings = nextMeetings?.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  const getCurrentMonth = () => {
    const date = new Date();
    return date.toLocaleString("en-GB", { month: "long" });
  };
  const currentMonth = getCurrentMonth();

  const handleRSVP = async (eventId) => {
    if (session?.user?.email) {
      try {
        if (session.user.isRegistered) {
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
    <div className="firstCover">
      <img src={coverUrl} alt="Cover Picture..." />
      <div className="textDiv">
        <h1>{clubName} Club</h1>
        <h6>Motto</h6>
        <p>&quot;{motto}&quot;</p>
        <br />
        <h6>Monthly Challenge ({currentMonth})</h6>
        <p>{thisMonthTarget}</p>
        <div>
          <h6>Next Meeting : </h6>
          <p>
            {nextMeetings.length > 0 ? (
              <>
                Title :: {nextMeetings[0].name}
                <br />
                Date ::{" "}
                {new Date(nextMeetings[0].date).toLocaleString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
                <br />
                Location :: {nextMeetings[0].location}
                <br />
              </>
            ) : (
              "No upcoming meetings"
            )}
          </p>
          <Button
            variant="primary"
            onClick={() => handleRSVP(nextMeetings[0]._id)}
          >
            RSVP for Next Meeting
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FirstCover;
