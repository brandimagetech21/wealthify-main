import Image from "next/image";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import Wrappers from "../assets/wrappers/Login";
import closeBtn from "../assets/image/closeBtn.svg";
import loginBtn from "../assets/image/loginBtn.png";
import Link from "next/link";
import axios from "axios";
import OtpPage from "./OtpPage";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useAppcontext } from "../context/appContext";
import { useEffect } from "react";
const DoctorLogin = ({ setModal }) => {
  const { otpLogin } = useAppcontext();
  const [resData, setResData] = useState({});
  const [nextPage, setNextPage] = useState(false);
  const loginInfo = {
    mobileNumber: "",
    referalId: "",
    agree: "",
  };
  const [loginData, setLoginData] = useState(loginInfo);
  const updateFeilds = (feilds) => {
    setLoginData((prev) => {
      return { ...prev, ...feilds };
    });
  };

  const handleChange = (e) => {
    updateFeilds({ [e.target.name]: e.target.value });
    console.log({ [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    otpLogin("doctor", {
      api_key: "send_otp",
      ph_num: loginData.mobileNumber,
      referal_id: loginData.referalId,
    });
    setNextPage(true);
  };

  return ReactDOM.createPortal(
    <Wrappers>
      {!nextPage ? (
        <div className="overlay">
          <div className="container">
            <h1 className="name">Hi</h1>
            <div className="close-btn" onClick={() => setModal(false)}>
              <Image src={closeBtn} />
            </div>
            <h3>Please enter your mobile number to login</h3>
            <form action="" typeof="submit" onSubmit={(e) => handleSubmit(e)}>
              <div className="enter-btn">
                {/* <PhoneInput country={"us"} /> */}
                <input
                  className="number"
                  type="text"
                  required="required"
                  placeholder="+91"
                  name="mobileNumber"
                  value={loginData.mobileNumber}
                  onChange={(e) => handleChange(e)}
                />

                <button className="btn" type="submit">
                  <Image src={loginBtn} />
                </button>
              </div>

              <p className="subtitle">
                OTP will be sent to this number by SMS And Whatsapp
              </p>

              <div className="signup">
                {loginData.agree === "agreed" ? (
                  <input
                    type="checkbox"
                    name="agree"
                    id=""
                    required
                    checked
                    value={""}
                    onChange={(e) => handleChange(e)}
                  />
                ) : (
                  <input
                    type="checkbox"
                    name="agree"
                    id=""
                    required
                    value={"agreed"}
                    onChange={(e) => handleChange(e)}
                  />
                )}
                <p>By signing up, I agree to the</p>
              </div>
              {/* </div> */}
            </form>
            <h4>Privacy Policy, Terms and conditions of Dr. Wealthify</h4>
          </div>
        </div>
      ) : (
        <OtpPage
          otpValue={resData.otp}
          loginInformation={resData.data}
          setNextPage={setNextPage}
          setModal={setModal}
          mobileNumber={loginData.mobileNumber}
        />
      )}
    </Wrappers>,
    document.getElementById("modal-root")
  );
};

export default DoctorLogin;
