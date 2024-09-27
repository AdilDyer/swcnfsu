"use client";
import { useSession, signOut } from "next-auth/react";
import React, { useEffect, useState, useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Link from "next/link";

const Account = () => {
  const { data: session, status } = useSession();
  const [isUserRegistered, setIsUserRegistered] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [course, setCourse] = useState("");
  const [enrollNo, setEnrollNo] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [gender, setGender] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [quote, setQuote] = useState("");
  const [quoteAuthor, setQuoteAuthor] = useState("");
  const [adminButtonText, setAdminButtonText] = useState("Contact Admin");
  const [copyButtonText, setCopyButtonText] = useState("Copy to Clipboard");
  const [selectedSchool, setSelectedSchool] = useState(
    "School of Cybersecurity and Digital Forensics"
  );
  const [courses, setCourses] = useState([]);
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpVerified, setOtpVerified] = useState(false);
  const [rsvpEvents, setRsvpEvents] = useState([]);
  const [attendedEvents, setAttendedEvents] = useState([]);
  const [userId, setUserId] = useState("");
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
    const getUserData = async () => {
      const response = await fetch(
        `/api/getUser?email=${session?.user?.email}`
      );
      const data = await response.json();
      if (data.status == 200) {
        setUserId(data.result._id);
        setPhoneNumber(data.result.phoneNumber);
        setEnrollNo(data.result.enrollNo);
        const formattedBirthdate = new Date(data.result.birthdate)
          .toISOString()
          .split("T")[0];
        setBirthdate(formattedBirthdate);
        setBloodGroup(data.result.bloodGroup);
        setGender(data.result.gender);
      } else {
        console.log(data);
      }
    };
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

  useEffect(() => {
    const fetchAllEvents = async () => {
      try {
        const response = await fetch(`/api/getEvents/users/${userId}`);
        const data = await response.json();
        setAttendedEvents(data.attendedEvents);
        setRsvpEvents(data.rsvpEvents);
      } catch (error) {
        console.error("Error fetching all events:", error);
      }
    };

    fetchAllEvents();
  }, [session]);

  //handle regis form
  const handleSubmit = async () => {
    if (!otpVerified) {
      alert("Please verify OTP first.");
      return;
    }
    if (!phoneNumber || !selectedSchool || !course || !enrollNo || !birthdate) {
      alert("Please fill all the fields.");
      return;
    }
    if (!session?.user?.email) {
      alert("Please sign in to register.");
      return;
    }

    try {
      const response = await fetch("/api/createUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: session?.user?.name,
          email: session?.user?.email,
          profileImageUrl: session?.user?.image,
          phoneNumber,
          course,
          school: selectedSchool,
          enrollNo,
          birthdate,
          bloodGroup,
          gender,
        }),
      });

      // Check for HTTP response status
      if (!response.ok) {
        const data = await response.json();
        throw new Error(
          `Error registering user ( Are these credentials yours truly? ): ${data.error}`
        );
      }

      // If the response is successful, set user as registered
      setIsUserRegistered(true);
      alert("User registered successfully!");
    } catch (error) {
      alert(error.message);
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

  const handleOtpSend = async () => {
    const response = await fetch(`/api/sendOtp?email=${session?.user?.email}`);
    const data = await response.json();
    if (data.status == 200) {
      setOtpSent(true);
    } else {
      alert("Error sending OTP : " + data.error);
    }
  };

  const handleOtpVerify = async () => {
    if (!otp) {
      alert("Please enter the OTP");
      return;
    }

    if (!session?.user?.email) {
      alert("Session is unavailable. Please log in again.");
      return;
    }
    try {
      const response = await fetch(
        `/api/verifyOtp?email=${session.user.email}&otp=${otp}`
      );

      if (!response.ok) {
        throw new Error("Failed to verify OTP");
      }

      const data = await response.json();

      if (data.status === 200) {
        setOtpVerified(true);
      } else {
        alert("Invalid OTP");
      }
    } catch (error) {
      alert(error.message);
    }
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
                  <p>Gender : {gender}</p>
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
                  <h5>{attendedEvents?.length}</h5>
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

                    {rsvpEvents?.length > 0 &&
                      rsvpEvents
                        .sort((a, b) => new Date(a.date) - new Date(b.date)) // Sort by date, earliest first
                        .map((event) => {
                          const istDate = new Date(event.date);

                          const eventDateTime = istDate.toLocaleString(
                            "en-GB",
                            {
                              weekday: "short",
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                              hour12: true,
                              timeZone: "Asia/Kolkata",
                            }
                          );

                          return (
                            <div className="card" key={event._id}>
                              <div className="imageDiv">
                                <img
                                  src={event.eventImageUrl}
                                  alt={event.name}
                                />
                              </div>
                              <br />
                              <Button variant="primary" disabled>
                                RSVP Done
                              </Button>
                              <br />

                              <div className="textBody">
                                <h5>{event.name}</h5>

                                <p>{event.clubName} Club Event</p>
                                <h6>Date: {eventDateTime}</h6>
                                <h6>{event.description.Introduction}</h6>
                              </div>
                            </div>
                          );
                        })}


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

                    {attendedEvents?.length > 0 &&
                      attendedEvents
                        .sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort by date, latest first
                        .map((event) => {
                          const istDate = new Date(event.date);

                          const eventDateTime = istDate.toLocaleString(
                            "en-GB",
                            {
                              weekday: "short",
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                              hour12: true,
                              timeZone: "Asia/Kolkata",
                            }
                          );
                          return (
                            <div className="card" key={event._id}>
                              <div className="imageDiv">
                                <img
                                  src={event.eventImageUrl}
                                  alt={event.name}
                                />
                              </div>
                              <br />
                              <Link
                                href={`/clubs/${event.clubName}/${event._id}`}
                              >
                                <Button variant="dark">Event Synopsis</Button>
                              </Link>
                              <br />
                              <div className="textBody">
                                <h5>{event.name}</h5>
                                <p>
                                  <i>{event.clubName} Club Event</i>
                                </p>

                                <h6>Date: {eventDateTime}</h6>
                                <h6>{event.description.Introduction}</h6>
                              </div>
                            </div>
                          );
                        })}

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
                  <Form
                    onSubmit={(e) => {
                      e.preventDefault(); // Prevent default form submission behavior
                      handleSubmit();
                    }}
                  >
                    <div className="inputField">
                      1.
                      <Form.Control
                        id="phoneinput"
                        placeholder="Phone No."
                        type="tel"
                        name="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
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
                        value={selectedSchool}
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
                        value={course}
                        onChange={(e) => setCourse(e.target.value)}
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
                        value={enrollNo}
                        onChange={(e) => setEnrollNo(e.target.value)}
                        required
                      />
                    </div>
                    <div className="inputField">
                      5. <label htmlFor="dobinput">Birthdate:</label>
                      <Form.Control
                        id="dobinput"
                        type="date"
                        value={birthdate}
                        onChange={(e) => setBirthdate(e.target.value)}
                        name="birthdate"
                        required
                      />
                    </div>
                    <div className="inputField">
                      6.{" "}
                      <Form.Select
                        id="gender"
                        placeholder="Gender"
                        name="gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        required
                      >
                        <option>Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </Form.Select>
                    </div>
                    <div className="inputField">
                      7.{" "}
                      <Form.Select
                        id="bloodGroup"
                        placeholder="Blood Group"
                        name="bloodGroup"
                        value={bloodGroup}
                        onChange={(e) => setBloodGroup(e.target.value)}
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
                    <div className="inputField">
                      8.{" "}
                      <Form.Control
                        id="otp"
                        placeholder={otpSent ? "Enter OTP" : "Request an OTP"}
                        name="otp"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        required
                        disabled={!otpSent}
                      />
                      <Button
                        disabled={otpVerified}
                        onClick={otpSent ? handleOtpVerify : handleOtpSend}
                        variant={otpSent ? "primary" : "outline-warning"}
                      >
                        {otpSent
                          ? otpVerified
                            ? "Verified"
                            : "Verify OTP"
                          : "Send OTP to Email"}
                      </Button>
                    </div>
                    <Button
                      disabled={!otpVerified}
                      variant="outline-success"
                      type="submit"
                    >
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
