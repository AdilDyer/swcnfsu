"use client";
import React from "react";
import Link from "next/link";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Navbar = () => {
  const { data: session } = useSession();

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      // if scroll down hide the navbar
      setShow(false);
    } else {
      // if scroll up show the navbar
      setShow(true);
    }

    // remember current page location to use in the next move
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    // cleanup function
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  return (
    <>
      <div className={`nav active ${show && "hidden"}`}>
        <div className="leftPart">
          <Link href="/">Home</Link>
          <Link href="#about">About</Link>
          <Link href="/contact">Contact</Link>
          <DropdownButton
            variant="light"
            id="dropdown-basic-button"
            title="Quick Links"
          >
            <Dropdown.Item href="#/action-1">Calendar of Events</Dropdown.Item>
            <Dropdown.Item href="#studygroups">Study Groups</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Grievance</Dropdown.Item>
            <Dropdown.Item href="#/action-1">Qbon</Dropdown.Item>
            <Dropdown.Item href="#/actison-1">Counselling</Dropdown.Item>
            <Dropdown.Item href="#/action-1">Contact Team</Dropdown.Item>
            <Dropdown.Item href="#/action-1">Socials</Dropdown.Item>
            <Dropdown.Item href="/ourteam">Our Team</Dropdown.Item>
            <Dropdown.Item href="/ourteam">Download Certificate</Dropdown.Item>
          </DropdownButton>

          <div className="profileImgDiv">
            {session ? (
              <>
                <Dropdown>
                  <Dropdown.Toggle variant="light" id="dropdown-basic">
                    <img src={session.user?.image} alt="" />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item
                      href="#/action-1"
                      onClick={() => signOut({ callbackUrl: "/" })}
                    >
                      Logout
                    </Dropdown.Item>
                    <Dropdown.Item href="/account">Account</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                {session.user?.email == process.env.NEXT_PUBLIC_ADMIN_EMAIL && (
                  <Link href="/admin">
                    <img
                      src="https://res.cloudinary.com/ddxv0iwcs/image/upload/v1712834949/admin_rsgkmd"
                      alt="Admin Dashboard"
                    />
                  </Link>
                )}
              </>
            ) : (
              <>
                <Button variant="light" onClick={handleShowModal}>
                  Login
                </Button>
              </>
            )}
          </div>
        </div>
        <div className="rightPart">
          <img src="https://guwahati.nfsu.ac.in/img/logo.png" alt="" />
          <div>
            <h6>National Forensic Sciences University</h6>
            <h6>Student Welfare Committee</h6>
          </div>
        </div>
      </div>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            <strong>Login to SWC NFSU Portal :</strong>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Button
            onClick={() => signIn("google")}
            variant="dark"
            style={{ width: "100%" }}
            className="loginUsingGoogleBtn"
          >
            <img
              style={{ width: "2rem", margin: "0.5rem", borderRadius: " 50%" }}
              src="https://res.cloudinary.com/ddxv0iwcs/image/upload/v1726907630/png-transparent-google-logo-google-logo-g-suite-chrome-text-logo-chrome_ljkuhp.png"
              alt=""
            />
            {/* <i class="fa-brands fa-google"></i> &nbsp;&nbsp; */}
            Login using Google
          </Button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Navbar;
