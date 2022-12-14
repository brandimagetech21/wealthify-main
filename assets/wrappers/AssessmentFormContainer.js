import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AssessmentForm1 from "../../components/AssessmentForm1";
import AssessmentForm2 from "../../components/AssessmentForm2";
import AssessmentForm3 from "../../components/AssessmentForm3";
import AssessmentForm4 from "../../components/AssessmentForm4";
import AssessmentForm5 from "../../components/AssessmentForm5";
import useMultiStepForm from "../../customHooks/useMultiStepForm";
import nextBtn from "../image/nextBtn.svg";
import Wrappers from "./AssessmentForm1";
import { initialData } from "../../utils/assessmentData";
import { useRouter } from "next/router";
import { mobile } from "fontawesome";
let mobileNumber;
if (typeof window !== "undefined") {
  // Perform localStorage action

  mobileNumber = localStorage.getItem("phoneNumber");
}
if (mobileNumber == null) {
  if (typeof window !== "undefined") {
    //window.location.reload();
  }
}


const AssessmentFormContainer = () => {
  const router = useRouter();
  mobileNumber = router.asPath.split("?")[1];
  //assessmentData.mobile_num = mobileNumber;
console.log(mobileNumber, '====mobileNumber');
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(assessmentData);
    try {
      const { data } = await axios.post(
        `
     http://doctor.brandimagetech.com/patient.php`,
        {
          api_key: "add",
          assessmentData: assessmentData,
        },
        {
          "Content-Type": "application/json;charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
        }
      );
      if (data.status === "success") {
        localStorage.setItem("p_id", data.data.p_id);
        localStorage.setItem("loggedIn", true);
        localStorage.setItem("doctorId", data.data.doctor_id);

        //router.reload(window.location.pathnames);
        router.push("/membership");
      }
      console.log(data.data.p_id);

    } catch (error) {
      console.log({ error: error.response });
    }
  };

  const updateFeilds = (feilds) => {
    setAssessmentData((prev) => {
      return { ...prev, ...feilds };
    });
  };

  const [assessmentData, setAssessmentData] = useState(initialData);

  const { steps, currentStepIndex, back, goTo, next, step } = useMultiStepForm([
    <AssessmentForm1
      {...assessmentData}
      updateFeilds={updateFeilds}
    ></AssessmentForm1>,
    <AssessmentForm2
      {...assessmentData}
      updateFeilds={updateFeilds}
    ></AssessmentForm2>,
    <AssessmentForm3
      {...assessmentData}
      setAssessmentData={setAssessmentData}
      updateFeilds={updateFeilds}
    ></AssessmentForm3>,
    <AssessmentForm4
      {...assessmentData}
      assessmentData={assessmentData}
      updateFeilds={updateFeilds}
    ></AssessmentForm4>,
    <AssessmentForm5
      {...assessmentData}
      updateFeilds={updateFeilds}
    ></AssessmentForm5>,
  ]);
  const [responseData, setResponseData] = useState({});

  const nextPage = (e) => {
    e.preventDefault();
    next();
    console.log(currentStepIndex);
    window.scrollTo(0, 0);
  };
  const prevPage = (e) => {
    e.preventDefault();
    back();
    window.scrollTo(0, 0);
  };
  return (
    <>
      <form action="">
        {step}
        <Wrappers>
          <footer>
            <p>Assessment form </p>
            <div className="prev btn-container">
              <button
                type=""
                className="btn prev-btn"
                onClick={(e) => prevPage(e)}
              >
                <Image src={nextBtn} />
              </button>
              <p>Back</p>
            </div>
            <div className="underline"></div>
            {currentStepIndex === 4 ? (
              <button
                type="submit"
                className="btn btn-primary"
                onClick={(e) => handleSubmit(e)}
              >
                submit
              </button>
            ) : (
              <div className="next btn-container" onClick={(e) => nextPage(e)}>
                <button className="btn  next-btn">
                  <Image src={nextBtn} />
                </button>

                <p>next</p>
              </div>
            )}
          </footer>
        </Wrappers>
      </form>
    </>
  );
};

export default AssessmentFormContainer;
