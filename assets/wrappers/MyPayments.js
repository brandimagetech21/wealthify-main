import styled from "styled-components";

const Wrappers = styled.div`
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.161);
  min-width: 700px;
  border-radius: 1rem;
  padding: 1rem 3rem;
  margin-top: 1rem;
  margin-right: 5rem;
  margin-left: 3rem;
  .top {
    display: flex;
  }
  .line {
    content: "";
    width: 100%;
    height: 1px;
    background-color: var(--line-color-gray);
  }
  .bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
  }
  p {
    margin-right: 2rem;
  }
  p::after {
    content: "";
    width: 100%;
    height: 1px;
  }
  @media (max-width: 480px) {
    min-width: 350px;
    margin-right: 1rem;
    margin-left: -2rem;
  }
`;
export default Wrappers;
