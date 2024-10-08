import Link from "next/link";
import React from "react";
import Button from "react-bootstrap/Button";

const Voting = () => {
  return (
    <div className="votingBig">
      <div className="upperColorDiv"></div>
      <div className="leftPart">
        <div className="textDiv">
          <h2>Suggestions/ Feedback and Voting</h2>
          <p>
            Here, you can share your ideas to improve our college experience and
            vote on suggestions from your fellow students.
            <br />
            <br />
            Your feedback is invaluable in making our committee a better place
            for everyone.
          </p>
        </div>
        <div className="formButtons">
          <Link href={"#"}>
            <Button variant="dark">Proceed for Voting Form</Button>
          </Link>
          <Link href={"#"}>
            <Button variant="dark">Proceed for Suggestion Form</Button>
          </Link>
        </div>
      </div>
      <div className="rightPart">
        <div className="imgDiv">
          <img
            src="https://res.cloudinary.com/ddxv0iwcs/image/upload/v1726130479/Screenshot_2024-09-12_at_2.11.08_PM_umiah9.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Voting;
