import styled from "styled-components";

const Wrapper = styled.div`
  background-color: var(--background-light);
  .section2 {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .title-container {
    margin-top: 4rem;
    text-align: center;
  }
  .title {
    font-size: 3rem;
  }
  .subtitle {
    font-size: 1.3rem;
    margin-top: 4rem;
    max-width: 90%;
    margin: 0 auto;
  }
  .dark-title {
    margin-top: 5rem;
    border-radius: 0.5rem;
    background-color: var(--primary-700);
    padding: 1rem;
    text-align: center;
    color: white;
    width: 80%;
    font-weight: 300;
  }
  .item-container {
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
    /* gap: 2rem; */
    margin-top: -3rem;
  }

  .item-text {
    font-size: 1.1rem;
  }
  .items {
    display: flex;
    align-items: center;
  }
  .item-img {
    text-align: center;
    background-color: var(--primary-50);
    width: 8rem;
    height: 8rem;
    padding: 1rem 0;
    font-size: 5rem;
    border-radius: 2rem;
  }
  .item-img > p {
    font-size: 0.8rem;
    font-weight: 100;
    margin-top: -0.1rem;
    margin-bottom: -0.5rem;
  }
  .item-text {
    margin-left: 1rem;
    text-align: center;
  }

  @media (max-width: 900px) {
    .item-container {
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
      justify-content: center;
    }
    .title {
      font-size: 2rem;
    }
    .second-title {
      padding: 1rem;
      text-align: center;
    }
  }

  @media (max-width: 480px) {
    .item-container {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default Wrapper;
