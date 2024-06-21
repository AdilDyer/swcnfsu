import React from "react";
import Button from "react-bootstrap/Button";
import Link from "next/link";

const Grievance = () => {
  return (
    <div className="grievancePortal">
      <img
        src="https://res.cloudinary.com/ddxv0iwcs/image/upload/v1712512910/NFSU_9_All_Equipped_Seminar_Hall_u5ecy8_pv9f4n.jpg"
        alt=""
      />
      <div className="textBody">
        <h1>Grievance Redressal Portal</h1>
        <hr />
        <br />
        <p>
          The Grievance Redressal Cell (GRC) aims to look into the complaints
          lodged by any student and redress it as per requirement. The students
          can state their grievance regarding any academic and non- academic
          matter within the campus through the online and grievance/ suggestion
          box. The institution aims at solving the grievances of the students
          within stipulated tacademic and non- academic matter within the campus
          through the online and grievance/ suggestion box. The institution aims
          at solving the grievances of the students within stipulated time.
        </p>
        <br />
        <h2>Objectives</h2>
        <hr />
        <p>
          The Grievance Redressal Cell has been developed to settle the
          grievances of the students and other stakeholders within a reasonable
          time period for further strengthening the bond of the students with
          the institution by providing them with all kind of facilities to a
          satisfaction level for maintaining a convenient ambience of academic
          teaching and learning.
        </p>
        <br />
        <h2>Mechanism of the GRC</h2>
        <hr />
        <p>
          1. Grievance redressal committee (GRC) shall consider only individual
          grievances of specific nature of students and staff. 2. The GRC shall
          not consider any grievance of general applicability or of collective
          nature of raised collectively by more than one employee/student. 3.
          Post receipt of the complaint/application the committee will decide on
          the merit of case regarding scope of further discussion investigation
          and act promptly. 4. The GRC may mediate between complainant and
          defendant against who the complaint has been made, it required. 5. GRC
          shall consider redressing of grievances within a reasonable time. 6.
          The cell will give report to the authority about the cases attended to
          and seek guidance from the higher authorities if required.
        </p>
        <br />
        <h2>Scope</h2>
        <hr />
        <p>
          The students may lodge grievance about any academic and non- academic
          matters related to - Timely issue of duplicate Mark-sheets, Transfer
          Certificates, Conduct Certificates or other examination and
          scholarship related matters. to dues and payments for various items
          from the library, hostels and other financial matters. certain
          misgivings about conditions of sanitation, preparation of food,
          availability of transport, victimization by teachers and any other
          offensive activity.
        </p>
        <br />
        <h2>Procedure for lodging complaint</h2>
        <hr />
        <p>
          The students can lodge their grievance through online mechanism in the
          link provided below- Click Here for lodging grievance. The students
          may feel free to drop the writing (can be anonymous if required) in
          the grievance/ suggestion box. The Grievance Cell will act upon those
          cases which have been forwarded along with the necessary documents.
          <br />
          <br />
          Your concerns are important to us. Use our secure form to submit any
          grievances, and rest assured that your issue will be handled with
          utmost confidentiality and care.
        </p>
        <br />
        <br />
        <Link href="#">
          <Button variant="primary">Link to The Google Form</Button>
        </Link>{" "}
      </div>
    </div>
  );
};

export default Grievance;
