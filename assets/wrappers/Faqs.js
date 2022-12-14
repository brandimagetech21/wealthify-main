import styled from "styled-components";

const Wrappers = styled.div`
  .heading {
    text-align: center;
  }

  .container {
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.161);
    border: 1.2px solid #dddddd;
    cursor: pointer;
    padding: 1rem 2rem;
    max-width: 80%;
    margin: 0 auto;
    margin-bottom: 2rem;
    border-radius: 1rem;
  }
  .question-container {
    display: flex;
    justify-content: space-between;
  }
  .answer-container {
    display: flex;
    justify-content: space-between;
    max-width: 95%;
  }
  .downCheveron {
    display: inline-block;
    transform: rotate(90deg);
    margin-bottom: 1rem;
  }
`;
export default Wrappers;
