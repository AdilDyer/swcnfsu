import React from "react";
import Link from "next/link";
const StudyGroups = () => {
  return (
    <div className="studygroups">
      <h1>
        <span>
          <img src="https://3axis.co/user-images/d1l8d67m.jpg" alt="" />
        </span>
        &nbsp; Study Groups &nbsp;
        <span>
          <img
            style={{ transform: "scale(-1) rotate(-110deg)" }}
            src="https://3axis.co/user-images/d1l8d67m.jpg"
            alt=""
          />
        </span>
      </h1>
      <br />
      <div className="cardsContainer">
        <Link href="#">
          <div
            className="card"
            style={{
              background: `url(https://www.rowse.co.uk/static/images/blog/posts/open-graph/why-is-cybersecurity-important-open-graph.jpg)`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="symbol">
              <i style={{ color: "black" }} class="fa-solid fa-terminal"></i>
            </div>
            <p>CyberSecurity</p>
          </div>
        </Link>
        <Link href="#">
          <div
            className="card"
            style={{
              background: `url(https://images.indianexpress.com/2024/04/National-Civil-Services-Day-2024-Atal-Bihari-Vajpayee-4.jpg)`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="symbol">
              <i style={{ color: "black" }} class="fa-solid fa-briefcase"></i>
            </div>
            <p>Civil Services</p>
          </div>
        </Link>
        <Link href="#">
          <div
            className="card"
            style={{
              background: `url(https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=1356&h=668&fit=crop)`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="symbol">
              <i style={{ color: "black" }} class="fa-solid fa-book"></i>
            </div>
            <p>Book Club</p>
          </div>
        </Link>
        <Link href="#">
          <div
            className="card"
            style={{
              background: `url(${"https://images.news18.com/ibnlive/uploads/2021/03/1616316963_world-poetry-day-5-poets-shutterstock.jpg"})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="symbol">
              <i class="fa-solid fa-pen-nib"></i>
            </div>
            <p>Poetry</p>
          </div>
        </Link>
        <div className="" style={{ fontWeight: "500" }}>
          {" "}
          ... and more coming soon.
        </div>
      </div>
    </div>
  );
};

export default StudyGroups;
