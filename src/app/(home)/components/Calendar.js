import React from "react";

const Calendar = () => {
  return (
    <div className="calendarofevents ">
      <h1 >Calendar of Events</h1>
      <br />
      <div>
        <iframe
          src="https://embed.styledcalendar.com/#kpAH9ZejhNCifPj6nHdW"
          title="Styled Calendar"
          class="styled-calendar-container"
          style={{ width: "100%", border: "none" }}
          data-cy="calendar-embed-iframe"
        ></iframe>
        <scripts
          async
          type="module"
          src="https://embed.styledcalendar.com/assets/parent-window.js"
        ></scripts>
      </div>
    </div>
  );
};

export default Calendar;
