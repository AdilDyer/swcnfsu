import React from "react";

const page = () => {
  return (
    <div className="joinUsPage">
      <h1>Joining SWC</h1>
      <br />
      <br />
      <br />
      <div className="stepsCards">
        <div className="card">
          <h1>Step : 1</h1>
          <div className="hrline"></div>
          <h6>Attend Our Next Event</h6>
          <p>
            Come to our next happening event! It&apos;s the perfect opportunity
            to see what we&apos;re all about and meet some fantastic people.
          </p>
        </div>
        <p>
          your journey to becoming a member of the SWC community starts here.
        </p>
        <div className="card">
          <h1>Step : 2</h1>
          <div className="hrline"></div>
          <h6>Introduce Yourself</h6>
          <p>
            Don’t be shy! Introduce yourself to anyone wearing a coordinator
            badge. We can’t wait to meet you and learn more about your interests
            and ideas.
          </p>
        </div>
        <div className="card">
          <h1>Step : 3</h1>
          <div className="hrline"></div>
          <h6>Register Your Name</h6>
          <p>
            Once you&apos;ve mingled and got a feel for the club, simply
            register your name with one of our coordinators. That&apos;s it! You
            are our buddy now!
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
