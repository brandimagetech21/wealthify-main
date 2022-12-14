import React from "react";
import Wrappers from "../assets/wrappers/DoctorHome";
import redCloseBtn from "../assets/image/redCloseBtn.svg";

const data = [
  { patientName: "2435346", callDuration: "sanjay" },
  { patientName: "3452345", callDuration: "john" },
  { patientName: "3452345", callDuration: "john" },
  { patientName: "3452345", callDuration: "john" },
  { patientName: "3452345", callDuration: "john" },
  { patientName: "3452345", callDuration: "john" },
  { patientName: "3452345", callDuration: "john" },
  { patientName: "3452345", callDuration: "john" },
  { patientName: "3452345", callDuration: "john" },
];
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAppcontext } from "../context/appContext";
const EachPatientDetails = () => {
  const router = useRouter();
  const { details } = useAppcontext();
  const redirectToHealthRecords = (id) => {
    router.push(`/healthRecords?${id}`);
  };
  if (!details) {
    return;
  }
  return (
    <Wrappers>
      <table className="doctor-heading">
        <thead>
          <tr>
            <th>Patient Id</th>
            <th>Patient Name</th>
            {/* <th>Export</th> */}
          </tr>
          {details.map((item) => {
            const { p_id, first_name, last_name } = item;
            return (
              <tr onClick={() => redirectToHealthRecords(p_id)}>
                <td>{p_id}</td>
                <td> {first_name + last_name} </td>
              </tr>
            );
          })}
        </thead>
      </table>
    </Wrappers>
  );
};

export default EachPatientDetails;
