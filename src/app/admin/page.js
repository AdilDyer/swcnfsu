"use client";
import React, { useState, useEffect, useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { CldUploadWidget } from "next-cloudinary";
import Table from "react-bootstrap/Table";
import Link from "next/link";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Filler,
} from "chart.js";
import { Doughnut, Bar } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Filler
);

const Admin = () => {
  // Add event

  const [loading, setLoading] = useState(false);
  let [posterLink, setPosterLink] = useState("");
  const [isImageUploaded, setIsImageUploaded] = useState(false);
  const [clubCoordinators, setClubCoordinators] = useState([]);
  const [clubs, setClubs] = useState([]);
  const [maleStudents, setMaleStudents] = useState(0);
  const [femaleStudents, setFemaleStudents] = useState(0);
  const [otherStudents, setOtherStudents] = useState(0);
  const [totalStudents, setTotalStudents] = useState(0);
  const [totalFaculties, setTotalFaculties] = useState(0);
  const [currentRightSide, setCurrentRightSide] = useState("Dashboard");

  //get student ration of genders
  const fetchStudentGenderRatio = async () => {
    try {
      const response = await fetch("/api/getUser/gender");
      let data = await response.json();
      setMaleStudents(data?.genderCount[0]?.count);
      setFemaleStudents(data?.genderCount[1]?.count);
      setOtherStudents(data?.genderCount[2]?.count);
      setTotalStudents(
        data?.genderCount[0]?.count +
          data?.genderCount[1]?.count +
          data?.genderCount[2]?.count
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  //function to fetch club coordinator details in club details section
  const fetchClubCoordinators = async () => {
    try {
      const response = await fetch("/api/getClubCoordinators");
      let data = await response.json();
      setClubCoordinators(data.result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  //function to fetch clubs in club details section

  const fetchClubs = async () => {
    try {
      const response = await fetch("/api/getClubs");
      let data = await response.json();
      setClubs(data.result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchClubCoordinators();
    fetchClubs();
    fetchStudentGenderRatio();
  }, []);

  console.log(maleStudents, femaleStudents, otherStudents);
  //graphs
  function YourChartComponentDoughnut() {
    let data = [
      {
        label: "Girls",
        value: femaleStudents,
        color: "rgba(0, 43, 73, 1)",
        cutout: "50%",
      },
      {
        label: "Boys",
        value: maleStudents,
        color: "rgba(83, 217, 217, 1)",
        cutout: "50%",
      },
      {
        label: "Others",
        value: otherStudents,
        color: "rgba(0, 103, 160, 1)",
        cutout: "50%",
      },
    ];

    const options = {
      plugins: {
        responsive: true,
      },
      cutout: data.map((item) => item.cutout),
    };

    const finalData = {
      labels: data.map((item) => item.label),
      datasets: [
        {
          data: data.map((item) => Math.round(item.value)),
          backgroundColor: data.map((item) => item.color),
          borderColor: data.map((item) => item.color),
          borderWidth: 1,
          dataVisibility: new Array(data.length).fill(true),
        },
      ],
    };

    return <Doughnut data={finalData} options={options} />;
  }
  function YourChartComponentDoughnut2() {
    let data = [
      {
        label: "Btech Mtech Cybersecurity",
        value: 55,
        color: "#0082c5",
        cutout: "50%",
      },
      {
        label: "Law and Forensic Science",
        value: 80,
        color: "#6bcffe",
        cutout: "50%",
      },
      {
        label: "Bsc Msc Cybersecurity",
        value: 10,
        color: "#c4edff",
        cutout: "50%",
      },
      {
        label: "Mtech Cybersecurity",
        value: 50,
        color: "#aa5e32",
        cutout: "50%",
      },
      {
        label: "Pyschology",
        value: 30,
        color: "#f3e8d7",
        cutout: "50%",
      },
    ];

    const options = {
      plugins: {
        responsive: true,
      },
      cutout: data.map((item) => item.cutout),
    };

    const finalData = {
      labels: data.map((item) => item.label),
      datasets: [
        {
          data: data.map((item) => Math.round(item.value)),
          backgroundColor: data.map((item) => item.color),
          borderColor: data.map((item) => item.color),
          borderWidth: 1,
          dataVisibility: new Array(data.length).fill(true),
        },
      ],
    };

    return <Doughnut data={finalData} options={options} />;
  }

  const MyBarChart = () => {
    const labels = [
      "Jan",
      "Feb",
      "Mar",
      "April",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
    ];
    const datasets = [12, 45, 67, 43, 89, 34, 67, 43, 55];
    const data = {
      labels: labels,
      datasets: [
        {
          // Title of Graph
          label: "Number of Events",
          data: datasets,
          backgroundColor: [
            "rgba(255, 99, 132, 02)",
            "rgba(255, 159, 64, 02)",
            "rgba(255, 205, 86, 02)",
            "rgba(75, 192, 192, 02)",
          ],
          borderColor: [
            "rgb(255, 99, 132)",
            "rgb(255, 159, 64)",
            "rgb(255, 205, 86)",
            "rgb(75, 192, 192)",
          ],
          borderWidth: 1,
          barPercentage: 1,
          borderRadius: {
            topLeft: 5,
            topRight: 50,
          },
        },
        // insert similar in dataset object for making multi bar chart
      ],
    };
    const options = {
      scales: {
        y: {
          title: {
            display: true,
            text: "Number of Events",
          },
          display: true,
          beginAtZero: true,
          max: 100,
        },
        x: {
          title: {
            display: true,
            text: "Months",
          },
          display: true,
        },
      },
    };
    return <Bar data={data} options={options} />;
  };

  const MyBarChart2 = () => {
    const labels = [
      "Book",
      "Debate",
      "Civil Services",
      "Music",
      "Sports",
      "Drama",
      "Yoga",
      "Cinematography",
      "Content Writing",
      "Vlogging",
    ];
    const datasets = [89, 67, 67, 55, 45, 43, 43, 34, 12];
    const data = {
      labels: labels,
      datasets: [
        {
          // Title of Graph
          label: "Number of Meetings",
          data: datasets,
          backgroundColor: [
            "rgba(255, 99, 132, 02)",
            "rgba(255, 159, 64, 02)",
            "rgba(255, 205, 86, 02)",
            "rgba(75, 192, 192, 02)",
          ],
          borderColor: [
            "rgb(255, 99, 132)",
            "rgb(255, 159, 64)",
            "rgb(255, 205, 86)",
            "rgb(75, 192, 192)",
          ],
          borderWidth: 1,
          barPercentage: 1,
          borderRadius: {
            topLeft: 5,
            topRight: 50,
          },
        },
        // insert similar in dataset object for making multi bar chart
      ],
    };
    const options = {
      scales: {
        y: {
          title: {
            display: true,
            text: "Number of Meetings",
          },
          display: true,
          beginAtZero: true,
          max: 100,
        },
        x: {
          title: {
            display: true,
            text: "Months",
          },
          display: true,
        },
      },
    };
    return <Bar data={data} options={options} />;
  };

  const handleCoordinatorAdding = async (clubId) => {
    const email = prompt("Enter the New coordinator's email:");
    if (!email) return; // Exit if no email is provided

    // Check if the email already exists among club coordinators
    const existingEmail = clubCoordinators.find((coor) => coor.email === email);
    if (existingEmail) {
      alert("This email is already associated with a coordinator.");
      return;
    }

    // Send API request to register the new coordinator
    try {
      const response = await fetch("/api/registerCoordinator", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, clubId }),
      });
      const data = await response.json();
      if (data.success) {
        alert("Coordinator added successfully!");
        fetchClubCoordinators();
      } else {
        alert("Failed to add coordinator: " + data.message);
      }
    } catch (error) {
      console.error("Error adding coordinator:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const handleRemoveCoordinator = async (coordinatorId, clubId) => {
    try {
      const response = await fetch("/api/removeCoordinator", {
        method: "DELETE", // Assuming you are using DELETE method for removal
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ coordinatorId, clubId }),
      });

      if (!response.ok) {
        throw new Error("Failed to remove coordinator");
      }

      fetchClubCoordinators();
      alert("Coordinator removed successfully!");
    } catch (error) {
      console.error("Error removing coordinator:", error);
      alert("An error occurred while removing the coordinator.");
    }
  };

  const handleCoordinatorDetailCopy = (detail, detailType) => {
    try {
      navigator.clipboard.writeText(detail).then(() => {
        alert(`${detailType} Copied to Clipboard.\n${detailType} : ${detail}`);
      });
    } catch {
      alert(`Error in Copying Coordinator Details.`);
    }
  };

  const handleAddEvent = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    let inputTime = formData.get("time");
    let inputDate = formData.get("date");

    let combinedDateTime = new Date(`${inputDate}T${inputTime}:00.000Z`);

    // Convert the combined date and time to IST
    let istOffset = 5.5 * 60 * 60 * 1000; // IST is UTC +5:30
    let istDate = new Date(combinedDateTime.getTime() + istOffset);

    // Format the IST date if needed
    let formattedISTDate = istDate.toISOString().slice(0, 19).replace("T", " "); // Format as "YYYY-MM-DD HH:MM:SS"

    const eventData = {
      name: formData.get("name"),
      date: formattedISTDate,
      clubName: formData.get("clubName"),
      location: formData.get("venue"),
      description: formData.get("description"),
      eventImageUrl: posterLink,
    };

    // Send event data to your backend API
    try {
      const res = await fetch("/api/createEvent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventData),
      });

      if (res.status === 200) {
        alert("Event added successfully!");
        e.target.reset();
      } else {
        alert("Failed to add event" + JSON.stringify(res));
      }
    } catch (error) {
      alert("An error occurred" + error);
    } finally {
      setLoading(false);
    }
  };

  //Show event rsvps
  const [eventForRsvpId, setEventForRsvp] = useState("");
  const [allEvents, setAllEvents] = useState([]);
  useEffect(() => {
    const fetchAllEvents = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/getEvents");
        const data = await response.json();
        setAllEvents(data.result);
      } catch (error) {
        console.error("Error fetching all events:", error);
      }
    };

    fetchAllEvents();
  }, []);

  const handleTabClick = (tabName) => {
    setCurrentRightSide(tabName); // Change the state based on clicked tab
  };
  const handleEventRsvpCheck = async () => {
    if (!eventForRsvpId) {
      alert("Please select an event");
      return;
    }

    try {
      const response = await fetch(
        "/api/getEventRsvps?eventId=" + eventForRsvpId
      );
      if (response.ok) {
        // Create a Blob from the response
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);

        // Create a link element to trigger download
        const a = document.createElement("a");
        a.href = url;
        a.download = `Event_RSVPs.csv`;
        document.body.appendChild(a);
        a.click();
        a.remove();

        // Clean up the URL object
        window.URL.revokeObjectURL(url);
      } else {
        console.error("Failed to fetch CSV");
      }
    } catch (error) {
      console.error("Error downloading RSVPs:", error);
    }
  };

  // Add Rising Star
  const [formData, setFormData] = useState({
    email: "",
    reasonForListing: "",
  });
  const handleAddRisingStar = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      const response = await fetch("/api/addRisingStar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Rising star added successfully!");
        setFormData({
          email: "",
          reasonForListing: "",
        });
      } else {
        alert("Failed to add rising star.");
      }
    } catch (error) {
      alert("An error occurred. Please try again." + error);
    }
  };

  const handleRemoveRisingStar = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    const formData = new FormData(e.target);

    const email = formData.get("email");

    try {
      const response = await fetch("/api/removeRisingStar?email=" + email, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("Rising star removed successfully!");
      } else {
        alert("Failed to remove rising star.");
      }
    } catch (error) {
      alert("An error occurred. Please try again." + error);
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

  //function to download report
  const downloadReport = async () => {
    const res = await fetch("/api/generateReport");
    const blob = await res.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Student Welfare Committee Report.pdf";
    a.click();
  };

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
    // <div className="adminBig">
    //   <h1>Welcome to the Admin Dashboard!</h1>

    //   <div className="adminAddEvent">
    //     <h3>Add New Event:</h3>
    //     <Form onSubmit={handleAddEvent}>
    //       <Form.Control
    //         placeholder="Event Name"
    //         type="text"
    //         name="name"
    //         required
    //       />
    //       <Form.Control placeholder="Date" type="date" name="date" required />
    //       <Form.Control placeholder="Time" type="time" name="time" required />
    //       <Form.Select name="clubName" required>
    //         <option value="" selected disabled>
    //           Select Club Name
    //         </option>
    //         <option value="general">General</option>
    //         <option value="cybersecurityclub">Cybersecurity Club</option>
    //         <option value="bookclub">Book Club</option>
    //         <option value="civilservicesclub">Civil Services Club</option>
    //         <option value="poetryclub">Poetry Club</option>
    //         <option value="cinematographyclub">Cinematography Club</option>
    //         <option value="artandcraftclub">Art and Craft Club</option>
    //         <option value="journalingclub">Journaling and Politics Club</option>
    //         <option value="documentationclub">Documentation Club</option>
    //       </Form.Select>
    //       <Form.Control
    //         placeholder="Event Description"
    //         type="text"
    //         name="description"
    //         required
    //       />
    //       <CldUploadWidget
    //         signatureEndpoint="/api/sign-image"
    //         onSuccess={(result, { widget }) => {
    //           setPosterLink(result.info.secure_url);
    //           setIsImageUploaded(true);
    //         }}
    //       >
    //         {({ open }) => {
    //           return (
    //             <Button
    //               onClick={() => open()}
    //               variant="info"
    //               disabled={isImageUploaded}
    //             >
    //               {isImageUploaded
    //                 ? "Poster upload successfull."
    //                 : "Upload Poster"}
    //             </Button>
    //           );
    //         }}
    //       </CldUploadWidget>
    //       <Button
    //         variant={loading ? "light" : "dark"}
    //         type="submit"
    //         disabled={loading}
    //       >
    //         {loading ? "Adding..." : "Add Event"}
    //       </Button>
    //     </Form>
    //   </div>

    //   <div className="adminDownloadEventInfo">
    //     <h2>Show Event RSVPs</h2>
    //     <Form.Select
    //       name="clubName"
    //       onChange={(e) => {
    //         setEventForRsvp(e.target.value);
    //       }}
    //       required
    //     >
    //       <option value="" selected disabled>
    //         Select Event
    //       </option>
    //       {allEvents?.map((event) => (
    //         <option key={event._id} value={event._id}>
    //           {event.name}
    //         </option>
    //       ))}
    //     </Form.Select>
    //     <Button variant="primary" onClick={handleEventRsvpCheck}>
    //       Show Event RSVPs
    //     </Button>
    //   </div>
    //   <div className="adminRisingStarAddOrRemove">
    //     <div className="adminAddRisingStar">
    //       <h2>Add a Rising Star</h2>
    //       <Form onSubmit={handleAddRisingStar}>
    //         <Form.Control
    //           placeholder="Email"
    //           type="email"
    //           name="email"
    //           required
    //           onChange={(e) =>
    //             setFormData({ ...formData, email: e.target.value })
    //           }
    //         />
    //         <Form.Control
    //           placeholder="Reason for Listing"
    //           type="text"
    //           name="reasonForListing"
    //           required
    //           onChange={(e) =>
    //             setFormData({ ...formData, reasonForListing: e.target.value })
    //           }
    //         />
    //         <Button variant="primary" type="submit">
    //           Add Rising Star
    //         </Button>
    //       </Form>
    //     </div>
    //     <div className="adminRemoveRisingStar">
    //       <h2>Remove a Rising Star</h2>
    //       <Form onSubmit={handleRemoveRisingStar}>
    //         <Form.Control
    //           placeholder="Email"
    //           type="email"
    //           name="email"
    //           required
    //         />
    //         <Button variant="danger" type="submit">
    //           Remove Rising Star
    //         </Button>
    //       </Form>
    //     </div>
    //   </div>
    // </div>
    <>
      <div className="adminBig">
        <div className="leftPart">
          <div className="titleDiv">
            <h3>
              <strong>SWC Admin Portal</strong>
            </h3>
          </div>
          <div className="tabs">
            <div className="tab" onClick={() => handleTabClick("Dashboard")}>
              <h4>Dashboard</h4>
            </div>
            <div className="tab" onClick={() => handleTabClick("Students")}>
              <h4>Students</h4>
            </div>
            <div className="tab" onClick={() => handleTabClick("Faculties")}>
              <h4>Faculties</h4>
            </div>
            <div className="tab" onClick={() => handleTabClick("Events")}>
              <h4>Events</h4>
            </div>
            <div className="tab" onClick={() => handleTabClick("Planner")}>
              <h4>Planner</h4>
            </div>
            <div className="tab" onClick={() => handleTabClick("Gallery")}>
              <h4>Gallery</h4>
            </div>
            <div className="tab" onClick={() => handleTabClick("Rising Stars")}>
              <h4>Rising Stars</h4>
            </div>
          </div>
        </div>
        <div className="rightPart">
          {currentRightSide === "Dashboard" && (
            <div className="Dashboard rightSideView">
              <div className="topRoundDivs">
                <div className="noOfMeetings">
                  Total Students <i class="fa-brands fa-connectdevelop"></i>
                  {totalStudents}
                </div>
                <div className="noOfMeetings">
                  Total Faculties <i class="fa-brands fa-connectdevelop"></i>
                  {totalFaculties}
                </div>
                <div className="noOfMeetings">
                  Total Upcoming Events
                  <i class="fa-brands fa-connectdevelop"></i> 12
                </div>
                <div className="noOfMeetings">
                  Total Moments Captured
                  <i class="fa-brands fa-connectdevelop"></i> 1230
                </div>
                <div className="noOfMeetings">
                  Total Previous Events
                  <i class="fa-brands fa-connectdevelop"></i> 42
                </div>
              </div>
              <div className="lineTwo">
                <div className="leftPart">
                  <div className="roundDiv genderDoughnutChart">
                    <h4>Total Students by Gender</h4>
                    <YourChartComponentDoughnut />
                  </div>
                </div>
                <div className="rightPart">
                  <div className="roundDiv previousMeetingDetailsDiv">
                    <h4>Previous Events History</h4>
                    <MyBarChart />
                  </div>
                </div>
              </div>
              <div className="lineTwo">
                <div className="rightPart">
                  <div className="roundDiv previousMeetingDetailsDiv">
                    <h4>Top Performing Clubs</h4>
                    <MyBarChart2 />
                  </div>
                </div>
                <div className="leftPart">
                  <div className="roundDiv genderDoughnutChart">
                    <h4>Course-wise Student Ratio</h4>
                    <YourChartComponentDoughnut2 />
                  </div>
                </div>
              </div>{" "}
              <div className="upcomingEvents">
                <div className="titleLine">
                  <h4>Upcoming Events</h4>
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
                    {allEvents
                      .filter((event) => {
                        const eventDate = new Date(event.date);
                        return eventDate > new Date(); // Filter events that will occur in the future
                      })
                      .sort((a, b) => new Date(a.date) - new Date(b.date)) // Sort by date, earliest first
                      .map((event) => {
                        const eventDate = new Date(event.date); // Convert date to Date object
                        const eventTime = eventDate.toLocaleTimeString(
                          "en-GB",
                          {
                            hour: "2-digit",
                            minute: "2-digit",
                          }
                        ); // Extract the time

                        return (
                          <div className="card" key={event._id}>
                            <div className="imageDiv">
                              <img src={event.eventImageUrl} alt={event.name} />
                            </div>
                            <br />
                            <Button variant="primary">
                              RSVP Received : 105
                            </Button>
                            <br />
                            <Button variant="dark">Get Excel</Button>
                            <br />
                            <div className="textBody">
                              <h5>{event.name}</h5>

                              <p>
                                Date:{" "}
                                {eventDate.toLocaleDateString("en-GB", {
                                  day: "2-digit",
                                  month: "long",
                                  year: "numeric",
                                })}
                              </p>
                              <p>{event.clubName} Club Event</p>
                              <h6>Time: {eventTime}</h6>
                              <h6>{event.description.Introduction}</h6>
                            </div>
                          </div>
                        );
                      })}
                    <div className="card" key={event._id}>
                      <div className="imageDiv">
                        <img src={event.eventImageUrl} alt={event.name} />
                      </div>
                      <br />
                      <Button variant="primary">RSVP Received : 105</Button>
                      <br />
                      <Button variant="dark">Get Excel</Button>
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
                      <Button variant="primary">RSVP Received : 105</Button>
                      <br />
                      <Button variant="dark">Get Excel</Button>

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
              </div>
              <div className="previousEvents">
                <br />
                <div className="titleLine">
                  <h4>Previous Events</h4>
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

                    {allEvents
                      .filter((event) => {
                        const eventDate = new Date(event.date);
                        return eventDate < new Date(); // Filter events that have already occurred
                      })
                      .sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort by date, latest first
                      .map((event) => {
                        const eventDate = new Date(event.date); // Convert date to Date object
                        const eventTime = eventDate.toLocaleTimeString(
                          "en-GB",
                          {
                            hour: "2-digit",
                            minute: "2-digit",
                          }
                        ); // Extract the time
                        return (
                          <div className="card" key={event._id}>
                            <div className="imageDiv">
                              <img src={event.eventImageUrl} alt={event.name} />
                            </div>
                            <br />
                            <Button variant="dark">Event Synopsis</Button>
                            <br />
                            <div className="textBody">
                              <h5>{event.name}</h5>
                              <p>
                                <i>{event.clubName} Club Event</i>
                              </p>
                              <p>
                                Date:{" "}
                                {eventDate.toLocaleDateString("en-GB", {
                                  day: "2-digit",
                                  month: "long",
                                  year: "numeric",
                                })}
                              </p>
                              <h6>Time: {eventTime}</h6>
                              <h6>{event.description.Introduction}</h6>
                            </div>
                          </div>
                        );
                      })}
                    <div className="card" key={event._id}>
                      <div className="imageDiv">
                        <img src={event.eventImageUrl} alt={event.name} />
                      </div>
                      <br />
                      <Button variant="dark">Event Synopsis</Button>
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
              </div>
              <div className="clubDetailsTableDiv">
                <div className="roundDiv">
                  <h4>Clubs Details</h4>
                  <br />
                  <Table striped hover>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Club Name</th>
                        <th>No. of Meetings</th>
                        <th>Club Page</th>
                        <th>Coordinator Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      {clubs.map((club, index) => {
                        // Find the coordinator for the current club
                        const coordinator = clubCoordinators.find(
                          (coor) => coor.clubId._id === club._id
                        );

                        return (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{club.name}</td>
                            <td>3333</td>
                            <td>
                              <Link href={`/clubs/${club.name}`}>
                                <Button variant="info">Go to Page</Button>
                              </Link>
                            </td>
                            <td>
                              {coordinator ? (
                                <>
                                  <p style={{ margin: "0" }}>
                                    {coordinator.userId.gender == "Male"
                                      ? "Mr. "
                                      : "Ms. "}
                                    {coordinator.userId.name}
                                  </p>
                                  <div>
                                    <i
                                      onClick={() =>
                                        handleCoordinatorDetailCopy(
                                          coordinator.userId.phoneNumber,
                                          "Phone Number"
                                        )
                                      }
                                      className="fa-solid fa-phone"
                                    ></i>
                                    &nbsp;&nbsp;&nbsp;
                                    <i
                                      onClick={() =>
                                        handleCoordinatorDetailCopy(
                                          coordinator.userId.email,
                                          "Email"
                                        )
                                      }
                                      className="fa-solid fa-envelope"
                                    ></i>
                                  </div>
                                  <div>
                                    <Button
                                      onClick={() =>
                                        handleRemoveCoordinator(
                                          coordinator._id,
                                          club._id
                                        )
                                      }
                                      variant="info"
                                    >
                                      Remove
                                    </Button>
                                  </div>
                                </>
                              ) : (
                                <>
                                  <p>Not Available</p>
                                  <div>
                                    <Button
                                      onClick={() =>
                                        handleCoordinatorAdding(club._id)
                                      }
                                      variant="info"
                                    >
                                      Add
                                    </Button>
                                  </div>
                                </>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                </div>
              </div>
              <div className="siteMapDiv">
                <div className="roundDiv">
                  <img
                    src="https://res.cloudinary.com/ddxv0iwcs/image/upload/v1727014834/Screenshot_2024-09-22_at_7.50.27_PM_ra2yly.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="reportDownloadDiv">
                <div className="roundDiv">
                  <h4>SWC Dynamic Reports : </h4>
                  <div className="btnsDiv">
                    <Button
                      variant="danger"
                      className="btn btn-lg"
                      onClick={downloadReport}
                    >
                      Download SWC Report
                    </Button>
                    <Link href="/report">
                      <Button variant="danger" className="btn btn-lg">
                        View SWC Report
                      </Button>
                    </Link>
                    <Button variant="danger" className="btn btn-lg">
                      Download Clubs Report
                    </Button>
                    <Button variant="danger" className="btn btn-lg">
                      Download Cells Report
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {currentRightSide === "Students" && (
            <div className="Students  rightSideView">Students Content</div>
          )}
          {currentRightSide === "Faculties" && (
            <div className="Faculties rightSideView">Faculties Content</div>
          )}
          {currentRightSide === "Events" && (
            <div className="Events rightSideView">
              <div className="roundDiv ">
                <h1>Add New Event</h1>
                <Form onSubmit={handleAddEvent}>
                  <Form.Control
                    placeholder="Event Name"
                    type="text"
                    name="name"
                    required
                  />
                  <Form.Control
                    placeholder="Date"
                    type="date"
                    name="date"
                    required
                  />
                  <Form.Control
                    placeholder="Time"
                    type="time"
                    name="time"
                    required
                  />
                  <Form.Select name="clubName" required>
                    <option>Select Club Name</option>
                    <option value="General">General</option>
                    <option value="CyberSecurity">CyberSecurity</option>
                    <option value="Book">Book</option>
                    <option value="Poetry">Poetry</option>
                    <option value="Civil Services">Civil Services</option>
                    <option value="Music">Music</option>
                    <option value="Dance">Dance</option>
                    <option value="Art and Craft">Art and Craft</option>
                    <option value="Sports">Sports</option>
                    <option value="Drama">Drama</option>
                    <option value="Debate">Debate</option>
                    <option value="Cinematography">Cinematography</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Yoga">Yoga</option>
                    <option value="Travellers">Travellers</option>
                    <option value="History">History</option>
                    <option value="Economics">Economics</option>
                    <option value="Psychology">Psychology</option>
                    <option value="Philosophy">Philosophy</option>
                    <option value="Content Writing">Content Writing</option>
                    <option value="Vlogging">Vlogging</option>
                    <option value="Legal">Legal</option>
                  </Form.Select>
                  <Form.Control
                    placeholder="Event Description"
                    type="text"
                    name="description"
                    required
                  />
                  <Form.Control
                    type="text"
                    required
                    name="venue"
                    placeholder="Enter Venue"
                  />
                  <CldUploadWidget
                    options={{ sources: ["local"], multiple: false }}
                    signatureEndpoint="/api/sign-image"
                    onSuccess={(result, { widget }) => {
                      setPosterLink(result.info.secure_url);
                      setIsImageUploaded(true);
                    }}
                    onError={(error, { widget }) => {
                      alert(
                        "Failed to upload : File Size is larger than 10MB !"
                      );
                    }}
                    onQueuesEnd={(result, { widget }) => {
                      widget.close();
                    }}
                  >
                    {({ open }) => {
                      return (
                        <Button
                          onClick={() => open()}
                          variant="info"
                          disabled={isImageUploaded}
                        >
                          {isImageUploaded
                            ? "Poster upload successfull."
                            : "Upload Poster (Optional)"}
                        </Button>
                      );
                    }}
                  </CldUploadWidget>
                  <Button
                    variant={loading ? "light" : "dark"}
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? "Adding..." : "Add Event"}
                  </Button>
                </Form>
              </div>
              <div className="roundDiv ">
                <h1>Show Event RSVPs</h1>
                <Form.Select
                  name="clubName"
                  onChange={(e) => {
                    setEventForRsvp(e.target.value);
                  }}
                  required
                >
                  <option value="" selected disabled>
                    Select Event
                  </option>
                  {allEvents?.map((event) => (
                    <option key={event._id} value={event._id}>
                      {event.name}
                    </option>
                  ))}
                </Form.Select>
                <Button variant="primary" onClick={handleEventRsvpCheck}>
                  Show Event RSVPs
                </Button>
              </div>
            </div>
          )}
          {currentRightSide === "Planner" && (
            <div className="Planner rightSideView">Planner Content</div>
          )}
          {currentRightSide === "Gallery" && (
            <div className="Gallery rightSideView">Gallery Content</div>
          )}
          {currentRightSide === "Rising Stars" && (
            <div className="RisingStars rightSideView">
              <div className="roundDiv ">
                <h1>Add A Rising Star</h1>
                <Form onSubmit={handleAddRisingStar}>
                  <Form.Control
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                  <Form.Control
                    placeholder="Reason for Listing"
                    type="text"
                    name="reasonForListing"
                    required
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        reasonForListing: e.target.value,
                      })
                    }
                  />
                  <Button variant="primary" type="submit">
                    Add Rising Star
                  </Button>
                </Form>
              </div>
              <div className="roundDiv">
                <h1>Remove A Rising Star</h1>
                <Form onSubmit={handleRemoveRisingStar}>
                  <Form.Control
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                  <Button variant="danger" type="submit">
                    Remove Rising Star
                  </Button>
                </Form>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Admin;
