import React from "react";

const PastEvents = () => {
  return (
    <div className="pastevents">
      <h1>Previous Events</h1>
      <br />
      <div className="announcements">
        <div className="cardsAnnoun">
          <div className="card">
            <div className="imageDiv">
              <img
                src="https://res.cloudinary.com/ddxv0iwcs/image/upload/v1718976769/WhatsApp_Image_2024-06-21_at_19.01.45_hjhx1t.jpg"
                alt=""
              />
            </div>
            <br />
            <div className="textBody">
              <h5>Celebrating 10th International Yoga Day</h5>
              <p>Date : 21-June-2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastEvents;
