import React, { useEffect, useState } from "react";
import FadeInSection from "../../components/FadeInSection";
import { useSession } from "next-auth/react";

const HomeFirst = () => {
  const { data: session } = useSession();
  const [isUserRegistered, setIsUserRegistered] = useState(null);

  useEffect(() => {
    const fetchUserRegistrationStatus = async () => {
      if (session?.user?.email) {
        try {
          const response = await fetch(
            `http://localhost:3000/api/getUser?email=${session.user.email}`
          );
          const data = await response.json();
          if (data.status === 200) {
            setIsUserRegistered(true);
          } else {
            setIsUserRegistered(false);
          }
        } catch (error) {
          console.error("Error fetching user registration status:", error);
        }
      }
    };

    fetchUserRegistrationStatus();
  });

  return (
    <div className="homefirst">
      <FadeInSection>
        <div className="textDiv">
          {session ? (
            <>
              {isUserRegistered ? (
                <></>
              ) : (
                <>
                  <h6
                    style={{
                      backgroundColor: "midnightblue",
                      padding: "1rem",
                      width: "100%",
                      color: "white",
                      textAlign: "center",
                    }}
                  >
                    Please Register Yourself First in the Account Page.
                  </h6>
                  <br />
                </>
              )}
            </>
          ) : (
            <></>
          )}
          <p>Greetings from</p>
          <br />

          <h1 className="popoutOpacity"> <div className="homePageHeading">The Student Welfare Committee</div></h1>

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
            <span style={{ verticalAlign: "middle" }}>
              <img
                style={{
                  width: "2.5rem",
                }}
                src="https://3axis.co/user-images/d1l8d67m.jpg"
                alt=""
              />
            </span>
            &nbsp; राष्ट्र सर्वोपरि, छात्र सर्वप्रथम | &nbsp;
            <span style={{ verticalAlign: "middle" }}>
              <img
                style={{
                  transform: "scale(-1) rotate(-110deg)",
                  width: "2.5rem",
                }}
                src="https://3axis.co/user-images/d1l8d67m.jpg"
                alt=""
              />
            </span>
          </p>
          <br />
          <p style={{ fontStyle: "italic", fontWeight: "300" }}>
            We are here to support you, foster a sense of community, and ensure
            your voice is heard.
          </p>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className="imageDiv">
          <img
            src="https://res.cloudinary.com/ddxv0iwcs/image/upload/v1712512910/NFSU_9_All_Equipped_Seminar_Hall_u5ecy8_pv9f4n.jpg"
            alt=""
          />
        </div>
      </FadeInSection>
    </div>
  );
};

export default HomeFirst;
