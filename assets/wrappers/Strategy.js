import styled from "styled-components";

const Wrappers = styled.div`
  background-color: var(--background-light);
  .title {
    text-align: center;
    width: max(200px, 85%);
    padding-top: 3rem;
  }
  .items-container {
    display: grid;
    margin-top: 4rem;
    padding: 4rem 0;

    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(2, 1fr);
    max-width: 1000px;
    margin: 0 auto;
  }
  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* max-width: 400px; */
    width: max(300px, 80%);
    margin: 0 auto;
  }
  .item-subtitle {
    text-align: center;
    line-height: 2rem;
    font-size: 1.2rem;
  }
  @media (max-width: 780px) {
    .items-container {
      grid-template-columns: repeat(1, 1fr);
      padding: 0 1rem;
    }
    .item {
      margin-top: 2rem;
    }
  }
`;
export default Wrappers;
