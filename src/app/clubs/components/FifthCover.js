import React from "react";
import Button from "react-bootstrap/Button";

const FifthCover = ({
  clubCoordinatorDetails,
  socialCoordinatorDetails,
  chiefClubsCoordinatorDetails,
}) => {
  const event = {
    _id: "1",
    name: "Event Name",
    date: "2023-09-21",
    eventTime: "11:13:46 AM",
    description: "Event Description",
    eventImageUrl:
      "https://res.cloudinary.com/ddxv0iwcs/image/upload/v1724998789/tayi0853oqf3flg8xums.png",
  };

  return (
    <>
      <div className="fifthCover">
        <div className="cardsAnnoun">
          <div className="card">
            <div className="imageDiv">
              <img src={event.eventImageUrl} alt={event.name} />
            </div>
            <br />
            <h6>Club Coordinator</h6>
            <h3>Mr. Shubham Gupta</h3>
            <br />
            <div className="textBody">
              <h6>Phone Number :</h6>
              <p>+91 9252180504</p>
              <h6>Email :</h6>
              <p>smile.itsadil@gmail.com</p>
            </div>
          </div>
          <div className="card">
            <div className="imageDiv">
              <img
                src="https://res.cloudinary.com/ddxv0iwcs/image/upload/v1715934260/PwebData/ukd1wtfkkwa2e7kikqty.png"
                alt={event.name}
              />
            </div>
            <br />
            <h6>Chief Clubs Coordinator</h6>
            <h3>Mr. Radhelal Gupta</h3>
            <br />
            <div className="textBody">
              <h6>Phone Number :</h6>
              <p>+91 9252180504</p>
              <h6>Email :</h6>
              <p>smile.itsadil@gmail.com</p>
            </div>
          </div>{" "}
          <div className="card">
            <div className="imageDiv">
              <img
                src="https://res.cloudinary.com/ddxv0iwcs/image/upload/v1714383566/PwebData/fpzvoedwfrtsskaqd606.jpg"
                alt={event.name}
              />
            </div>
            <br />
            <h6>Club Social Coordinator</h6>
            <h3>Ms. Pinki Sharma</h3>
            <br />
            <div className="textBody">
              <h6>Phone Number :</h6>
              <p>+91 9252180504</p>
              <h6>Email :</h6>
              <p>smile.itsadil@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FifthCover;
