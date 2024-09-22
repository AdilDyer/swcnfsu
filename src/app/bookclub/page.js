"use client";
import React, { useEffect, useState } from "react";
import FirstCover from "./components/FirstCover";
import SecondCover from "./components/SecondCover";
import ThirdCover from "./components/ThirdCover";

const BookClub = () => {
  const [pastMeetings, setPastMeetings] = useState([]);
  const [nextMeeting, setNextMeeting] = useState({});
  const [thisMonthMotto, setThisMonthMotto] = useState("");
  const [nextMeetingLocation, setNextMeetingLocation] = useState("");

  useEffect(() => {
    const fetchMeetingsDetails = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/getEvents/Book"
        );
        const data = await response.json();
        console.log(data);
        setPastMeetings(data.pastMeetings);
        setNextMeeting(data.nextMeeting);
        setThisMonthMotto(data.thisMonthMotto);
        setNextMeetingLocation(data.nextMeetingLocation);
      } catch (error) {
        console.error("Error fetching past meetings:", error);
      }
    };

    fetchMeetingsDetails();
  }, []);
  return (
    <>
      <div className="bookClubDiv">
        <FirstCover
          coverUrl={
            "https://res.cloudinary.com/ddxv0iwcs/image/upload/v1720415865/bookclubcover_qxpmep.jpg"
          }
          nextMeeting={nextMeeting}
          thisMonthMotto={thisMonthMotto}
          nextMeetingLocation={nextMeetingLocation}
        />
        <SecondCover
          coverUrl={
            "https://getwallpapers.com/wallpaper/full/7/a/b/1169002-full-size-black-and-white-check-wallpaper-1920x1080-for-desktop.jpg"
          }
          pastMeetings={pastMeetings}
        />
        <ThirdCover clubName={"bookclub"} />
      </div>
    </>
  );
};

export default BookClub;
