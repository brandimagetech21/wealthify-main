import React, { useEffect } from "react";
import LoggedInHome from "../components/LoggedInHome";
import Membership from "../components/Membership";
import { useAppcontext } from "../context/appContext";
let patientId;
if (typeof window !== "undefined") {
  patientId = localStorage.getItem("p_id");
}
const MembershipPage = () => {
  const { getSubscription } = useAppcontext();

  useEffect(() => {
    getSubscription("subscription", { api_key: "get", p_id: patientId });
  }, []);
  return (
    <>
      <Membership />
    </>
  );
};
MembershipPage.Layout = LoggedInHome;
export default MembershipPage;
