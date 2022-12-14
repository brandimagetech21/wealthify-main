import React from "react";
import styled from "styled-components";

const Wrappers = styled.div`
  background-image: url("./nutritionBg.svg");
  width: 100%;
  height: 30vh;
  /* position: absolute;
  top: 200px; */
  h1 {
    text-align: center;
  }
  .heading-font {
    margin-top: 2rem;
  }
`;

const PlansMain = ({ name }) => {
  return (
    <Wrappers>
      <div className="container">
        <h1 className="heading-font">{name}</h1>
      </div>
    </Wrappers>
  );
};

export default PlansMain;
