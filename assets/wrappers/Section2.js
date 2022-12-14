import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 70vh;
  .section2 {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .title-container {
    text-align: center;
    width: 90%;
  }
  .title {
    font-size: 3rem;
  }
  .subtitle {
    font-size: 1.3rem;
  }

  .item-text {
    font-size: 1.1rem;
  }
  .items {
    margin: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .item-img {
    text-align: center;
    background-color: var(--primary-50);
    width: 8rem;
    height: 8rem;
    padding: 1rem 0;
    border-radius: 2rem;
  }
  .item-text {
    text-align: center;
  }

  .item-container {
    display: grid;
    margin-top: 4rem;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(4, 1fr);
    /* gap: 2rem; */
  }

  @media (max-width: 900px) {
    .item-container {
      grid-template-columns: repeat(2, 1fr);
    }
    .title {
      font-size: 2rem;
    }
  }

  @media (max-width: 480px) {
    .item-container {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default Wrapper;
