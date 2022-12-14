import Wrappers from "../assets/wrappers/EachDoctorDetails";

import redCloseBtn from "../assets/image/redCloseBtn.svg";

import React from "react";
import Image from "next/image";

const OpenCalender = ({ setOpenCalender }) => {
  return (
    <Wrappers>
      <div className="container">
        <div className="close-btn" onClick={() => setOpenCalender(false)}>
          <Image src={redCloseBtn} />
        </div>
        <h1 className="heading">
          Please select the date range to download Doctor data
        </h1>
        <form action="" onSubmit={(e) => e.preventDefault()}>
          <div className="container">
            <div className="input">
              <label htmlFor="">From Date</label>
              <input type="date" />
            </div>
            <div className="input">
              <label htmlFor="">To Date</label>
              <input type="date" />
            </div>
            <button className="btn btn1" type="submit">
              Download
            </button>
          </div>
        </form>
      </div>
    </Wrappers>
  );
};

export default OpenCalender;
