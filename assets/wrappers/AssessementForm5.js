import styled from "styled-components";

const Wrappers = styled.div`
  width: 90%;
  margin: 0 auto;
  .heading {
    padding: 2rem;
  }
  table,
  th,
  td {
    border: 1px solid black;
    border-collapse: collapse;
  }
  th:first-child {
    width: 50%;
  }
  th,
  td {
    padding: 0.4rem;
  }
  .checkbox,
  .text-area {
    display: flex;
    justify-content: center;
    align-content: center;
  }
  textarea {
    width: 100%;
    outline: none;
    border: none;
  }
  .text-area {
    width: 100%;
  }
  .check {
    display: flex;
    align-items: center;
  }
  .checkbox:checked:before {
    background-color: green;
  }
  input {
    font-size: 2rem;
  }
  .checkbox-container {
    margin-left: 1rem;
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
    justify-content: space-around;
    width: 700px;
  }
  .check {
    width: 200px;
  }
  .check label {
    margin-left: 0.5rem;
  }

  .questions div {
    display: flex;
  }
  .questions {
    margin-left: -3.5rem;
  }
  .questions p {
    font-size: 1.4rem;
  }
  .questions label {
    font-size: 1.1rem;
    margin-right: 1rem;
  }
  .text-area {
    /* outline: 1px solid black; */
  }
  .bottom-container {
    margin-left: 1rem;
    margin-top: 5rem;
  }
  .bottom-container p {
    font-size: 1.3rem;
  }
  .questions-container {
    margin-top: 2rem;
  }
  .questions-input {
    display: flex;
  }
  .food-area p {
    margin: 3rem 0;
    font-size: 1.3rem;
  }
  .food-area textarea {
    width: 60%;
    outline: 1px solid black;
  }
  @media (max-width: 480px) {
    .table-one,
    .table-two {
      overflow: scroll;
    }
    .checkbox {
      width: 180px;
      justify-content: space-between;
    }
    .checkbox-container {
      width: 100px;
      justify-content: space-between;
    }
  }
`;

export default Wrappers;
