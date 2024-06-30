import React from "react";
import Link from "next/link";
const PastEvents = () => {
  return (
    <div className="pastevents">
      <h1 className="popoutOpacity">Previous Events</h1>
      <br />
      <div className="announcements">
        <div className="cardsAnnoun">
          <Link href="#">
            <div className="card">
              <div className="imageDiv">
                <img
                  src="https://res.cloudinary.com/ddxv0iwcs/image/upload/v1719227360/WhatsApp_Image_2024-06-23_at_06.42.59_pl0b6w.jpg"
                  alt=""
                />
              </div>
              <br />
              <div className="textBody">
                <h5>Cycle Rally Ahmedabad</h5>
                <p>Date : 23-June-2024</p>
              </div>
            </div>
          </Link>
          <Link href="#">
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
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PastEvents;
