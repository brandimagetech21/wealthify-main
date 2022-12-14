import React from "react";
import Wrappers from "../assets/wrappers/AssessmentForm1";
import nextBtn from "../assets/image/nextBtn.svg";
import Image from "next/image";
import FormRow from "./customComponents.js/FormRow";
import FormRowSelect from "./customComponents.js/FormRowSelect";
const weightRange = () => {
  let arr = [];
  for (let i = 40; i < 120; i++) {
    arr.push(i);
  }
  return arr;
};
const AssessmentForm2 = ({
  todayDate,
  sex,
  age,
  height,
  currentWeight,
  normalWeight,
  pastWeight,
  updateFeilds,
  bloodGroup,
}) => {
  const handleInput = (e) => {
    console.log({ [e.target.name]: e.target.value });
    updateFeilds({ [e.target.name]: e.target.value });
  };
  return (
    <Wrappers>
      <div className="container">
        <section className="form-section">
          <h1 className="heading">Demographic Data</h1>
          <p>Welcome to Wealthify </p>
          <div className="form">
            <div className="two-input">
              <div className="input">
                <FormRow
                  type={"date"}
                  name="todayDate"
                  value={todayDate}
                  labelText="Today Date"
                  handleChange={(e) => handleInput(e)}
                />
                {/* <label htmlFor="">Today's Date</label>
                <input type="date" placeholder="" /> */}
              </div>

              <div className="input">
                <FormRowSelect
                  labelText="Sex"
                  type="text"
                  name="sex"
                  value={sex}
                  list={["Male", "Female"]}
                  handleChange={handleInput}
                />
                {/* <label htmlFor="">Sex</label>
                <select name="" id="">
                  <option value="">Male</option>
                  <option value="">Female</option>
                </select> */}
                {/* <input type="text" placeholder="Doe" /> */}
              </div>
            </div>
            <div className="one-input">
              <div className="input">
                <FormRow
                  type={"text"}
                  name="age"
                  value={age}
                  labelText="Age"
                  handleChange={(e) => handleInput(e)}
                />
                {/* <label htmlFor="">Age </label>
                <input type="text" placeholder="32" /> */}
              </div>
            </div>
            <div className="two-input">
              <div className="input">
                <FormRow
                  type={"text"}
                  name="height"
                  value={height}
                  labelText="Height"
                  handleChange={(e) => handleInput(e)}
                />
                {/* <label htmlFor="">Height</label>
                <input type="text" placeholder="190" /> */}
              </div>
              <div className="input">
                <FormRowSelect
                  type={"text"}
                  name="bloodGroup"
                  value={bloodGroup}
                  labelText="Blood Group"
                  list={["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]}
                  handleChange={(e) => handleInput(e)}
                />
                {/* <label htmlFor="">Height</label>
                <input type="text" placeholder="190" /> */}
              </div>
            </div>
            <div className="one-input">
              {/* <div className="input">
<FormRow
                  type={"date"}
                  name="height"
                  value={height}
                  labelText="Height"
                  handleChange={(e) => handleInput(e)}
                />
                <label htmlFor="">DOB</label>
                <input type="date" />
              </div> */}
            </div>
            <div className="three-input">
              <div className="input">
                <FormRowSelect
                  labelText="Current Weight"
                  type="text"
                  name="currentWeight"
                  value={currentWeight}
                  list={weightRange()}
                  handleChange={(e) => handleInput(e)}
                />
                {/* <label htmlFor="">Current Weight</label>
                <select name="" id="">
                  <option value="">50</option>
                </select> */}
              </div>
              <div className="input">
                <FormRowSelect
                  labelText="Normal Weight"
                  type="text"
                  name="normalWeight"
                  value={normalWeight}
                  list={weightRange()}
                  handleChange={(e) => handleInput(e)}
                />
                {/* <label htmlFor="">Normal Weight</label>
                <select name="" id="">
                  <option value="">50</option>
                </select> */}
              </div>
              <div className="input">
                <FormRowSelect
                  labelText="Weight 6 Month Ago"
                  type="text"
                  name="pastWeight"
                  value={pastWeight}
                  list={weightRange()}
                  handleChange={(e) => handleInput(e)}
                />
                {/* <label htmlFor="">Weight 6 Month Ago</label>
                <select name="" id="">
                  <option value="">50</option>
                </select> */}
              </div>
            </div>
          </div>
          {/* sdf */}
        </section>

        <section className="img-section"></section>
      </div>
    </Wrappers>
  );
};

export default AssessmentForm2;
