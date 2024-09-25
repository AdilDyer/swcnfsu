import React from "react";

const Report = () => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0");
  var yyyy = today.getFullYear();
  var hh = String(today.getHours()).padStart(2, "0");
  var min = String(today.getMinutes()).padStart(2, "0");
  var formattedDateTime = dd + "-" + mm + "-" + yyyy + " " + hh + ":" + min;

  return (
    <div className="placementReportBigDiv">
      <div className="headerImage">
        <img
          src="https://res.cloudinary.com/ddxv0iwcs/image/upload/v1710502741/emblem_e7gmxn.png"
          alt="Nfsu Logo.."
          loading="lazy"
        />
      </div>
      <div className="headerTitle" style={{ padding: "5rem" }}>
        <h1>
          Student Welfare Committee Report <br />
          NFSU
        </h1>
      </div>
      <div className="headerImage2">
        <img
          src="https://res.cloudinary.com/ddxv0iwcs/image/upload/v1712513750/1665605758939_vds4tj.jpg"
          alt=""
          loading="lazy"
        />
      </div>
      <div className="headerTitle breakPageDiv" style={{ padding: "5rem" }}>
        <h4>
          Office of The Student Welfare Committee <br />
          NFSU
        </h4>
        <h5>
          National Forensic Sciences University <br />
          Gandhinagar
        </h5>
        <br />
        <h5>{formattedDateTime}</h5>
      </div>
      <div className="page2 breakPageDiv">
        <div className="headerTitle">
          <h1>Index</h1>
        </div>
        <table className="table tableContent">
          <thead>
            <tr>
              <th scope="col">Particulars</th>
              <th scope="col">Page No.</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Introduction</th>
              <td>1-2</td>
            </tr>
            <tr>
              <th>Mission and Objectives</th>
              <td>3-4</td>
            </tr>
            <tr>
              <th>Student Support Programs</th>
              <td>12-3</td>
            </tr>
            <tr>
              <th>Student Preparation and Development</th>
              <td>1-2</td>
            </tr>
            <tr>
              <th>Health and Wellbeing Statistics</th>
              <td>1-2</td>
            </tr>
            <tr>
              <th>Engagement in Extracurricular Activities</th>
              <td>1-2</td>
            </tr>
            <tr>
              <th>Career Support and Placements</th>
              <td>1-2</td>
            </tr>
            <tr>
              <th>Feedback from Students</th>
              <td>1-2</td>
            </tr>
            <tr>
              <th>International and Exchange Programs</th>
              <td>1-2</td>
            </tr>
            <tr>
              <th>Student Financial Assistance</th>
              <td>1-2</td>
            </tr>
            <tr>
              <th>Comparison of Student Satisfaction</th>
              <td>1-2</td>
            </tr>
            <tr>
              <th>Mental Health and Counseling Services</th>
              <td>1-2</td>
            </tr>
            <tr>
              <th>Conclusions and Recommendations</th>
              <td>1-2</td>
            </tr>
            <tr>
              <th>Annexure-1</th>
              <td>1-2</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="overlay">
        <div className="strip"></div>
        <div className="page3 breakPageDiv">
          <div className="headerTitle">
            <h1>Introduction</h1>
          </div>
          <div className="textContent">
            <p>
              The Student Welfare Committee at National Forensic Sciences
              University has worked actively from 2024-2025 to ensure that
              students have access to all necessary support services. This
              includes mental health counseling, career guidance, financial aid,
              and overall wellbeing programs. Various
              welfare programs were initiated for students&apos; academic,
              personal, and professional growth. A total of 492 students
              participated in welfare programs, and 81 workshops and events were
              conducted to promote mental and physical well-being. 100+
              companies collaborated with the committee for internships and
              career support. The Committee also took the initiative to
              provide mental health resources and partnered external
              organizations to facilitate student support. Below is a summary of
              the key metrics that reflect the performance of the Student
              Welfare Committee during the 2023-2024:
            </p>
          </div>
          <table className="table tableContent">
            <thead>
              <tr>
                <th scope="col">Key Metric</th>
                <th scope="col">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Number of Registered Students</th>
                <td>2234</td>
              </tr>
              <tr>
                <th>Number of Mental Health Counseling Sessions</th>
                <td>533</td>
              </tr>

              <tr>
                <th>Number of Workshops and Wellness Events</th>
                <td>1393</td>
              </tr>

              <tr>
                <th>Number of Companies Offering Career Guidance</th>
                <td>400</td>
              </tr>
              <tr>
                <th>Total Number of Internship Offers Provided</th>
                <td>294</td>
              </tr>
              <tr>
                <th>Number of Financial Aid Requests Received</th>
                <td>1033</td>
              </tr>
              <tr>
                <th>Financial Aid Granted (Total Amount)</th>
                <td>Rs 2.21 Crores</td>
              </tr>
              <tr>
                <th>Highest Internship Stipend Provided</th>
                <td>Rs. 21.82 Lakhs</td>
              </tr>
              <tr>
                <th>Average Stipend for Internships</th>
                <td>Rs. 21.82 Lakhs</td>
              </tr>
              <tr>
                <th>Number of Scholarships Awarded</th>
                <td>419</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Report;
