"use client"
import React, { useEffect, useRef, useState } from "react";
import FirstCover from "./components/FirstCover";
import SecondCover from "./components/SecondCover";
import Footer from "../components/Footer";


const BookClub = () => {

  return (
    <>

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

    </>
  );
};

export default BookClub;
