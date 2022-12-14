import Image from "next/image";
import React from "react";
import team1 from "../assets/image/team1.png";
import NextLeft from "../assets/image/NextLeft.svg";
import slider from "../assets/image/slider.svg";
import NextRight from "../assets/image/NextRight.svg";
import grayRectangle from "../assets/image/grayRectangle.svg";
import Wrappers from "../assets/wrappers/Team";

const Team = () => {
  return (
    <Wrappers>
      <div className="container">
        <div className="line-container">
          <h1 className="heading">Team</h1>
          <div className="green-line" style={{ width: "3rem" }}></div>
        </div>
        <div className="main-container">
          <div className="picture-container">
            <div className="photo-side">
              <Image src={team1} />

              <div className="bottom">
                <Image src={NextLeft} />
                <Image src={slider} />
                <Image src={NextRight} />
              </div>
            </div>
          </div>

          <div className="content-container">
            <p className="title">Nutrition & Doctor Expert Team</p>
            <h2 className="name">Dr.PREETHI VEERARAGAVAN</h2>
            <p className="desigination">S e n i o r l e a d D o c t o r</p>
            <p className="content">
              Having degrees in Allopathy such as MD (Doctorate in
              Medicine),Dr.Preethi has been adding value to our clients with her
              10+ years of experience. She has been instrumental in setting up
              the foundation for the role of various healthcare programs in
              Dr.Wealthify.
            </p>
            <div className="img-container">
              <div className="img">
                <Image src={grayRectangle} />
              </div>
              <div className="img">
                <Image src={grayRectangle} />
              </div>
              <div className="img">
                <Image src={grayRectangle} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrappers>
  );
};

export default Team;
