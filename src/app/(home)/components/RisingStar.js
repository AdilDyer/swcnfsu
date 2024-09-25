import React, { useRef } from "react";
import FadeInSection from "../../components/FadeInSection";

const RisingStar = ({ allRisingStars }) => {
  //left right scroll btns
  const containerRef = useRef(null);
  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 400; // Adjust scroll amount as needed
    }
  };
  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 400; // Adjust scroll amount as needed
    }
  };
  return (
    <div className="risingStarDiv">
      <div className="pastevents">
        <FadeInSection>
          <h1>
            <span style={{ verticalAlign: "middle" }}>
              <img
                style={{
                  width: "2.5rem",
                }}
                src="https://3axis.co/user-images/d1l8d67m.jpg"
                alt=""
              />
            </span>
            &nbsp;{" "}
            <span className="homePageHeading"> Rising Stars of Our Club</span>{" "}
            &nbsp;
            <span style={{ verticalAlign: "middle" }}>
              <img
                style={{
                  transform: "scale(-1) rotate(-110deg)",
                  width: "2.5rem",
                }}
                src="https://3axis.co/user-images/d1l8d67m.jpg"
                alt=""
              />
            </span>
          </h1>
        </FadeInSection>
        <br />
        <br />
        <br />
        <FadeInSection>
          <div className="announcements">
            <div
              className="cardsAnnoun"
              style={{ backgroundColor: "pink" }}
              ref={containerRef}
            >
              <div
                className="scrollBtnDiv scrollBtnDivLeft"
                onClick={scrollLeft}
              >
                <div className="imgDiv">
                  <img
                    src="https://res.cloudinary.com/ddxv0iwcs/image/upload/v1726216763/left-arrow_exqxhq.png"
                    alt=""
                  />
                </div>
              </div>
              {allRisingStars ? (
                allRisingStars
                  .sort(
                    (a, b) =>
                      new Date(b.dateOfDeclaration) -
                      new Date(a.dateOfDeclaration)
                  ) // Sort by date, latest first
                  .map((star) => {
                    return (
                      <>
                        <div className="card">
                          <div className="imageDiv">
                            <img src={star.profileImageUrl} alt="" />
                          </div>
                          <br />
                          <div className="textBody">
                            <h5>{star.name}</h5>
                            <p>{star.reasonForListing}</p>
                          </div>
                        </div>
                      </>
                    );
                  })
              ) : (
                <></>
              )}
              <div className="card">
                <div className="imageDiv">
                  <img
                    src="https://media.npr.org/assets/img/2021/10/15/indiagirltechnology_storyimages-3_sq-fedf590fff9910857ae42bc6544cd1bd6ce45bc6.jpg"
                    alt=""
                  />
                </div>
                <br />
                <div className="textBody">
                  <h5>Mr. Soumesh Badal</h5>
                  <p>
                    Excellent efforts for the Yoga and State Cycling event !
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="imageDiv">
                  <img
                    src="https://as1.ftcdn.net/v2/jpg/02/81/01/66/1000_F_281016666_4zHpxLzXKFjRENRbfMoR3Ih6amIs3wFx.jpg"
                    alt=""
                  />
                </div>
                <br />
                <div className="textBody">
                  <h5>Mr. Kumar Sanu</h5>
                  <p>
                    Brilliant display of Communication at
                    <br /> the SCSDF Freshers Orientation!
                  </p>
                </div>
              </div>
              <div
                className="scrollBtnDiv scrollBtnDivRight"
                onClick={scrollRight}
              >
                <div className="imgDiv">
                  <img
                    src="https://res.cloudinary.com/ddxv0iwcs/image/upload/v1726216784/right-arrow_k1jiu2.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
};

export default RisingStar;
