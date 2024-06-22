import React from "react";

const Description = () => {
  return (
    <>
      <div className="descriptionDiv" id="about">
        <div className="imageDiv">
          <div className="imgContainerDiv">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/90/NSS-symbol.jpeg"
              alt=""
              style={{ objectFit: "contain", backgroundColor: "white" }}
            />
          </div>
        </div>
        <div className="textDiv">
          <h1>Guiding Principles and Objectives</h1>
          <br />
          <h5>
            <span style={{ backgroundColor: "pink" }}>
              {" "}
              &nbsp;Transparency&nbsp;{" "}
            </span>
            ,&nbsp;
            <span style={{ backgroundColor: "pink", color: "black" }}>
              &nbsp; Approachability&nbsp;{" "}
            </span>
            &nbsp; &amp; &nbsp;
            <span style={{ backgroundColor: "pink", color: "black" }}>
              &nbsp; Aspiration &nbsp;
            </span>
          </h5>
          <br />
          <p>
            At the heart of our SWC are our guiding principles: transparency,
            approachability, and aspiration. We believe in open communication
            and honesty in all our actions. SWC&apos;s approachable nature
            ensures that every student feels welcome and heard. We constantly
            strive for better, aiming to uplift every member of our community.
          </p>
          <br />
          <h5>
            <span style={{ backgroundColor: "pink" }}>
              &nbsp;Our Dedication&nbsp;
            </span>
          </h5>
          <br />
          <p>
            Our SWC is committed to fostering a supportive and inclusive
            environment where every student can thrive. SWC is passionate about
            creating a space where you can grow, connect, and succeed. We at SWC
            are the dedicated individuals who are working tirelessly to make our
            community a hub of support and positivity. Your well-being is our
            priority.
          </p>
        </div>
      </div>
      <div className="descriptionDiv">
        <div className="imageDiv">
          <div className="imgContainerDiv">
            <img
              src="https://img.freepik.com/premium-photo/indian-college-student-group-showing-thumbs-up-college-campus_601128-5444.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="textDiv">
          <h1>Our Outstanding Team</h1>
          <br />
          <h5>
            <span style={{ backgroundColor: "lime" }}>
              {" "}
              &nbsp; Dedicated and Remarkable Individuals &nbsp;{" "}
            </span>
          </h5>
          <br />
          <p>
            SWC is powered by a team of remarkable individuals who are dedicated
            towards operational and mentorship divisions. They consistently
            perform a positive impact on the student community. Each member
            brings unique skills, perspectives, and a shared passion for student
            welfare. Together, we strive to create an environment where every
            student feels supported and empowered.
          </p>
          <br />
          {/* <h5>
            <span style={{ backgroundColor: "powderblue" }}>
              &nbsp;Our Dedication&nbsp;
            </span>
          </h5>
          <br />
          <p>
            Our SWC is committed to fostering a supportive and inclusive
            environment where every student can thrive. SWC is passionate about
            creating a space where you can grow, connect, and succeed. We at SWC
            are the dedicated individuals who are working tirelessly to make our
            community a hub of support and positivity.
          </p> */}
        </div>
      </div>
    </>
  );
};

export default Description;
