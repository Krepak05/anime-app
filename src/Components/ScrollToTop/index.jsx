import React, { useState } from "react";
import "./style.scss"; // Create this CSS file to style the component

const FloatingArrow = () => {
  const [visible, setVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <div
      className={`floating-arrow ${visible ? "visible" : ""}`}
      onClick={scrollToTop}
    >
      <div className="arrow-container">
        <div className="arrow-up"></div>
      </div>
    </div>
  );
};

export default FloatingArrow;
