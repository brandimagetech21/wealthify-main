import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Wrappers from "../assets/wrappers/AssessmentForm1";
import nextBtn from "../assets/image/nextBtn.svg";
import FormRow from "./customComponents.js/FormRow";
import { useAppcontext } from "../context/appContext";

const data = [
  "Your signature below indicates your permission and willingness to participate in the below assessments, questionnaires and interviews and consider the potential program or recommendations, including interviews, counselling, medical nutrition therapy, personal training sessions and subsequent dietary/nutrition/exercise/health recommendations. All information and data discussed, written, typed, or communicated will be strictly confidential between the patient and the healthcare team.",
  "You consent receive to SMS, call, What's App, email, electronic or other means of communication from us, our associates or our third-party service providers.",
  "You agree that the information you provide in the forms, assessments and interviews is accurate and current to the best of your ability. The healthcare team is dedicated to assisting you in achieving your goals; encouraging and motivating you to overcome obstacles; equipping you to make healthy decisions and not giving up on you or your goals.",
  "You also acknowledge that healthcare team is not solely responsible for your complete healthcare and any changes or concerns in your health must be communicated to healthcare team.",
  "Your next program/ diet session depends on the progress made in your earlier session and information shared by you (reply to questions asked by your mentor/dietician/Doctor) hence all the diet sessions cannot and shall not be sent to you together.",
  "Consent is obtained for the non-refund of the cost (Fee).",
  "You are responsible for securely preserving your login credentials to prevent account misuse. You must not support any religious or political viewpoints or propaganda.",
];
//let mobileNumber;
if (typeof window !== "undefined") {
  // Perform localStorage action

  //mobileNumber = localStorage.getItem("phoneNumber");
}
//const router = useRouter();
//const mobileNumber = router.asPath.split("?")[1];



const AssessmentForm1 = ({
  refer_id,
  f_name,
  l_name,
  mobile_num,
  email,
  dob,
  agree,
  updateFeilds,
}) => {
  const router = useRouter();
  mobile_num = router.asPath.split("?")[1];
  console.log(mobile_num, 'mobileNumber');

  const { setAgree } = useAppcontext();
  const handleInput = (e) => {
    console.log(e.target.value);
    let name = e.target.name;
    console.log({ [e.target.name]: e.target.value });
    updateFeilds({ [e.target.name]: e.target.value });
    updateFeilds({ refer_id: localStorage.getItem("referalId") });
    updateFeilds({ mobile_num: mobile_num });
  };
  const handleCheckBox = (e) => {
    let value = e.target.checked ? e.target.value : "";
    console.log({ [e.target.name]: value });
    setAgree(value);
    updateFeilds({ [e.target.name]: e.target.value });
  };
  return (
    <Wrappers>
      <div className="container">
        <section className="form-section">
          <h1 className="heading">
            Nutrition Assessment Forms & Questionnaires
          </h1>
          <p>Welcome to Wealthify </p>
          <div className="form">
            <div className="two-input">
              <div className="input">
                {/* <label htmlFor="">First Name</label>
                <input
                  type="text"
                  placeholder="John"
                  required
                  value={f_name}
                  onChange={(e) => updateFeilds({ f_name: e.target.value })}
                /> */}
                <FormRow
                  type={"text"}
                  name="f_name"
                  value={f_name}
                  labelText="First Name"
                  handleChange={(e) => handleInput(e)}
                />
              </div>
              <div className="input">
                <FormRow
                  type={"text"}
                  name="l_name"
                  value={l_name}
                  labelText="Last Name"
                  handleChange={(e) => handleInput(e)}
                />
                {/* <label htmlFor="">Last Name</label>
                <input type="text" placeholder="Doe" /> */}
              </div>
            </div>
            <div className="one-input">
              <div className="input">
                <FormRow
                  type={"text"}
                  name="mobile_num"
                  value={mobile_num}
                  labelText="Phone Number"
                  handleChange={(e) => handleInput(e)}
                />
                {/* <label htmlFor="">Phone Number</label>
                <input type="text" value={"+91"} placeholder="" /> */}
              </div>
            </div>
            <div className="one-input">
              <div className="input">
                <FormRow
                  type={"text"}
                  name="email"
                  value={email}
                  labelText="Email"
                  handleChange={(e) => handleInput(e)}
                />
                {/* <label htmlFor="">Email</label>
                <input type="text" placeholder="john@gmail.com" /> */}
              </div>
            </div>
            <div className="one-input">
              <div className="input">
                <FormRow
                  type={"date"}
                  name="dob"
                  labelText="DOB"
                  handleChange={handleInput}
                />
                {/* <label htmlFor="">DOB</label>
                <input type="date" /> */}
              </div>
            </div>
          </div>
          {/* sdf */}
        </section>

        <section className="img-section"></section>
      </div>
      <div className="bottom">
        <div className="terms-container">
          <ul>
            <li>
              <div className="agree-btn">
                <input
                  type="checkBox"
                  name="agree"
                  value={"1"}
                  onChange={(e) => {
                    handleCheckBox(e);
                  }}
                />
                <p>I agree to terms & condition</p>
              </div>
            </li>
            {data.map((item) => {
              return <li>{item}</li>;
            })}
            <li></li>
          </ul>
        </div>
      </div>
      {/* <footer>
        <div>Assessment Form 1</div>
        <button className="btn">
          <div className="next">
            <Image src={nextBtn} />
            <p>NEXT</p>
          </div>
        </button>
      </footer> */}
    </Wrappers>
  );
};

export default AssessmentForm1;
