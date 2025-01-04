import React from "react";
import FadeInSection from "../../components/FadeInSection";

const Calendar = () => {
  return (
    <div className="calendarofevents" id="calendarofevents">
      <FadeInSection>
        <h1>
          <span className="headingFlowers" style={{ verticalAlign: "middle" }}>
            <img
              style={{
                width: "2.5rem",
              }}
              src="https://3axis.co/user-images/d1l8d67m.jpg"
              alt=""
            />
          </span>
          {/* &nbsp; <span className="homePageHeading"> Calendar of Events</span> */}
          &nbsp; <span className=""> Calendar of Events</span>
          &nbsp;
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
      <div>
        {/* <iframe
          src="https://embed.styledcalendar.com/#kpAH9ZejhNCifPj6nHdW"
          title="Styled Calendar"
          className="styled-calendar-container"
          style={{ width: "100%", border: "none" }}
          data-cy="calendar-embed-iframe"
        ></iframe>
        <scripts
          async
          type="module"
          src="https://embed.styledcalendar.com/assets/parent-window.js"
        ></scripts> */}
        <iframe
          src="https://embed.styledcalendar.com/#oE33p70wdpD5w82hNY6A"
          title="Styled Calendar"
          class="styled-calendar-container"
          style={{ width: "100%", border: "none" }}
          data-cy="calendar-embed-iframe"
        ></iframe>
        <script
          async
          type="module"
          src="https://embed.styledcalendar.com/assets/parent-window.js"
        ></script>
      </div>
    </div>
  );
};

export default Calendar;
