import React from "react";
import Wrappers from "../assets/wrappers/Mission";
const Mission = () => {
  return (
    <Wrappers>
      <div className="mission-container">
        <div className="our-vision">
          <div className="line-container">
            <h1 className="title">Our Mission</h1>
            <div className="white-line" style={{ width: "100px" }}></div>
          </div>
          <p className="subtitle">
            To transform lives of million people by helping them fight Lifestyle
            Diseases and to become the most “Trusted” brand in Healthcare
            Professional Services..
          </p>
        </div>
      </div>
    </Wrappers>
  );
};

export default Mission;
