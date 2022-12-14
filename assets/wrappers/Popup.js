import styled from "styled-components";

const wrappers = styled.div`
  position: fixed;
  top: 30%;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  left: 30%;
  z-index: 100;
  background-color: gray;
  display: flex;
  align-content: center;
  justify-content: center;
  width: fit-content;
  padding: 8rem;
  .input-container {
    display: flex;
    flex-direction: column;
  }
  .submit-btn {
  }
`;
export default wrappers;
