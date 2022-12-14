import styled from "styled-components";

const Wrappers = styled.div`
  max-width: 90%;
  margin: 0 auto;

  .main-container {
    display: flex;
    flex-wrap: wrap;
  }
  .content-container {
    margin-top: 4rem;
    margin-left: 3rem;
    /* max-width: 50%; */
    width: max(40%, 300px);
  }
  .picture-container {
    /* max-width: 40%; */
    width: max(40%, 300px);
    margin: 0 auto;
  }
  .title {
    color: var(--primary-700);
  }
  .content {
    margin-top: 3rem;
  }
  .bottom {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
  }
  .img-container {
    display: flex;
    margin-top: 8.5rem;
  }
  .img {
    margin-right: 2rem;
  }
`;

export default Wrappers;
