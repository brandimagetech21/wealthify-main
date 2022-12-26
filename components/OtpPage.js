import Image from "next/image";
import React, { useEffect, useState } from "react";
import Wrappers from "../assets/wrappers/OtpPage";
import loginBtn from "../assets/image/loginBtn.png";
import { AiOutlineArrowLeft, AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/router";
import Link from "next/link";
import { useAppcontext } from "../context/appContext";

let userType;
if (typeof window !== "undefined") {
  //userType = localStorage.getItem("user_type");
} 
const OtpPage = ({ setModal, setNextPage, mobileNumber, loginInformation }) => {
  const router = useRouter();
  const { otpValue, numberExist, patientId, doctorId, phoneNumber } =
    useAppcontext();
  const [otp, setOtp] = useState("");
  const handleChange = (e) => {
    setOtp(e.target.value);
  };
  useEffect(() => {
    userType = localStorage.getItem("user_type");
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    var decodedString = window.btoa(otp);
    // if (otpValue === decodedString) {
    if (otpValue === decodedString) {
      //localStorage.setItem("loggedIn", true);
      if (numberExist === 0) {
        router.push(`/assessment?${phoneNumber}`);
      } else if (userType === "doctor") {
        localStorage.setItem("loggedIn", true);
        //localStorage.setItem("doctorId", doctorId);
        router.push("/doctorHome");
      } else if (numberExist === 1) {
        localStorage.setItem("loggedIn", true);
        //localStorage.setItem("doctorId", doctorId);
        router.reload(window.location.pathnames);
      }
      setModal(false);
      console.log("sucess");
      // router.reload(window.location.pathnames);
    } else {
      alert("Otp is wrong please try again");
    }
  };
  return (
    <Wrappers>
      <div className="overlay">
        <div className="container">
          <div className="top-section">
            <div className="left-arrrow">
              <AiOutlineArrowLeft onClick={() => setNextPage(false)} />
            </div>
            <div className="close-btn">
              <AiOutlineClose onClick={() => setModal(false)} />
            </div>
            <h2>great</h2>
            <p>{`Now type in the OTP sent to  ${mobileNumber} for authentication`}</p>
            <div className="otp-container">
              <input
                className="text"
                type="text"
                name="otp"
                id=""
                onChange={(e) => handleChange(e)}
              />
              <button className="btn">
                <Image src={loginBtn} onClick={(e) => handleSubmit(e)} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Wrappers>
  );
};

export default OtpPage;
