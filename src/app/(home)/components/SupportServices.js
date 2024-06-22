import React from "react";
import Link from "next/link";
const SupportServices = () => {
  return (
    <div className="supportServicesDiv">
      <h1>Services and Support</h1>
      <br />
      <br />
      <div className="outerDiv">
        <Link href="#">
          <div className="card">
            <div
              className="imageDiv"
              style={{
                background: `url(https://familyassist.msf.gov.sg/wp-content/uploads/2023/03/Edited-Counselling-Graphics-SN-2c-L2-Top-Hero-Banner.svg)`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
            <div className="textDiv">
              <h4>
                Counseling <br /> Services{" "}
              </h4>
              <br />
              <p>
                We understand that your mental and emotional well-being is
                crucial for your success and happiness. Our Counseling Services
                are designed to provide you with the support you need to
                navigate the challenges of college life.
              </p>
            </div>
          </div>
        </Link>
        <Link href="#">
          <div className="card">
            <div
              className="imageDiv"
              style={{
                background: `url(https://www.pcom.edu/_resources/images/administrative-departments/financial-aid/infographic/600x398_TypesFinAid_light.jpg)`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
            <div className="textDiv">
              <h4>Financial Aid and Scholarships</h4>
              <br />
              <p>
                We believe that financial constraints should never hinder your
                educational pursuits. Our Financial Aid and Scholarships section
                is dedicated to providing you with the resources and support you
                need to navigate your financial journey during college.
              </p>
            </div>
          </div>
        </Link>
        <Link href="#">
          <div className="card">
            <div
              className="imageDiv"
              style={{
                background: `url(https://www.airswift.com/hubfs/Imported_Blog_Media/mental-health-wellness-during-covid-19.jpg)`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
            <div className="textDiv">
              <h4>Health and Wellness Programs</h4>
              <br />
              <p>
                SWC&apos;s Health and Wellness Programs are designed to support
                your physical, mental, and emotional health, ensuring you have
                the resources and guidance needed to thrive both inside and
                outside the classroom.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SupportServices;
