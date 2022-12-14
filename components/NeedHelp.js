import React from "react";
import Image from "next/image";
import Wrappers from "../assets/wrappers/NeedHelp";
import mailus from "../assets/image/mail.svg";
import callus from "../assets/image/callus.svg";
const NeedHelp = () => {
  return (
    <Wrappers>
      <div className="container">
        <div className="call-us">
          <Image className="img" src={callus} height="95px" width="80px" />
          <h3>Call us Now</h3>

          <p>9876543210</p>
        </div>
        <div className="mail-now">
          <Image src={mailus} height="95px" width="80px" />
          <h3>Mail Now</h3>

          <p>info@gmail.com</p>
        </div>
      </div>
    </Wrappers>
  );
};

export default NeedHelp;
