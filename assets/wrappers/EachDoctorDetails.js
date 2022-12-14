import styled from "styled-components";

const Wrappers = styled.div`
  /* table  */

  position: fixed;
  top: 0px;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 100;
  .container {
    top: 20%;
    background-color: white;
    height: 470px;
    width: 70%;
    margin: 0 auto;
    border-radius: 2rem;
    overflow: auto;
    position: relative;
  }
  .doctor-details {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    width: 70%;
    margin: 0 auto;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 1rem;
  }
  .close-btn {
    position: absolute;
    right: 1rem;
    top: 1rem;
    font-size: 1rem;
    padding: 0;
    border: none;
    background-color: none;
  }
  .doctor-heading {
    border-collapse: collapse;
    width: max(400px, 80%);
    margin: 0 auto;
  }
  tr:has(th) {
    position: sticky;
    top: 0;
  }
  .doctor-heading th {
    text-align: center;
    padding: 1rem 0;
    background-color: #a1c334;
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
  .calender-selector {
    position: relative;
  }
  .calender-selector label {
    position: absolute;

    /* top: 2rem;
    left: 29rem; */
  }

  @media (max-width: 400px) {
    background-color: white;
    overflow: hidden;
    .container {
      border-radius: 0;
      position: absolute;
      width: 100%;
      top: 5%;
      bottom: 0;
      right: 0;
      left: 0;
    }
    .table-container {
      width: 350px;
      overflow: scroll;
    }

    table {
      width: 400px;
      height: 300px;
      overflow: scroll;
    }
  }
`;

export default Wrappers;
