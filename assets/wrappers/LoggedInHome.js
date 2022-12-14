import styled from "styled-components";

const Wrappers = styled.div`
  .container {
    display: flex;
    justify-content: space-between;
    margin-left: 3rem;
  }
  @media (max-width: 480px) {
    .container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    .sidebar {
      display: none;
    }
  }
  .sidebar {
  }
`;
export default Wrappers;
