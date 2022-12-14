import LoggedInHome from "../components/LoggedInHome";
import React, { useEffect, useRef } from "react";
import Wrappers from "../assets/wrappers/Membership";
import ManageProfile from "../components/ManageProfile";
import Loading from "../components/Loading";
import { useAppcontext } from "../context/appContext";
import { useState } from "react";
let patientId;
if (typeof window !== "undefined") {
  patientId = localStorage.getItem("p_id");
}
const ManagedProfile = () => {
  const {
    loading,
    getSubscription,
    getData,
    subscriptionPlanCount,
    commonData,
  } = useAppcontext();

  const effectRan = useRef(false);
  useEffect(() => {
    if (effectRan.current === false) {
      getSubscription("subscription", { api_key: "get", p_id: patientId });
      getData("patient", {
        api_key: "get_personal_info",
        data: { p_id: patientId },
      });

      return () => {
        effectRan.current = true;
      };
    }
  }, []);
  console.log(subscriptionPlanCount);
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      {subscriptionPlanCount ? (
        <ManageProfile />
      ) : (
        <Wrappers>
          <h1>buy subscription</h1>
        </Wrappers>
      )}
    </>
  );
};

ManagedProfile.Layout = LoggedInHome;
export default ManagedProfile;
