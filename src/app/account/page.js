"use client";
import { useSession } from "next-auth/react";
import React, { useEffect, useState, useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { set } from "mongoose";
const Account = () => {
  const { data: session, status } = useSession();
  const [isUserRegistered, setIsUserRegistered] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [enrollNo, setEnrollNo] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [quote, setQuote] = useState("");
  const [quoteAuthor, setQuoteAuthor] = useState("");

  const getUserData = async () => {
    const response = await fetch(`/api/getUser?email=${session?.user?.email}`);

    const data = await response.json();
    if (data.status == 200) {
      session.user.phoneNumber = data.result.phoneNumber;
      setPhoneNumber(data.result.phoneNumber);

      session.user.enrollNo = data.result.enrollNo;
      setEnrollNo(data.result.enrollNo);
      const formattedBirthdate = new Date(data.result.birthdate)
        .toISOString()
        .split("T")[0];
      session.user.birthdate = formattedBirthdate;
      setBirthdate(formattedBirthdate);
      session.user.bloodGroup = data.result.bloodGroup;
      setBloodGroup(data.result.bloodGroup);
    } else {
      console.log(data);
    }
  };

  //fetching a new quote from the backend
  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch("/api/getQuote");
        const data = await response.json();
        setQuote(data?.result[0]?.quote);
        setQuoteAuthor(data?.result[0]?.author);
      } catch (error) {
        console.error("Error fetching quote:", error);
      }
    };
    fetchQuote();
  }, []);

  //setting isRegistered state and getting the user data
  useEffect(() => {
    if (session?.user?.isRegistered !== undefined) {
      setIsUserRegistered(session.user.isRegistered);
    }
    getUserData();
  }, [session]);

  //handle regis form
  const handleSubmit = async () => {
    const phoneNumber = document.querySelector("#phoneinput").value;
    const course = document.querySelector("#courseinput").value;
    const enrollNo = document.querySelector("#enrollinput").value;
    const birthdate = document.querySelector("#dobinput").value;
    const bloodGroup = document.querySelector("#bloodGroup").value;

    const response = await fetch("http://localhost:3000/api/createUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: session.user.name,
        email: session.user.email,
        profileImageUrl: session.user.image,
        phoneNumber,
        course,
        enrollNo,
        birthdate,
        bloodGroup,
      }),
    });

    const data = await response.json();
    if (data.status != 200) {
      alert("Error registering user : \n" + data.error);
    } else {
      setIsUserRegistered(true);
    }
  };

  //left right scroll btns
  const containerRef = useRef(null);
  const containerRef2 = useRef(null);
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
  const scrollLeft2 = () => {
    if (containerRef2.current) {
      containerRef2.current.scrollLeft -= 400; // Adjust scroll amount as needed
    }
  };
  const scrollRight2 = () => {
    if (containerRef2.current) {
      containerRef2.current.scrollLeft += 400; // Adjust scroll amount as needed
    }
  };

  if (status === "loading") {
    return <p>Loading...</p>; // This covers the loading case
  }

  if (!session) {
    return null; // No session
  }

  const event = {
    _id: "1",
    name: "Event Name",
    date: "2022-12-12",
    description: "Event Description",
    eventImageUrl:
      "https://res.cloudinary.com/ddxv0iwcs/image/upload/v1726216784/right-arrow_k1jiu2.png",
    eventTime: "12:00 PM",
  };

  return (
    <div className="accountBig">
      {session ? (
        <>
          {isUserRegistered ? (
            <div className="registeredDiv">
              <div className="leftPart">
                <div className="imgDiv">
                  <img src={session.user.image} alt="" loading="lazy" />
                </div>
                <div className="detailsDiv">
                  <h1>{session.user.name}</h1>
                  <p>{session.user.course}</p>
                  <p>{session.user.email}</p>
                  <p>Phone No. : {phoneNumber}</p>
                  <p>Enroll No. : {enrollNo}</p>
                  <p>Birthdate : {birthdate}</p>
                  <p>Blood Group : {bloodGroup}</p>
                </div>
                <div className="bottomPart">
                  <Button variant="outline-danger">Logout</Button>
                  <Button variant="outline-primary">
                    <i class="fa-solid fa-user-tie"></i> Contact Admin
                  </Button>
                  <Button variant="outline-success">💝 Share Website</Button>
                </div>
              </div>
              <div className="rightPart">
                <div className="noOfMeetings">
                  <h5>Total No. of Events Attended : </h5>
                  <h5>10</h5>
                </div>
                <div className="titleLine">
                  <h4>Upcoming RSVPied Events </h4>
                </div>
                <div className="upcomingEventsCards">
                  <div className="cardsAnnoun" ref={containerRef}>
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

                    <div className="card" key={event._id}>
                      <div className="imageDiv">
                        <img src={event.eventImageUrl} alt={event.name} />
                      </div>
                      <br />
                      <Button variant="primary" disabled>
                        RSVP Done
                      </Button>
                      <br />
                      <div className="textBody">
                        <h5>{event.name}</h5>
                        <p>Date: {event.date}</p>
                        <h6>Time: {event.eventTime}</h6>
                        <h6>{event.description}</h6>
                      </div>
                    </div>
                    <div className="card" key={event._id}>
                      <div className="imageDiv">
                        <img src={event.eventImageUrl} alt={event.name} />
                      </div>
                      <br />
                      <Button variant="primary" disabled>
                        RSVP Done
                      </Button>
                      <br />
                      <div className="textBody">
                        <h5>{event.name}</h5>
                        <p>Date: {event.date}</p>
                        <h6>Time: {event.eventTime}</h6>
                        <h6>{event.description}</h6>
                      </div>
                    </div>
                    <div className="card" key={event._id}>
                      <div className="imageDiv">
                        <img src={event.eventImageUrl} alt={event.name} />
                      </div>
                      <br />
                      <Button variant="primary" disabled>
                        RSVP Done
                      </Button>
                      <br />
                      <div className="textBody">
                        <h5>{event.name}</h5>
                        <p>Date: {event.date}</p>
                        <h6>Time: {event.eventTime}</h6>
                        <h6>{event.description}</h6>
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
                <div className="titleLine">
                  <h4>Previously Attended Events </h4>
                </div>
                {/* using the above template again  */}
                <div className="upcomingEventsCards">
                  <div
                    className="cardsAnnoun"
                    style={{ backgroundColor: "#b88ea6" }}
                    ref={containerRef2}
                  >
                    <div
                      className="scrollBtnDiv scrollBtnDivLeft"
                      onClick={scrollLeft2}
                    >
                      <div className="imgDiv">
                        <img
                          src="https://res.cloudinary.com/ddxv0iwcs/image/upload/v1726216763/left-arrow_exqxhq.png"
                          alt=""
                        />
                      </div>
                    </div>

                    <div className="card" key={event._id}>
                      <div className="imageDiv">
                        <img src={event.eventImageUrl} alt={event.name} />
                      </div>
                      <br />
                      <Button variant="dark">Event Synposis</Button>
                      <br /> <Button variant="dark">Download Cerificate</Button>
                      <br />
                      <div className="textBody">
                        <h5>{event.name}</h5>
                        <p>Date: {event.date}</p>
                        <h6>Time: {event.eventTime}</h6>
                        <h6>{event.description}</h6>
                      </div>
                    </div>
                    <div className="card" key={event._id}>
                      <div className="imageDiv">
                        <img src={event.eventImageUrl} alt={event.name} />
                      </div>
                      <br />
                      <Button variant="dark">Event Synposis</Button>
                      <br /> <Button variant="dark">Download Cerificate</Button>
                      <br />
                      <div className="textBody">
                        <h5>{event.name}</h5>
                        <p>Date: {event.date}</p>
                        <h6>Time: {event.eventTime}</h6>
                        <h6>{event.description}</h6>
                      </div>
                    </div>
                    <div className="card" key={event._id}>
                      <div className="imageDiv">
                        <img src={event.eventImageUrl} alt={event.name} />
                      </div>
                      <br />
                      <Button variant="dark">Event Synposis</Button>
                      <br /> <Button variant="dark">Download Cerificate</Button>
                      <br />
                      <div className="textBody">
                        <h5>{event.name}</h5>
                        <p>Date: {event.date}</p>
                        <h6>Time: {event.eventTime}</h6>
                        <h6>{event.description}</h6>
                      </div>
                    </div>
                    <div
                      className="scrollBtnDiv scrollBtnDivRight"
                      onClick={scrollRight2}
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
                <br />
                <h6 id="quote">~~ {quote} ~~</h6>
                <h6 id="quoteAuthor">{quoteAuthor}</h6>
              </div>
            </div>
          ) : (
            <>
              <div className="notRegisteredDiv">
                <img src={session.user.image} alt="Profile Pic" />
                <br />
                <h1>Welcome to Student Welfare Committee !</h1>
                <br />
                <p>Dear {session.user.name}, </p>
                <p>Please Complete Your Registration :</p>
                <div className="inputFieldsDiv">
                  <div className="inputField">
                    1.
                    <Form.Control
                      id="phoneinput"
                      placeholder="Phone No."
                      type="tel"
                      name="phoneNumber"
                    />
                  </div>
                  <div className="inputField">
                    2.{" "}
                    <Form.Control
                      id="courseinput"
                      placeholder="Course Name"
                      name="course"
                    />
                  </div>
                  <div className="inputField">
                    3.{" "}
                    <Form.Control
                      id="enrollinput"
                      placeholder="Enroll No."
                      name="enrollNo"
                    />
                  </div>
                  <div className="inputField">
                    4.{" "}
                    <Form.Control
                      id="dobinput"
                      placeholder="Birthdate"
                      type="date"
                      name="birthdate"
                    />
                  </div>
                  <div className="inputField">
                    5.{" "}
                    <Form.Control
                      id="bloodGroup"
                      placeholder="Blood Group"
                      name="bloodGroup"
                    />
                  </div>
                  <Button
                    variant="outline-success"
                    onClick={() => handleSubmit()}
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </>
          )}
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Account;
