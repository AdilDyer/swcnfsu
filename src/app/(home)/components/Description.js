"use client";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import FadeInSection from "../../components/FadeInSection";

const Description = () => {
  return (
    <>
      <div className="descriptionDiv" id="aboutRedirectsHere">
        <div className="imageDiv">
          <div className="imgContainerDiv">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/90/NSS-symbol.jpeg"
              alt=""
              style={{ objectFit: "contain", backgroundColor: "white" }}
            />
          </div>
        </div>
        <div className="textDiv">
          <FadeInSection>
            <h1>National Service Scheme</h1>
          </FadeInSection>

          <br />
          <FadeInSection>
            <h5>
              <span style={{ backgroundColor: "pink" }}>
                {" "}
                &nbsp;Transparency&nbsp;
              </span>
              ,&nbsp;
              <span style={{ backgroundColor: "pink", color: "black" }}>
                &nbsp;Approachability&nbsp;
              </span>
              &nbsp; &amp; &nbsp;
              <span style={{ backgroundColor: "pink", color: "black" }}>
                &nbsp;Aspiration&nbsp;
              </span>
            </h5>
          </FadeInSection>

          <br />
          <FadeInSection>
            <p>
              At the heart of our SWC lies NSS : National Service Scheme, with
              its guiding principles: transparency, approachability, and
              aspiration. We believe in open communication and honesty in all
              our actions. NSS&apos;s approachable nature ensures that every
              student feels welcome and heard. We constantly strive for better,
              aiming to uplift every member of our community.
            </p>
          </FadeInSection>

          <br />
          <FadeInSection>
            <h5>
              <span style={{ backgroundColor: "pink" }}>
                &nbsp;Our Dedication&nbsp;
              </span>
            </h5>
          </FadeInSection>

          <br />
          <FadeInSection>
            <p>
              Our NSS is committed to fostering a supportive and inclusive
              environment where every student can thrive. NSS is passionate
              about creating a space where you can grow, connect, and succeed.
              We at NSS are the dedicated individuals who are working tirelessly
              to make our community a hub of support and positivity. Your
              well-being is our priority.
            </p>
            <Link href="/nss">
              <Button variant="danger">
                NSS Portal &nbsp; <i class="fa-solid fa-diamond-turn-right"></i>
              </Button>
            </Link>
          </FadeInSection>
        </div>
      </div>
      <div className="descriptionDiv">
        <div className="imageDiv">
          <div className="imgContainerDiv">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_National_Cadet_Corps_%28India%29.png/800px-Emblem_of_National_Cadet_Corps_%28India%29.png"
              style={{ objectFit: "contain", backgroundColor: "white" }}
            />
          </div>
        </div>
        <div className="textDiv">
          <FadeInSection>
            <h1>National Cadet Corps</h1>
          </FadeInSection>
          <br />
          <FadeInSection>
            <h5>
              <span style={{ backgroundColor: "blue", color: "white" }}>
                {" "}
                &nbsp; The Team Full of Proud Cadets &nbsp;{" "}
              </span>
            </h5>
          </FadeInSection>

          <br />
          <FadeInSection>
            <p>
              The National Cadet Corps is the youth wing of the Indian Armed
              Forces. It is open to school and college students on voluntary
              basis as a Tri-Services Organisation, comprising the Army, the
              Navy and the Air Force. The SWC is proud to have a dedicated team
              of NCC cadets who are committed to the welfare of the student
              community.
            </p>
            <Link href="/ncc">
              <Button variant="primary">
                NCC Portal &nbsp; <i class="fa-solid fa-diamond-turn-right"></i>
              </Button>
            </Link>
          </FadeInSection>
          <br />
        </div>
      </div>
      <div className="descriptionDiv">
        <div className="imageDiv">
          <div className="imgContainerDiv" style={{ backgroundColor: "white" }}>
            <img
              src="https://res.cloudinary.com/ddxv0iwcs/image/upload/v1735309073/PHOTO-2024-12-27-19-46-43_lzi4u7.jpg"
              style={{ borderRadius: "2rem" }}
            />
          </div>
        </div>
        <div className="textDiv">
          <FadeInSection>
            <h1>Our Outstanding Team</h1>
          </FadeInSection>
          <br />
          <FadeInSection>
            <h5>
              <span style={{ backgroundColor: "lime" }}>
                {" "}
                &nbsp; Dedicated and Remarkable Individuals &nbsp;{" "}
              </span>
            </h5>
          </FadeInSection>

          <br />
          <FadeInSection>
            <p>
              SWC is powered by a team of remarkable individuals who are
              dedicated towards operational and mentorship divisions. They
              consistently perform a positive impact on the student community.
              Each member brings unique skills, perspectives, and a shared
              passion for student welfare. Together, we strive to create an
              environment where every student feels supported and empowered.
            </p>
            <Link href="/ourteam">
              <Button variant="success">
                Our Team &nbsp; <i class="fa-solid fa-diamond-turn-right"></i>
              </Button>
            </Link>
          </FadeInSection>
          <br />
        </div>
      </div>
    </>
  );
};

export default Description;
