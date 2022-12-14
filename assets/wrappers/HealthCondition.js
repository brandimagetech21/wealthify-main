import React from "react";
import styled from "styled-components";

const Wrappers = styled.div`
  width: 700px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 480px) {
    width: 300px;
  }
`;

const HealthCondition = () => {
  return (
    <Wrappers>
      <div className="health-condition">health condition</div>
    </Wrappers>
  );
};

export default HealthCondition;
