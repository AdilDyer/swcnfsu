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
  const [searchQuery, setSearchQuery] = useState("");
  const [currentEvent, setCurrentEvent] = useState("");
  const [loadingForAttendace, setLoadingForAttendace] = useState(false);
  const [maleStudents, setMaleStudents] = useState(0);
  const [femaleStudents, setFemaleStudents] = useState(0);
  const [otherStudents, setOtherStudents] = useState(0);
  const [allUsersData, setAllUsersData] = useState([]);
  const [checkAll, setCheckAll] = useState(false);

  const fetchStudentGenderRatio = async () => {
    try {
      const response = await fetch("/api/getUser/gender");
      let data = await response.json();
      setMaleStudents(data?.genderCount[0]?.count);
      setFemaleStudents(data?.genderCount[1]?.count);
      setOtherStudents(data?.genderCount[2]?.count);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const getCurrentEvent = (events, clubName) => {
    // Get current IST time
    const currentIST = new Date(
      new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
    );

    // Filter events for the specific club
    const clubEvents = events.filter((event) => event.clubName === clubName);

    // Find the current event
    const currentEvent = clubEvents.find((event) => {
      const eventTime = new Date(event.date); // eventTime is in ist
      const twoHoursBefore = new Date(eventTime.getTime() - 2 * 60 * 60 * 1000);
      const fiveHoursAfter = new Date(eventTime.getTime() + 5 * 60 * 60 * 1000);

      return currentIST >= twoHoursBefore && currentIST <= fiveHoursAfter;
    });

    return currentEvent || null;
  };

  const fetchAllUsersData = async () => {
    try {
      const response = await fetch("/api/getUser/allForAdmin");
      let data = await response.json();
      setAllUsersData(data.result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchStudentGenderRatio();
    fetchAllUsersData();
  }, []);
  useEffect(() => {
    if (session) {
      setClubName(session?.user?.clubName);
    }
    const fetchAllEvents = async () => {
      try {
        const response = await fetch("/api/getEvents");
        const data = await response.json();
        setAllEvents(data.result);
        setCurrentEvent(getCurrentEvent(data.result, clubName));
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

  function YourChartComponentDoughnut2({ usersData }) {
    const getRandomColor = () => {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    };
    // Function to process users data and get course-wise counts
    const getCourseData = (users) => {
      const courseCounts = {};

      users.forEach((user) => {
        if (user.course) {
          const course = user.course;
          if (courseCounts[course]) {
            courseCounts[course] += 1;
          } else {
            courseCounts[course] = 1; // Initialize count
          }
        }
      });

      return courseCounts;
    };

    const courseCounts = getCourseData(usersData);
    const data = Object.keys(courseCounts).map((course) => ({
      label: course,
      value: courseCounts[course],
      color: getRandomColor(), // Function to get random color for each course
      cutout: "50%",
    }));

    const options = {
      plugins: {
        responsive: true,
        legend: {
          display: false, // Disable the legend to hide labels
        },
      },
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

  const MyBarChart = ({ allEvents }) => {
    // Initialize count array for each month (0 for January to 11 for December)
    const monthlyEventCount = Array(12).fill(0);

    // Process allEvents to count events per month
    allEvents
      .filter((event) => {
        return event.clubName == clubName;
      })
      .forEach((event) => {
        const eventDate = new Date(event.date);
        const month = eventDate.getMonth(); // Get month (0-11)

        if (eventDate < new Date()) {
          // Only consider past events
          monthlyEventCount[month] += 1; // Increment the count for that month
        }
      });
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
          data: monthlyEventCount,
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
          max: Math.max(...monthlyEventCount) + 5, // Dynamic max
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

  const MyBarChart2 = ({ allEvents }) => {
    // Initialize an object to count events for each club
    const clubEventCount = {};

    // Process allEvents to count events per club
    allEvents.forEach((event) => {
      const clubName = event.clubName;

      // Increment the count for that club
      if (clubEventCount[clubName]) {
        clubEventCount[clubName] += 1;
      } else {
        clubEventCount[clubName] = 1; // Initialize if the club is not already in the object
      }
    });
    // Extract labels and datasets from the clubEventCount object
    const labels = Object.keys(clubEventCount);
    const datasets = Object.values(clubEventCount);
    // const datasets = [89, 67, 67, 55, 45, 43, 43, 34, 12];
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
          max: Math.max(...datasets) + 5, // Dynamic max based on data
        },
        x: {
          title: {
            display: true,
            text: "Clubs",
          },
          display: true,
        },
      },
    };
    return <Bar data={data} options={options} />;
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

    let DescData = {
      Introduction: formData.get("description"),
    };
    const eventData = {
      name: formData.get("name"),
      date: formattedISTDate,
      clubName: clubName,
      location: formData.get("venue"),
      description: DescData,
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

  // Handle RSVP check/uncheck

  const handleAttendanceToggle = async (eventId, studentId, isChecked) => {
    try {
      setLoadingForAttendace(true);
      const method = isChecked ? "POST" : "DELETE";
      const response = await fetch(`/api/updateAttendees`, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ studentId, eventId }),
      });
      const data = await response.json();
      if (data.status === 200) {
        // Update the current event's attendees
        const updatedEvent = { ...currentEvent };
        if (isChecked) {
          updatedEvent.attendees.push(studentId);
        } else {
          updatedEvent.attendees = updatedEvent.attendees.filter(
            (id) => id != studentId
          );
        }
        setCurrentEvent(updatedEvent);
      }
      setLoadingForAttendace(false);
    } catch (error) {
      console.error("Error updating attendees:", error);
    }
  };

  // Handle search query input
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter RSVPs based on the search query
  const filterRSVPs = (rsvps) => {
    const search = searchQuery.toLowerCase();
    return rsvps.filter((student) => {
      return (
        student?.name.toLowerCase().includes(search) ||
        student?.enrollNo.toString().includes(search) || // Convert number to string
        student?.email.toLowerCase().includes(search)
      );
    });
  };

  const handleEventRsvpCheck = async (eventId = null) => {
    try {
      let response = await fetch("/api/getEventRsvps?eventId=" + eventId);

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
  const handleCheckAll = () => {
    // Toggle checkAll state
    const newCheckAllState = !checkAll;
    setCheckAll(newCheckAllState);

    // Optionally, handle attendance toggle for all students
    currentEvent.rsvps.forEach((student) => {
      handleAttendanceToggle(currentEvent._id, student._id, newCheckAllState);
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
        <div className="noOfMeetings">
          Total Upcoming Events <i class="fa-brands fa-connectdevelop"></i>
          {
            allEvents
              .filter((event) => {
                return event.clubName == clubName;
              })
              .filter((event) => {
                const eventDate = new Date(event.date);
                return eventDate > new Date(); // Filter events that will occur in the future
              }).length
          }
        </div>
        <div className="noOfMeetings">
          Total Moments Captured by SWC
          <i class="fa-brands fa-connectdevelop"></i>
          {allEvents.reduce((total, event) => {
            const galleryImagesCount = event.eventGalleryImages
              ? event.eventGalleryImages.length
              : 0;
            const posterImageCount = event.eventImageUrl ? 1 : 0;
            return total + galleryImagesCount + posterImageCount;
          }, 0)}
        </div>
        <div className="noOfMeetings">
          Total Previous Events
          <i class="fa-brands fa-connectdevelop"></i>
          {
            allEvents
              .filter((event) => {
                return event.clubName == clubName;
              })
              .filter((event) => {
                const eventDate = new Date(event.date);
                return eventDate < new Date(); // Filter events that occurred in the past
              }).length
          }
        </div>
        <Link href={`/clubs/${clubName}`} style={{ textDecoration: "none" }}>
          <div className="noOfMeetings">
            Visit Club Page
            <i class="fa-brands fa-connectdevelop"></i>
          </div>
        </Link>
      </div>
      {currentEvent && (
        <div className="markAttendanceList">
          <h2>Attendance for {currentEvent.name}</h2>
          <div className="searchBox">
            <Form.Control
              size="lg"
              type="text"
              placeholder="Search for Student... (Name, Enroll, Email)"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
          <div className="attendanceList">
            <Button onClick={handleCheckAll} variant="dark">
              {checkAll
                ? "Uncheck All Students"
                : `Check All Students ${String.fromCharCode(10003)}`}
            </Button>
            <br /> <br />
            {currentEvent?.rsvps?.length > 0 ? (
              filterRSVPs(currentEvent.rsvps).map((student, index) => (
                <Form.Check
                  key={index}
                  type="checkbox"
                  label={
                    loadingForAttendace
                      ? "Updating Attendance..."
                      : `${student.name} :: ${student.enrollNo} :: ${student.email}`
                  }
                  checked={currentEvent.attendees.includes(student._id)}
                  onChange={(e) =>
                    handleAttendanceToggle(
                      currentEvent._id,
                      student._id,
                      e.target.checked
                    )
                  }
                />
              ))
            ) : (
              <p>No Results found</p>
            )}
          </div>
        </div>
      )}
      <div className="lineTwo">
        <div className="leftPart">
          <div className="roundDiv genderDoughnutChart">
            <h4>Total Students by Gender</h4>
            <YourChartComponentDoughnut />
          </div>
        </div>
        <div className="rightPart">
          <div className="roundDiv previousMeetingDetailsDiv">
            <h4>Previous Events History of {clubName} Club</h4>
            <MyBarChart allEvents={allEvents} />
          </div>
        </div>
      </div>
      <div className="lineTwo">
        <div className="rightPart">
          <div className="roundDiv previousMeetingDetailsDiv">
            <h4>Top Performing Clubs</h4>
            <MyBarChart2 allEvents={allEvents} />
          </div>
        </div>
        <div className="leftPart">
          <div className="roundDiv genderDoughnutChart">
            <h4>Course-wise Student Ratio</h4>
            <YourChartComponentDoughnut2 usersData={allUsersData} />
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
                const istDate = new Date(event.date);

                const eventDateTime = istDate.toLocaleString("en-GB", {
                  weekday: "short",
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                  timeZone: "Asia/Kolkata",
                });
                return (
                  <div className="card" key={event._id}>
                    <div className="imageDiv">
                      <img src={event.eventImageUrl} alt={event.name} />
                    </div>
                    <br />
                    <Button variant="primary">
                      RSVP Received : {event.rsvps.length}
                    </Button>
                    <br />
                    <Button
                      onClick={() => {
                        handleEventRsvpCheck(event._id);
                      }}
                      variant="dark"
                    >
                      Get Excel
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
                const istDate = new Date(event.date);

                const eventDateTime = istDate.toLocaleString("en-GB", {
                  weekday: "short",
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                  timeZone: "Asia/Kolkata",
                });
                return (
                  <div className="card" key={event._id}>
                    <div className="imageDiv">
                      <img src={event.eventImageUrl} alt={event.name} />
                    </div>
                    <br />
                    <Link href={`/clubs/${event.clubName}/${event._id}/`}>
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
