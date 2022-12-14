import styled from "styled-components";

const Wrappers = styled.div`
  /* table  */
  height: 100vh;
  overflow-x: scroll;
  .table-container {
    width: 90%;
    margin: 0 auto;
    overflow: scroll;
  }
  .doctor-heading {
    border-collapse: collapse;
    width: 80%;
    margin: 0 auto;
  }
  tr:has(th) {
    position: sticky;
    top: 0;
  }
  .doctor-heading th {
    padding: 1rem 0;
    background-color: #a1c334;
    overflow: scroll;
  }
  .doctor-heading td {
    padding: 0.75rem 0;
    text-align: center;
  }
  .doctor-heading tr:nth-child(odd) {
    background-color: #c9cbc5;
  }
  .btn {
    background-color: var(--primary-700);
    padding: 0.5rem 2rem;
    border-radius: 2rem;
    color: white;
    cursor: pointer;
  }
  /* open calender */
  .container {
    padding: 3rem 1rem;
  }
  .heading {
    text-align: center;
  }
  label {
    position: absolute;
    top: -0.6rem;
    left: 1.5rem;
    background-color: white;
  }
  .input {
    position: relative;
  }
  input,
  select {
    padding: 1rem;
  }
  .input {
    margin-left: 15rem;
    margin-top: 2rem;
  }
  .btn1 {
    margin: 2rem 0;
    margin-left: 16rem;
  }
`;

export default Wrappers;
