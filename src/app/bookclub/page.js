import React from "react";
import FirstCover from "./components/FirstCover";
import SecondCover from "./components/SecondCover";
const BookClub = () => {
  return (
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

      <FirstCover
        coverUrl={
          "https://images.suitcasemag.com/wp-content/uploads/2023/10/05165349/10-online-book-clubs-to-join-right-now_652d3f233240d.jpeg"
        }
      />
    </div>
  );
};

export default BookClub;
