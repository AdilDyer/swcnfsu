"use client";
import React from "react";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  if (pathname === "/report") {
    return null;
  }
  return (
    <div className="footer" id="footer">
      <h1>Join the SWC Club today ! </h1>
      <br />
      <p>
        Where unforgettable experiences and lifelong friendships awaits.
        Together we can make a difference.
      </p>
      <br />
      <Link href={"/joinus"}>
        <Button variant="danger">Join Us</Button>
      </Link>{" "}
      <div className="bottomBox">
        <Link href={"https://www.nfsu.ac.in/"} target="_blank">
          <div className="imageDiv">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/9/96/National_Forensic_Sciences_University_Logo.png"
              alt=""
            />
          </div>
        </Link>
        <div className="allLinksContainer">
          <div className="linksDiv">
            <span>SWC</span>
            <Link href="https://www.nfsu.ac.in/" target="_blank">
              NFSU Main Page
            </Link>
            <Link href="#aboutRedirectsHere">About</Link>
            <Link href="#">NSS</Link>
            <Link href="/ourteam">Our Team</Link>
            <Link href="#">Privacy</Link>
            <Link href="/grievance">Forum</Link>
            <Link href="/grievance">Feedback</Link>
            <Link href="/grievance">Gallery</Link>
          </div>

          <div className="linksDiv">
            <span>Conveners</span>
            <Link href="#">Faculty Coordinators</Link>
            <Link href="#">Student Representatives</Link>
            <Link href="#">Club Coordinators</Link>
          </div>

          <div className="linksDiv">
            <span>Socials</span>
            <Link href="#">Instagram</Link>
            <Link href="#">Facebook</Link>
            <Link href="#">Linkedin</Link>
            <Link href="#">Twitter</Link>
            <Link href="#">Gmail</Link>
          </div>

          <div className="linksDiv">
            <span>Resources</span>
            <Link href="#">Calendar of Events</Link>
            <Link href="#">Help Center</Link>
            <Link href="#">Community</Link>
            <Link href="#">Study Groups</Link>
            <Link href="#">Video Guide</Link>
            <Link href="#">Blog</Link>
            {/* <Link href="/grievance">Download Certificate</Link> */}
            <Link href="/contact">Contact Us</Link>
          </div>
        </div>
      </div>
      <span>
        Designed and Developed with <span className="heart">&hearts;</span> by
        <Link
          className="heart adildyer"
          href="https://www.linkedin.com/in/adildyer/"
        >
          &nbsp; Adil Dyer <i class="fa-solid fa-diamond-turn-right"></i>
        </Link>
        &nbsp; [Btech CSE]
      </span>
      <br />
      <span>&copy; 2025, SWC NFSU. ALL RIGHTS RESERVED.</span>
    </div>
  );
};

export default Footer;
