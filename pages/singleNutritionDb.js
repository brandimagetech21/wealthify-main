import React from "react";
import PlansMain from "../components/PlansMain";
import SingleNutrition from "../components/SingleNutrition";

const singleNutritionDb = () => {
  return (
    <>
      <PlansMain name={"Nutrition DataBase"} />
      <SingleNutrition />
    </>
  );
};

export default singleNutritionDb;
