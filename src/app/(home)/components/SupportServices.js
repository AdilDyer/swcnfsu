import React from "react";
import Link from "next/link";
import FadeInSection from "../../components/FadeInSection";
import Button from "react-bootstrap/Button";

const SupportServices = () => {
  return (
    <div className="supportServicesDiv">
      <FadeInSection>
        <h1>
          <span style={{ verticalAlign: "middle" }}>
            <img
              style={{
                width: "2.5rem",
              }}
              src="https://3axis.co/user-images/d1l8d67m.jpg"
              alt=""
            />
          </span>
          &nbsp; <span className="homePageHeading">Services and Support</span>{" "}
          &nbsp;
          <span style={{ verticalAlign: "middle" }}>
            <img
              style={{
                transform: "scale(-1) rotate(-110deg)",
                width: "2.5rem",
              }}
              src="https://3axis.co/user-images/d1l8d67m.jpg"
              alt=""
            />
          </span>
        </h1>
      </FadeInSection>
      <br />
      <br />
      <br />
      <FadeInSection>
        <div className="outerDiv">
          <Link href="#">
            <div className="card">
              <div>
                <div
                  className="imageDiv"
                  style={{
                    background: `url(https://res.cloudinary.com/ddxv0iwcs/image/upload/v1726152837/77164226b124257296a815c17ea97575_rxcl1c.jpg)`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                ></div>
                <div className="textDiv">
                  <h4>
                    Counseling and <br /> Anti-ragging Services{" "}
                  </h4>
                  <br />
                  <p>
                    We understand that your mental and emotional well-being is
                    crucial for your success and happiness. Our Counseling
                    Services are designed to provide you with the support you
                    need to navigate the challenges of college life.
                  </p>
                  <br />
                </div>
              </div>
              <div className="btnDiv">
                <Button variant="danger">
                  Counselling & Anti-ragging Cell{" "}
                  <i class="fa-solid fa-diamond-turn-right"></i>
                  &nbsp;
                </Button>
              </div>
            </div>
          </Link>
          <Link href="#">
            <div className="card">
              <div>
                <div
                  className="imageDiv"
                  style={{
                    background: `url(https://res.cloudinary.com/ddxv0iwcs/image/upload/v1726152844/scholarship-vector-icon-illustration-graduation-cap-money-diploma-education-icon-concept-white-isolated-flat-cartoon-style-suitable-web-landing-page-banner-flyer-sticker-card-background_1033579-104585_agsnwa.avif)`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                ></div>
                <div className="textDiv">
                  <h4>Financial Aid and Scholarships</h4>
                  <br />
                  <p>
                    We believe that financial constraints should never hinder
                    your educational pursuits. Our Financial Aid and
                    Scholarships section is dedicated to providing you with the
                    resources and support you need to navigate your financial
                    journey during college.
                  </p>
                </div>
              </div>
              <br />
              <div className="btnDiv">
                <Button variant="success">
                  Financial Aid & Scholarships Cell{" "}
                  <i class="fa-solid fa-diamond-turn-right"></i>
                  &nbsp;
                </Button>
              </div>
            </div>
          </Link>
          <Link href="#">
            <div className="card">
              <div>
                <div
                  className="imageDiv"
                  style={{
                    background: `url(https://res.cloudinary.com/ddxv0iwcs/image/upload/v1726152995/Screenshot_2024-09-12_at_8.26.29_PM_zghujx.png)`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                ></div>
                <div className="textDiv">
                  <h4>Health and Wellness Programs</h4>
                  <br />

                  <p>
                    SWC&apos;s Health and Wellness Programs are designed to
                    support your physical, mental, and emotional health,
                    ensuring you have the resources and guidance needed to
                    thrive both inside and outside the classroom.
                  </p>

                  <br />
                </div>
              </div>
              <div className="btnDiv">
                <Button variant="info">
                  Mental-Health & Wellness Cell{" "}
                  <i class="fa-solid fa-diamond-turn-right"></i>
                  &nbsp;
                </Button>
              </div>
            </div>
          </Link>
        </div>
      </FadeInSection>
    </div>
  );
};

export default SupportServices;
