import React from "react";
import PlansMain from "../components/PlansMain";
import Recipes from "../components/Recipes";
const singleRecipe = () => {
  return (
    <>
      <PlansMain name={"Recipe"} />
      <Recipes />
    </>
  );
};

export default singleRecipe;
