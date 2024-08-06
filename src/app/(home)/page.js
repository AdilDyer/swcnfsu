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

import Footer from "../components/Footer";


const Home = () => {

  return (
    <>
      <HomeFirst />
      <Collaboration />
      <Description />
      <Calendar />
      <Announcements />
      <RisingStar />
      <PastEvents />
      <StudyGroups />
      <SupportServices />
      <Grievance />
      <Qbon />
      <Footer />
    </>
  );
};

export default Home;
