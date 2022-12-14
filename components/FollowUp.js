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
const FollowUp = () => {
  return (
    <Wrappers>
      <div>
        <h2>Your next call is on: 19/10/2022</h2>
      </div>
    </Wrappers>
  );
};

export default FollowUp;
