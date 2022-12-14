import styled from "styled-components";

const Wrappers = styled.div`
  .our-vision {
    background-color: var(--primary-700);
    /* max-width: 1200px; */
    width: min(1200px, 85%);
    margin: 0 auto;
    border-radius: 0.5rem;
    padding: 0 2rem;
    margin-bottom: 5rem;
    margin-top: 2rem;
  }
  .title {
    color: white;
    padding-top: 1rem;
    text-align: center;
  }
  .subtitle {
    color: white;
    padding-bottom: 2.5rem;
    font-size: 1.5rem;
    text-align: center;
  }
  @media (max-width: 400px) {
    .our-vision {
      margin: 0 1.5rem;
    }
  }
`;
export default Wrappers;
