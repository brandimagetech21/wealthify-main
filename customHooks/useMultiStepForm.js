import React, { useState } from "react";
import { useAppcontext } from "../context/appContext";

const useMultiStepForm = (steps) => {
  const { agree } = useAppcontext();
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  function next() {
    setCurrentStepIndex((prev) => {
      if (prev >= steps.length - 1) {
        return prev;
      }
      if (!agree) {
        alert("please agree to the terms and condition to proceed");
        return prev;
      }
      return prev + 1;
    });
  }

  function back() {
    setCurrentStepIndex((prev) => {
      if (prev <= 0) return prev;
      return prev - 1;
    });
  }

  function goTo(index) {
    setCurrentStepIndex(index);
  }
  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    goTo,
    next,
    back,
  };
};

export default useMultiStepForm;
