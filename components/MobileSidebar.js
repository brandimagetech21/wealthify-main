import React from "react";
import Wrappers from "../assets/wrappers/MobileSidbar";
import redCloseBtn from "../assets/image/redCloseBtn.svg";
import Image from "next/image";
import NavLink from "./NavLink";
const MobileSidebar = ({ setMobileSidebar }) => {
  return (
    <Wrappers>
      <div className="container">
        <div className="close-btn" onClick={() => setMobileSidebar(false)}>
          <Image src={redCloseBtn} />
        </div>
        <ul
          onClick={() => {
            setMobileSidebar(false);
          }}
        >
          <NavLink name={"Managed Profile"} url={"/"} />
          <NavLink name={"My Payment"} url={"/payments"} />
          <NavLink name={"Health Record"} url={"/healthRecords"} />
          <NavLink name={"Subscription"} url={"/membership"} />
          <NavLink name={"Address Book"} url={"/addressBook"} />
          <NavLink name={"Notification"} url={"/notification"} />
        </ul>
      </div>
    </Wrappers>
  );
};

export default MobileSidebar;
