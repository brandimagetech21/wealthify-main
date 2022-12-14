import React from "react";
import PlansMain from "../components/PlansMain";
import Mission from "../components/Mission";
import Strategy from "../components/Strategy";
import Vision from "../components/Vision";
import Working from "../components/Working";
import Team from "../components/Team";
import SingleNutrition from "../components/SingleNutrition";
import ReversalQuestion from "../components/ReversalQuestion";
import DoctorHome from "../components/DoctorHome";
import MembershipCard from "../components/MembershipCard";
import EachDoctorDetails from "../components/EachDoctorDetails";
import EachPatientDetails from "../components/EachPatientDetails";
import DoctorDashboard from "../components/DoctorDashboard";
import AssessmentForm1 from "../components/AssessmentForm1";
import AssessmentForm2 from "../components/AssessmentForm2";
import AssessmentForm3 from "../components/AssessmentForm3";
import AssessmentFormContainer from "../assets/wrappers/AssessmentFormContainer";
import AssessmentForm4 from "../components/AssessmentForm4";
import MobileNavbar from "../components/MobileNavbar";
import OtpPage from "../components/OtpPage";
import { useEffect } from "react";
import { useAppcontext } from "../context/appContext";
import Fileupload from "../components/Fileupload";
import Loading from "../components/Loading";
import Fileupload2 from "../components/FileUpload2";
import Popup from "../components/Popup";

const aboutus = () => {
  return (
    <div style={{ margin: "0 auto" }}>
      <PlansMain name={"About us"} />
      <Vision />
      <Strategy />
      <Mission />
      <Working />
      <Team />
    </div>
  );
};

export default aboutus;
