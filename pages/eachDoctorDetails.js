import React, { useEffect } from "react";
import EachDoctorDetails from "../components/EachDoctorDetails";
import { useAppcontext } from "../context/appContext";

const eachDoctorDetails = () => {
  const { getArrOfObj } = useAppcontext();
  useEffect(() => {
    getArrOfObj("doctor", {
      api_key: "get_doctor_s_patient",
      data: {
        doc_id: 12345678,
      },
    });
  }, []);
  return <EachDoctorDetails />;
};

export default eachDoctorDetails;
