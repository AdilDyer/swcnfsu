"use client";
import React, { useRef, useEffect } from "react";
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
import useWindowSize from "../utils/useWindowSize";
import Footer from "../components/Footer";
import { useSession } from "next-auth/react";
const Home = () => {
  const size = useWindowSize();
  const app = useRef();
  const scrollContainer = useRef();

  const skewConfigs = {
    ease: 0.06,
    //ease : default :: 0.1 :: given
    // adjust this downwards to have more auto slide after the scroll down , more smoothening
    current: 0,
    previous: 0,
    rounded: 0,
  };

  useEffect(() => {
    document.body.style.height = `${
      scrollContainer.current.getBoundingClientRect().height
    }px`;
  }, [size.height]);

  useEffect(() => {
    requestAnimationFrame(() => skewScrolling());
  }, []);

  const skewScrolling = () => {
    skewConfigs.current = window.scrollY;
    skewConfigs.previous +=
      (skewConfigs.current - skewConfigs.previous) * skewConfigs.ease;
    skewConfigs.rounded = Math.round(skewConfigs.previous * 100) / 100;

    //variables

    const difference = skewConfigs.current - skewConfigs.rounded;
    const acceleration = difference / size.width;
    const velocity = +acceleration;
    const skew = velocity * 7.5;

    //Assign skew and smooth scrolling to the scroll container
    scrollContainer.current.style.transform = `translate3d( 0,-${skewConfigs.rounded}px,0) `;
    //removed the skew segment from transform  :: skewY(${skew}deg)
    //loop vai raf
    requestAnimationFrame(() => skewScrolling());
  };

  return (
    <div ref={app} className="BigScrollContainer">
      <div className="scrollContainer" ref={scrollContainer}>
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
      </div>
    </div>
  );
};

export default Home;
