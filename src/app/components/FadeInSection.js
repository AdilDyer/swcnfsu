"use client";
import { useEffect, useRef, useState } from "react";

const FadeInSection = ({ children }) => {
  const [isVisible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const top = sectionRef.current.getBoundingClientRect().top;
        const isVisible = top < window.innerHeight - 50;
        setVisible(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial load
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`fadeInSection ${isVisible ? "isVisible" : ""}`}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
