import Image from "next/image";
import React from "react";
import Wrappers from "../assets/wrappers/ManageProfile";
import rightArrow from "../assets/image/rightArrow.svg";
import { useEffect } from "react";
import { useAppcontext } from "../context/appContext";
import { useState } from "react";
import formatDate from "../utils/dateFormat";
let patientId;
if (typeof window !== "undefined") {
  patientId = localStorage.getItem("p_id");
}
const ManageProfile = () => {
  const { firstName, lastName, sex, phoneNumber, dob } = useAppcontext();

  return (
    <Wrappers>
      <div className="right-icon">
        <Image src={rightArrow} width="40px" height="40px" />
      </div>
      <div className="container">
        <h2 className="name">
          {" "}
          {firstName} {lastName}{" "}
        </h2>
        <div className="subtitle">
          <p>
            {sex}: | {phoneNumber}
          </p>
          <p>DOB: {formatDate(dob)}</p>
        </div>
      </div>
    </Wrappers>
  );
};
ManageProfile.Layout = ManageProfile;
export default ManageProfile;
