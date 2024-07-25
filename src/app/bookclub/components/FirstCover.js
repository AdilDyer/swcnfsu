import React from "react";

const FirstCover = ({ coverUrl }) => {
  return (
    <div className="firstCover">
      <img src={coverUrl} alt="Cover Picture..." />
      <div className="textDiv">
        <h1>Book Club</h1>
        <h6>Motto</h6>
        <p>&quot;Turning Pages, Tuning Life&quot;</p>
        <br />
        <h6>Monthly Challenge ( 20 - 07 )</h6>
        <p>
          Share atleast 1 book with other person of club and discuss over
          insights
        </p>
      </div>
    </div>
  );
};

export default FirstCover;
