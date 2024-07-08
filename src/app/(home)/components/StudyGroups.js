import React from "react";
import Link from "next/link";
import FadeInSection from "@/app/components/FadeInSection";
const StudyGroups = () => {
  return (
    <div className="studygroups">
      <FadeInSection>
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
      </FadeInSection>
      <br />
      <FadeInSection>
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
          <Link href="/bookclub">
            <div
              className="card"
              style={{
                background: `url(https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_640.jpg)`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div className="symbol">
                <i style={{ color: "black" }} class="fa-solid fa-book"></i>
              </div>
              <p>Book</p>
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
          <Link href="#">
            <div
              className="card"
              style={{
                background: `url(${"https://res.cloudinary.com/ddxv0iwcs/image/upload/v1719142213/WhatsApp_Image_2024-06-23_at_16.59.53_ke6hqq.jpg"})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div className="symbol">
                <i class="fa-solid fa-pen-nib"></i>
              </div>
              <p>Cinematography</p>
            </div>
          </Link>
          <Link href="#">
            <div
              className="card"
              style={{
                background: `url(${"https://cdn.shopify.com/s/files/1/0036/8757/9760/files/82.jpg?v=1604230225"})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div className="symbol">
                <i class="fa-solid fa-pen-nib"></i>
              </div>
              <p>Art &amp; Craft</p>
            </div>
          </Link>
          <Link href="#">
            <div
              className="card"
              style={{
                background: `url(${"https://facts.net/wp-content/uploads/2023/09/8-astonishing-facts-about-journalist-1695689126.jpg"})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div className="symbol">
                <i class="fa-solid fa-pen-nib"></i>
              </div>
              <p>Journaling & Politics</p>
            </div>
          </Link>
          <Link href="#">
            <div
              className="card"
              style={{
                background: `url(${"https://document360.com/wp-content/uploads/2022/08/internal_documentation_guide.jpg"})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div className="symbol">
                <i class="fa-solid fa-pen-nib"></i>
              </div>
              <p>Documentation</p>
            </div>
          </Link>
          <div className="" style={{ fontWeight: "500" }}>
            {" "}
            ... and more coming soon.
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default StudyGroups;
