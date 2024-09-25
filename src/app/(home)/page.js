"use client";
import HomeFirst from "./components/HomeFirst";
import Collaboration from "./components/Collaboration";
import Announcements from "./components/Announcements";
import Description from "./components/Description";
import Calendar from "./components/Calendar";
import PastEvents from "./components/PastEvents";
import StudyGroups from "./components/StudyGroups";
import SupportServices from "./components/SupportServices";
import Qbon from "./components/Qbon";
import RisingStar from "./components/RisingStar";
import Gallery from "./components/Gallery";
import { useEffect, useState } from "react";
import ThirdCover from "../clubs/components/ThirdCover";

const Home = () => {
  const [allEvents, setAllEvents] = useState([]);
  const [allRisingStars, setAllRisingStars] = useState([]);
  const [allClubs, setAllClubs] = useState([]);
  useEffect(() => {
    const fetchAllEvents = async () => {
      try {
        const response = await fetch("/api/getEvents");
        const data = await response.json();
        setAllEvents(data.result);
      } catch (error) {
        console.error("Error fetching all events:", error);
      }
    };

    fetchAllEvents();
  }, []);
  useEffect(() => {
    const fetchAllRisingStars = async () => {
      try {
        const response = await fetch(
          "/api/getAllRisingStars"
        );
        const data = await response.json();
        setAllRisingStars(data.result);
      } catch (error) {
        console.error("Error fetching all rising stars:", error);
      }
    };

    const fetchAllClubs = async () => {
      try {
        const response = await fetch("/api/getClubs");
        const data = await response.json();
        setAllClubs(data.result);
      } catch (error) {
        console.error("Error fetching all clubs:", error);
      }
    };

    fetchAllRisingStars();
    fetchAllClubs();
  }, []);

  return (
    <>
      <HomeFirst />
      <Collaboration />
      <Description />
      <Gallery />
      <Calendar />
      <Announcements allEvents={allEvents} />
      <RisingStar allRisingStars={allRisingStars} />
      <PastEvents allEvents={allEvents} />
      <StudyGroups allClubs={allClubs} />
      <ThirdCover clubName={"Book"} />
      <SupportServices />
      <Qbon />
    </>
  );
};

export default Home;
