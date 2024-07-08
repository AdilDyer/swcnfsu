import React from "react";

const FirstCover = ({ coverUrl }) => {
  return (
    <div className="firstCover">
      <img src={coverUrl} alt="Cover Picture..." />
    </div>
  );
};

export default FirstCover;
