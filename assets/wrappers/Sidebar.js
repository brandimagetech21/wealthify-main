import styled from "styled-components";

const Wrappers = styled.div`
  .container {
    background-color: white;
    max-width: 450px;
  }
  li {
    list-style-type: none;
  }
  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.161);
    border-radius: 1rem;
    padding: 1rem;
  }
  .item:active {
    border-left: 2px solid var(--primary-700);
    border-right: 2px solid var(--primary-700);
    border-top: 1px solid var(--primary-700);
    border-bottom: 1px solid var(--primary-700);
  }
  .text {
    cursor: pointer;
    margin-left: 2rem;
    width: 20rem;
  }
  .disable {
    pointer-events: none;
    background-color: #f2f2f2;
  }
  #activeHealthRecords {
    background-color: white;
  }
  @media (max-width: 480px) {
    .container {
      margin: 0 auto;
    }
    .item {
      width: 350px;
      margin-left: -2.5rem;
    }
  }
`;
export default Wrappers;
