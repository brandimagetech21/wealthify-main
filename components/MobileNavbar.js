import React from "react";
import Wrappers from "../assets/wrappers/MobileNavbar";
import NavLink from "./NavLink";

const MobileNavbar = ({ setMenubar }) => {
  return (
    <Wrappers>
      <div className="container">
        <ul onClick={() => setMenubar(false)}>
          <NavLink url={"homeLoggedOut"} name="Home" />
          <NavLink url={"aboutus"} name="About Us" />
          <NavLink url={"plans"} name="Plans" />
          <NavLink url={"recipe"} name="Recipe" />
          <NavLink url={"nutrition"} name="Nutrition" />
          <li>Login</li>
          <li>
            <button className="btn btn-primary">Doctor Login</button>
          </li>
        </ul>
        <div className="close-btn" onClick={() => setMenubar(false)}></div>
      </div>
    </Wrappers>
  );
};

export default MobileNavbar;
