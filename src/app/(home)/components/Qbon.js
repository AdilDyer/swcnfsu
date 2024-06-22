import React from "react";
import Button from "react-bootstrap/Button";
import Link from "next/link";
const Qbon = () => {
  return (
    <div className="qbon">
      <div className="descriptionDiv">
        <div className="imageDiv">
          <div className="imgContainerDiv">
            <img
              src="https://res.cloudinary.com/ddxv0iwcs/image/upload/v1707926485/qbon_DEV/Screenshot_2024-02-07_at_10.01.59_AM_mbeifo.png"
              alt=""
              style={{ objectFit: "contain", backgroundColor: "white" }}
            />
          </div>
        </div>
        <div className="textDiv">
          <h1>Qbon</h1>
          <br />
          <h5>The Question Bank Of NFSU</h5>
          <br />
          <p>
            Introducing Qbon - Your Ultimate Academic Resource Hub! The Question
            Bank of NFSU provides comprehensive access to all departmental past
            exam papers and a rich repository of study materials, tailored to
            support your academic journey. Whether you&apos;re prepping for
            finals, tackling assignments, or seeking to deepen your
            understanding of course content, Qbon is your go-to destination for
            academic excellence. Yep, here it is !
          </p>
          <br />
          <Link target="_blank" href="https://qbon.onrender.com/">
            <Button variant="light">
              Visit Qbon <i class="fa-solid fa-diamond-turn-right"></i>
            </Button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Qbon;
