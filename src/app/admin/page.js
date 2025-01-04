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
import { useSession } from "next-auth/react";
import { isMobile } from "react-device-detect";

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
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(false);
  let [posterLink, setPosterLink] = useState("");
  const [isImageUploaded, setIsImageUploaded] = useState(false);
  const [clubCoordinators, setClubCoordinators] = useState([]);
  const [clubs, setClubs] = useState([]);
  const [maleStudents, setMaleStudents] = useState(0);
  const [femaleStudents, setFemaleStudents] = useState(0);
  const [otherStudents, setOtherStudents] = useState(0);
  const [totalStudents, setTotalStudents] = useState(0);
  const [totalFaculties, setTotalFaculties] = useState(6);
  const [currentRightSide, setCurrentRightSide] = useState("Dashboard");
  const [allUsersData, setAllUsersData] = useState([]);

  const fetchAllUsersData = async () => {
    try {
      const response = await fetch("/api/getUser/allForAdmin");
      let data = await response.json();
      setAllUsersData(data.result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
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
    allEvents.forEach((event) => {
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

  // const MyBarChart = () => {
  //   const [chartData, setChartData] = useState({
  //     labels: [],
  //     datasets: [],
  //   });
  //   const [loading, setLoading] = useState(true);

  //   // Fetch data from the Python API
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("http://127.0.0.1:5000/kpis");
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch chart data");
  //       }

  //       const data = await response.json();

  //       // Directly set the fetched data as chartData
  //       setChartData(data);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error("Error fetching data from API:", error);
  //       setLoading(false);
  //     }
  //   };

  //   useEffect(() => {
  //     fetchData();
  //   }, []);

  //   useEffect(() => {
  //     console.log("chartData : ", chartData);
  //   }, [chartData]);

  //   if (loading) {
  //     return <p>Loading chart...</p>;
  //   }

  //   // Chart options
  //   const options = {
  //     responsive: true,
  //     scales: {
  //       y: {
  //         title: {
  //           display: true,
  //           text: "Number of Events",
  //         },
  //         beginAtZero: true,
  //       },
  //       x: {
  //         title: {
  //           display: true,
  //           text: "Months",
  //         },
  //       },
  //     },
  //   };
  //   // console.log("chartdata : ", chartData);
  //   // console.log("options : ", options);
  //   return (
  //     <div>
  //       <Bar data={chartData} options={options} />
  //     </div>
  //   );
  // };

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

  const handleCoordinatorAdding = async (clubId) => {
    const email = prompt("Enter the New coordinator's email:");
    if (!email) return; // Exit if no email is provided

    // Check if the email already exists among club coordinators
    const existingEmail = clubCoordinators?.find(
      (coor) => coor.email === email
    );
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

    // // Convert the combined date and time to IST
    // let istOffset = 5.5 * 60 * 60 * 1000; // IST is UTC +5:30
    // let istDate = new Date(combinedDateTime.getTime() + istOffset);

    // // Format the IST date if needed
    // let formattedISTDate = istDate.toISOString().slice(0, 19).replace("T", " "); // Format as "YYYY-MM-DD HH:MM:SS"

    let DescData = {
      Introduction: formData.get("description"),
    };
    const eventData = {
      name: formData.get("name"),
      // date: formattedISTDate,
      date: combinedDateTime,
      clubName: formData.get("clubName"),
      location: formData.get("venue"),
      description: DescData,
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
        fetchAllEvents();
      } else {
        alert("Failed to add event" + JSON.stringify(res));
      }
    } catch (error) {
      alert("An error occurred" + error);
    } finally {
      setLoading(false);
    }
  };
  const fetchAllEvents = async () => {
    try {
      const response = await fetch("/api/getEvents");
      const data = await response.json();
      setAllEvents(data.result);
    } catch (error) {
      console.error("Error fetching all events:", error);
    }
  };
  //Show event rsvps
  const [eventForRsvpId, setEventForRsvp] = useState("");
  const [allEvents, setAllEvents] = useState([]);

  const handleTabClick = (tabName) => {
    setCurrentRightSide(tabName); // Change the state based on clicked tab
  };
  const handleEventRsvpCheck = async (eventId = null) => {
    if (!eventForRsvpId && !eventId) {
      alert("Please select an event");
      return;
    }

    try {
      let response;
      if (eventId) {
        response = await fetch("/api/getEventRsvps?eventId=" + eventId);
      } else {
        response = await fetch("/api/getEventRsvps?eventId=" + eventForRsvpId);
      }

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

  const handleDeleteEvent = async (eventId) => {
    // Show a confirmation dialog
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this event? This action cannot be undone."
    );

    // If the admin confirms deletion, proceed with the delete request
    if (confirmDelete) {
      try {
        // Make the delete request to the API
        const response = await fetch(`/api/deleteEvent/${eventId}`, {
          method: "DELETE",
        });

        if (response.ok) {
          alert("Event deleted successfully.");
          // Optionally, refresh the list of events after deletion
          fetchAllEvents();
        } else {
          const errorData = await response.json();
          console.error("Error deleting event:", errorData.message);
          alert("Failed to delete the event. Please try again.");
        }
      } catch (error) {
        console.error("Error deleting event:", error);
        alert("An error occurred. Please try again.");
      }
    }
  };

  useEffect(() => {
    fetchClubCoordinators();
    fetchClubs();
    fetchStudentGenderRatio();
    fetchAllUsersData();
    fetchAllEvents();
  }, []);
  if (!session?.user?.isAdmin) {
    return (
      <div style={{ textAlign: "center", height: "100vh", paddingTop: "50vh" }}>
        <h1>Access Denied</h1>
      </div>
    );
  }
  if (isMobile) {
    return (
      <div style={{ textAlign: "center", height: "100vh", paddingTop: "50vh" }}>
        <h1>
          Please open Admin <br /> Dashboard on a <br /> desktop device.
        </h1>
      </div>
    );
  }
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
                  <i class="fa-brands fa-connectdevelop"></i>
                  {
                    allEvents.filter((event) => {
                      const eventDate = new Date(event.date);
                      return eventDate > new Date(); // Filter events that will occur in the future
                    }).length
                  }
                </div>
                <div className="noOfMeetings">
                  Total Moments Captured
                  <i class="fa-brands fa-connectdevelop"></i>{" "}
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
                  <i class="fa-brands fa-connectdevelop"></i>{" "}
                  {
                    allEvents.filter((event) => {
                      const eventDate = new Date(event.date);
                      return eventDate < new Date(); // Filter events that occurred in the past
                    }).length
                  }
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
                    <h4>Course-Wise Student Ratio</h4>
                    <YourChartComponentDoughnut2 usersData={allUsersData} />
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
                            <Button
                              variant="danger"
                              onClick={() => handleDeleteEvent(event._id)}
                            >
                              Delete Event
                            </Button>
                            <br />
                            <div className="textBody">
                              <h5>{event.name}</h5>
                              <p>{event.clubName} Club Event</p>
                              <h6>Date : {eventDateTime} </h6>
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
                            <Link
                              href={`/clubs/${event.clubName}/${event._id}/`}
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
                        <th>No. of Events</th>
                        <th>Club Page</th>
                        <th>Coordinator Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      {clubs.map((club, index) => {
                        // Find the coordinator for the current club
                        const coordinator = clubCoordinators?.find(
                          (coor) => coor.clubId._id === club._id
                        );

                        const numberOfEvents = allEvents.filter(
                          (event) => event.clubName === club.name
                        ).length;

                        return (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{club.name}</td>
                            <td>{numberOfEvents}</td>
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
                    src="https://res.cloudinary.com/ddxv0iwcs/image/upload/v1727424802/Screenshot_2024-09-27_at_1.43.09_PM_iv6w2d.png"
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
                    {clubs.map((club, index) => {
                      return (
                        <option key={index} value={club.name}>
                          {club.name}
                        </option>
                      );
                    })}
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
