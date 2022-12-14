import styled from "styled-components";

const Wrappers = styled.div`
  .container {
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.161);
    min-width: 700px;
    border-radius: 1rem;
    padding: 1rem 3rem;
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    margin-right: 5rem;
    margin-left: 3rem;
  }
  .first-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .underline {
    width: 100%;
    height: 3px;
    text-align: center;
    background-color: gray;
  }

  h1 {
    font-weight: 400;
  }
  @media (max-width: 480px) {
    .container {
      min-width: 350px;
      margin-right: 1rem;
      margin-left: -2rem;
    }
  }
`;
export default Wrappers;
