import { useEffect } from "react";
import LoggedInHome from "../components/LoggedInHome";
import Login from "../components/Login";
import ManageProfile from "../components/ManageProfile";
import { useAppcontext } from "../context/appContext";

import Wrappers from "../assets/wrappers/Membership";
let patientId;
if (typeof window !== "undefined") {
  patientId = localStorage.getItem("p_id");
  console.log(window.location.pathnames, 'window.location.pathnames');

}
export default function Home() {
  const { getSubscription, getData, subscriptionPlanCount, commonData } =
    useAppcontext();
  useEffect(() => {
    getSubscription("subscription", { api_key: "get", p_id: patientId });
    getData("patient", {
      api_key: "get_personal_info",
      data: { p_id: patientId },
    });
  }, []);
  return (
    <div>
      {subscriptionPlanCount ? (
        <ManageProfile />
      ) : (
        <Wrappers>
          <h1>ss buy subscription</h1>
        </Wrappers>
      )}
    </div>
  );
}

Home.Layout = LoggedInHome;
