"use client";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
const Account = () => {
  const { data: session } = useSession();
  const [isUserRegistered, setIsUserRegistered] = useState(null);

  useEffect(() => {
    const fetchUserRegistrationStatus = async () => {
      if (session?.user?.email) {
        try {
          const response = await fetch(
            `http://localhost:3000/api/getUser?email=${session.user.email}`
          );
          const data = await response.json();
          if (data.status === 200) {
            setIsUserRegistered(true);
          } else {
            setIsUserRegistered(false);
          }
        } catch (error) {
          console.error("Error fetching user registration status:", error);
        }
      }
    };

    fetchUserRegistrationStatus();
  });

  if (!session) {
    // return <p>Loading...</p>;
    return;
  }

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

  return (
    <div className="accountBig">
      {session ? (
        <>
          {isUserRegistered ? (
            <div className="registeredDiv">
              {<h1>Your are registered !</h1>}
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
