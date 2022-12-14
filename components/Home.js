import React from "react";
import Wrappers from "../assets/wrappers/Home.js";
const Home = () => {
  return (
    <Wrappers>
      <div className="container">
        <h1>Diabetes Reversal</h1>

        <div className="first-line line">
          A Personalized Evidence-Based Path to
        </div>
        <div className="second-line mt0-5rem line">
          Type-2 Diabetes & Pre- Diabetes Reversal
        </div>
        <div className="second-container verline">
          <div className="first-line line ss">Book The Diabetes Reversal</div>
          <div className="first-line line mt0-5rem ss">
            Session With <b> Dr.Wealthify </b> to Know how
          </div>
        </div>
        <button className="btn">Get in Touch</button>
      </div>
    </Wrappers>
  );
};
<p>
  A personalized evidence-based path to
  <br />
  {/* <div className="mt0-5rem bold"> */}
  Type-2 diabetes & Pre- diabetes Reversal
  {/* </div> */}
</p>;
export default Home;
