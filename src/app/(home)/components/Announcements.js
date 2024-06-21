import React from "react";

const Announcements = () => {
  return (
    <div className="announcements">
      <h6>
        Join us for our upcoming events and be a part of something special.
        Check out our calendar and register today!
      </h6>
      <div className="cardsAnnoun">
        <div className="card">
          <div className="imageDiv">
            <img
              src="https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=1356&h=668&fit=crop"
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
    </div>
  );
};

export default Announcements;
