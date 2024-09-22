import React from "react";
import { Button } from "react-bootstrap";
const FirstCover = ({
  coverUrl,
  thisMonthMotto,
  nextMeeting,
  nextMeetingLocation,
}) => {
  const nextMeetingDate = new Date(nextMeeting);
  const formattedDate = nextMeetingDate.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedTime = nextMeetingDate.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const getCurrentMonth = () => {
    const date = new Date();
    return date.toLocaleString("en-GB", { month: "long" });
  };
  const currentMonth = getCurrentMonth();

  return (
    <div className="firstCover">
      <img src={coverUrl} alt="Cover Picture..." />
      <div className="textDiv">
        <h1>Book Club</h1>
        <h6>Motto</h6>
        <p>&quot;Turning Pages, Tuning Life&quot;</p>
        <br />
        <h6>Monthly Challenge ({currentMonth})</h6>
        <p>{thisMonthMotto}</p>
        <div>
          <h6>Next Meeting on : </h6>
          <p>
            {formattedDate} <br />
            {formattedTime}, {nextMeetingLocation}
          </p>
          <Button variant="primary">RSVP for {formattedDate}</Button>
        </div>
      </div>
    </div>
  );
};

export default FirstCover;
