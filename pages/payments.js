import React, { useEffect } from "react";
import LoggedInHome from "../components/LoggedInHome";
import MyPayments from "../components/MyPayments";
import { useAppcontext } from "../context/appContext";
import Wrappers from "../assets/wrappers/Membership";
let patientId;
if (typeof window !== "undefined") {
  patientId = localStorage.getItem("p_id");
}
const Payments = () => {
  const { getSubscription, subscriptionPlanCount } = useAppcontext();

  useEffect(() => {
    getSubscription("subscription", { api_key: "get", p_id: patientId });
  }, []);
  return (
    <>
      {subscriptionPlanCount ? (
        <MyPayments />
      ) : (
        <Wrappers>
          <h1>buy subscription</h1>
        </Wrappers>
      )}
    </>
  );
};
Payments.Layout = LoggedInHome;

export default Payments;
