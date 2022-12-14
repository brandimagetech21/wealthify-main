import Image from "next/image";
import React from "react";
import closeBtn from "../assets/image/closeBtn.svg";
import Wrappers from "../assets/wrappers/Menu";
const Menu = ({ setMenu }) => {
  return (
    <Wrappers>
      <div className="container ">
        <div className="first-part">
          <h1 className="name">John Doe</h1>
          <button className="close-btn btn" onClick={() => setMenu(false)}>
            <Image src={closeBtn} />
          </button>
        </div>
        <div className="dark-underline"></div>
        <div className="second-part">
          <p className="age">Male:30</p>
          <p className="mobile-number">+91 7883883782</p>
        </div>
        <div className="light-underline"></div>
        <ul>
          <li>Manage Profile</li>
          <li>Address</li>
          <li>My Payments</li>
          <li>Health Records</li>
          <li>Need Help?</li>
          <li>Logout</li>
        </ul>
      </div>
    </Wrappers>
  );
};

export default Menu;
