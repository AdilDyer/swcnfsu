"use client";
import React, { useEffect, useState } from "react";
import FirstCover from "../components/FirstCover";
import SecondCover from "../components/SecondCover";
import ThirdCover from "../components/ThirdCover";
import FifthCover from "../components/FifthCover";
import UpcomingEvents from "../components/UpcomingEvents";

const BookClub = ({ params }) => {
  const [clubName, setClubName] = useState(decodeURIComponent(params.clubName));
  const [pastMeetings, setPastMeetings] = useState([]);
  const [nextMeetings, setNextMeetings] = useState([]);
  const [clubDetails, setClubDetails] = useState({});
  useEffect(() => {
    const fetchMeetingsDetails = async () => {
      try {
        const response = await fetch(`/api/getEvents/${clubName}`);
        const data = await response.json();
        setPastMeetings(data.pastMeetings);
        setNextMeetings(data.nextMeetings);
      } catch (error) {
        console.error("Error fetching past meetings:", error);
      }
    };

    const fetchClubDetails = async () => {
      try {
        const response = await fetch(`/api/getClubs/${clubName}`);
        const data = await response.json();
        setClubDetails(data.result);
      } catch (error) {
        console.error("Error fetching club details:", error);
      }
    };
    fetchMeetingsDetails();
    fetchClubDetails();
  }, []);

  return (
    <>
      <div className="bookClubDiv">
        <FirstCover
          clubName={clubName}
          coverUrl={clubDetails.bgImageUrl}
          nextMeetings={nextMeetings}
          thisMonthTarget={clubDetails.thisMonthTarget}
          motto={clubDetails.motto}
        />
        <SecondCover
          coverUrl={
            "https://res.cloudinary.com/ddxv0iwcs/image/upload/v1727098637/1169002-full-size-black-and-white-check-wallpaper-1920x1080-for-desktop_1_xoscty.jpg"
          }
          pastMeetings={pastMeetings}
          clubName={clubName}
        />
        <UpcomingEvents nextMeetings={nextMeetings} clubName={clubName} />
        <ThirdCover clubName={"Book"} />

        <FifthCover
          clubCoordinatorDetails={"shyam Lal"}
          socialCoordinatorDetails={"heha lal"}
          chiefClubsCoordinatorDetails={"madhu lal"}
        />
      </div>
    </>
  );
};

export default BookClub;
