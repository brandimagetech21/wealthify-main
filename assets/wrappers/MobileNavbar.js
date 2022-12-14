import styled from "styled-components";

const Wrappers = styled.div`
  /* position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 100;
  display: grid; */
  position: fixed;
  z-index: 100;

  .container {
    position: relative;
    background-color: white;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
  }
  .close-btn,
  li {
    cursor: pointer;
  }
  .close-btn::after,
  .close-btn::before {
    position: absolute;
    top: 3rem;
    right: 2rem;
    content: "";
    width: 40px;
    height: 2px;
    background: black;
  }
  .close-btn::after {
    transform: rotate(45deg);
  }
  .close-btn::before {
    transform: rotate(135deg);
  }
  ul {
    width: 100%;
    margin-top: 6rem;
    text-align: center;
  }
  li {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
  li:nth-child(6) {
    text-decoration: underline;
  }
`;
export default Wrappers;
