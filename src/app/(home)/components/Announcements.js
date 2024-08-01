import React from "react";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import FadeInSection from "../../components/FadeInSection";
const Announcements = () => {
  return (
    <div className="announcements ">
      <FadeInSection>
        <h6>
          Join us for our upcoming events and be a part of something special.
          Check out our calendar and register today!
        </h6>
        <Link href={"/voting"}>
          <Button style={{ marginTop: "2rem" }} variant="primary">
            Voting and Suggestion Box
          </Button>{" "}
        </Link>
      </FadeInSection>
      <FadeInSection>
        <div className="cardsAnnoun">
          <div className="card">
            <div className="imageDiv">
              <img
                src="https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_640.jpg"
                alt=""
              />
            </div>
            <br />
            <div className="textBody">
              <h5>Book Club meeting : 36</h5>

              <p>
                Date : 28-June-2024 <br />
                Time : 5pm
              </p>
            </div>
          </div>
          <div className="card">
            <div className="imageDiv">
              <img
                src="https://images.news18.com/ibnlive/uploads/2021/03/1616316963_world-poetry-day-5-poets-shutterstock.jpg?im=FitAndFill=(1200,675)"
                alt=""
              />
            </div>
            <br />
            <div className="textBody">
              <h5>Poetry Club meeting : 49</h5>

              <p>
                Date : 28-June-2024 <br />
                Time : 5pm
              </p>
            </div>
          </div>
          <div className="card">
            <div className="imageDiv">
              <img
                src="https://www.rowse.co.uk/static/images/blog/posts/open-graph/why-is-cybersecurity-important-open-graph.jpg"
                alt=""
              />
            </div>
            <br />
            <div className="textBody">
              <h5>CyberSecurity Club meeting : 44</h5>

              <p>
                Date : 28-June-2024 <br />
                Time : 5pm
              </p>
            </div>
          </div>
          <div className="card">
            <div className="imageDiv">
              <img
                src="https://images.indianexpress.com/2024/04/National-Civil-Services-Day-2024-Atal-Bihari-Vajpayee-4.jpg"
                alt=""
              />
            </div>
            <br />
            <div className="textBody">
              <h5>Civil-Services Club meeting : 12</h5>
              <p>
                Date : 28-June-2024 <br />
                Time : 5pm
              </p>
            </div>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default Announcements;
