import React from "react";

const RisingStar = () => {
  return (
    <div className="risingStarDiv">
      <div className="pastevents">
        <h1>Rising Stars of Our Club</h1>
        <br />
        <div className="announcements">
          <div className="cardsAnnoun">
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
                <p>Excellent efforts for the Yoga and State Cycling event !</p>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default RisingStar;
