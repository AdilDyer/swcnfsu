"use client";
import React, { useEffect, useRef, useState } from "react";
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
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { CldUploadWidget } from "next-cloudinary";

ChartJS.register(ArcElement, Tooltip, Legend);

function YourChartComponentDoughnut() {
  let data = [
    {
      label: "Girls",
      value: 55,
      color: "rgba(0, 43, 73, 1)",
      cutout: "50%",
    },
    {
      label: "Boys",
      value: 80,
      color: "rgba(83, 217, 217, 1)",
      cutout: "50%",
    },
    {
      label: "Others",
      value: 10,
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

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

const ClubCoordinatorDashboard = () => {
  const { data: session, status } = useSession();
  const [clubName, setClubName] = useState("");
  const [monthlyTarget, setMonthlyTarget] = useState("");
  const [whatsappLink, setWhatsappLink] = useState("");
  const [instaLink, setInstaLink] = useState("");
  const [clubDetails, setClubDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [updateEventLoading, setUpdateEventLoading] = useState(false);
  const [allEvents, setAllEvents] = useState([]);
  const [selectedEventId, setSelectedEventId] = useState("");
  const [posterLink, setPosterLink] = useState("");
  const [otherEventImages, setOtherEventImages] = useState([]);
  const [eventPosterUploaded, setEventPosterUploaded] = useState(false);
  const [otherEventImagesUploaded, setOtherEventImagesUploaded] =
    useState(false);

  useEffect(() => {
    if (session) {
      setClubName(session?.user?.clubName);
    }
    const fetchAllEvents = async () => {
      try {
        const response = await fetch("/api/getEvents");
        const data = await response.json();
        setAllEvents(data.result);
      } catch (error) {
        console.error("Error fetching all events:", error);
      }
    };

    fetchAllEvents();
    const fetchClubDetails = async () => {
      try {
        const response = await fetch(`/api/getClubs/${clubName}`);
        const data = await response.json();
        setClubDetails(data.result);
        setMonthlyTarget(data.result.thisMonthTarget);
        setWhatsappLink(data.result.whatsappUrl);
        setInstaLink(data.result.instaUrl);
      } catch (error) {
        console.error("Error fetching club details:", error);
      }
    };

    fetchClubDetails();
  }, [session, monthlyTarget, whatsappLink, instaLink, clubName]);

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

  if (
    (!session && status !== "loading") ||
    !session?.user?.isClubCoordinator ||
    !session?.user?.clubName
  ) {
    return null;
  }

  const handleBasicDetailsUpdate = async (dataType) => {
    try {
      const update = prompt("Enter the new value:");
      const response = await fetch("/api/updateBasicClubDetails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clubName: clubName,
          dataType: dataType,
          data: update,
          imageUrl: session?.user?.image,
        }),
      });
      const data = await response.json();
      // Update the state
      if (dataType == "thisMonthTarget") {
        setMonthlyTarget(update);
        alert(data.message);
      } else if (dataType == "whatsappUrl") {
        setWhatsappLink(update);
        alert(data.message);
      } else if (dataType == "instaUrl") {
        setInstaLink(update);
        alert(data.message);
      }
    } catch (error) {
      console.error("Error updating basic club details:", error);
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
      clubName: clubName,
      location: formData.get("venue"),
      description: formData.get("description"),
      eventImageUrl: "",
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

  const updateEventDetails = async (e) => {
    e.preventDefault();
    if (!posterLink || !otherEventImages) {
      alert("Please upload the event poster and other images");
      return;
    }

    setUpdateEventLoading(true);

    const formData = new FormData(e.target);

    const eventDetails = {
      eventId: selectedEventId,
      Introduction: formData.get("Introduction"),
      Agendas: formData.get("Agendas"),
      DetailedPoints: formData.get("Detailed Points"),
      InsightsShared: formData.get("Insights Shared"),
      GroupFindings: formData.get("Group Findings"),
      KeyTakeaways: formData.get("Key Takeaways"),
      FinalThoughts: formData.get("Final Thoughts"),
      posterLink: posterLink,
      otherEventImages: otherEventImages,
    };

    try {
      const res = await fetch("/api/updateEventDetails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventDetails),
      });

      if (res.status === 200) {
        alert("Event details updated successfully!");
        e.target.reset();
      } else {
        alert("Failed to update event details" + JSON.stringify(res));
      }
    } catch (error) {
      alert("An error occurred" + error);
    } finally {
      setUpdateEventLoading(false);
    }
  };

  return (
    <div className="clubCoordinatorDash">
      <div className="titleDiv">
        <h3>
          <strong>
            {clubName} Club&apos;s
            <br /> Coordinator Dashboard
          </strong>
        </h3>
      </div>
      <div className="topRoundDivs">
        <div
          className="noOfMeetings"
          style={{ backgroundColor: "midnightBlue" }}
        >
          Take Attendance
        </div>
        <div className="noOfMeetings">
          Total Upcoming Events <i class="fa-brands fa-connectdevelop"></i> 59
        </div>
        <div className="noOfMeetings">
          Total Moments Captured
          <i class="fa-brands fa-connectdevelop"></i> 12
        </div>
        <div className="noOfMeetings">
          Total Previous Events
          <i class="fa-brands fa-connectdevelop"></i> 1230
        </div>
        <Link href={`/clubs/${clubName}`} style={{ textDecoration: "none" }}>
          <div className="noOfMeetings">
            Visit Club Page
            <i class="fa-brands fa-connectdevelop"></i>
          </div>
        </Link>
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
      <div className="previousEvents">
        <br />
        <div className="titleLine">
          <h4>Upcoming Events</h4>
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
                return eventDate > new Date(); // Filter events that will occur in the future
              })
              .filter((event) => {
                const eventClubName = event.clubName;
                return eventClubName == clubName;
              })
              .sort((a, b) => new Date(a.date) - new Date(b.date)) // Sort by date, earliest first
              .map((event) => {
                const eventDate = new Date(event.date); // Convert date to Date object
                const eventTime = eventDate.toLocaleTimeString("en-GB", {
                  hour: "2-digit",
                  minute: "2-digit",
                }); // Extract the time

                return (
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
      <div className="upcomingEvents">
        <div className="titleLine">
          <br />
          <h4>Previous Events</h4>
        </div>
        <div className="upcomingEventsCards">
          <div className="cardsAnnoun" ref={containerRef}>
            <div className="scrollBtnDiv scrollBtnDivLeft" onClick={scrollLeft}>
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
              .filter((event) => {
                const eventClubName = event.clubName;
                return eventClubName == clubName;
              })
              .sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort by date, latest first
              .map((event) => {
                const eventDate = new Date(event.date); // Convert date to Date object
                const eventTime = eventDate.toLocaleTimeString("en-GB", {
                  hour: "2-digit",
                  minute: "2-digit",
                }); // Extract the time
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
      <div className="basicClubDetails">
        <h1>Basic Club Details</h1>
        <br />
        <h5>Monthly Target</h5>
        <div className="basicField">
          <Form.Control size="lg" type="text" disabled value={monthlyTarget} />
          <Button
            variant="info"
            onClick={() => handleBasicDetailsUpdate("thisMonthTarget")}
          >
            Update
          </Button>
        </div>
        <br />
        <h5>Insta Page Link</h5>
        <div className="basicField">
          <Form.Control size="lg" type="text" disabled value={instaLink} />
          <Button
            variant="info"
            onClick={() => handleBasicDetailsUpdate("instaUrl")}
          >
            Update
          </Button>
        </div>
        <br />
        <h5>Whatsapp Group Link</h5>
        <div className="basicField">
          <Form.Control size="lg" type="text" disabled value={whatsappLink} />
          <Button
            variant="info"
            onClick={() => handleBasicDetailsUpdate("whatsappUrl")}
          >
            Update
          </Button>
        </div>
      </div>
      <div className="nextMeetingDetails">
        <h1>Upload Next Meeting Details</h1>
        <br />
        <Form onSubmit={handleAddEvent}>
          <div className="meetingDetails">
            <h5>Meeting Name</h5>
            <Form.Control
              size="lg"
              type="text"
              name="name"
              placeholder="Enter Meeting Name"
            />
          </div>
          <br />
          <div className="meetingDetails">
            <h5>Meeting Date</h5>
            <Form.Control
              size="lg"
              name="date"
              type="date"
              placeholder="Enter Date"
            />
          </div>
          <br />
          <div className="meetingDetails">
            <h5>Meeting Time</h5>
            <Form.Control
              size="lg"
              type="time"
              placeholder="Enter Time"
              name="time"
            />
          </div>
          <br />
          <div className="meetingDetails">
            <h5>Meeting Venue</h5>
            <Form.Control
              size="lg"
              type="text"
              name="venue"
              placeholder="Enter Meeting Venue"
            />
          </div>
          <br />
          <div className="meetingDetails">
            <h5>Meeting Description</h5>
            <Form.Control
              as={"textarea"}
              rows={3}
              type="text"
              size="lg"
              name="description"
              placeholder="Enter Meeting Description"
            />
          </div>
          <br />
          <Button
            variant={loading ? "light" : "dark"}
            type="submit"
            disabled={loading}
            className="btn btn-lg"
          >
            {loading ? "Adding..." : "Add Event"}
          </Button>
        </Form>
      </div>
      <div
        className="uploadPreviousMeetingDetails nextMeetingDetails"
        style={{ backgroundColor: "#b88ea6" }}
      >
        <h1>Upload Previous Meeting Details</h1>
        <br />
        <div className="meetingDetails">
          <h5>Event Name</h5>
          <Form.Select
            size="lg"
            name="eventId"
            onChange={(e) => setSelectedEventId(e.target.value)}
          >
            <option>Select Previous Event</option>
            {allEvents
              .filter((event) => {
                const eventDate = new Date(event.date);
                return eventDate < new Date(); // Filter events that have already occurred
              })
              .filter((event) => {
                const eventClubName = event.clubName;
                return eventClubName == clubName;
              })
              .sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort by date, latest first
              .map((event) => {
                return <option value={event._id}>{event.name}</option>;
              })}
          </Form.Select>
        </div>
        <br />
        {selectedEventId && (
          <div className="addEventDetailsDiv">
            {allEvents
              .filter((event) => event._id === selectedEventId) // Correct comparison
              .map((event) => {
                return (
                  <div key={event._id}>
                    <Form onSubmit={(e) => updateEventDetails(e)}>
                      1. Introduction <br />
                      <br />
                      <Form.Control
                        as={"textarea"}
                        rows={10}
                        type="text"
                        name="Introduction"
                        required
                      />{" "}
                      <br />
                      2. Agendas <br />
                      <br />
                      <Form.Control
                        as={"textarea"}
                        rows={10}
                        required
                        type="text"
                        name="Agendas"
                      />{" "}
                      <br />
                      3. Detailed Points <br />
                      <br />
                      <Form.Control
                        as={"textarea"}
                        rows={10}
                        required
                        type="text"
                        name="Detailed Points"
                      />{" "}
                      <br />
                      4. Insights Shared <br />
                      <br />
                      <Form.Control
                        as={"textarea"}
                        required
                        rows={10}
                        type="text"
                        name="Insights Shared"
                      />{" "}
                      <br />
                      5. Group Findings <br />
                      <br />
                      <Form.Control
                        as={"textarea"}
                        rows={10}
                        required
                        type="text"
                        name="Group Findings"
                      />{" "}
                      <br />
                      5. Key Takeaways <br />
                      <br />
                      <Form.Control
                        as={"textarea"}
                        rows={10}
                        required
                        type="text"
                        name="Key Takeaways"
                      />
                      <br />
                      6. Final Thoughts and Conclusion
                      <br />
                      <br />
                      <Form.Control
                        as={"textarea"}
                        rows={10}
                        required
                        type="text"
                        name="Final Thoughts"
                      />
                      <br />
                      <br />
                      <h5>Upload Main Image</h5>
                      <CldUploadWidget
                        options={{ sources: ["local"], multiple: false }}
                        signatureEndpoint="/api/sign-image"
                        onSuccess={(result, { widget }) => {
                          setPosterLink(result.info.secure_url);
                          setEventPosterUploaded(true);
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
                            <Button onClick={() => open()} variant="info">
                              {eventPosterUploaded
                                ? "Uploaded"
                                : "Upload Main Image"}
                            </Button>
                          );
                        }}
                      </CldUploadWidget>
                      <br />
                      <br />
                      <h5>Upload Other Captured Moments</h5>
                      <CldUploadWidget
                        options={{ sources: ["local"], multiple: true }}
                        signatureEndpoint="/api/sign-image"
                        onSuccess={(result, { widget }) => {
                          setOtherEventImages((prevImages) => [
                            ...prevImages,
                            result.info.secure_url,
                          ]);
                          setOtherEventImagesUploaded(true);
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
                            <Button onClick={() => open()} variant="info">
                              {otherEventImagesUploaded
                                ? "Uploaded"
                                : "Upload Other Captured Moments 💝"}
                            </Button>
                          );
                        }}
                      </CldUploadWidget>
                      <br /> <br />
                      <Button
                        variant={updateEventLoading ? "light" : "dark"}
                        type="submit"
                        disabled={updateEventLoading}
                        className="btn btn-lg"
                      >
                        {updateEventLoading ? "Updating..." : "Update Event"}
                      </Button>
                    </Form>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ClubCoordinatorDashboard;
