"use client";
import { useSession, signOut } from "next-auth/react";
import React, { useEffect, useState, useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Image from "next/image";

const Account = () => {
  const { data: session, status } = useSession();
  const [isUserRegistered, setIsUserRegistered] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [enrollNo, setEnrollNo] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [quote, setQuote] = useState("");
  const [quoteAuthor, setQuoteAuthor] = useState("");
  const [adminButtonText, setAdminButtonText] = useState("Contact Admin");
  const [copyButtonText, setCopyButtonText] = useState("Copy to Clipboard");
  const [selectedSchool, setSelectedSchool] = useState(
    "School of Cybersecurity and Digital Forensics"
  );
  const [courses, setCourses] = useState([]);

  const getUserData = async () => {
    const response = await fetch(`/api/getUser?email=${session?.user?.email}`);
    const data = await response.json();
    if (data.status == 200) {
      setPhoneNumber(data.result.phoneNumber);
      setEnrollNo(data.result.enrollNo);
      const formattedBirthdate = new Date(data.result.birthdate)
        .toISOString()
        .split("T")[0];
      setBirthdate(formattedBirthdate);
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
    if (status !== "loading" && session?.user?.isRegistered !== undefined) {
      setIsUserRegistered(session.user.isRegistered);
      getUserData();
    }
  }, [status, session]);

  //get courses according to selected school
  useEffect(() => {
    async function fetchCourses() {
      const res = await fetch("/api/getCourses?school=" + selectedSchool);
      const data = await res.json();
      setCourses(data.filteredCourses);
    }
    fetchCourses();
  }, [selectedSchool]);

  //handle regis form
  const handleSubmit = async () => {
    const phoneNumber = document.querySelector("#phoneinput").value;
    const school = document.querySelector("#schoolinput").value;
    const course = document.querySelector("#courseinput").value;
    const enrollNo = document.querySelector("#enrollinput").value;
    const birthdate = document.querySelector("#dobinput").value;
    const bloodGroup = document.querySelector("#bloodGroup").value;

    const response = await fetch("/api/createUser", {
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
        school,
        enrollNo,
        birthdate,
        bloodGroup,
      }),
    });

    const data = await response.json();
    console.log(data);
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

  // Function to handle contact admin button click
  const handleContactAdmin = () => {
    const adminEmail = "smile.itsadil@gmail.com"; // Replace with actual admin email
    navigator.clipboard.writeText(adminEmail).then(() => {
      setAdminButtonText("Admin email copied to clipboard.");
      setTimeout(() => {
        setAdminButtonText("Contact Admin");
      }, 3000); // Reset text after 3 seconds
    });
  };

  // Share functions
  const shareOnWhatsApp = () => {
    const url = encodeURIComponent(window.location.href); // Get the current URL
    window.open(`https://api.whatsapp.com/send?text=${url}`, "_blank");
  };
  const copyLinkToClipboard = () => {
    navigator.clipboard
      .writeText("Student Welfare Committee, NFSU")
      .then(() => {
        setCopyButtonText("Website Link copied to Clipboard.");
        setTimeout(() => {
          setCopyButtonText("Copy to Clipboard");
        }, 3000); // Reset text after 3 seconds
      });
  };

  if (status === "loading") {
    return (
      <>
        <div
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p>Loading...</p>
        </div>
      </>
    ); // This covers the loading case
  }

  if (!session) {
    return null; // No session
  }

  // Event data before dynamic loading starts
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
                  <img src={session?.user?.image} alt="" loading="lazy" />
                </div>
                <div className="detailsDiv">
                  <h1>{session?.user?.name}</h1>
                  <p>{session?.user?.course}</p>
                  <p>{session?.user?.email}</p>
                  <p>Phone No. : {phoneNumber}</p>
                  <p>Enroll No. : {enrollNo}</p>
                  <p>Birthdate : {birthdate}</p>
                  <p>Blood Group : {bloodGroup}</p>
                </div>
                <div className="bottomPart">
                  <Button
                    variant="outline-danger"
                    onClick={() => signOut({ callbackUrl: "/" })}
                  >
                    Logout
                  </Button>
                  <Button
                    variant="outline-primary"
                    onClick={handleContactAdmin}
                  >
                    <i class="fa-solid fa-user-tie"></i>
                    &nbsp; {adminButtonText}
                  </Button>
                  <DropdownButton
                    id="dropdown-basic-button"
                    title="💝  Share Website"
                    variant="outline-success"
                  >
                    <Dropdown.Item>
                      <Button variant="success" onClick={shareOnWhatsApp}>
                        <i class="fa-brands fa-whatsapp"></i> Share on WhatsApp
                      </Button>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Button variant="dark" onClick={copyLinkToClipboard}>
                        <i class="fa-regular fa-copy"></i> {copyButtonText}
                      </Button>
                    </Dropdown.Item>
                  </DropdownButton>
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
                      <Button variant="dark">Event Synopsis</Button>
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
                      <Button variant="dark">Event Synopsis</Button>
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
                      <Button variant="dark">Event Synopsis</Button>
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
                <img src={session?.user?.image} alt="Profile Pic" />
                <br />
                <h1>Welcome to Student Welfare Committee !</h1>
                <br />
                <p>Dear {session?.user?.name}, </p>
                <p>Please Complete Your Registration :</p>
                <div className="inputFieldsDiv">
                  <Form onSubmit={handleSubmit}>
                    <div className="inputField">
                      1.
                      <Form.Control
                        id="phoneinput"
                        placeholder="Phone No."
                        type="tel"
                        name="phoneNumber"
                        required
                      />
                    </div>
                    <div className="inputField">
                      2.
                      <Form.Select
                        id="schoolinput"
                        placeholder="School Name"
                        name="school"
                        required
                        onChange={(e) => setSelectedSchool(e.target.value)}
                      >
                        <option>Select School</option>
                        <option value="School of Cybersecurity and Digital Forensics">
                          School of Cybersecurity and Digital Forensics
                        </option>
                        <option value="School of Doctoral Studies and Research">
                          School of Doctoral Studies and Research
                        </option>
                        <option value="School of Behavioural Forensics">
                          School of Behavioural Forensics
                        </option>
                        <option value="School of Forensic Science">
                          School of Forensic Science
                        </option>
                        <option value="School of Law, Forensic Justice and Policy Studies">
                          School of Law, Forensic Justice and Policy Studies
                        </option>
                        <option value="School of Pharmacy">
                          School of Pharmacy
                        </option>
                        <option value="School of Management Studies">
                          School of Management Studies
                        </option>
                        <option value="School of Police Science and Security Studies">
                          School of Police Science and Security Studies
                        </option>
                        <option value="School of Engineering and Technology">
                          School of Engineering and Technology
                        </option>
                        <option value="School of Medico-Legal Studies">
                          School of Medico-Legal Studies
                        </option>
                        <option value="School of Open Learning">
                          School of Open Learning
                        </option>
                      </Form.Select>
                    </div>
                    <div className="inputField">
                      3.
                      <Form.Select
                        id="courseinput"
                        placeholder="Course Name"
                        name="course"
                        required
                      >
                        <option>Select Course</option>
                        {courses?.map((course, index) => (
                          <option key={index} value={course.name}>
                            {course.name}
                          </option>
                        ))}
                      </Form.Select>
                    </div>
                    <div className="inputField">
                      4.{" "}
                      <Form.Control
                        id="enrollinput"
                        placeholder="Enroll No."
                        name="enrollNo"
                        required
                      />
                    </div>
                    <div className="inputField">
                      5. <label htmlFor="dobinput">Birthdate:</label>
                      <Form.Control
                        id="dobinput"
                        type="date"
                        name="birthdate"
                        required
                      />
                    </div>
                    <div className="inputField">
                      6.{" "}
                      <Form.Select
                        id="bloodGroup"
                        placeholder="Blood Group"
                        name="bloodGroup"
                        required
                      >
                        <option>Select Blood Group</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                      </Form.Select>
                    </div>
                    <Button variant="outline-success" type="submit">
                      Submit
                    </Button>
                  </Form>
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
