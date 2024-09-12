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
import Grievance from "./components/Grievance";
import RisingStar from "./components/RisingStar";
import { useEffect, useState } from "react";

const Home = () => {
  const [allEvents, setAllEvents] = useState([]);
  useEffect(() => {
    const fetchAllEvents = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/getEvents");
        const data = await response.json();
        setAllEvents(data.result);
      } catch (error) {
        console.error("Error fetching all events:", error);
      }
    };

    fetchAllEvents();
  }, []);

  return (
    <>
      <HomeFirst />
      <Collaboration />
      <Description />
      <Calendar />
      <Announcements allEvents={allEvents} />
      <RisingStar />
      <PastEvents allEvents={allEvents} />
      <StudyGroups />
      <SupportServices />
      {/* <Grievance /> */}
      <Qbon />
    </>
  );
};

export default Home;
