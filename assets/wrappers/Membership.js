import styled from "styled-components";

const Wrappers = styled.div`
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.161);
  min-width: 700px;
  border-radius: 1rem;
  padding: 1rem 0rem;
  margin-top: 1rem;
  margin-right: 5rem;
  margin-left: 3rem;
  .container {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 2rem;
  }

  .title {
    color: var(--primary-700);
  }
  .first-container {
    width: 99%;
    margin: 0 auto;
    background-color: var(--background-gray);
    border-radius: 2rem;
    /* padding: 1rem 3rem 1rem 1rem; */
  }
  .weeks {
    margin-left: 2.3rem;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  li {
    margin-bottom: 2rem;
  }

  .plans-container {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
  }
  @media (max-width: 480px) {
    min-width: 380px;
  }
`;
export default Wrappers;
