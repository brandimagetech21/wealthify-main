import styled from "styled-components";

const Wrappers = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 100;
  .container {
    top: 20%;
    position: relative;
    background-color: white;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.161);
    border-radius: 2rem;
    width: 300px;
    /* height: 100%; */
    padding: 1rem;
    margin: 0 auto;
  }
  .first-part {
    display: flex;
    justify-content: space-between;
  }
  .name {
    color: var(--primary-700);
  }
  .close-btn {
    position: absolute;
    right: 1rem;
    top: 1rem;
  }
  .dark-underline {
    width: 100%;
    height: 2px;
    border: 1.3px solid black;
  }
  .second-part {
    display: flex;
    justify-content: space-between;
  }
  ul {
    margin-left: -2rem;
  }
  li {
    margin-bottom: 1rem;
  }

  li:after {
    margin-top: 0.5rem;
    display: flex;
    content: "";
    width: 100%;
    height: 1px;
    background-color: gray;
  }
`;

export default Wrappers;
