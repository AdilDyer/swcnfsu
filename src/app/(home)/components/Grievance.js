import React from "react";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import FadeInSection from "../../components/FadeInSection";

const Grievance = () => {
  return (
    <div className="grievance">
      <FadeInSection>
        <h1>Grievance Redressal Portal</h1>
      </FadeInSection>
      <br />
      <FadeInSection>
        <p>
          GRP aims to look into the complaints lodged by any student / staff and
          redress it as per requirement. You can state grievance regarding any
          academic and non-academic matter within the campus through the online
          grievance or suggestion box.
        </p>
      </FadeInSection>
      <FadeInSection>
        <img
          src="https://img.freepik.com/free-vector/happy-diverse-students-celebrating-graduation-from-school_74855-5853.jpg"
          alt=""
        />
      </FadeInSection>
      <Link href="/grievance">
        <Button variant="primary">Open Portal</Button>
      </Link>{" "}
    </div>
  );
};

export default Grievance;
