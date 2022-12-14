import React, { useEffect , useRef } from "react";
import Wrappers from "../assets/wrappers/Membership";
import { useAppcontext } from "../context/appContext";
import HealthRecords from "../components/HealthRecords";
import LoggedInHome from "../components/LoggedInHome";
import { useRouter } from "next/router";
let patientId;
if (typeof window !== "undefined") {
  patientId = localStorage.getItem("p_id");
}
const HealthRecord = () => {
  const { getSubscription, subscriptionPlanCount, getData } = useAppcontext();
  const router = useRouter();
  const queryId = router.asPath.split("?")[1];

  const id = patientId === "undefined" ? queryId : patientId;
  const effectRan = useRef(false);
  useEffect(() => {
    if (effectRan.current === false) {
      getSubscription("subscription", { api_key: "get", p_id: patientId });
      getData("patient", {
        api_key: "get_personal_info",
        data: { p_id: id },
      });
      return () => {
        effectRan.current = true;
      };
    }
  }, []);

  return (
    <>
      <HealthRecords />
    </>
  );
};
HealthRecord.Layout = LoggedInHome;
export default HealthRecord;
