import React from "react";
import { useEffect } from "react";
import EachPatientDetails from "../components/EachPatientDetails";
import { useAppcontext } from "../context/appContext";

const eachPatient = () => {
  const { getArrOfObj, getEachDoctorPatient, details } = useAppcontext();
  useEffect(() => {
    getArrOfObj("doctor", {
      api_key: "get_doctor_s_patient",
      data: {
        doc_id: 12345678,
      },
    });
  }, []);
  return <EachPatientDetails />;
};

export default eachPatient;
