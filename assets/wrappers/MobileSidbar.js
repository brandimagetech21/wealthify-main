import styled from "styled-components";

const Wrappers = styled.div`
  position: fixed;
  z-index: 101;
  .container {
    position: relative;
    background-color: white;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .close-btn {
    position: absolute;
    top: 2rem;
    right: 2rem;
  }
  ul {
  }
  li {
    margin-bottom: 2rem;
    text-align: center;
  }
`;

export default Wrappers;
