import React from "react";

const Contact = () => {
  return (
    <>
      <div className="contactPageDiv">
        <h1>Contact Us</h1>
        <br />
        <p>
          Have a question or need assistance? Reach out to us via our contacts
          or connect with us on social media. We’re here to help!
        </p>

        <div className="descriptionDiv">
          <div className="imageDiv">
            <div className="imgContainerDiv">
              <img
                src="https://media.licdn.com/dms/image/C4E03AQGRn_r5cvA5Uw/profile-displayphoto-shrink_800_800/0/1617124876715?e=1724889600&v=beta&t=sPw8QdGhaSmkaJGFImJ-h8kMTrWCn7akCWYAH2hv1xY"
                alt="sir's photo"
              />
            </div>
          </div>
          <div className="textDiv">
            <h1>Dr. Deepak Mashru</h1>
            <br />
            <h5>Assistant Professor</h5>
            <br />

            <div className="iDiv">
              <i style={{ color: "	#1877F2" }} class="fa-brands fa-facebook"></i>
              <i
                style={{ color: "	#E1306C" }}
                class="fa-brands fa-instagram"
              ></i>
              <i style={{ color: "	#0A66C2" }} class="fa-brands fa-linkedin"></i>
            </div>
            <br />
            <br />
            <h6>Phone No. : 9824210500</h6>
            <h6>Email: deepak.mashru@nfsu.ac.in</h6>

            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
