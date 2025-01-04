import React from "react";
import FadeInSection from "../../components/FadeInSection";
import { isMobile } from "react-device-detect";

const Collaboration = () => {
  if (isMobile) {
    return <div style={{ padding: "1rem 0" }}>&nbsp;</div>;
  }
  return (
    <FadeInSection>
      <div className="collaborationDiv">
        {/* <div className="saying" style={{ top: "10rem", left: "18rem" }}>
        <img
          src="https://res.cloudinary.com/ddxv0iwcs/image/upload/v1712930506/IMG-20240305-WA0052_-_Tanish_Thakare_alkeim.jpg"
          alt=""
        />
        <span style={{ backgroundColor: "brown", color: "white" }}>
          I love and will love SWCian.
        </span>
      </div>
      <div className="saying" style={{ top: "8rem", right: "30rem" }}>
        <img
          src="https://res.cloudinary.com/ddxv0iwcs/image/upload/v1712930506/IMG-20240305-WA0052_-_Tanish_Thakare_alkeim.jpg"
          alt=""
        />
        <span style={{ backgroundColor: "lightcoral" }}>
          Thanks to the SWC, So kind of them.
        </span>
      </div>
      <div
        className=" saying saying-mobile"
        style={{ top: "10rem", left: "-2rem" }}
      >
        <img
          src="https://res.cloudinary.com/ddxv0iwcs/image/upload/v1712930506/IMG-20240305-WA0052_-_Tanish_Thakare_alkeim.jpg"
          alt=""
        />
        <span style={{ backgroundColor: "lightblue", left: "7.5rem" }}>
          So Gratefull.
        </span>
      </div>
      <div
        className=" saying saying-mobile"
        style={{ top: "16rem", right: "-1rem" }}
      >
        <img
          src="https://res.cloudinary.com/ddxv0iwcs/image/upload/v1712930506/IMG-20240305-WA0052_-_Tanish_Thakare_alkeim.jpg"
          alt=""
        />
        <span style={{ backgroundColor: "lightcoral", left: "-7rem" }}>
          Thanks <br /> to them.
        </span>
      </div>
      <div className="saying" style={{ top: "26rem", right: "21rem" }}>
        <img
          src="https://res.cloudinary.com/ddxv0iwcs/image/upload/v1712930506/IMG-20240305-WA0052_-_Tanish_Thakare_alkeim.jpg"
          alt=""
        />
        <span
          style={{
            top: "3.5rem",
            backgroundColor: "midnightBlue",
            color: "white",
          }}
        >
          they just rocks, always.
        </span>
      </div>
      <div
        className="saying saying-mobile"
        style={{ top: "27rem", right: "19rem", bottom: "0rem" }}
      >
        <img
          src="https://res.cloudinary.com/ddxv0iwcs/image/upload/v1712930506/IMG-20240305-WA0052_-_Tanish_Thakare_alkeim.jpg"
          alt=""
        />
        <span
          style={{
            top: "3.5rem",
            backgroundColor: "midnightBlue",
            color: "white",
          }}
        >
          they just rocks, always.
        </span>
      </div>
      <div className="saying" style={{ top: "34rem", right: "38rem" }}>
        <img
          src="https://res.cloudinary.com/ddxv0iwcs/image/upload/v1712930506/IMG-20240305-WA0052_-_Tanish_Thakare_alkeim.jpg"
          alt=""
        />
        <span
          style={{
            top: "3.5rem",
            backgroundColor: "powderblue",
            color: "midnightBlue",
          }}
        >
          they just rocks, always.
        </span>
      </div>
      <div className="saying" style={{ top: "29rem", right: "68rem" }}>
        <img
          src="https://res.cloudinary.com/ddxv0iwcs/image/upload/v1712930506/IMG-20240305-WA0052_-_Tanish_Thakare_alkeim.jpg"
          alt=""
        />
        <span
          style={{
            top: "3.5rem",
            backgroundColor: "blanchedalmond",
            color: "midnightBlue",
          }}
        >
          they just rocks, always.
        </span>
      </div>
      <h1>
        We Believe In Collaboration.
        <br />
        Period.
      </h1> */}
        <img
          src="https://res.cloudinary.com/ddxv0iwcs/image/upload/v1719134293/Screenshot_2024-06-23_at_2.48.06_PM_tiwuun.png"
          alt="We believe in collaboration.Period."
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </div>
    </FadeInSection>
  );
};

export default Collaboration;
