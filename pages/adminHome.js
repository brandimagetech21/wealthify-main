import React from "react";
import { useEffect } from "react";
import DoctorHome from "../components/DoctorHome";
import { useAppcontext } from "../context/appContext";

const adminHome = () => {
  const { getAdminHome, details } = useAppcontext();
  useEffect(() => {
    getAdminHome("doctor", {
      api_key: "get",
    });
  }, []);
  return <DoctorHome />;
};

export default adminHome;
