import styled from "styled-components";

const Wrappers = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  /* height: 1000vh; */
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 100;
  h1 {
    font-size: 4em;
    font-weight: bold;
    color: darkslategray;
    font-family: "Archivo Black";
  }
  .form {
    background-color: white;
    border-radius: 9rem;
    width: fit-content;
    padding-bottom: 6rem;
    text-align: center;
    margin: 0 auto;
  }

  /* .form {
  height: 35%;
  border: 5px solid $bluegray;
  border-radius: 20%;
    margin-top: 1em;
    text-align: center;
    justify-content: center;
    flex-direction: column;
    background-color: white;
    display: flex;
    padding: 45px;
    padding-bottom: 6rem;
  } */
  .inputcontainer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  input {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
  }
  button {
    justify-content: center;
    align-items: center;
    margin: 2em;
  }
  .container {
    display: flex;
  }
  .form-section {
    margin-left: 4rem;
    width: 70%;
    /* background-color: lightcoral; */
  }
  .img-section {
  }
  form div {
    display: flex;
    flex-direction: column;
    position: relative;
    margin-top: 2rem;
  }
  .first-row {
    display: flex;
    flex-direction: row;
  }
  input {
    padding: 1rem;
  }
  .two-row {
    width: 40vh;
    margin-right: 2rem;
  }
  label {
    position: absolute;
    top: -0.6rem;
    left: 1.5rem;
    background-color: white;
  }
  .btn-green {
    width: 300px;
    background-color: var(--primary-700);
    border-radius: 2rem;
    text-decoration: none;
    border: none;
    color: white;
    position: absolute;
    top: 14rem;
    right: 35%;
  }
  .center-btn {
    position: relative;
  }
  .close-btn {
    margin-left: 55rem;
  }
`;

export default Wrappers;
