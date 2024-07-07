import React from "react";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import FadeInSection from "@/app/components/FadeInSection";
const Footer = () => {
  return (
    <div className="footer">
      <FadeInSection>
        <h1>Join the SWC Club today ! </h1>
      </FadeInSection>
      <br />
      <FadeInSection>
        <p>
          Where unforgettable experiences and lifelong friendships awaits.
          Together we can make a difference.
        </p>
        <br />
      </FadeInSection>
      <FadeInSection>
        <Link href={"/joinus"}>
          <Button variant="danger">Join Us</Button>
        </Link>{" "}
      </FadeInSection>
      <div className="bottomBox">
        <div className="imageDiv">
          <FadeInSection>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/9/96/National_Forensic_Sciences_University_Logo.png"
              alt=""
            />
          </FadeInSection>
        </div>
        <div className="allLinksContainer">
          <FadeInSection>
            <div className="linksDiv">
              <span>SWC</span>
              <Link href="#aboutRedirectsHere">About</Link>
              <Link href="/ourteam">Our Team</Link>
              <Link href="#">Privacy</Link>
              <Link href="/grievance">GRP</Link>
              <Link href="/grievance">Forum</Link>
              <Link href="/grievance">Feedback</Link>
              <Link href="/grievance">Gallery</Link>
            </div>
          </FadeInSection>
          <FadeInSection>
            <div className="linksDiv">
              <span>Divisions</span>
              <Link href="#">Mentorship</Link>
              <Link href="#">Operational</Link>
            </div>
          </FadeInSection>
          <FadeInSection>
            <div className="linksDiv">
              <span>Socials</span>
              <Link href="#">Instagram</Link>
              <Link href="#">Facebook</Link>
              <Link href="#">Linkedin</Link>
              <Link href="#">Twitter</Link>
              <Link href="#">Gmail</Link>
            </div>
          </FadeInSection>
          <FadeInSection>
            <div className="linksDiv">
              <span>Resources</span>
              <Link href="#">Calendar of Events</Link>
              <Link href="#">Help Center</Link>
              <Link href="#">Community</Link>
              <Link href="#">Study Groups</Link>
              <Link href="#">Video Guide</Link>
              <Link href="#">Blog</Link>
              <Link href="/grievance">Download Certificate</Link>
              <Link href="/contact">Contact Us</Link>
            </div>
          </FadeInSection>
        </div>
      </div>
      <FadeInSection>
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
      </FadeInSection>
      <br />
      <FadeInSection>
        <span>&copy; 2024, SWC NFSU. ALL RIGHTS RESERVED.</span>
      </FadeInSection>{" "}
    </div>
  );
};

export default Footer;
