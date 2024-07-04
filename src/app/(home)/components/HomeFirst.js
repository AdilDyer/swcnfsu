import React from "react";

const HomeFirst = () => {
  return (
    <div className="homefirst" >
      <div className="textDiv">
        <p>Greetings from</p>
        <br />

        <h1 className="popoutOpacity">The Student Welfare Committee</h1>

        <br />
        <h3>
          <span>
            <img
              className="nfsuEmblemHomeFirst"
              src="https://guwahati.nfsu.ac.in/img/logo.png"
              alt=""
            />
          </span>
          &nbsp; National Forensic Sciences University
        </h3>
        <br />
        <p style={{ fontWeight: "600" }}>
          Of Students, by Students, for Students, Always ❤️
        </p>
        <br />
        <p style={{ fontWeight: "600", fontSize: "1.5rem" }}>
          राष्ट्र सर्वोपरि, छात्र सर्वप्रथम |
        </p>
        <br />
        <p style={{ fontStyle: "italic", fontWeight: "300" }}>
          We are here to support you, foster a sense of community, and ensure
          your voice is heard.
        </p>
      </div>
      <div className="imageDiv">
        <img
          src="https://res.cloudinary.com/ddxv0iwcs/image/upload/v1712512910/NFSU_9_All_Equipped_Seminar_Hall_u5ecy8_pv9f4n.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default HomeFirst;
