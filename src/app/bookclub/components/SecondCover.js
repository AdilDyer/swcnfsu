"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
const SecondCover = ({ coverUrl, pastMeetings }) => {
  const images = [
    "https://res.cloudinary.com/ddxv0iwcs/image/upload/v1726897433/Screenshot_2024-09-21_at_11.13.46_AM_lfw6zk.png",
    "https://sc0.blr1.digitaloceanspaces.com/inline/864062-ydtpxgavpm-1515235604.jpg",
    "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
    "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
    "https://img.freepik.com/premium-photo/house-with-pink-house-top_874813-1429.jpg",
    "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
  ];

  const [selectedMeeting, setSelectedMeeting] = useState(pastMeetings[0] || "");

  const handleImageClick = (meeting) => {
    setSelectedMeeting(meeting);
  };

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
    <div className="secondCover">
      <img src={coverUrl} id="coverImg" alt="Cover Picture..." />
      <div className="oneCardDiv">
        <div className="announcements">
          <div className="cardsAnnoun">
            <Link href="/bookclub/123">
              <div className="card">
                <div className="imageDiv">
                  <img
                    src={selectedMeeting?.eventImageUrl || images[0]}
                    alt=""
                  />
                </div>
                <br />
                <div className="textBody">
                  <h5>
                    {selectedMeeting
                      ? selectedMeeting.name
                      : "Select an event to view details. "}
                  </h5>
                  <p>{selectedMeeting?.description}</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="scroll-menu" ref={containerRef}>
        <div className="scrollBtnDiv scrollBtnDivLeft" onClick={scrollLeft}>
          <div className="imgDiv">
            <img
              src="https://res.cloudinary.com/ddxv0iwcs/image/upload/v1726216763/left-arrow_exqxhq.png"
              alt=""
            />
          </div>
        </div>
        {pastMeetings.map((meeting, index) => {
          const nextMeetingDate = new Date(meeting.date);
          const formattedDate = nextMeetingDate.toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          });
          return (
            <>
              <div
                onClick={() => handleImageClick(meeting)}
                key={index}
                className="announcements"
              >
                <div className="cardsAnnoun">
                  <div className="card">
                    <div className="imageDiv">
                      <img
                        alt={`Thumbnail ${index}`}
                        src={meeting.eventImageUrl}
                      />
                    </div>
                    <br />
                    <div className="textBody">
                      <h5>Meeting No. {pastMeetings.length - index} </h5>
                      {/* <p>{meeting.name}</p> */}
                      <p>{formattedDate}</p>
                      <p>{meeting.description}</p>
                      <p>No. of attendees : {meeting.rsvps.length}</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
        {images.map((image, index) => (
          <div
            onClick={() => handleImageClick(image)}
            key={index}
            className="announcements"
          >
            <div className="cardsAnnoun">
              <div className="card">
                <div className="imageDiv">
                  <img alt={`Thumbnail ${index}`} src={image} />
                </div>
                <br />
                <div className="textBody">
                  <h5>Meeting {images.length - index} </h5>
                  <p>Discovering new Genres !</p>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="scrollBtnDiv scrollBtnDivRight" onClick={scrollRight}>
          <div className="imgDiv">
            <img
              src="https://res.cloudinary.com/ddxv0iwcs/image/upload/v1726216784/right-arrow_k1jiu2.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondCover;
