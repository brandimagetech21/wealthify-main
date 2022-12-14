import Image from "next/image";
import React, { useState } from "react";
import Wrappers from "../assets/wrappers/PrescriptionForm";
import redCloseBtn from "../assets/image/redCloseBtn.svg";
import axios from "axios";
import { useAppcontext } from "../context/appContext";

let patientId;
if (typeof window !== "undefined") {
  patientId = localStorage.getItem("p_id");
}

const PrescriptionForm = ({ setOpenForm }) => {
  const { queryId } = useAppcontext();
  const initialData = {
    record_for: "",
    record_date: "",
    record_name: "",
    prescribed_by: "",
  };
  const handleChange = (e) => {
    let name = e.target.name;
    initialData[name] = e.target.value;
    console.log(initialData);
  };
  const handleSubmit = async (e) => {
    try {
      console.log("ads");
      const { data } = await axios.post(
        `http://doctor.brandimagetech.com/healthrecord.php`,
        // {
        //   api_key: "send_otp",
        //   p_id : '6'

        //   record_date: initialData.record_date,
        //   record_for: initialData.record_for,
        //   record_name: initialData.record_date,
        //   record_prescribe: initialData.record_date,
        // },
        {
          api_key: "add_healthrecord_doc_consul",
          data: {
            p_id: 6,
            recfor: initialData.record_for,
            recdate: initialData.record_date,
            recname: initialData.record_name,
            record_prescribe: initialData.prescribed_by,
          },
        },
        {
          "Content-Type": "application/json;charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
          // Accept: "application/json",
        }
      );

      document.getElementById("firstName").value = null;
      alert("Prescripton Added Successfully");
    } catch (error) {
      console.log({ error: error.response });
    }
  };
  return (
    <Wrappers>
      <div>
        <div className="form">
          <div className="header">
            <div className="close-btn" onClick={() => setOpenForm(false)}>
              <Image src={redCloseBtn} />
            </div>
            <h1>Prescription</h1>
            <p>Please provide your information below.</p>
          </div>
          <div className="center-btn">
            <div className="inputcontainer">
              {/* Below are the text fields that record the user's information. Each uses the onChange event handler, and sets the user input value to the component's state in real time using e.target.value    */}
              <form action="" onSubmit={(e) => handleSubmit(e)}>
                <div className="first-row">
                  <div>
                    <label htmlFor="firstName">Record For</label>
                    <input
                      className="two-row"
                      type="text"
                      id="firstName"
                      placeholder="John"
                      name="record_for"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>

                  <div>
                    <label htmlFor="firstName">Record Date</label>

                    <input
                      type="date"
                      className="two-row"
                      id="firstName"
                      placeholder=""
                      name="record_date"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>
                <div className="first-row">
                  <div>
                    <label htmlFor="firstName">Record Name</label>
                    <input
                      className="two-row"
                      type="text"
                      id="firstName"
                      placeholder="John"
                      name="record_name"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>

                  <div>
                    <label htmlFor="firstName">Record Prescribed By</label>

                    <input
                      type="text"
                      className="two-row"
                      id="firstName"
                      placeholder="john"
                      name="prescribed_by"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>
                {/* <div>
                <label htmlFor="email">Record Name</label>
                <input type="text" id="email" />
              </div> */}
              </form>
            </div>
            <button className="btn-green" onClick={(e) => handleSubmit(e)}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </Wrappers>
  );
};

export default PrescriptionForm;
