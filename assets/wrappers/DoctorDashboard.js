import styled from "styled-components";

const Wrappers = styled.div`
  margin-top: 3rem;
  .calendar {
    margin-left: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 3rem;
  }
  .calendar-2 {
    margin-left: 2rem;
  }
  .patient-list {
    margin-bottom: 3rem;
    display: flex;
    align-items: center;
  }
  .btn {
    background-color: var(--primary-700);
    padding: 1rem 2rem;
    border-radius: 1rem;
    color: white;
    margin-left: 5rem;
  }
  .bottom {
    display: flex;
    flex-wrap: wrap;
  }
  .left {
    /* display: flex; */
  }
  .card {
    padding: 2rem 3rem;
    box-shadow: var(--shadow-1);
    width: fit-content;
    height: fit-content;
    /* text-align: center; */
    margin: 3rem 5rem;
  }

  p:first-child {
    font-size: 2rem;
    color: green;
    position: relative;
  }
  p:first-child::after {
    content: "";
    height: 2px;
    width: 100%;
    /* pos */
    position: absolute;
    bottom: -1rem;
    left: -20px;
    background: var(--line-color-gray);
  }
  .right {
    margin: 3rem;
  }
  .called {
    background-color: green;
  }
  .not-called {
    color: black;
    position: relative;
  }
  .not-called:before {
    content: "";
    position: absolute;
    background: var(--primary-700);
    height: 100px;
    width: 8px;
    top: 6px;
    left: 0;
    border-radius: 1rem;
  }
  li {
    width: 50vw;
    padding: 1rem;
    border-radius: 1rem;
    color: white;
    margin-bottom: 2rem;
    box-shadow: var(--shadow-1);
  }
  li div {
    font-size: 1.4rem;
  }
  @media (max-width: 900px) {
    li {
      width: 300px;
    }

    ul {
      margin-left: -1.5rem;
    }
  }

  @media (max-width: 400px) {
    .calendar-2 {
      margin-left: -2.2rem;
    }
    .right {
      margin: 0 auto;
    }
  }
`;

export default Wrappers;
