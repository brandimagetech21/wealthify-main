import styled from "styled-components";

const Wrappers = styled.div`
  .container {
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.161);
    min-width: 700px;
    border-radius: 1rem;
    padding: 1rem 9rem;
    margin-top: 1rem;
    margin-right: 5rem;
    margin-left: 3rem;
  }

  .img {
    font-size: 2rem;
  }
  @media (max-width: 480px) {
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      min-width: 350px;
      margin-right: 1rem;
      margin-left: -2rem;
    }
  }
`;
export default Wrappers;
