import Image from "next/image.js";
import React from "react";
import Wrappers from "../assets/wrappers/MyPayments.js";

import payment from "../assets/image/payment.svg";
const MyPayments = () => {
  return (
    <Wrappers>
      <div className="top">
        <p>Consult Payment</p>
      </div>
      <div className="line"></div>
      <div className="bottom">
        <Image src={payment} />
        <p>You have no payment Histroy</p>
      </div>
    </Wrappers>
  );
};

export default MyPayments;
