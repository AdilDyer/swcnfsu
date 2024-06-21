import React from "react";
import Button from "react-bootstrap/Button";
import Link from "next/link";
const Grievance = () => {
  return (
    <div className="grievance">
      <h1>Grievance Redressal Portal</h1>
      <br />
      <p>
        GRP aims to look into the complaints lodged by any student / staff and
        redress it as per requirement. You can state grievance regarding any
        academic and non-academic matter within the campus through the online
        grievance or suggestion box.
      </p>
      <img
        src="https://img.freepik.com/free-vector/happy-diverse-students-celebrating-graduation-from-school_74855-5853.jpg"
        alt=""
      />
      <Link href="/grievance">
        <Button variant="primary">Open Portal</Button>
      </Link>{" "}
    </div>
  );
};

export default Grievance;
