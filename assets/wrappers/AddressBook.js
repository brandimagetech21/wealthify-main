import styled from "styled-components";

const Wrappers = styled.div`
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.161);
  min-width: 700px;
  border-radius: 1rem;
  padding: 3rem 3rem;
  margin-top: 1rem;
  margin-right: 5rem;
  margin-left: 3rem;

  .add-btn {
    background-color: var(--primary-700);
    padding: 1rem 7rem;
    border-radius: 2rem;
    text-decoration: none;
    border: none;
    color: white;
    margin-inline: auto;
  }

  @media (max-width: 480px) {
    width: 300px;
  }
  @media (max-width: 480px) {
    min-width: 350px;
    margin-right: 1rem;
    margin-left: -2rem;
    .add-btn {
      padding: 1rem 6rem;
      margin-right: 2rem;
    }
  }
`;
export default Wrappers;
