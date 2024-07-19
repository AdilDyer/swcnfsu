"use client"
import React, { useEffect, useRef, useState } from "react";
import FirstCover from "./components/FirstCover";
import SecondCover from "./components/SecondCover";
import Footer from "../components/Footer";
import useWindowSize from "../utils/useWindowSize";

const BookClub = () => {
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
    <>
      <div ref={app} className="BigScrollContainer">
        <div className="scrollContainer" ref={scrollContainer}>
          <div className="bookClubDiv">
            <FirstCover
              coverUrl={
                "https://res.cloudinary.com/ddxv0iwcs/image/upload/v1720415865/bookclubcover_qxpmep.jpg"
              }
            />
            <SecondCover
              coverUrl={
                "https://getwallpapers.com/wallpaper/full/7/a/b/1169002-full-size-black-and-white-check-wallpaper-1920x1080-for-desktop.jpg"
              }
            />
          </div>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
};

export default BookClub;
