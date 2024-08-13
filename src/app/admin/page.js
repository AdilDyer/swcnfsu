"use client";
import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { CldUploadWidget } from "next-cloudinary";

const Admin = () => {
  // Add event

  const [loading, setLoading] = useState(false);
  let [posterLink, setPosterLink] = useState("");
  const [isImageUploaded, setIsImageUploaded] = useState(false);
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

    if (posterLink == "") {
      let clubName = formData.get("clubName");
      switch (clubName) {
        case "general":
          posterLink =
            "https://img.freepik.com/free-vector/happy-diverse-students-celebrating-graduation-from-school_74855-5853.jpg";
          break;
        case "cybersecurityclub":
          posterLink =
            "https://www.rowse.co.uk/static/images/blog/posts/open-graph/why-is-cybersecurity-important-open-graph.jpg";
          break;
        case "bookclub":
          posterLink =
            "https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_640.jpg";
          break;
        case "civilservicesclub":
          posterLink =
            "https://images.indianexpress.com/2024/04/National-Civil-Services-Day-2024-Atal-Bihari-Vajpayee-4.jpg";
          break;
        case "poetryclub":
          posterLink =
            "https://images.news18.com/ibnlive/uploads/2021/03/1616316963_world-poetry-day-5-poets-shutterstock.jpg ";
          break;
        case "cinematographyclub":
          posterLink =
            "https://res.cloudinary.com/ddxv0iwcs/image/upload/v1719142213/WhatsApp_Image_2024-06-23_at_16.59.53_ke6hqq.jpg";
          break;
        case "artandcraftclub":
          posterLink =
            "https://cdn.shopify.com/s/files/1/0036/8757/9760/files/82.jpg?v=1604230225";
          break;
        case "journalingclub":
          posterLink =
            "https://facts.net/wp-content/uploads/2023/09/8-astonishing-facts-about-journalist-1695689126.jpg";
          break;
        case "documentationclub":
          posterLink =
            "https://document360.com/wp-content/uploads/2022/08/internal_documentation_guide.jpg";
      }
    }

    const eventData = {
      name: formData.get("name"),
      date: formattedISTDate,
      clubName: formData.get("clubName"),
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

  return (
    <div className="adminBig">
      <h1>Welcome to the Admin Dashboard!</h1>

      <div className="adminAddEvent">
        <h3>Add New Event:</h3>
        <Form onSubmit={handleAddEvent}>
          <Form.Control
            placeholder="Event Name"
            type="text"
            name="name"
            required
          />
          <Form.Control placeholder="Date" type="date" name="date" required />
          <Form.Control placeholder="Time" type="time" name="time" required />
          <Form.Select name="clubName" required>
            <option value="" selected disabled>
              Select Club Name
            </option>
            <option value="general">General</option>
            <option value="cybersecurityclub">Cybersecurity Club</option>
            <option value="bookclub">Book Club</option>
            <option value="civilservicesclub">Civil Services Club</option>
            <option value="poetryclub">Poetry Club</option>
            <option value="cinematographyclub">Cinematography Club</option>
            <option value="artandcraftclub">Art and Craft Club</option>
            <option value="journalingclub">Journaling and Politics Club</option>
            <option value="documentationclub">Documentation Club</option>
          </Form.Select>
          <Form.Control
            placeholder="Event Description"
            type="text"
            name="description"
            required
          />
          <CldUploadWidget
            signatureEndpoint="/api/sign-image"
            onSuccess={(result, { widget }) => {
              setPosterLink(result.info.secure_url);
              setIsImageUploaded(true);
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
                    : "Upload Poster"}
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

      <div className="adminDownloadEventInfo">
        <h2>Show Event RSVPs</h2>
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
          {allEvents.map((event) => (
            <option value={event._id}>{event.name}</option>
          ))}
        </Form.Select>
        <Button variant="primary" onClick={handleEventRsvpCheck}>
          Show Event RSVPs
        </Button>
      </div>
    </div>
  );
};

export default Admin;
