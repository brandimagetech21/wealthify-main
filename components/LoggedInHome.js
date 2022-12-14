import React from "react";
import Wrappers from "../assets/wrappers/LoggedInHome";
import ManageProfile from "./ManageProfile";
import Sidebar from "./Sidebar";

const LoggedInHome = ({ children }) => {
  return (
    <Wrappers>
      <div className="container">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="rightside">{children}</div>
      </div>
    </Wrappers>
  );
};

LoggedInHome.Layout = ManageProfile;

export default LoggedInHome;
