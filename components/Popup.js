import React from "react";
import Wrappers from "../assets/wrappers/Popup";

export const Popup = ({ onSubmit }) => {
  return (
    <Wrappers>
      <form action="">
        <div className="input-container">
          <label htmlFor="">Name</label>
          <input type="text" />
        </div>
        <div className="input-container">
          <label htmlFor="">Email Address</label>
          <input type="text" />
        </div>
        <div className="btn submit-buttom">Submit</div>
      </form>
    </Wrappers>
  );
};
export default Popup;
