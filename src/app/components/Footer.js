import React from "react";
import Button from "react-bootstrap/Button";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="footer">
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
        <div className="imageDiv">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/9/96/National_Forensic_Sciences_University_Logo.png"
            alt=""
          />
        </div>
        <div className="allLinksContainer">
          <div className="linksDiv">
            <span>SWC</span>
            <Link href="#">About</Link>
            <Link href="/ourteam">Our Team</Link>
            <Link href="#">Privacy</Link>
            <Link href="/grievance">GRP</Link>
            <Link href="/grievance">Forum</Link>
            <Link href="/grievance">Feedback</Link>
          </div>
          <div className="linksDiv">
            <span>Divisions</span>
            <Link href="#">Mentorship</Link>
            <Link href="#">Operational</Link>
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
      <span>&copy; 2024, SWC NFSU. ALL RIGHTS RESERVED.</span>
    </div>
  );
};

export default Footer;
