import styled from "styled-components";

const Wrappers = styled.div`
  .paragraph {
    width: min(900px, 85%);
    padding-top: 2.3rem;
    font-size: 1.2rem;
    line-height: 2rem;
    /* max-width: 1000px; */
    margin: 0 auto;
  }
  .our-vision {
    background-color: var(--primary-700);
    width: min(1200px, 85%);
    margin: 0 auto;
    border-radius: 0.5rem;
    padding: 0 2rem;
    margin-bottom: 5rem;
    margin-top: 5rem;
  }
  .vision-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  p {
    text-align: center;
    /* max-width: 900px; */
  }
  .title {
    text-align: center;
  }

  .title {
    color: white;
    padding-top: 1rem;
  }
  .subtitle {
    color: white;
    padding-bottom: 2.5rem;
    font-size: 1.5rem;
  }
  @media (max-width: 400px) {
    .our-vision,
    .paragraph {
      margin: 0 1.5rem;
    }
  }
`;

export default Wrappers;
