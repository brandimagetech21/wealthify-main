import { useRouter } from "next/router";
import React, { useState } from "react";
import styled from "styled-components";
import Wrappers from "../assets/wrappers/DoctorHome";
import { useAppcontext } from "../context/appContext";
import EachDoctorDetails from "./EachDoctorDetails";
import OpenCalender from "./OpenCalender";
const data = [
  { id: 23034534, workingHours: "8hrs", name: "john" },
  { id: 23034534, workingHours: "8hrs", name: "john" },
  { id: 23034534, workingHours: "8hrs", name: "john" },
  { id: 23034534, workingHours: "8hrs", name: "john" },
  { id: 23034534, workingHours: "8hrs", name: "john" },
  { id: 23034534, workingHours: "8hrs", name: "john" },
  { id: 23034534, workingHours: "8hrs", name: "john" },
];

const DoctorHome = () => {
  const [state, setState] = useState(false);
  const [openCalender, setOpenCalender] = useState(false);
  const { adminDetails, details } = useAppcontext();
  if (!adminDetails) {
    return;
  }
  const router = useRouter();
  const handleClick = () => {
    router.push("/eachDoctorDetails");
  };
  return (
    <Wrappers>
      {/* {state ? <EachDoctorDetails setState={setState} /> : null} */}
      {openCalender ? <OpenCalender setOpenCalender={setOpenCalender} /> : null}

      <div className="table-container">
        <table className="doctor-heading">
          <thead>
            <tr>
              <th>Doctor Id</th>
              <th>Doctor Name</th>
              <th>Working Hours</th>
              <th>Export</th>
            </tr>
            {adminDetails.map((item) => {
              const { doc_id, doc_name, working_hrs } = item;
              return (
                <tr>
                  <td onClick={() => handleClick()}>{doc_id}</td>
                  <td onClick={() => handleClick()}> {doc_name} </td>
                  <td onClick={() => handleClick()}>{working_hrs}</td>
                  <td>
                    <button
                      className="btn"
                      onClick={() => setOpenCalender(true)}
                    >
                      download
                    </button>
                  </td>
                </tr>
              );
            })}
          </thead>
        </table>
      </div>
    </Wrappers>
  );
};

export default DoctorHome;
