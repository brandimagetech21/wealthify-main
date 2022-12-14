import styled from "styled-components";

const Wrappers = styled.div`
  position: relative;
  background-color: white;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.161);

  border-radius: 2rem;
  width: 300px;
  /* height: 300px; */
  padding: 1rem;
  padding-bottom: 3rem;
  margin: 0 auto;
  .tag-container {
    position: absolute;
    top: -7px;
    right: 2rem;
  }
  .price {
    position: absolute;
    top: -7px;
    right: 0rem;
    text-align: center;
    color: white;
    font-size: 15px;
  }
  .container {
  }
  ul {
    margin-top: 4rem;
  }
  .upgrade-div {
    margin: 0 auto;
  }
  .upgrade-btn {
    position: absolute;
    bottom: 9%;
    left: 10%;
    color: white;
    background-color: var(--primary-700);
    padding: 1rem 6rem;
    border-radius: 2rem;
    display: block;
    margin: 0 auto;
    /* margin-left: -2rem; */
    /* margin-top: 3rem; */
  }
  li:first-child {
    font-weight: 500;
    font-size: 1.3rem;
  }
  li {
    margin-bottom: 1rem;
  }
  ul {
    margin-left: -1rem;
  }
`;

export default Wrappers;
