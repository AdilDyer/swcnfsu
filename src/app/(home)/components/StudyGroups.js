import React from "react";
import Link from "next/link";
import FadeInSection from "../../components/FadeInSection";

const StudyGroups = ({ allClubs }) => {
  return (
    <div className="studygroups" id="studygroups">
      <FadeInSection>
        <h1>
          {/* <span style={{ verticalAlign: "middle" }}>
            <img
              style={{
                width: "2.5rem",
              }}
              src="https://3axis.co/user-images/d1l8d67m.jpg"
              alt=""
            />
          </span>
          &nbsp; */}
          <span className="homePageHeading"> Study Groups</span>
          {/* &nbsp;
          <span style={{ verticalAlign: "middle" }}>
            <img
              style={{
                transform: "scale(-1) rotate(-110deg)",
                width: "2.5rem",
              }}
              src="https://3axis.co/user-images/d1l8d67m.jpg"
              alt=""
            />
          </span> */}
        </h1>
      </FadeInSection>
      <br />
      <br />
      <FadeInSection>
        <div className="cardsContainer">
          {allClubs.map((club) => (
            <>
              <Link href={`/clubs/${club.name}`}>
                <div
                  className="card"
                  style={{
                    background: `url(${club.bgImageUrl})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                >
                  {/* <div className="symbol">
                    <i
                      style={{ color: "black" }}
                      class="fa-solid fa-terminal"
                    ></i>
                  </div> */}
                  <p>{club.name}</p>
                </div>
              </Link>
            </>
          ))}
          <div className="" style={{ fontWeight: "500" }}>
            {" "}
            ... and more coming soon.
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default StudyGroups;
