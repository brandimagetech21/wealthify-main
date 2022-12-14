import styled from "styled-components";

const Wrappers = styled.div`
  @font-face {
    font-family: bite-chocolate;
    src: url("../utils/font/Bite\ Chocolate\ Personal\ Use.ttf");
  }

  @import url("https://fonts.googleapis.com/css2?family=Arizonia&display=swap");
  position: absolute;
  top: 0;
  z-index: -1;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-image: url("./homeBg1.svg");
  background-repeat: no-repeat;
  background-size: 100%, 100% 550px, 450px 500px, 600px;
  /* position: relative; */
  background-position-x: 100%, 230px, 85%;
  background-position-y: 100%, bottom, 200px;
  .container {
    position: relative;
    top: 45%;
    margin-left: 10%;
  }

  h1 {
    margin-top: -2rem;
    /* font-family: "Arizonia", cursive; */
    font-family: bite-chocolate;
    color: var(--font-color);
    font-size: 3rem;
    font-weight: 200;
  }
  p {
    padding-left: 1vh;
    font-size: 1.3rem;
  }
  .btn {
    margin-top: 3rem;
    background-color: var(--primary-700);
    padding: 1rem 2rem;
    border: none;
    border-radius: 2rem;
    color: white;
  }
  .verline {
    border-left: 4px solid green;
    padding-right: 2rem;
  }
  .second-container {
    margin-top: 2rem;
  }
  .line {
    font-size: 1.2rem;
  }
  .ss {
    margin-left: 1rem;
  }
  .second-line {
    font-weight: 700;
  }
  @media (max-width: 480px) {
    margin-top: -6rem;
    h1 {
      margin-top: 2rem;
      font-size: 1.8rem;
    }
  }
`;

export default Wrappers;
