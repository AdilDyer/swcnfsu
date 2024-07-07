import React from "react";
import FadeInSection from "@/app/components/FadeInSection";
const Calendar = () => {
  return (
    <div className="calendarofevents ">
      <FadeInSection>
        <h1>Calendar of Events</h1>
      </FadeInSection>
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
