"use client";
import React, { useState } from "react";
import Link from "next/link";
const SecondCover = ({ coverUrl }) => {
  const images = [
    "https://htmlcolorcodes.com/assets/images/colors/yellow-orange-color-solid-background-1920x1080.png",
    "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
    "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
    "https://img.freepik.com/premium-photo/house-with-pink-house-top_874813-1429.jpg",
    "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
  ];
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCenterImageClick = () => {
    // router.push(`/`);
  };
  return (
    <div className="secondCover">
      <img src={coverUrl} id="coverImg" alt="Cover Picture..." />
      <div className="oneCardDiv">
        <div className="announcements">
          <div className="cardsAnnoun">
            <Link href="#">
              <div className="card">
                <div className="imageDiv">
                  <img src={selectedImage} alt="" />
                </div>
                <br />
                <div className="textBody">
                  <h5>Next Meeting :</h5>
                  <p>Upper Audi, 23-June-2024</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="scroll-menu">
        {images.map((image, index) => (
          <div
            onClick={() => handleImageClick(image)}
            key={index}
            className="announcements"
          >
            <div className="cardsAnnoun">
              <div className="card">
                <div className="imageDiv">
                  <img alt={`Thumbnail ${index}`} src={image} />
                </div>
                <br />
                <div className="textBody">
                  <h5>Meeting {images.length - index} </h5>
                  <p>Discovering new Genres !</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecondCover;
